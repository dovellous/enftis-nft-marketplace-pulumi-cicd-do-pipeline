// SPDX-License-Identifier: MIT
/**
 * Created on 2023-05-05 14:36
 * @summary: Contains struct objects for Royalties, TokenActivity and NFTs
 * @author: dovellous
 */
pragma solidity ^0.8.18;
pragma experimental ABIEncoderV2;

import "./ERCEnums.sol";

contract ERCStructs is ERCEnums {

    /*********************************** Structs **********************************/

    // Royalty Object
    struct RoyaltyItem {
        bool royaltyIsDefined;
        address royaltyReceiver;
        uint256 royaltyFraction;
        uint256 royaltyAmount;
        uint256 tokenId;
    }

    // Token Activity Object
    struct TokenActivityItem {
        TokenActivityType activityType;
        address fromAddress;
        address toAddress;
        uint timestamp;
        string data;
    }

    // NFT Object
    struct NFTItem {
        address minterAddress;
        address creatorAddress;
        address ownerAddress;
        uint256 tokenId;
        uint createdAt;
        uint updatedAt;
        string tokenURI;
    }

}
