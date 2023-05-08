// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
pragma experimental ABIEncoderV2;

/*

============
Snippets.sol
============

name        :   Enftis NFT Factory Token
symbol      :   ENFTIS
tokenTypes  :   ERC721, ERC165, ERC2968
maxSupply   :   uint256.max()
solhcVersion:   0.8.20
version     :   1.0.0
released    :   25 March 2023
developers  :   @enftix
license     :   MIT License
networks    :   ethereum, polygon, binance

*/

import "./StringsLib.sol";

library Snippets {

    function getIPFSPrefix() public pure returns (bytes32) {
        return keccak256("ipfs://");
    }

    // take bytes32 and return a string
    function bytes32String(bytes32 _data) public pure returns (string memory) {
        // create new bytes with a length of 32
        // needs to be bytes type rather than bytes32 in order to be writeable
        bytes memory _bytesContainer = new bytes(32);
        // uint to keep track of actual character length of string
        // bytes32 is always 32 characters long the string may be shorter
        uint256 _charCount;
        // loop through every element in bytes32
        for (uint256 _bytesCounter; _bytesCounter < 32; ++_bytesCounter) {
            /*
            TLDR: takes a single character from bytes based on counter
            convert bytes32 data to uint in order to increase the number enough to
            shift bytes further left while pushing out leftmost bytes
            then convert uint256 data back to bytes32
            then convert to bytes1 where everything but the leftmost hex value (byte)
            is cutoff leaving only the leftmost byte
            */
            bytes1 _char = bytes1(
                bytes32(uint256(_data) * 2 ** (8 * _bytesCounter))
            );
            // if the character is not empty
            if (_char != 0) {
                // add to bytes representing string
                _bytesContainer[_charCount] = _char;
                // increment count so we know length later
                _charCount++;
            }
        }

        // create dynamically sized bytes array to use for trimming
        bytes memory _bytesContainerTrimmed = new bytes(_charCount);

        // loop through for character length of string
        for (uint256 _charCounter; _charCounter < _charCount; ++_charCounter) {
            // add each character to trimmed bytes container, leaving out extra
            _bytesContainerTrimmed[_charCounter] = _bytesContainer[
                _charCounter
            ];
        }

        // return correct length string with no padding
        return string(_bytesContainerTrimmed);
    }

    /**
     * @dev This seems to be the best way to compare strings in Solidity
     */
    function compareStrings(string memory a, string memory b) public pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

}
