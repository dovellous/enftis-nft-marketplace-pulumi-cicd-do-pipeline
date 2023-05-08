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
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "../common/ERCFallback.sol";
import "../common/ERCModifiers.sol";

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

    /// Counters
    Counters.Counter public _tokenIdCounter;

    /// Counters
    Counters.Counter public _tokenCurrentSupply;

    /// Owner of the contract. This is only for compatibility for opensea and other protocols.
    address payable public owner;

    /// Marketplace address
    address payable public marketplaceAddress;

    ///
    Enums.TokenCategory public tokenCategory;

    mapping(uint256 => string) internal tokenURIs;

    mapping(uint256 => Structs.TokenActivityItem[]) public tokenIdToTokenActivityItem;

    mapping(uint256 => Structs.NFTItem) public tokenIdToNFTItem;

    /// tokenMaximumSupply to be minted
    uint256 public tokenMaximumSupply;

    /// @dev if baseTokenURI = "", default to "ipfs://"
    string public baseTokenURI;

    string public contractURI;

    string public description;

    string public photoURL;

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
        if (!_exists(_tokenId)) {
            return "";
        }

        string memory baseURI = _baseURI();
        string memory tokenURIById = tokenURIs[_tokenId];

        // If there is no baseURI URI, default to "ipfs://" or return the token URI.
        if (bytes(baseURI).length == 0) {
            baseURI = Snippets.bytes32String(Snippets.getIPFSPrefix());
        }

        // If both are set, concatenate the baseURI and tokenURIById (via abi.encodePacked).
        if (bytes(tokenURIById).length != 0) {
            return string(abi.encodePacked(baseURI, tokenURIById));
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
        uint256 firstTokenId,
        uint256 batchSize
    ) internal virtual override(ERC721, ERC721Enumerable) {
        //Mint
        if (from == address(0)) {
            // Mint amount must not overflow total supply
        }

        //Burn
        if (to == address(0)) {
            // to must be the owner
            // Must not below owned amounts
        }

        //Transfer
        if (to == address(0) && from == address(0)) {
            //Collect fees
        }

        super._beforeTokenTransfer(from, to, firstTokenId, batchSize);
    }

    /**
     * @dev :
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 firstTokenId,
        uint256 batchSize
    ) internal virtual override {
        //Minted
        if (from == address(0)) {
            // Log Event in after mint

            tokenLogActivity(
                from,
                to,
                firstTokenId,
                Enums.TokenActivityType.Mint,
                block.timestamp
            );

            emit Events.TokenMinted(from, to, firstTokenId, batchSize);
        }

        //Burned
        if (to == address(0)) {
            // Log Event in after burn

            tokenLogActivity(
                from,
                to,
                firstTokenId,
                Enums.TokenActivityType.Burn,
                block.timestamp
            );

            emit Events.TokenBurned(from, to, firstTokenId, batchSize);

            if (bytes(tokenURIs[firstTokenId]).length != 0) {
                delete tokenURIs[firstTokenId];
            }

            delete tokenIdToNFTItem[firstTokenId];

        }

        //Transfered
        if (to != address(0) && from != address(0)) {
            //Log Eventnin after transfer

            Structs.NFTItem memory _NFT = tokenIdToNFTItem[firstTokenId];

            _NFT.ownerAddress = to;
            _NFT.updatedAt = block.timestamp;

            tokenIdToNFTItem[firstTokenId] = _NFT;

            tokenLogActivity(
                from,
                to,
                firstTokenId,
                Enums.TokenActivityType.TransferSingle,
                block.timestamp
            );

            emit Events.TokenTransfered(from, to, firstTokenId, batchSize);

            delete _NFT;
        }

        super._afterTokenTransfer(from, to, firstTokenId, batchSize);

    }

    /**
     * @dev :
     */
    function tokenLogActivity(
        address _from,
        address _to,
        uint256 _tokenId,
        Enums.TokenActivityType _type,
        uint256 _timestamp
    ) internal {
        Structs.TokenActivityItem memory _activity = Structs.TokenActivityItem(
            _type,
            _from,
            _to,
            _timestamp
        );

        tokenIdToTokenActivityItem[_tokenId].push(_activity);
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
        override(ERC721Enumerable, ERC721Royalty, AccessControl, ERC721)
        returns (bool)
    {
        return super.supportsInterface(_interfaceId);
    }

    // Fallback function must be declared as external.
    fallback() external payable {}

    // Receive is a variant of fallback that is triggered when msg.data is empty
    receive() external payable virtual {}
}
