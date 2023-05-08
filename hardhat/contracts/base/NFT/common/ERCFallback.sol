// SPDX-License-Identifier: MIT
/**
 * Created on 2023-05-05 14:36
 * @summary:
 * @author: dovellous
 */
pragma solidity ^0.8.19;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "../../../libs/Snippets.sol";

abstract contract ERCFallback is AccessControl, ReentrancyGuard {

    using Snippets for *;

    address payable public contractTreasury =
        payable(0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC);

    /**
     * @dev Remember that only owner can call so be careful when use on contracts generated from other contracts.
     * @param _token The token contract address
     * @param _account Number of tokens to be sent
     * @param _standard Number of tokens to be sent
     * @param _amount Number of tokens to be sent
     * @param _tokenId Number of tokens to be sent
     */
    function recoverTokens(
        address _token,
        address _account,
        Enums.TokenStandards _standard,
        uint256 _amount,
        uint256 _tokenId
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        address payable _receiver;

        if (_account != address(0)) {
            _receiver = payable(_account);
        } else {
            _receiver = payable(_msgSender());
        }

        if (_standard == Enums.TokenStandards.ERC20) {
            IERC20(_token).transfer(_receiver, _amount);
        }

        if (_standard == Enums.TokenStandards.ERC721) {
            IERC721(_token).safeTransferFrom(
                address(this),
                _receiver,
                _tokenId
            );
        }

        if (_standard == Enums.TokenStandards.ERC1155) {
            IERC1155(_token).safeTransferFrom(
                address(this),
                _receiver,
                _tokenId,
                _amount,
                "0x0"
            );
        }
    }

    /**
     * @dev :
     */
    function getBalance()
        internal
        view
        onlyRole(DEFAULT_ADMIN_ROLE)
        returns (uint256)
    {
        return address(this).balance;
    }

    /**
     * @dev :
     */
    function withdraw(
        address to,
        uint256 value
    ) external payable onlyRole(DEFAULT_ADMIN_ROLE) nonReentrant {
        require(getBalance() >= value, "INSUFFICIENT_BALANCE");
        (bool sent, ) = to.call{value: value}("");
        require(sent, "FAILED_TO_WITHDRAW");
    }

    /**
     * @dev :
     */
    function withdrawAll()
        external
        payable
        onlyRole(DEFAULT_ADMIN_ROLE)
        nonReentrant
    {
        require(getBalance() != 0, "INSUFFICIENT_BALANCE");
        payable(_msgSender()).transfer(getBalance());
    }

    function transferToFallback(address payable _to) public payable {
        _to.transfer(msg.value);
    }

    function callFallback(address payable _to) public payable {
        (bool sent, ) = _to.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
}
