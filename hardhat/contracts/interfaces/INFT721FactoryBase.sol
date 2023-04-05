// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

interface INFT721FactoryBase {

    event Received(address, uint256);

    receive() external payable;

    function mintNFT(string memory tokenURI) external;

    function withdraw(address to, uint256 value) external payable;

}
