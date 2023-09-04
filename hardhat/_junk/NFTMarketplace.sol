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

    
    // Addresses
    address payable private _owner;

    // Modifiers

    // Prices

    constructor() ERC721("Enftis Official Marketplace", "ENFTMX") {
        owner = payable(msg.sender);
    }

    //Checking if the NFT being sold on your marketplace implemented royalties
    bytes4 private constant _INTERFACE_ID_ERC2981 = 0x2a55205a;

    function checkRoyalties(address tokenContractAddress) internal returns (bool) {
        (bool success) = IERC165(tokenContractAddress).supportsInterface(_INTERFACE_ID_ERC2981);
        return success;
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
