// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";

contract NFTMarketplace is ERC721URIStorage, Ownable, ReentrancyGuard {

    using Counters for Counters.Counter;

    Counters.Counter private _listedItems;
    Counters.Counter private _tokenIds;

    uint256[] private allNFTItems;

    struct NFTSingleItem {
        uint256 tokenId;
        address tokenContract;
        address payable seller;
        address payable owner;
        address payable creator;
        uint256 price;
        bool sold;
        bool isListed;
    }

    // Addresses
    address payable owner;

    // Mappings

    mapping(uint => uint) private _idToNFTIndex;
    mapping(uint => NFTSingleItem) private _idToNFTSingleItem;
    mapping(address => mapping(uint => uint)) private _ownedTokens;
    mapping(uint => uint) private _idToOwnedIndex;
    mapping(string => bool) private _usedTokenURIs;

    // Events

    event NFTSingleItemCreated(
        uint256 tokenId,
        address payable tokenContract,
        address payable seller,
        address payable owner,
        address payable creator,
        uint256 price,
        bool sold,
        bool isListed
    );

    // Modifiers

    // Prices

    uint256 public immutable marketplaceListingFee = 0.025 ether;

    constructor() ERC721("CreaturesNFT", "CNFT") {
        owner = payable(msg.sender);
    }

    function setMarketplaceListingFee(uint256 newPrice) external onlyOwner {
        require(newPrice > 0, "Listing price must be greater than zero, at least 1 wei.");
        marketplaceListingFee = newPrice;
    }

    function getMarketplaceListingFee() public view returns (uint256) {
        return marketplaceListingFee;
    }

    function getNFTSingleItem(
        uint tokenId
    ) public view returns (NFTSingleItem memory) {
        return _idToNFTSingleItem[tokenId];
    }

    function listedItemsCount() public view returns (uint) {
        return _listedItems.current();
    }

    function tokenURIExists(string memory tokenURI) public view returns (bool) {
        return _usedTokenURIs[tokenURI] == true;
    }

    function totalSupply() public view returns (uint) {
        return allNFTItems.length;
    }

    function tokenByIndex(uint index) public view returns (uint) {
        require(index < totalSupply(), "Index out of bounds");
        return allNFTItems[index];
    }

    function tokenOfOwnerByIndex(
        address tokenOwner,
        uint index
    ) public view returns (uint) {
        require(index < ERC721.balanceOf(tokenOwner), "Index out of bounds");
        return _ownedTokens[tokenOwner][index];
    }

    function getAllNftsOnSale() public view returns (NFTSingleItem[] memory) {
        uint allItemsCounts = totalSupply();
        uint currentIndex = 0;
        NFTSingleItem[] memory items = new NFTSingleItem[](
            _listedItems.current()
        );

        for (uint i = 0; i < allItemsCounts; i++) {
            uint tokenId = tokenByIndex(i);
            NFTSingleItem storage item = _idToNFTSingleItem[tokenId];
            if (item.isListed == true) {
                items[currentIndex] = item;
                currentIndex += 1;
            }
        }

        return items;

    }

    function getOwnedNfts() public view returns (NFTSingleItem[] memory) {
        uint ownedItemsCount = ERC721.balanceOf(msg.sender);
        NFTSingleItem[] memory items = new NFTSingleItem[](ownedItemsCount);

        for (uint i = 0; i < ownedItemsCount; i++) {
            uint tokenId = tokenOfOwnerByIndex(msg.sender, i);
            NFTSingleItem storage item = _idToNFTSingleItem[tokenId];
            items[i] = item;
        }

        return items;
    }

    function mintToken(
        IERC721 tokenContractAddress,
        string memory tokenURI,
        uint price
    ) public payable returns (uint) {
        require(!tokenURIExists(tokenURI), "Token URI already exists");
        require(
            msg.value == marketplaceListingFee,
            "Price must be equal to listing price"
        );

        _tokenIds.increment();
        _listedItems.increment();

        uint256 newTokenId = _tokenIds.current();

        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        _createNFTSingleItem(tokenContractAddress, newTokenId, price);
        _usedTokenURIs[tokenURI] = true;

        return newTokenId;
    }

    function buyNFT(uint tokenId) public payable {
        uint price = _idToNFTSingleItem[tokenId].price;
        address tokenOwner = ERC721.ownerOf(tokenId);

        require(msg.sender != tokenOwner, "ALREADY_TOKEN_OWNER");
        require(msg.value >= price, "AMOUNT_BELOW_ASKING_PRICE");

        _idToNFTSingleItem[tokenId].isListed = false;
        _idToNFTSingleItem[tokenId].sold = true;
        _listedItems.decrement();

        _transfer(tokenOwner, msg.sender, tokenId);
        
        payable(tokenOwner).transfer(msg.value);

        uint256 changeToRefund = msg.value - price;

        if(changeToRefund>0){
            payable(msg.sender).transfer(changeToRefund);
        }

    }

    function placeNftOnSale(uint tokenId, uint newPrice) public payable {
        require(
            ERC721.ownerOf(tokenId) == msg.sender,
            "NOT_TOKEN_OWNER"
        );
        require(
            _idToNFTSingleItem[tokenId].isListed == false,
            "ITEM_ALREADY_ON_SALE"
        );
        require(
            msg.value >= marketplaceListingFee,
            "AMOUNT_BELOW_LISTING_FEE"
        );

        _idToNFTSingleItem[tokenId].isListed = true;
        _idToNFTSingleItem[tokenId].price = newPrice;
        _listedItems.increment();
    }

    function 

    function _createNFTSingleItem(IERC721 tokenContractAddress, uint tokenId, uint price) private {

        address NFTokenCreator;

        require(price > 0, "Price must not be equal to 0.");
        require(msg.value >= marketplaceListingFee, "PRICE_BELOW_LISTING_FEE");
        require(NFTokenCreator != address(0), "NFT creator address must not be a zero address. It is needed to pay off the royalties.");

        tokenContractAddress.transferFrom(msg.sender, address(this), tokenId);

        _idToNFTSingleItem[tokenId] = NFTSingleItem(
            tokenId,
            payable(address(tokenContractAddress)),
            payable(msg.sender),
            payable(address(this)),
            payable(NFTokenCreator),
            price,
            false, 
            true
        );

        emit NFTSingleItemCreated(
           tokenId,
            payable(address(tokenContractAddress)),
            payable(msg.sender),
            payable(address(this)),
            payable(NFTokenCreator),
            price,
            false, 
            true
        );

    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint tokenId
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, tokenId);

        if (from == address(0)) {
            _addTokenToAllTokensEnumeration(tokenId);
        } else if (from != to) {
            _removeTokenFromOwnerEnumeration(from, tokenId);
        }

        if (to == address(0)) {
            _removeTokenFromAllTokensEnumeration(tokenId);
        } else if (to != from) {
            _addTokenToOwnerEnumeration(to, tokenId);
        }
    }

    function _addTokenToAllTokensEnumeration(uint tokenId) private {
        _idToNFTIndex[tokenId] = allNFTItems.length;
        allNFTItems.push(tokenId);
    }

    function _addTokenToOwnerEnumeration(address to, uint tokenId) private {
        uint length = ERC721.balanceOf(to);
        _ownedTokens[to][length] = tokenId;
        _idToOwnedIndex[tokenId] = length;
    }

    function _removeTokenFromOwnerEnumeration(
        address from,
        uint tokenId
    ) private {
        uint lastTokenIndex = ERC721.balanceOf(from) - 1;
        uint tokenIndex = _idToOwnedIndex[tokenId];

        if (tokenIndex != lastTokenIndex) {
            uint lastTokenId = _ownedTokens[from][lastTokenIndex];
            _ownedTokens[from][tokenIndex] = lastTokenId;
            _idToOwnedIndex[lastTokenId] = tokenIndex;
        }

        delete _idToOwnedIndex[tokenId];
        delete _ownedTokens[from][lastTokenIndex];
    }

    function _removeTokenFromAllTokensEnumeration(uint tokenId) private {
        uint lastTokenIndex = allNFTItems.length - 1;
        uint tokenIndex = _idToNFTIndex[tokenId];
        uint lastTokenId = allNFTItems[lastTokenIndex];

        allNFTItems[tokenIndex] = lastTokenId;
        _idToNFTIndex[lastTokenId] = tokenIndex;

        delete _idToNFTIndex[tokenId];
        allNFTItems.pop();
    }

    function getBalance() internal returns (uint256) {
        return address(this).balance;
    }

    function withdraw(
        address to,
        uint256 value
    ) external payable 
        onlyOwner
        nonReentrant 
    {
      require(getBalance() >= value, "No balance to withdraw");
      (bool sent, ) = to.call{value: value}("");
      require(sent, "Failed to send Ether");
    }

    event Received(address, uint256);

    receive() external payable {
        emit Received(msg.sender, msg.value);
    }

}
