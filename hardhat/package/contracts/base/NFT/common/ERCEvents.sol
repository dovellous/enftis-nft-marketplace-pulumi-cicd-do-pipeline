// SPDX-License-Identifier: MIT
/**
 * Created on 2023-05-05 14:36
 * @summary:
 * @author: dovellous
 */
pragma solidity ^0.8.18;
pragma experimental ABIEncoderV2;

import "./ERCStructs.sol";

contract ERCEvents is ERCStructs {
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
    event TokenCategoryChanged(TokenCategory newTokenCategotyIndex);

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
