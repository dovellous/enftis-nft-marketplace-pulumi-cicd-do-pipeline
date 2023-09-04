// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165Checker.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTMarketplace is ERC721URIStorage, Ownable,  ReentrancyGuard {

    using Counters for Counters.Counter;

    Counters.Counter private _soldItems;
    Counters.Counter private _listedItems;
    Counters.Counter private _tokenIndexedIDs;
    Counters.Counter private _auctionedItems;

    uint256[] private allNFTItems;

    struct NFTSingleItem {
        uint256 tokenID;
        uint256 tokenIndexedID;
        address tokenContractAddress;
        address payable creator;
        address payable seller;
        address payable owner;
        bool supportsRoyalties;
        uint256 royaltyAmount;
        uint256 price;
        bool sold;
        bool isListed;
        bool isAuction;
    }

    struct AuctionDetails {
        uint256 highestBid;
        address highestBidder;
        uint256 timeEnding;
    }

    // Addresses
    address payable private _owner;

    // Mappings

    mapping(uint256 => uint256) private tokenIndexedID2NFTIndex;
    mapping(uint256 => uint256) private NFTSingleItemArrayIndex2tokenIndexedID;
    mapping(uint256 => NFTSingleItem) private tokenIndexedID2NFTSingleItem;
    mapping(address => mapping(uint => uint)) private ownedNFTSingleTokens;
    mapping(uint => uint) private tokenIndexedID2OwnedIndex;

    mapping(uint256 => AuctionDetails) private tokenIndexedID2AuctionDetails;

    // Events

    event NFTSingleItemCreated(
        uint256 tokenID,
        uint256 tokenIndexedID,
        address tokenContractAddress,
        address payable creator,
        address payable seller,
        address payable owner,
        bool supportsRoyalties,
        uint256 royaltyAmount,
        uint256 price,
        bool sold,
        bool isListed,
        bool isAuction
    );

    event NFTSingleItemDelisted(uint256 itemId);

    event NFTSingleItemSold(
        uint256 itemId,
        address indexed nftContract,
        address indexed seller,
        address indexed newOwner
    );

    event NFTSingleItemAuctionSold(
        uint256 itemIndexId,
        uint256 tokenId,
        address indexed tokenContractAddress,
        uint256 price,
        address indexed seller,
        address indexed newOwner,
        NFTSingleItem marketItem,
        AuctionDetails auctionItem
    );

    event NFTSingleItemBid(
        uint256 indexed itemId,
        address indexed bidder,
        uint256 amount
    );

    // Modifiers

    // Prices

    uint256 public immutable marketplaceListingFee = 0.025 ether;

    constructor() ERC721("Enftis Official Marketplace", "ENFTMX") {
        owner = payable(msg.sender);
    }

    function setMarketplaceListingFee(uint256 newPrice) external onlyOwner {
        require(
            newPrice > 0,
            "Listing price must be greater than zero, at least 1 wei."
        );
        marketplaceListingFee = newPrice;
    }

    function getMarketplaceListingFee() public view returns (uint256) {
        return marketplaceListingFee;
    }

    function getNFTSingleItem(
        uint tokenIndexedID
    ) public view returns (NFTSingleItem memory) {
        return tokenIndexedID2NFTSingleItem[tokenIndexedID];
    }

    function totalSupply() public view returns (uint) {
        return tokenIndexedIDs.current();
    }

    function totalListedItemsCount() public view returns (uint) {
       return _listedItems.current();
    }

    function totalSoldItemsCount() public view returns (uint) {
        return _soldItems;
    }

    function tokenByIndex(uint index) public view returns (uint) {
        require(index < totalSupply(), "Index out of bounds");
        return allNFTItems[index];
    }

    //Checking if the NFT being sold on your marketplace implemented royalties
    bytes4 private constant _INTERFACE_ID_ERC2981 = 0x2a55205a;

    function checkRoyalties(address tokenContractAddress) internal returns (bool) {
        (bool success) = IERC165(tokenContractAddress).supportsInterface(_INTERFACE_ID_ERC2981);
        return success;
    }

    function listNFTSingleItem(uint tokenIndexedID, uint newPrice) public payable {
        require(
            IERC721(tokenContractAddress).ownerOf(tokenIndexedID) == msg.sender,
            "NOT_TOKEN_OWNER"
        );
        require(
            tokenIndexedID2NFTSingleItem[tokenIndexedID].owner == msg.sender,
            "NOT_TOKEN_OWNER"
        );
        require(
            tokenIndexedID2NFTSingleItem[tokenIndexedID].isListed == false,
            "ITEM_ALREADY_ON_SALE"
        );
        require(msg.value >= marketplaceListingFee, "AMOUNT_BELOW_LISTING_FEE");

        tokenIndexedID2NFTSingleItem[tokenIndexedID].isSold = false;
        tokenIndexedID2NFTSingleItem[tokenIndexedID].isListed = true;
        tokenIndexedID2NFTSingleItem[tokenIndexedID].price = newPrice;
        _listedItems.increment();
        
    }

    function delistNFTSingleItem(uint tokenIndexedID, bool removeFromMarketplace) external nonReentrant{
        require(!tokenIndexedID2NFTSingleItem[tokenIndexedID].sold,"CANNOT_DELIST_SOLD_ITEMS");
        require(tokenIndexedID2NFTSingleItem[tokenIndexedID].seller == msg.sender,"USER_NOT_LISTER");
        if(tokenIndexedID2NFTSingleItem[tokenIndexedID].isAuction){
            AuctionDetails storage info = auctionData[tokenIndexedID];
            if(info.highestBid > 0){
                payable(info.highestBidder).transfer(info.highestBid);
            }
            delete auctionData[tokenIndexedID];
        }
        IERC721(tokenIndexedID2NFTSingleItem[tokenIndexedID].tokenContractAddress).transferFrom(address(this),msg.sender,idToMarketItem[itemId].tokenId);
        tokenIndexedID2NFTSingleItem[tokenIndexedID].sold = true;
        tokenIndexedID2NFTSingleItem[tokenIndexedID].isListed = false;
        _soldItems.increment();
        _listedItems.decrement();
        if(removeFromMarketplace){
            delete tokenIndexedID2NFTSingleItem[tokenIndexedID];
        }
        emit MarketItemUnlisted(
        itemId
        );
    }

    function createNFTSingleItem(
        IERC721 tokenContractAddress,
        uint256 tokenId,
        uint256 price,
        uint256 auctionHours
    ) external payable nonReentrant returns ( uint256 ) {

        require(price > 0, "PRICE_MUST_BE_ABOVE_ZERO");

        require(msg.value >= marketplaceListingFee, "PRICE_BELOW_LISTING_FEE");

        require(
            ERC165Checker.supportsInterface(
                tokenContractAddress,
                ERC721INTERFACE
            ),
            "INVALID_TOKEN_INTERFACE_REQUIRES_IERC721"
        );

        require(
            IERC721(tokenContractAddress).ownerOf(tokenId) == msg.sender,
            "ONLY_TOKEN_OWNER_CAN_LIST"
        );

        bool isSold;

        bool isListed;

        bool isAuction;

        _tokenIndexedIDs.increment();

        uint256 tokenIndexedID = _tokenIndexedIDs.current();

        if (auctionHours > 0) {
            isAuction = true;

            tokenIndexedID2AuctionDetails[tokenIndexedID] = AuctionDetails(
                0, //highestBid
                address(0), //highestBidder
                (block.timestamp + (auctionHours * 1 hours)) //timeEnding
            );

            _auctionedItems.increment();
        }

        if (ERC165Checker.supportsInterface(nftContract, ERC2981INTERFACE)) {

            (address creator, uint256 royaltyAmount) = IERC2981(
                tokenContractAddress
            ).royaltyInfo(tokenId, price);

        } else {

            address creator = msg.sender;

            uint256 royaltyAmount = 0;

        }

        require(
            creator != address(0),
            "NFT_CREATOR_ADDRESS_FOR_ROYALTIES_INVALID"
        );

        IERC721(tokenContractAddress).transferFrom(
            msg.sender,
            address(this),
            tokenId
        );

        isListed = true;

        _listedItems.increment();

        tokenIndexedID2NFTSingleItem[tokenIndexedID] = NFTSingleItem(
            tokenId,
            tokenIndexedID,
            payable(address(tokenContractAddress)),
            payable(creator),
            payable(msg.sender),
            payable(address(this)),
            checkRoyalties(address(tokenContractAddress)),
            royaltyAmount,
            price,
            isSold,
            isListed,
            isAuction
        );

        emit NFTSingleItemCreated(
            tokenId,
            tokenIndexedID,
            payable(address(tokenContractAddress)),
            payable(creator),
            payable(msg.sender),
            payable(address(this)),
            checkRoyalties(address(tokenContractAddress)),
            royaltyAmount,
            price,
            isSold,
            isListed,
            isAuction
        );

        return tokenIndexedID;

    }

    function createAuctionBid(
        uint256 tokenIndexedIDs
    ) external payable nonReentrant {
        NFTSingleItem storage currentItem = tokenIndexedID2NFTSingleItem[
            tokenIndexedIDs
        ];
        AuctionDetails storage currentInfo = tokenIndexedID2AuctionDetails[
            itemId
        ];

        require(!currentItem.sold, "ITEM_ALREADY_SOLD");
        require(currentItem.isAuction, "ITEM_NOT_FOR_AUCTION");
        require(
            currentInfo.timeEnding > block.timestamp,
            "AUCTION_ALREADY_ENDED"
        );
        require(msg.value > currentItem.price, "AMOUNT_BELOW_PRICE_FLOOR");
        require(
            msg.value > currentInfo.highestBid,
            "AMOUNT_BELOW_CURRENT_HIGHEST_BID"
        );

        payable(currentInfo.highestBidder).transfer(currentInfo.highestBid);

        currentInfo.highestBidder = msg.sender;
        currentInfo.highestBid = msg.value;

        emit NFTSingleItemBid(itemId, msg.sender, msg.value);
    }

    function createAuctionSale(
        uint256 tokenIndexedID
    ) external payable nonReentrant {
        NFTSingleItem storage currentItem = tokenIndexedID2NFTSingleItem[
            tokenIndexedID
        ];
        AuctionDetails storage currentInfo = tokenIndexedID2AuctionDetails[
            tokenIndexedID
        ];

        require(!currentItem.sold, "ITEM_ALREADY_SOLD");
        require(currentItem.isAuction, "ITEM_NOT_FOR_AUCTION");
        require(
            currentInfo.timeEnding < block.timestamp,
            "AUCTION_NOT_YET_ENDED"
        );
        require(
            msg.sender == currentInfo.highestBidder,
            "SENDER_NOT_HIGHEST_BIDDER"
        );
        require(currentItem.seller != address(0), "SELLER_ADDRESS_INVALID");

        executeSale(currentItem, currentInfo, true);
    }

    function createMarketSale(
        uint256 tokenIndexedID
    ) external payable nonReentrant {
        NFTSingleItem storage currentItem = tokenIndexedID2NFTSingleItem[
            tokenIndexedID
        ];
        AuctionDetails storage currentInfo = tokenIndexedID2AuctionDetails[
            tokenIndexedID
        ];

        require(!currentItem.sold, "ITEM_ALREADY_SOLD");
        require(!currentItem.isAuction, "ITEM_ALREADY_ON_AUCTION");
        require(msg.value >= currentItem.price, "SUBMITTED_PRICE_TOO_LOW");
        require(currentItem.seller != address(0), "SELLER_ADDRESS_INVALID");

        executeSale(currentItem, currentInfo, false);
    }

    function executeSale(
        NFTSingleItem currentItem,
        AuctionDetails currentInfo,
        bool isAuction
    ) external payable nonReentrant {
        if (currentItem.creator == currentItem.seller) {
            payable(currentItem.seller).transfer(currentItem.price);
        } else {
            if (currentItem.royaltyAmount > 0) {
                payable(currentItem.creator).transfer(
                    currentItem.royaltyAmount
                );
            }

            payable(currentItem.seller).transfer(
                msg.value - currentItem.royaltyAmount
            );
        }

        IERC721(currentItem.contractAddress).transferFrom(
            address(this),
            msg.sender,
            currentItem.tokenId
        );

        tokenIndexedID2NFTSingleItem[tokenIndexedID].owner = payable(
            msg.sender
        );
        tokenIndexedID2NFTSingleItem[tokenIndexedID].sold = true;
        tokenIndexedID2NFTSingleItem[tokenIndexedID].isListed = false;
        _soldItems.increment();

        //Todo: consider using counters
        _listedItems -= 1;

        uint256 changeToRefund = msg.value - currentItem.price;

        if (changeToRefund > 0) {
            payable(msg.sender).transfer(changeToRefund);
        }

        emit NFTSingleItemAuctionSold(
            tokenIndexedID,
            currentItem.tokenId,
            tokenContractAddress,
            currentItem.price,
            msg.sender,
            currentItem.seller,
            currentItem,
            currentInfo
        );
    }

    /* Returns all of user bids */
    function fetchUserBids()
        external
        view
        returns (NFTSingleItem[] memory, AuctionDetails[] memory)
    {
        uint totalItemCount = _itemIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 0; i < totalItemCount; i++) {
            if (auctionData[i + 1].highestBidder == msg.sender) {
                itemCount += 1;
            }
        }

        NFTSingleItem[] memory items = new NFTSingleItem[](itemCount);
        AuctionDetails[] memory info = new AuctionDetails[](itemCount);

        for (uint i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].owner == msg.sender) {
                uint currentId = i + 1;
                NFTSingleItem storage currentItem = idToMarketItem[currentId];
                AuctionDetails storage currentInfo = auctionData[currentId];
                items[currentIndex] = currentItem;
                info[currentIndex] = currentInfo;
                currentIndex += 1;
            }
        }
        return (items, info);
    }

    
    /* Returns all unsold market items */
    function fetchMarketItems() public view returns (NFTSingleItem[] memory,AuctionDetails[] memory) {
        
        uint itemCount = _tokenIndexedIDs.current();
        uint unsoldItemCount = _tokenIndexedIDs.current() - _soldItems.current();
        uint currentIndex = 0;

        NFTSingleItem[] memory items = new NFTSingleItem[](unsoldItemCount);
        AuctionDetails[] memory info = new AuctionDetails[](unsoldItemCount);
        
        for (uint i = 0; i < itemCount; i++) {
            if (!tokenIndexedID2NFTSingleItem[i + 1].sold) {
                uint currentId = i + 1;
                NFTSingleItem storage currentItem = idToMarketItem[currentId];
                AuctionDetails storage currentInfo = auctionData[currentId];
                items[currentIndex] = currentItem;
                info[currentIndex] = currentInfo;
                currentIndex += 1;
            }
        }
        return (items,info);
    }


    /**
     * @dev Since we can't access structs properties dinamically, this function selects the address
     * we're looking for between "owner" and "seller"
     */
    function fetchNFTSingleItemsByProperty(NFTSingleItem memory item, string memory property)
        private
        pure
        returns (address)
    {
        
        require(
            compareStrings(_addressProperty, "seller") || compareStrings(_addressProperty, "owner") || compareStrings(_addressProperty, "creator"),
            "INVALID_FETCH_PARAMETER"
        );

        if(compareStrings(property, "seller")){

            return item.seller;

        }

        if(compareStrings(property, "owner")){

            return item.owner;

        }

        if(compareStrings(property, "creator")){

            return item.creator;

        }

        return address(0);

    }

    /**
     * @dev Fetch market items that are being listed by the msg.sender
     */
    function fetchListedNFTSingleItems() public view returns (NFTSingleItem[] memory) {
        return fetchNFTSingleItemsByAddressProperty("seller");
    }

    /**
     * @dev Fetch market items that are owned by the msg.sender
     */
    function fetchOwnedNFTSingleItems() public view returns (NFTSingleItem[] memory) {
        return fetchNFTSingleItemsByAddressProperty("owner");
    }

    /**
     * @dev Fetch market items that were minted by the msg.sender
     */
    function fetchMintedNFTSingleItems() public view returns (NFTSingleItem[] memory) {
        return fetchNFTSingleItemsByAddressProperty("creator");
    }

    function fetchNFTSingleItemsByAddressProperty(string memory _addressProperty)
        public
        view
        returns (NFTSingleItem[] memory)
    {

        require(
            compareStrings(_addressProperty, "seller") || compareStrings(_addressProperty, "owner") || compareStrings(_addressProperty, "creator"),
            "INVALID_FETCH_PARAMETER"
        );

        uint256 totalItemsCount = _tokenIndexedIDs.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemsCount; i++) {
            // Is it ok to assign this variable for better code legbility?
            // Is it better to use memory or storage in this case?
            NFTSingleItem storage item = tokenIndexedID2NFTSingleItem[i + 1];
            address addressPropertyValue = getNFTSingleItemAddressByProperty(item, _addressProperty);
            if (addressPropertyValue != msg.sender) continue;
            itemCount += 1;
        }

        NFTSingleItem[] memory items = new NFTSingleItem[](itemCount);

        for (uint256 i = 0; i < totalItemsCount; i++) {
            // Is it ok to assign this variable for better code legbility?
            // Is it better to use memory or storage in this case?
            NFTSingleItem storage item = tokenIndexedID2NFTSingleItem[i + 1];
            address addressPropertyValue = getNFTSingleItemAddressByProperty(item, _addressProperty);
            if (addressPropertyValue != msg.sender) continue;
            items[currentIndex] = item;
            currentIndex += 1;
        }

        return items;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint tokenIndexedID
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, tokenIndexedID);

        if (from == address(0)) {
            _addTokenToAllTokensEnumeration(tokenIndexedID);
        } else if (from != to) {
            _removeTokenFromOwnerEnumeration(from, tokenIndexedID);
        }

        if (to == address(0)) {
            _removeTokenFromAllTokensEnumeration(tokenIndexedID);
        } else if (to != from) {
            _addTokenToOwnerEnumeration(to, tokenIndexedID);
        }
    }

    function _addTokenToAllTokensEnumeration(uint tokenIndexedID) private {
        tokenIndexedID2NFTIndex[tokenIndexedID] = allNFTItems.length;
        allNFTItems.push(tokenIndexedID);
    }

    function _addTokenToOwnerEnumeration(
        address to,
        uint tokenIndexedID
    ) private {
        uint length = ERC721.balanceOf(to);
        ownedNFTSingleTokens[to][length] = tokenIndexedID;
        tokenIndexedID2OwnedIndex[tokenIndexedID] = length;
    }

    function _removeTokenFromOwnerEnumeration(
        address from,
        uint tokenIndexedID
    ) private {
        uint lastTokenIndex = ERC721.balanceOf(from) - 1;
        uint tokenIndex = tokenIndexedID2OwnedIndex[tokenIndexedID];

        if (tokenIndex != lastTokenIndex) {
            uint lastTokenId = ownedNFTSingleTokens[from][lastTokenIndex];
            ownedNFTSingleTokens[from][tokenIndex] = lastTokenId;
            tokenIndexedID2OwnedIndex[lastTokenId] = tokenIndex;
        }

        delete tokenIndexedID2OwnedIndex[tokenIndexedID];
        delete ownedNFTSingleTokens[from][lastTokenIndex];
    }

    function _removeTokenFromAllTokensEnumeration(uint tokenIndexedID) private {
        uint lastTokenIndex = allNFTItems.length - 1;
        uint tokenIndex = tokenIndexedID2NFTIndex[tokenIndexedID];
        uint lastTokenId = allNFTItems[lastTokenIndex];

        allNFTItems[tokenIndex] = lastTokenId;
        tokenIndexedID2NFTIndex[lastTokenId] = tokenIndex;

        delete tokenIndexedID2NFTIndex[tokenIndexedID];
        allNFTItems.pop();
    }

    function getBalance() internal returns (uint256) {
        return address(this).balance;
    }

    function withdraw(
        address to,
        uint256 value
    ) external payable onlyOwner nonReentrant {
        require(getBalance() >= value, "No balance to withdraw");
        (bool sent, ) = to.call{value: value}("");
        require(sent, "Failed to send Ether");
    }

    event Received(address, uint256);

    receive() external payable {
        emit Received(msg.sender, msg.value);
    }

}
