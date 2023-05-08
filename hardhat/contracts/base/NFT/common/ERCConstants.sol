// SPDX-License-Identifier: MIT
/**
 * Created on 2023-05-05 14:36
 * @summary: Contains byte32 constants for error handling messages.
 * @author: dovellous
 */
pragma solidity ^0.8.18;
pragma experimental ABIEncoderV2;

contract ERCConstants {
    /********************************** Constants *********************************/

    /// Implementation type for this contract
    bytes32 public constant IMPLEMENTATION_TYPE = keccak256("ERC721");

    /// Admin Role that can manage contract options
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    /// Minter Role that can start sales and mint nfts
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    /// Minter Role that can start sales and mint nfts
    bytes32 public constant INSUFFICIENT_PERMISSIONS =
        keccak256("INSUFFICIENT_PERMISSIONS");

    /// Minter Role that can start sales and mint nfts
    bytes32 public constant NOT_APPROVED_OWNER =
        keccak256("NOT_APPROVED_OWNER");

    /// Minter Role that can start sales and mint nfts
    bytes32 public constant NO_ADMINS_SPECIFIED =
        keccak256("NO_ADMINS_SPECIFIED");

    /// Minter Role that can start sales and mint nfts
    bytes32 public constant NO_MINTERS_SPECIFIED =
        keccak256("NO_MINTERS_SPECIFIED");

    /// Minter Role that can start sales and mint nfts
    bytes32 public constant MAX_SUPPLY_REACHED =
        keccak256("MAX_SUPPLY_REACHED");

    /// Minter Role that can start sales and mint nfts
    bytes32 public constant INDEX_OUT_OF_BOUNDS =
        keccak256("INDEX_OUT_OF_BOUNDS");

    /// Minter Role that can start sales and mint nfts
    bytes32 public constant AMOUNT_BELOW_MINTING_FEE =
        keccak256("AMOUNT_BELOW_MINTING_FEE");

    /// Minter Role that can start sales and mint nfts
    bytes32 public constant TOKEN_DOES_NOT_EXISTS =
        keccak256("TOKEN_DOES_NOT_EXISTS");

    /// Minter Role that can start sales and mint nfts
    bytes32 public constant TOKEN_URI_EXISTS =
        keccak256("TOKEN_URI_EXISTS");

    /// Minter Role that can start sales and mint nfts
    bytes32 public constant ZERO_ADDRESS =
        keccak256("ZERO_ADDRESS");

    /// Minter Role that can start sales and mint nfts
    bytes32 public constant INVALID_CALLER =
        keccak256("INVALID_CALLER");

}
