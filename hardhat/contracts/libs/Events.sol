// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
pragma experimental ABIEncoderV2;

/*

============
Events.sol
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

library Events {
    
    /*********************************** Events ***********************************/

    /// Event fired when owner address is modified.
    event OwnerChanged(address newOwner);

    /// Event fired when owner address is modified.
    event ContractURIChanged(string newURI);

    ///
    event CollectionDescriptionChanged(string description);

    ///
    event CollectionDisplayPictureChanged(string photoURL);

    /// Event fired when owner address is modified.
    event BaseURIChanged(string newURI);

    /// Event fired when owner address is modified.
    event MarketplaceAddressChanged(address newMarketplaceAddress);

    /// Event fired when owner address is modified.
    event MarketplaceAddressForTokenChanged(
        address newMarketplaceAddress,
        uint256 tokenId
    );

    /// Event fired when owner address is modified.
    event MintingFeeChanged(uint256 newMintingFee);

    /// Event fired when a token has been minted.
    event TokenMinted(
        address creator,
        address minter,
        uint256 indexed newTokenId,
        uint256 batchSize
    );

    /// Event fired when owner address is modified.
    event TokenCategoryChanged(Enums.TokenCategory newTokenCategotyIndex);

    /// Event fired when a token has been minted.
    event TokenBurned(
        address creator,
        address burner,
        uint256 indexed burnedTokenId,
        uint256 batchSize
    );

    /// Event fired when a token has been minted.
    event TokenTransfered(
        address creator,
        address burner,
        uint256 indexed transferedTokenId,
        uint256 batchSize
    );

    event Received(address, uint);

    event Log(string func, uint gas);

}
