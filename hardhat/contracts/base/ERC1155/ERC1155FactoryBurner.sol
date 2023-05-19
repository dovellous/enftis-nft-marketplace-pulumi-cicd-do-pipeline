// SPDX-License-Identifier: MIT
/**
 * Created on 2023-05-05 14:36
 * @summary:
 * @author: dovellous
 */
pragma solidity ^0.8.19;
pragma experimental ABIEncoderV2;

import "./ERC1155FactoryWorker.sol";

abstract contract ERC1155FactoryBurner is ERC1155FactoryWorker {
    using Counters for Counters.Counter;

    /**
     * @dev Burns `tokenId`. See {ERC1155-_burn}.
     * @param _tokenId id of the token to burn.
     *
     * Requirements:
     *
     * - The caller must own `tokenId` or be an approved operator.
     */
    function burnToken(uint256 _tokenId) public whenIsApprovedOrOwner(
            _isApprovedOrOwner(_msgSender(), _tokenId)
        ) {
        
        _resetTokenRoyalty(_tokenId);

        _tokenCurrentSupply.decrement();

        super._burn(_tokenId);
        
    }

    
    /**
     * @dev Burns `amount` tokens of token type `id` from `account`. See {ERC1155-_burn}.
     *
     * @param from address of account to burn .
     * @param id tokenId to burn.
     * @param amount token amount to burn.
     *
     * Emits a TransferSingle event.
     *
     * Requirements:
     * - `from` cannot be the zero address.
     * - `from` must have at least amount tokens of token type id.
     * - The caller must own `tokenId` or be an approved operator.
     */
    function burn(
        address from,
        uint256 id,
        uint256 amount
    ) public virtual burnable {
        if (from != _msgSender() && !isApprovedForAll(from, _msgSender())) {
            revert NotApprovedOrOwner({account: from, caller: _msgSender()});
        }
        _burn(from, id, amount);
        supplyById[id] -= amount;
    }

    /**
     * @dev Burns `amount` tokens of token type `id` from `from`. See {ERC1155-_burn}.
     *
     * @param from address of account to burn from.
     * @param ids tokenIds to burn.
     * @param amounts token amounts to burn.
     *
     * Emits a TransferBatch event.
     *
     * Requirements:
     * - `from` cannot be the zero address.
     * - `from` must have at least amount tokens of token type id.
     * - The caller must own `tokenId` or be an approved operator.
     */
    function burnBatch(
        address from,
        uint256[] calldata ids,
        uint256[] calldata amounts
    ) public virtual burnable {
        if (from != _msgSender() && !isApprovedForAll(from, _msgSender())) {
            revert NotApprovedOrOwner({account: from, caller: _msgSender()});
        }
        _burnBatch(from, ids, amounts);
        for (uint256 i = 0; i < amounts.length; i++) {
            supplyById[ids[i]] -= amounts[i];
        }
    }

}
