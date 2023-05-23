// SPDX-License-Identifier: MIT
/**
 * Created on 2023-05-05 14:35
 * @summary:
 * @author: dovellous
 */
pragma solidity ^0.8.19;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./ERCFallback.sol";

abstract contract ERCModifiers is AccessControl, ERCFallback {
    
    struct ContractOptions {
        bool pausable;
        bool burnable;
    }

    ContractOptions public contractOptionsStruct;

    /********************************* Modifiers **********************************/

    /**
     * @dev : reverts InsufficientPermissions error if caller does not have admin or owner role.
     */
    function _onlyAdmin() private view {
        if (
            !hasRole(Snippets.ADMIN_ROLE, _msgSender()) &&
            !hasRole(DEFAULT_ADMIN_ROLE, _msgSender())
        ) {
            revert Errors.InsufficientPermissions({
                caller: _msgSender(),
                requiredRole: Snippets.ADMIN_ROLE,
                message: Snippets.INSUFFICIENT_PERMISSIONS
            });
        }
    }

    modifier onlyAdmin() {
        _onlyAdmin();
        _;
    }

    /**
     * @dev : reverts InsufficientPermissions error if caller does not have owner role.
     */
    function _onlyOwner() private view {
        if (!hasRole(DEFAULT_ADMIN_ROLE, _msgSender())) {
            revert Errors.InsufficientPermissions({
                caller: _msgSender(),
                requiredRole: DEFAULT_ADMIN_ROLE,
                message: Snippets.INSUFFICIENT_PERMISSIONS
            });
        }
    }

    modifier onlyOwner() {
        _onlyOwner();
        _;
    }

    /**
     * @dev : reverts InsufficientPermissions error if caller does not have minter role.
     */
    function _onlyMinter() private view {
        if (!hasRole(Snippets.MINTER_ROLE, _msgSender())) {
            revert Errors.InsufficientPermissions({
                caller: _msgSender(),
                requiredRole: Snippets.MINTER_ROLE,
                message: Snippets.INSUFFICIENT_PERMISSIONS
            });
        }
    }

    modifier onlyMinter() {
        _onlyMinter();
        _;
    }

    /**
     * @dev : reverts DisabledOption error if contract is not burnable.
     */
    function _burnable() private view {
        if (!contractOptionsStruct.burnable) {
            revert Errors.DisabledOption({active: contractOptionsStruct.burnable});
        }
    }

    modifier burnable() {
        _burnable();
        _;
    }

    /**
     * @dev : reverts DisabledOption error if contract is not pausable.
     */
    function _pausable() private view {
        if (!contractOptionsStruct.pausable) {
            revert Errors.DisabledOption({active: contractOptionsStruct.pausable});
        }
    }

    modifier pausable() {
        _pausable();
        _;
    }

    /**
     * @dev : reverts InvalidAmount error if the amount is zero.
     * @param _amount :
     */
    function _nonZeroAmount(uint256 _amount) private pure {
        if (_amount == 0) {
            revert Errors.InvalidAmount(Snippets.INVALID_AMOUNT);
        }
    }

    modifier nonZeroAmount(uint256 _amount) {
        _nonZeroAmount(_amount);
        _;
    }

    /**
     * @dev : reverts ZeroAddress error if the account is a zero address.
     * @param _account :
     */
    function _validAccount(address _account) private pure {
        if (address(0) == _account) {
            revert Errors.ZeroAddress({account: _account, message: Snippets.ZERO_ADDRESS});
        }
    }

    modifier validAccount(address _account) {
        _validAccount(_account);
        _;
    }

    /**
     * @dev : reverts UnAuthorizedCaller error if address is a smart contract.
     * @param _account :
     */
    function _authorizedCaller(address _account) private view {
        uint32 size;
        assembly {
            size := extcodesize(_account)
        }
        if (size > 0) {
            revert Errors.UnAuthorizedCaller({
                account: _account,
                message: Snippets.INVALID_CALLER
            });
        }
        if (_account.code.length > 0) {
            revert Errors.UnAuthorizedCaller({
                account: _account,
                message: Snippets.INVALID_CALLER
            });
        }
    }

    modifier authorizedCaller(address _account) {
        _authorizedCaller(_account);
        _;
    }

    /**
     * @dev : reverts ExceededMaxValue error if tokenID is out of bounds.
     */
    function _validToken(
        bool _tokenExists,
        uint256 _tokenId,
        uint256 _tokenMaximumSupply
    ) private pure {

        if (_tokenId == 0 || _tokenId > _tokenMaximumSupply) {
            revert Errors.IndexOutOfBounds({
                tokenId: _tokenId,
                message: Snippets.INDEX_OUT_OF_BOUNDS
            });
        }

        if (!_tokenExists) {
            revert Errors.TokenDoesNotExists({
                tokenId: _tokenId,
                message: Snippets.TOKEN_DOES_NOT_EXISTS
            });
        }

    }

    modifier validToken(
        bool _tokenExists,
        uint256 _tokenId,
        uint256 _tokenMaximumSupply
    ) {
        _validToken(_tokenExists, _tokenId, _tokenMaximumSupply);
        _;
    }

    /**
     * @dev : reverts ZeroAddress error if the account is a zero address.
     * @param _timestamp The timestamp to enable the royalties again
     */
    function _whenRoyaltiesAreEnabled(uint256 _timestamp) private view {
        if (_timestamp > block.timestamp) {
            revert Errors.RoyaltiesDisabled(
                {
                    timestamp: _timestamp, 
                    message: Snippets.ROYALTIES_DISABLED
                }
            );
        }
    }

    modifier whenRoyaltiesAreEnabled(uint256 _timestamp) {
        _whenRoyaltiesAreEnabled(_timestamp);
        _;
    }

    /**
     * @dev : reverts NotApprovedOrOwner error if the account is a not owner or approved.
     * 
     */
    function _whenIsApprovedOrOwner(bool _approved) private pure {
        if (!_approved) {
            revert Errors.NotApprovedOrOwner();
        }
    }

    modifier whenIsApprovedOrOwner(bool _approved) {
        _whenIsApprovedOrOwner(_approved);
        _;
    }
    /**
     * @dev : reverts NotApprovedOrOwner error if the account is a not owner or approved.
     * 
     */
    function _whenIsTokenOwner(bool _tokenOwner) private pure {
        if (!_tokenOwner) {
            revert Errors.NotApprovedOrOwner();
        }
    }

    modifier whenIsTokenOwner(bool _tokenOwner) {
        _whenIsTokenOwner(_tokenOwner);
        _;
    }
    /********************************* Modifiers **********************************/
}
