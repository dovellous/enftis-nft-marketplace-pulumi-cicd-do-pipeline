// SPDX-License-Identifier: MIT
/**
 * Created on 2023-05-05 14:36
 * @summary:
 * @author: dovellous
 */
pragma solidity ^0.8.19;
pragma experimental ABIEncoderV2;

import "./base/NFT/ERC721/ERC721FactoryGetSet.sol";

contract ERC721Factory is ERC721FactoryGetSet {
    constructor(
        string memory _name,
        string memory _symbol,
        bytes memory _data
    ) payable ERC721FactoryGetSet(_name, _symbol, _data) {}
}
