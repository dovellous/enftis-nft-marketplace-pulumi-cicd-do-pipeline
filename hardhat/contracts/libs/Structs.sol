// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
pragma experimental ABIEncoderV2;

/*

============
Structs.sol
============

name        :   Enftis NFT Factory Token
symbol      :   ENFTIS
tokenTypes  :   ERC721, ERC165, ERC2968
maxSupply   :   uint256.max()
solhcVersion:   0.8.20
version     :   1.0.0
released    :   25 March 2023
developers  :   @enftix
license     :   MIT License
networks    :   ethereum, polygon, binance

*/

import "./Enums.sol";

library Structs {

    using Enums for *;

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
        Enums.TokenActivityType activityType;
        address fromAddress;
        address toAddress;
        uint timestamp;
    }

    // NFT Object
    struct NFTItem {
        address minterAddress;
        address[2] creatorAddress;
        address ownerAddress;
        uint256 tokenId;
        uint createdAt;
        uint updatedAt;
    }

}
