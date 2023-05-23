// SPDX-License-Identifier: MIT
/**
 * Created on 2023-05-05 14:36
 * @summary:
 * @author: dovellous
 */
pragma solidity ^0.8.19;
pragma experimental ABIEncoderV2;


contract OwnableDelegateProxy {}

contract ERC1155FactoryProxyRegistry {
  mapping(address => OwnableDelegateProxy) public proxies;
}
