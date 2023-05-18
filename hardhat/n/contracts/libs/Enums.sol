// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
pragma experimental ABIEncoderV2;

/*

============
Enums.sol
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

library Enums {
    
    enum TokenStandards {
        ERC20,
        ERC721,
        ERC1155
    }

    enum TokenCategory {
        AI,
        Art,
        Music,
        Video,
        Stock,
        Asset,
        Domain,
        Gaming,
        Sports,
        Simple,
        Ticket,
        Fashion,
        Utility,
        Currence,
        Advanced,
        Identity,
        SoulBound,
        Financial,
        Commodity,
        Credential,
        Experience,
        Membership,
        RealEstate,
        Fractional,
        Masterclass,
        SupplyChain,
        Collectible,
        Certificate,
        VirtualItem,
        VirtualWorld,
        PhysicalItem,
        CrowdFunding,
        CarbonCredit,
        Authenticity
    }

    enum TokenActivityType {
        Bid,
        Sold,
        Burn,
        Mint,
        List,
        Delist,
        PayRoyalty,
        ChangeRoyalty,
        ChangeTokenURI,
        TransferSingle,
        TransferBatch,
        TransferOwnership
    }

}
