// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "hardhat/console.sol";
import "./base/NFT721Factory.sol";

contract NFT721Token is NFT721Factory {

    constructor() NFT721Factory("eNFTs", "ENFTS")
    {
        console.log("NFT721Token is NFT721Factory");
    }

}
