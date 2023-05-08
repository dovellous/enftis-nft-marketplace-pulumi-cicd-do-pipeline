// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
pragma experimental ABIEncoderV2;

import "./ERCEnums.sol";

contract ERCStructs is ERCEnums {

    /*********************************** Structs **********************************/

    /// Contract options

    struct RoyaltyItem {
        bool royaltyIsDefined;
        address royaltyReceiver;
        uint256 royaltyFraction;
        uint256 royaltyAmount;
        uint256 tokenId;
    }

    struct TokenActivityItem {
        TokenActivityType activityType;
        address fromAddress;
        address toAddress;
        uint timestamp;
        string data;
    }

    struct NFTItem {
        address ownerAddress;
        address creatorAddress;
        uint256 tokenId;
        uint createdAt;
        uint updatedAt;
        string tokenURI;
    }

}
