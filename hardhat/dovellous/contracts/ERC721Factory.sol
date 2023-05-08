// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
pragma experimental ABIEncoderV2;

import "./base/NFT/ERC721/ERC721FactoryGetSet.sol";

contract ERC721Factory is ERC721FactoryGetSet {
    constructor(
        string memory _name,
        string memory _symbol,
        bytes memory _data
    ) payable ERC721FactoryGetSet(_name, _symbol, _data) {}
}
