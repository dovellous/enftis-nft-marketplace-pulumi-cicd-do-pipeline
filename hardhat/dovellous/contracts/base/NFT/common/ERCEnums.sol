// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
pragma experimental ABIEncoderV2;

contract ERCEnums {
    /*********************************** Events ***********************************/

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
