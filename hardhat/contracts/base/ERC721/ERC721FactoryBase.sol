// SPDX-License-Identifier: MIT
/**
 * Created on 2023-05-05 14:36
 * @summary:
 * @author: dovellous
 */
pragma solidity ^0.8.19;
pragma experimental ABIEncoderV2;

/*********************************** Imports **********************************/

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "../common/ERCFallback.sol";
import "../common/ERCModifiers.sol";
import "../common/IERCLogging.sol";

contract ERC721FactoryBase is
    ERC721,
    ERC721Enumerable,
    ERC721URIStorage,
    ERC721Royalty,
    ERC721Burnable,
    Pausable,
    ERCFallback,
    ERCModifiers
{
    using Counters for Counters.Counter;

    /// @dev Counters for tokenIds.
    Counters.Counter public _tokenIdCounter;

    /// @dev Counters for token current supply.
    Counters.Counter public _tokenCurrentSupply;

    /// @dev Collection category
    Enums.TokenCategory public tokenCategory;

    /// Owner of the contract.
    /// This is only for compatibility for other protocols.
    address payable public owner;

    /// @dev Marketplace address
    address payable public marketplaceAddress;

    /// @dev Logger address
    address public loggerAddress;

    /// @dev Contract URI where this code resides
    bytes32 public contractURI;

    /// @dev Token Maximum Supply
    uint256 public tokenMaximumSupply;

    /// @dev Base Token URI, if = "", default to "ipfs://"
    string public baseTokenURI;

    /// @dev Description of this token collection
    string public description;

    /// @dev URL path to the banner url of this collection
    string public bannerURL;

    /// @dev URL path to the photo url of this collection
    string public photoURL;

    /// @dev Token Id to Token URI mapping
    mapping(uint256 => string) internal tokenURIs;

    /// @dev Token Id to NFTItem mapping
    mapping(uint256 => Structs.NFTItem) public tokenIdToNFTItem;

    /*********************************** Events ***********************************/

    /// Dispatched when the contract owner has been updated.
    event OwnerChanged(address newOwner);

    /// Dispatched when the contract uri has been updated.
    event ContractURIChanged(bytes32 newURI);

    /// Dispatched when the collection description has been updated.
    event CollectionDescriptionChanged(string description);

    /// Dispatched when the banner media url has been updated.
    event CollectionBannerMediaChanged(string bannerURL);

    /// Dispatched when the diplay picture url has been updated.
    event CollectionDisplayPictureChanged(string photoURL);

    /// Dispatched when the base uri has been updated.
    event BaseURIChanged(string newURI);

    /// Dispatched when the marketplace address has been updated.
    event MarketplaceAddressChanged(address newMarketplaceAddress);

    /// Dispatched when the token approved address has been updated.
    event ApprovedAddressForTokenChanged(
        address approvedAddress,
        uint256 tokenId
    );

    /// Dispatched when the minting fee has bene updated.
    event MintingFeeChanged(uint256 newMintingFee);

    /// Dispatched when a royalty has been updated.
    event RoyaltiesChanged(
        address _royaltyReceiver,
        uint96 _royaltyFraction,
        uint256 _tokenId
    );

    /// Dispatched when royalties are enabled.
    event RoyaltiesEnabled();

    /// Dispatched when royalties are disabled.
    event RoyaltiesDisabled(uint256 _timestamp);

    /// Dispatched when a token has been minted.
    event TokenMinted(
        address creator,
        address minter,
        uint256 indexed newTokenId,
        uint256 batchSize
    );

    /// Dispatched when a token has been burned.
    event TokenBurned(
        address creator,
        address burner,
        uint256 indexed burnedTokenId,
        uint256 batchSize
    );

    /// Dispatched when a token has been transfered.
    event TokenTransfered(
        address creator,
        address burner,
        uint256 indexed transferedTokenId,
        uint256 batchSize
    );

    event Received(address, uint);

    event Log(string func, uint gas);

    /**
     * @dev Initialize the  base contract
     * @param _name NFT Name
     * @param _symbol NFT Symbol
     *
     */
    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {}

    /**
     * @dev Returns the base uri of the contract.
     * @return string base uri of the contract.
     *
     */
    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    /**
     * @dev See {ERC721-_burn}. This override additionally checks to see if a
     * token-specific URI was set for the token, and if so, it deletes the token URI from
     * the storage mapping.
     */
    function _burn(
        uint256 _tokenId
    ) internal virtual override(ERC721, ERC721Royalty, ERC721URIStorage) {
        super._burn(_tokenId);
    }

    /**
     * @dev See {IERC721Enumerable-totalSupply}.
     */
    function totalSupply()
        public
        view
        virtual
        override(ERC721Enumerable)
        returns (uint256)
    {
        return _tokenCurrentSupply.current();
    }

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     * @param _tokenId tokenId.
     * @return string uri of the tokenId.
     *
     */
    function tokenURI(
        uint256 _tokenId
    )
        public
        view
        virtual
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        string memory baseURI = Snippets.getBaseURI(_baseURI());
        string memory tokenURIById = tokenURIs[_tokenId];

        // If both are set, concatenate the baseURI and tokenURIById (via abi.encodePacked).
        if (bytes(tokenURIById).length != 0) {
            baseURI = Snippets.getTokenURIFromURI(baseURI, tokenURIById);
        } else {
            baseURI = Snippets.getTokenURIFromID(
                _tokenId,
                baseURI,
                tokenURIs[_tokenId]
            );
        }

        delete tokenURIById;

        return baseURI;
    }

    /**
     * @dev :
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal virtual override(ERC721, ERC721Enumerable) {
        //Mint
        if (from == address(0)) {
            // Mint amount must not overflow total supply
            require(!_exists(tokenId), "TAE");
            require(_tokenCurrentSupply.current() <= tokenMaximumSupply, "OFW");
        }

        //Burn
        if (to == address(0)) {
            // to must be the owner
            require(ownerOf(tokenId) == _msgSender(), "NTO");
            // Must not below owned amounts
            require(tokenMaximumSupply != 0, "UFW");
        }

        //Transfer
        if (to == address(0) && from == address(0)) {
            //Collect fees
        }

        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    /**
     * @dev :
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal virtual override {
        //Minted
        if (from == address(0)) {
            // Log Event in after mint

            IERCLogging(loggerAddress).logTokenActivity(
                address(this),
                from,
                to,
                tokenId,
                Enums.TokenActivityType.Mint,
                block.timestamp
            );

            emit TokenMinted(from, to, tokenId, batchSize);
        }

        //Burned
        if (to == address(0)) {
            // Log Event in after burn

            delete tokenURIs[tokenId];

            delete tokenIdToNFTItem[tokenId];

            IERCLogging(loggerAddress).logTokenActivity(
                address(this),
                from,
                to,
                tokenId,
                Enums.TokenActivityType.Burn,
                block.timestamp
            );

            emit TokenBurned(from, to, tokenId, batchSize);
        }

        //Transfered
        if (to != address(0) && from != address(0)) {
            //Log Eventnin after transfer

            Structs.NFTItem memory _NFTItem = tokenIdToNFTItem[tokenId];

            _NFTItem.ownerAddress = to;
            _NFTItem.updatedAt = block.timestamp;

            tokenIdToNFTItem[tokenId] = _NFTItem;

            delete _NFTItem;

            IERCLogging(loggerAddress).logTokenActivity(
                address(this),
                from,
                to,
                tokenId,
                Enums.TokenActivityType.TransferSingle,
                block.timestamp
            );

            emit TokenTransfered(from, to, tokenId, batchSize);
        }

        super._afterTokenTransfer(from, to, tokenId, batchSize);
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(
        bytes4 _interfaceId
    )
        public
        view
        virtual
        override(
            ERC721URIStorage,
            ERC721Enumerable,
            ERC721Royalty,
            AccessControl,
            ERC721
        )
        returns (bool)
    {
        return super.supportsInterface(_interfaceId);
    }

    // Fallback function must be declared as external.
    fallback() external payable {}

    // Receive is a variant of fallback that is triggered when msg.data is empty
    receive() external payable virtual {
        emit Received(msg.sender, msg.value);
    }
}
