// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
pragma experimental ABIEncoderV2;

import "./ERC721FactoryWorker.sol";

abstract contract ERC721FactoryBurner is ERC721FactoryWorker {
    
    using Counters for Counters.Counter;

    /**
     * @dev Burns `tokenId`. See {ERC721-_burn}.
     * @param _tokenId id of the token to burn.
     *
     * Requirements:
     *
     * - The caller must own `tokenId` or be an approved operator.
     */
    function burnToken(uint256 _tokenId) internal {
        
        if (!_isApprovedOrOwner(_msgSender(), _tokenId)) {
            revert NotApprovedOrOwner({
                caller: _msgSender(),
                tokenId: _tokenId,
                message: NOT_APPROVED_OWNER
            });
        }

        _resetTokenRoyalty(_tokenId);

        _tokenCurrentSupply.decrement();

        super._burn(_tokenId);

    }

}
