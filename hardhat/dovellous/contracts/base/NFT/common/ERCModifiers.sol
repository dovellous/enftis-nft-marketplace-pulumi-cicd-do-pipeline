// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./ERCConstants.sol";
import "./ERCErrors.sol";

abstract contract ERCModifiers is AccessControl, ERCConstants, ERCErrors {
    
    ContractOptions public contractOptionsStruct;

    struct ContractOptions {
        bool pausable;
        bool burnable;
    }

    /********************************* Modifiers **********************************/

    /// reverts InsufficientPermissions error if caller does not have admin or owner role.

    function _onlyAdmin() private view {
        if (
            !hasRole(ADMIN_ROLE, _msgSender()) &&
            !hasRole(DEFAULT_ADMIN_ROLE, _msgSender())
        ) {
            revert InsufficientPermissions({
                caller: _msgSender(),
                requiredRole: ADMIN_ROLE,
                message: INSUFFICIENT_PERMISSIONS
            });
        }
    }

    modifier onlyAdmin() {
        _onlyAdmin();
        _;
    }

    /// reverts InsufficientPermissions error if caller does not have owner role.
    function _onlyOwner() private view {
        if (!hasRole(DEFAULT_ADMIN_ROLE, _msgSender())) {
            revert InsufficientPermissions({
                caller: _msgSender(),
                requiredRole: DEFAULT_ADMIN_ROLE,
                message: INSUFFICIENT_PERMISSIONS
            });
        }
        
    }

    modifier onlyOwner() {
        _onlyOwner();
        _;
    }

    /// reverts InsufficientPermissions error if caller does not have minter role.
    function _onlyMinter() private view {
        if (!hasRole(MINTER_ROLE, _msgSender())) {
            revert InsufficientPermissions({
                caller: _msgSender(),
                requiredRole: MINTER_ROLE,
                message: INSUFFICIENT_PERMISSIONS
            });
        }
    }

    modifier onlyMinter() {
        _onlyMinter();
        _;
    }

    /// reverts DisabledOption error if contract is not burnable.
    function _burnable() private view {
        if (!contractOptionsStruct.burnable) {
            revert DisabledOption({active: contractOptionsStruct.burnable});
        }
    }

    modifier burnable() {
        _burnable();
        _;
    }

    /// reverts DisabledOption error if contract is not pausable.
    function _pausable() private view {
        if (!contractOptionsStruct.pausable) {
            revert DisabledOption({active: contractOptionsStruct.pausable});
        }
    }

    modifier pausable() {
        _pausable();
        _;
    }

    /// reverts InvalidAmount error if the amount is zero.
    function _nonZeroAmount(uint256 _amount) private pure {
        if (_amount == 0) {
            revert InvalidAmount();
        }
    }

    modifier nonZeroAmount(uint256 _amount) {
        _nonZeroAmount(_amount);
        _;
    }

    /// reverts ZeroAddress error if the account is a zero address.
    function _validAccount(address _account) private pure {
        if (address(0) == _account) {
            revert ZeroAddress({account: _account, message: ZERO_ADDRESS});
        }
    }

    modifier validAccount(address _account) {
        _validAccount(_account);
        _;
    }

    /// reverts UnAuthorizedCaller error if address is a smart contract.
    function _authorizedCaller(address _account) private view {
        uint32 size;
        assembly {
            size := extcodesize(_account)
        }
        if (size > 0){
            revert UnAuthorizedCaller({account: _account, message: INVALID_CALLER});
        }
        if (_account.code.length > 0) {
            revert UnAuthorizedCaller({account: _account, message: INVALID_CALLER});
        }
    }

    modifier authorizedCaller(address _account) {
        _authorizedCaller(_account);
        _;
    }

    /// reverts ExceededMaxValue error if tokenID is out of bounds.
    function _validToken(
        bool _tokenExists,
        uint256 _tokenId,
        uint256 _tokenMaximumSupply
    ) private pure {
        if (_tokenId == 0) {
            revert ExceededMaxValue({
                maxValue: _tokenMaximumSupply,
                value: _tokenId,
                message: INDEX_OUT_OF_BOUNDS
            });
        }

        if (_tokenId > _tokenMaximumSupply) {
            revert ExceededMaxValue({
                maxValue: _tokenMaximumSupply,
                value: _tokenId,
                message: INDEX_OUT_OF_BOUNDS
            });
        }

        if (!_tokenExists) {
            revert TokenDoesNotExists({
                tokenId: _tokenId,
                message: TOKEN_DOES_NOT_EXISTS
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

    /********************************* Modifiers **********************************/

}
