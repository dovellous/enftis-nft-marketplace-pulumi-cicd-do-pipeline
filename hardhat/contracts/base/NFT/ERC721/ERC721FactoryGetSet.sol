// SPDX-License-Identifier: MIT
/**
 * Created on 2023-05-05 14:36
 * @summary:
 * @author: dovellous
 */
pragma solidity ^0.8.19;
pragma experimental ABIEncoderV2;

/*********************************** Imports **********************************/

import "./ERC721FactoryBase.sol";
import "./ERC721FactoryWorker.sol";
import "./ERC721FactoryMinter.sol";
import "./ERC721FactoryBurner.sol";

/**
 * @dev {ERC721} token, including:
 *
 *  - deploy with upgradeability, replaced constructors with initializer functions
 *  - a admin role that allows for token minting (creation)
 *  - royalty information See {ERC721Royalty}.
 *  - token ID and URI autogeneration
 *
 * This contract uses {AccessControl} to lock permissioned functions using the
 * different roles
 *
 */

contract ERC721FactoryGetSet is
    ERC721FactoryBase,
    ERC721FactoryWorker,
    ERC721FactoryMinter,
    ERC721FactoryBurner
{
    using Counters for Counters.Counter;

    /**
     * Constructor arguments for erc721 implementation.
     *
     * @param _name contract token name
     * @param _symbol contract token symbol
     * @param _data encoded parameters
     */
    constructor (
        string memory _name,
        string memory _symbol,
        bytes memory _data
    ) payable ERC721FactoryBase(_name, _symbol) {

        /**
         * initializer arguments for erc721 implementation.
         *
         * @param _name encoded parameters
         * @param _symbol encoded parameters
         * @param _contractURI encoded parameters
         * @param _baseUri encoded parameters
         * @param _tokenMaximumSupply encoded parameters
         * @param _royaltyFraction encoded parameters
         * @param _royaltyReceiver encoded parameters
         * @param _admins encoded parameters
         * @param _minters encoded parameters
         * @param _mintingFee encoded parameters
         * @param _tokenCategoryEnumIndex encoded parameters
         * @param _isPausable encoded parameters
         * @param _isBurnable encoded parameters
         */
        (
            bytes32 _contractURI,
            string memory _baseUri,
            uint256 _tokenMaximumSupply,
            uint96 _royaltyFraction,
            address _royaltyReceiver,
            address[] memory _admins,
            address[] memory _minters,
            uint256 _mintingFee,
            Enums.TokenCategory _tokenCategoryEnumIndex,
            bool _isPausable,
            bool _isBurnable
        ) = abi.decode(
                _data,
                (
                    bytes32,
                    string,
                    uint256,
                    uint96,
                    address,
                    address[],
                    address[],
                    uint256,
                    Enums.TokenCategory,
                    bool,
                    bool
                )
            );

        address[] memory adminsArray = _admins;
        uint256 adminsLength = _admins.length;

        address[] memory mintersArray = _minters;
        uint256 mintersLength = _minters.length;

        // Revert if we do not have admins
        if (adminsLength == 0) {
            revert Errors.NoAdmins({message: Snippets.NO_ADMINS_SPECIFIED});
        }

        // Revert if we do not have minters
        if (mintersLength == 0) {
            revert Errors.NoMinters({message: Snippets.NO_MINTERS_SPECIFIED});
        }

        // setup admin roles
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _setupRole(Snippets.ADMIN_ROLE, _msgSender());
        for (uint256 i; i < adminsLength; ++i) {
            _setupRole(Snippets.ADMIN_ROLE, adminsArray[i]);
        }

        // setup admin role
        _setupRole(Snippets.MINTER_ROLE, _msgSender());
        for (uint256 i; i < mintersLength; ++i) {
            _setupRole(Snippets.MINTER_ROLE, mintersArray[i]);
        }

        // _tokenMaximumSupply of 0 implies no limit
        if (_tokenMaximumSupply != 0) {
            tokenMaximumSupply = _tokenMaximumSupply;
        } else {
            tokenMaximumSupply = type(uint256).max;
        }

        // setup the royalties receiver for each secondary purchase and above
        if (_royaltyFraction != 0 && _royaltyReceiver != address(0)) {
            royaltiesEnabled = true;
            royaltyReceiver = payable(_royaltyReceiver);
            royaltyFraction = _royaltyFraction;
            _setDefaultRoyalty(_royaltyReceiver, _royaltyFraction);
        }

        // setup states
        baseTokenURI = _baseUri;
        
        contractURI = _contractURI;

        mintingFee = _mintingFee;
        
        contractOptionsStruct = ContractOptions(_isPausable, _isBurnable);

        tokenCategory = _tokenCategoryEnumIndex; 
        
        owner = payable(_msgSender());

    }

    // ==================== Begin Reading State Variables ==================== //

    // URIs

    /**
     * @dev Returns the base uri of the contract.
     * @return url string.
     *
     */
    function getBaseURI() external view returns (string memory) {
        return baseTokenURI;
    }

    /**
     * @dev Retreives the contract url where the source code resides.
     * @return url bytes32.
     *
     */
    function getContractURI() external view returns (bytes32) {
        return contractURI;
    }

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     * @param _tokenId tokenId.
     * @return string uri of the tokenId.
     *
     */
    function getTokenURI(
        uint256 _tokenId
    ) external view returns (string memory) {
        return tokenURI(_tokenId);
    }

    // TokenIds

    /**
     * @dev Retrieves the current token id. This represents
     * the current token supply.
     * @return _tokenIdCounter.
     */
    function getTokenCurrentId() external view returns (uint256) {
        return _tokenIdCounter.current();
    }

    // Admin

    /**
     * @dev Returns current _owner address. This is only for compatibility 
     * for other protocols.
     * @return _owner address.
     *
     */
    function getOwner() external view returns (address ) {
        return owner;
    }

    // Marketplace

    /**
     * @dev Retrieves the marketplace address approved for toke transfers.
     * @return marketplaceAddress.
     *
     */
    function getMarketplaceAddress() external view returns (address ) {
        return marketplaceAddress;
    }

    // Royalties

    /**
     * @dev Returns current _owner address. This is only for compatibility 
     * for opensea and other protocols.
     * @return royaltyFraction.
     *
     */
    function getRoyaltyFraction() external view returns (uint96 ) {
        return royaltyFraction;
    }

    /**
     * @dev The default receiver of the token royalties.
     * @return address.
     *
     */
    function getRoyaltyReceiver() external view returns (address ) {
        return royaltyReceiver;
    }

    /**
     * @dev Retrieves the royalty info of a token.
     * @param _tokenId the id of the token.
     * @param price the price of the token.
     * @return royaltyItemStruct the royalty info of the token.
     * 
     * Requirements:
     *
     * - `tokenId` must exist.
     * 
     */
    function getTokenRoyaltyInfo(
        uint256 _tokenId,
        uint256 price
    )
        external
        view
        validToken(_exists(_tokenId), _tokenId, tokenMaximumSupply)
        returns (Structs.RoyaltyItem memory)
    {
        (address _royaltyReceiver, uint256 _royaltyAmount) = royaltyInfo(
            _tokenId,
            price
        );

        Structs.RoyaltyItem memory _royaltyItemStruct;

        if (_royaltyAmount != 0 && _royaltyReceiver != address(0)) {
            _royaltyItemStruct = Structs.RoyaltyItem(
                true,
                payable(_royaltyReceiver),
                (_royaltyAmount / price) * _feeDenominator(),
                _royaltyAmount,
                _tokenId
            );
        } else {
            _royaltyItemStruct = Structs.RoyaltyItem(false, address(0), 0, 0, 0);
        }

        //Cleanup : @see 
        // https://github.com/dovellous/com-enftis/blob/master/gas-saving-tips/cleanup-variables.md

        delete _royaltyReceiver;
        delete _royaltyAmount;

        return _royaltyItemStruct;
    }

    // Supply

    /**
     * @dev Retrieves the royalty info of a token including the fee base on price supplied.
     * @return `tokenMaximumSupply`
     *
     */
    function getTokenMaximumSupply() external view returns (uint256 ) {
        return tokenMaximumSupply;
    }

    /**
     * @dev Retrieves the royalty info of a token including the fee base on price supplied.
     * @return `_tokenCurrentSupply`
     *
     */
    function getTokenCurrentSupply() external view returns (uint256) {
        return _tokenCurrentSupply.current();
    }

    // Minting

    /**
     * @dev Retrieves the royalty info of a token including the fee base on price supplied.
     *
     */
    function getTokenMintingFee() external view returns (uint256) {
        return mintingFee;
    }

    // ==================== End Reading State Variables ==================== //

    // ==================== Begin Read Mint Data ==================== //

    /**
     * @dev Retrieves and array of tokens minted by caller.
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function getTokensMintedByMe() external view returns (Structs.NFTItem[] memory) {
        return _search(Snippets.MINTER, abi.encode(_msgSender()));
    }

    /**
     * @dev Retrieves and array of tokens minted by an address.
     * @param _account account address that minted the token.
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function getTokensMintedByAddress(
        address _account
    ) external view returns (Structs.NFTItem[] memory) {
        return _search(Snippets.MINTER, abi.encode(_account));
    }

    /**
     * @dev Get the minter of the token id
     * @param _tokenId The id of the token to get the minter from.
     * @return address
     * 
     * Requirements:
     *
     * - `tokenId` must exist.
     * 
     */
    function getTokenMinter(
        uint256 _tokenId
    )
        external
        view
        validToken(_exists(_tokenId), _tokenId, tokenMaximumSupply)
        returns (address)
    {
        (Structs.NFTItem memory nftItem,) = getNFTItem(_tokenId);
        return nftItem.minterAddress;
    }

    // ==================== End Read Mint Data ==================== //

    // ==================== Begin Read Creator Data ==================== //

    /**
     * @dev Retrieves and array of tokens created by caller
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function getTokensCreatedByMe() external view returns (Structs.NFTItem[] memory) {
        return _search(Snippets.CREATOR, abi.encode(_msgSender()));
    }

    /**
     * @dev Retrieves and array of tokens created by an address.
     * @param _account account address that created the token.
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function getTokensCreatedByAddress(
        address _account
    ) external view returns (Structs.NFTItem[] memory) {
        return _search(Snippets.CREATOR, abi.encode(_account));
    }

    /**
     * @dev Get the creator of the token id
     * @param _tokenId The id of the token to get the creator from.
     * @return address
     * 
     * Requirements:
     *
     * - `tokenId` must exist.
     * 
     */
    function getTokenCreator(
        uint256 _tokenId
    )
        external
        view
        validToken(_exists(_tokenId), _tokenId, tokenMaximumSupply)
        returns (address)
    {
        (Structs.NFTItem memory nftItem,) = getNFTItem(_tokenId);
        return nftItem.creatorAddress[1];
    }

    // ==================== End Read Creator Data ==================== //

    // ==================== Begin Read Owner Data ==================== //

    /**
     * @dev Retrieves and array of tokens owned by caller.
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function getTokensOwnedByMe() external view returns (Structs.NFTItem[] memory) {
        return _search(Snippets.OWNER, abi.encode(_msgSender()));
    }

    /**
     * @dev Retrieves and array of tokens owned by an address.
     * @param _account account address that owns the token.
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function getTokensOwnedByAddress(
        address _account
    ) external view returns (Structs.NFTItem[] memory) {
        return _search(Snippets.OWNER, abi.encode(_account));
    }

    /**
     * @dev Get the owner of the token id
     * @param _tokenId The id of the token to get the owner from.
     * @return address
     * 
     * Requirements:
     *
     * - `tokenId` must exist.
     * 
     */
    function getTokenOwner(
        uint256 _tokenId
    )
        internal
        view
        validToken(_exists(_tokenId), _tokenId, tokenMaximumSupply)
        returns (address)
    {
        return ownerOf(_tokenId);
    }

    /**
     * @dev Retrieves the number of tokens owned  by an account address.
     * @param _account The account address to get the balance from.
     * @return The balance of the account.
     */
    function getAccountTokenBalance(
        address _account
    ) external view returns (uint256) {
        return balanceOf(_account);
    }

    // ==================== End Read Owner Data ==================== //

    // Tokens

    /**
     * @dev Retrieves full details on an NFT.
     * @param _tokenId The id of the token to get the details from.
     * @return Structs.NFTItem 
     * @return string The token uri string that contains the metdata { see: tokenURIs }.
     * 
     * Requirements:
     *
     * - `tokenId` must exist.
     * 
     */
    function getNFTItem(
        uint256 _tokenId
    )
        public
        view
        validToken(_exists(_tokenId), _tokenId, tokenMaximumSupply)
        returns (Structs.NFTItem memory, string memory)
    {
        return (tokenIdToNFTItem[_tokenId], tokenURIs[_tokenId]);
    }

    /**
     * @dev Retrieves the activity history of a token.
     * @param _tokenId The id of the token to get the activity history.
     * @return TokenActivityItem[] 
     * 
     * Requirements:
     *
     * - `tokenId` must exist.
     * 
     */
    function getTokenAuditTrail(
        uint256 _tokenId
    ) 
    public 
    view 
    validToken(_exists(_tokenId), _tokenId, tokenMaximumSupply)
    returns (Structs.TokenActivityItem[] memory) {
        return tokenIdToTokenActivityItem[_tokenId];
    }

    /**
     * @dev Retrieves a list of all available tokens.
     * @return @return Structs.NFTItem[] memory nftItems : an array of NFT items.
     */
    function getNFTItems() external view returns (Structs.NFT[] memory) {
        return _tokens();
    }

    // Collections

    /**
     * @dev Retrieves the collection name.
     * @return The token name.
     */
    function collectionName() external view returns (string memory ) {
        return name();
    }

    /**
     * @dev Retrieves the collection symbol.
     * @return The token symbol.
     */
    function collectionSymbol() external view returns (string memory) {
        return symbol();
    }

    // Category

    /**
     * @dev Retrieves the category of the collection.
     * @return Enums.TokenCategory tokenCategory
     */
    function collectionCategory() external view returns (Enums.TokenCategory) {
        return tokenCategory;
    }

    /**
     * @dev Retrieves the full description of the collection.
     * @return description text of the collection
     */
    function collectionDescription() external view returns (string memory) {
        return description;
    }

    /**
     * @dev Retrieves a path to a banner media of this collection
     * @return bannerURL The uri to an image resource
     */
    function collectionBannerMedia() external view returns (string memory) {
        return bannerURL;
    }

    /**
     * @dev Retrieves a path to a display picture of this collection
     * @return photoURL The uri to an image resource
     */
    function collectionDisplayPicture() external view returns (string memory) {
        return photoURL;
    }

    // Search

    /**
     * @dev Search and NFT, caller might have entered a tokenId
     * @param _uint256 The id of the token to look for
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function search(
        uint256 _uint256
    ) public view returns (
        Structs.NFTItem[] memory
    ) {
        // Encode the _account parameter and pass it to the search function
        return _search(Snippets.TOKEN_ID, abi.encode(_uint256));

    }

    /**
     * @dev Search and NFT, caller might have entered part or full token uri
     * @param _query Part or full token uri
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function search(
        string memory _query
    ) public view returns (
        Structs.NFTItem[] memory
    ) {
        // Encode the _account parameter and pass it to the search function
        return _search(Snippets.TOKEN_URI, abi.encode(_query));

    }

    /**
     * @dev Search NFTs using a set of key value pair
     * @param _itemKey The NFT key to validate the query against.
     * @param _uint256 The data holds the encoded params to use in the query
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function search(
        bytes32 _itemKey, 
        uint256 _uint256
    ) public view returns (
        Structs.NFTItem[] memory
    ) {
        // Encode the _account parameter and pass it to the search function
        return _search(_itemKey, abi.encode(_uint256));

    }

    /**
     * @dev Search NFTs using a set of key value pair
     * @param _itemKey The NFT key to validate the query against.
     * @param _address The data holds the encoded params to use in the query
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function search(
        bytes32 _itemKey, 
        address _address
    ) external view returns (
        Structs.NFTItem[] memory
    ) {
        // Encode the _account parameter and pass it to the search function
        return _search(_itemKey, abi.encode(_address));

    }

    /**
     * @dev Search NFTs using a set of key value pair
     * @param _itemKey The NFT key to validate the query against.
     * @param _query The data holds the encoded params to use in the query
     * @return Structs.NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function search(
        bytes32 _itemKey, 
        string calldata _query
    ) external view returns (
        Structs.NFTItem[] memory
    ) {
        // Encode the _account parameter and pass it to the search function
        return _search(_itemKey, abi.encode(_query));

    }

    /******************************* Write Functions ******************************/

    /**
     * @dev Transfers a token to an account address `_to`.
     * @param _to Account to receive the token.
     * @param _tokenId The id of the token to transfer
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function tokenTransfer(
        address _to, 
        uint256 _tokenId
    ) 
        external 
        validToken(
            _exists(_tokenId), 
            _tokenId, 
            tokenMaximumSupply
        )
        onlyAdmin 
    {
        transferFrom(_msgSender(), _to, _tokenId);
    }

    /**
     * @dev Grants an admin role to an account.
     * @param _account Account to grant the admin role.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function grantAdminRole(address _account) external onlyAdmin {
        grantRole(Snippets.ADMIN_ROLE, _account);
    }

    /**
     * @dev Revokes an admin role from an account.
     * @param _account Account to revoke the admin role.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function revokeAdminRole(address _account) external onlyAdmin {
        revokeRole(Snippets.ADMIN_ROLE, _account);
    }

    /**
     * @dev Rennounces an admin role from an account.
     * @param _account Account to renounce the admin role.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function renounceAdminRole(address _account) external onlyAdmin {
        renounceRole(Snippets.ADMIN_ROLE, _account);
    }

    /**
     * @dev Grants the minter tole to an account.
     * @param _account Account to grant the minter role.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function grantMinterRole(address _account) external onlyAdmin {
        grantRole(Snippets.MINTER_ROLE, _account);
    }

    /**
     * @dev Revokes the minter role from an account.
     * @param _account Account to revoke the minter role.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function revokeMinterRole(address _account) external onlyAdmin {
        revokeRole(Snippets.MINTER_ROLE, _account);
    }

    /**
     * @dev Sets the new base uri for this contract.
     * @param _account Base uri of the contract to change to.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function renounceMinterRole(address _account) external onlyAdmin {
        renounceRole(Snippets.MINTER_ROLE, _account);
    }

    /**
     * @dev Sets the new base uri for this contract.
     * @param _newBaseURI Base uri of the contract to change to.
     *
     * Emits an {BaseURIChanged} event.
     * 
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function setBaseURI(string calldata _newBaseURI) external onlyAdmin {
        baseTokenURI = _newBaseURI;
        emit Events.BaseURIChanged(_newBaseURI);
    }

    /**
     * @dev Sets the new contract uri for this contract.
     * @param _newContractURI Contract uri of the contract to 
     * change to (for contract level metadata).
     *
     * Emits an {ContractURIChanged} event.
     *
     * Requirements:
     *
     * - Only Admin can call this method.
     */
    function setContractURI(
        bytes32 _newContractURI
    ) external onlyAdmin {
        /**
         * @title:
         */
        contractURI = _newContractURI;
        emit Events.ContractURIChanged(_newContractURI);
    }

    /**
     * @dev Sets the collection description.
     * @param _description The lengthy description  of the collection.
     *
     * Emits an {CollectionDescriptionChanged} event.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function setCollectionDescription(
        string calldata _description
    ) external onlyAdmin {
        description = _description;
        emit Events.CollectionDescriptionChanged(_description);
    }

    /**
     * @dev Sets collection banner media.
     * @param _bannerURL The uri of the collection dp.
     *
     * Emits an {CollectionBannerMediaChanged} event.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function setCollectionBannerMedia(
        string calldata _bannerURL
    ) external onlyAdmin {
        _bannerURL = _bannerURL;
        emit Events.CollectionBannerMediaChanged(_bannerURL);
    }

    /**
     * @dev Sets collection display picture.
     * @param _photoURL The uri of the collection dp.
     *
     * Emits an {CollectionDisplayPictureChanged} event.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function setCollectionDisplayPicture(
        string calldata _photoURL
    ) external onlyAdmin {
        photoURL = _photoURL;
        emit Events.CollectionDisplayPictureChanged(_photoURL);
    }

    /**
     * @dev Sets the new marketplace address.
     * @param _newMarketplaceAddress marketplace address that will list the collection.
     *
     * Emits an {MarketplaceAddressChanged} event.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     * - _newMarketplaceAddress must not be a zero address
     * 
     */
    function setMarketplaceAddress(
        address _newMarketplaceAddress
    ) external onlyAdmin validAccount(_newMarketplaceAddress) {
        if (marketplaceAddress != address(0)) {
            setApprovalForAll(marketplaceAddress, false);
        }
        marketplaceAddress = payable(_newMarketplaceAddress);
        setApprovalForAll(_newMarketplaceAddress, true);
        emit Events.MarketplaceAddressChanged(_newMarketplaceAddress);
    }
 
    /**
     * @dev Sets the new royalty percentage.
     * @param _royaltyFraction The percentage to pay the royalties.
     * @param _royaltyReceiver The receiver of the royalties
     * 
     * If we set 1, per = 100 * 1 -> 100 / 100 => 1%
     * 
     * There are no fractions in solidity
     *
     * Emits an {RoyaltyFractionChanged} event.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     * - The royaltyReceiver must not be a zero address
     * 
     * Notes 
     * - If _royaltyFraction is zero hen royalties are disabled for new items for that moment
     * 
     */
    function setRoyalties(
        uint96 _royaltyFraction,
        address _royaltyReceiver
    ) public onlyAdmin {
        if(_royaltyReceiver != address(0)){
            royaltyReceiver = payable(_royaltyReceiver);
        }
        if(_royaltyFraction == 0){
            royaltiesEnabled = false;
        }
        royaltyFraction = _royaltyFraction;
        _setDefaultRoyalty(_royaltyReceiver, _royaltyFraction);
        emit Events.RoyaltiesChanged(_royaltyReceiver, _royaltyFraction);
    }
 
    /**
     * @dev Sets the new minting fee.
     * @param _newMintingFee New minting fee.
     *
     * Emits an {MintingFeeChanged} event.
     * 
     * Requirements:
     *
     * - Only Admin can call this method
     */
    function setMintingFee(
        uint256 _newMintingFee
    ) external onlyAdmin nonZeroAmount(_newMintingFee) {
        mintingFee = _newMintingFee;
        emit Events.MintingFeeChanged(_newMintingFee);
    }

    /**
     * @dev Sets the new _owner for this contract. 
     * This is only for compatibility for opensea and other protocols.
     * @param _newOwner New Owner address to set _owner to.
     *
     * Emits an {OwnerChanged} event.
     * 
     * Requirements:
     *
     * - Only Owner can call this method
     * - `_newOwner` must not be a zero address.
     */
    function setNewOwner(
        address _newOwner
    ) external onlyOwner validAccount(_newOwner) {
        owner = payable(_newOwner);
        emit Events.OwnerChanged(_newOwner);
    }

}
