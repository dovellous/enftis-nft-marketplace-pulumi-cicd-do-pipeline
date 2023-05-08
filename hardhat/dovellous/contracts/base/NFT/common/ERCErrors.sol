// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
pragma experimental ABIEncoderV2;

contract ERCErrors {
    
    /*********************************** Errors ***********************************/

    /**
     * Insufficient permissions for caller.
     *
     * @param caller - caller address.
     * @param requiredRole - requested account role.
     * @param message - requested account role.
     */
    error InsufficientPermissions(
        address caller,
        bytes32 requiredRole,
        bytes32 message
    );

    /**
     * Caller is not approved or owner of the token.
     *
     * @param caller : caller address.
     * @param tokenId : entered tokenId.
     */
    error NotApprovedOrOwner(address caller, uint256 tokenId, bytes32 message);

    /**
     * This contract was not initialized with that option
     *
     * @param active : whether this contract has that option active.
     */
    error DisabledOption(bool active);

    /**
     * This contract is trying to be initialized without admins.
     *
     * @param message : error message.
     *
     */
    error NoAdmins(bytes32 message);

    /**
     * This contract is trying to be initialized without minters.
     *
     * @param message : error message.
     *
     */
    error NoMinters(bytes32 message);

    /**
     * Specified id must be less than the max supply defined.
     *
     * @param maxValue : max supply specified during initialization.
     * @param value : entered value.
     * @param message : error message.
     *
     * Requirements:
     *
     * - tokenId must be below tokenMaximumSupply.
     */
    error ExceededMaxValue(uint256 maxValue, uint256 value, bytes32 message);

    /**
     * Specified id must represent an already minted token. Also the token must not have been burned.
     *
     * @param tokenId : entered tokenId.
     * @param message : error message.
     *
     * Requirements:
     *
     * - tokenId must have been minted or not burned.
     */
    error TokenDoesNotExists(uint256 tokenId, bytes32 message);

    /**
     * Specified amount must be equal to the minting fee defined.
     *
     * @param mintingFee : fee for minting a token.
     * @param value : entered value.
     * @param message : error message.
     *
     * Requirements:
     *
     * - value >= mintingFee.
     */
    error PriceBelowMintingFee(
        uint256 mintingFee,
        uint256 value,
        bytes32 message
    );

    /**
     * The specified tokenURI must be unique. Non fungible token are unique unlike ERC20
     *
     * @param tokenURI : entered tokenURI.
     * @param tokenURIExists : token uri exists
     * @param message : error message.
     *
     * Requirements:
     *
     * - _tokenURI must be unique since NFTs are non-fungible.
     */

    error TokenURIAlreadyExists(
        string tokenURI,
        bool tokenURIExists,
        bytes32 message
    );

    /**
     * @dev Specified amount must be equal to the minting fee defined.
     *
     *
     * Requirements:
     *
     * - Value must be more than zero.
     */

    error InvalidAmount();

    /**
     * @dev The caller must not be a contract address.
     *
     *
     * Requirements:
     *
     * - Code size of the caller address must not be zero
     */

    error UnAuthorizedCaller(
        address account,
        bytes32 message
    );

    /**
     * Specified account address must be a valid ethereum wallet address.
     *
     * @param account the uri of the token.
     * @param message : error message.
     *
     * Requirements:
     *
     * - account address must not be a zero address(0).
     */

    error ZeroAddress(address account, bytes32 message);
}
