// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
pragma experimental ABIEncoderV2;

contract ERCConstants {

    /********************************** Constants *********************************/

    /// Implementation type for this contract
    bytes32 public constant IMPLEMENTATION_TYPE = 
        keccak256("ERC721");

    /// Admin Role that can manage contract options
    bytes32 public constant ADMIN_ROLE = 
        keccak256("ADMIN_ROLE");

    /// Minter Role that can start sales and mint nfts
    bytes32 public constant MINTER_ROLE = 
        keccak256("MINTER_ROLE");

    bytes32 public constant INSUFFICIENT_PERMISSIONS =
        keccak256("INSUFFICIENT_PERMISSIONS");

    bytes32 public constant NOT_APPROVED_OWNER =
        keccak256("NOT_APPROVED_OWNER");

    bytes32 public constant NO_ADMINS_SPECIFIED =
        keccak256("NO_ADMINS_SPECIFIED");

    bytes32 public constant NO_MINTERS_SPECIFIED =
        keccak256("NO_MINTERS_SPECIFIED");

    bytes32 public constant MAX_SUPPLY_REACHED =
        keccak256("MAX_SUPPLY_REACHED");

    bytes32 public constant INDEX_OUT_OF_BOUNDS =
        keccak256("INDEX_OUT_OF_BOUNDS");

    bytes32 public constant AMOUNT_BELOW_MINTING_FEE =
        keccak256("AMOUNT_BELOW_MINTING_FEE");

    bytes32 public constant TOKEN_DOES_NOT_EXISTS =
        keccak256("TOKEN_DOES_NOT_EXISTS");

    bytes32 public constant TOKEN_URI_EXISTS = 
        keccak256("TOKEN_URI_EXISTS");

    bytes32 public constant ZERO_ADDRESS = 
        keccak256("ZERO_ADDRESS");

    bytes32 public constant INVALID_CALLER = 
        keccak256("INVALID_CALLER");

}
