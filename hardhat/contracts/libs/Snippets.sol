// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
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

import "./Structs.sol";
import "./Errors.sol";
import "./Events.sol";

library Snippets {

    using Structs for *;
    using Errors for *;
    using Events for *;
    using Enums for *;

    function getIPFSPrefix() public pure returns (bytes32) {
        return keccak256("ipfs://");
    }

    /**
     * @dev This seems to be the best way to compare strings in Solidity
     */
    function compareStrings(
        string memory a,
        string memory b
    ) public pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) ==
            keccak256(abi.encodePacked((b))));
    }

    function trim(string calldata str, uint start, uint end) public pure returns(string memory) {
        return str[start:end];
    }

    function subString(string memory str, uint startIndex, uint endIndex) public pure returns (string memory) {
        bytes memory strBytes = bytes(str);
        bytes memory result = new bytes(endIndex-startIndex);
        for(uint i = startIndex; i < endIndex; i++) {
            result[i-startIndex] = strBytes[i];
        }
        return string(result);
    }

    function stringLength(
        string memory str
    ) internal pure returns (uint length) {

        uint i = 0;
        bytes memory string_rep = bytes(str);

        while (i < string_rep.length) {
            if (string_rep[i] >> 7 == 0) i += 1;
            else if (string_rep[i] >> 5 == bytes1(uint8(0x6))) i += 2;
            else if (string_rep[i] >> 4 == bytes1(uint8(0xE))) i += 3;
            else if (string_rep[i] >> 3 == bytes1(uint8(0x1E)))
                i += 4;
                //For safety
            else i += 1;

            length++;
        }
    }

    function stringContains (string memory what, string memory where) public pure returns (bool) {

        bytes memory whatBytes = bytes (what);
        bytes memory whereBytes = bytes (where);

        require(whereBytes.length >= whatBytes.length);

        bool found = false;
        for (uint i = 0; i <= whereBytes.length - whatBytes.length; i++) {
            bool flag = true;
            for (uint j = 0; j < whatBytes.length; j++)
                if (whereBytes [i + j] != whatBytes [j]) {
                    flag = false;
                    break;
                }
            if (flag) {
                found = true;
                break;
            }
        }
        return found;
    }

    /**
     * @dev Search NFTs using a set of key value pair
     * @param _itemKey The NFT key to validate the query against.
     * @param _data The data holds the encoded params to use in the query
     * @param _nftItem The id of the token to perform a query on
     * @return _match An array of NFTItems returned from the search query.
     *
     */
    function searchHasMatch(
        string memory _itemKey,
        bytes memory _data,
        Structs.NFTItem memory _nftItem,
        string memory _tokenURIString
    ) public pure returns (bool) {
        
        bool _match;

        if (_nftItem.tokenId != 0) {

            // If the token id is zero, thats an invalid token, continue ...
            if (_nftItem.tokenId == 0) {
                return _match;
            }

            // If the creator address is a zero address, thats an invalid token, continue ...
            if (_nftItem.creatorAddress[1] == address(0)) {
                return _match;
            }

            // If the owner address is a zero address, thats an invalid token, continue ...
            if (_nftItem.ownerAddress == address(0)) {
                return _match;
            }

            // If the key is minter, get the token minter address
            if (compareStrings(_itemKey, "minter")) {
                address _account = abi.decode(_data, (address));

                if (_nftItem.minterAddress == _account) {
                    _match = true;
                }
            }
            // If the key is creator, get the token creator address
            else if (compareStrings(_itemKey, "creator")) {
                address _account = abi.decode(_data, (address));

                if (_nftItem.creatorAddress[1] == _account) {
                    _match = true;
                }
            }
            // If the key is owner, get the token owner address
            else if (compareStrings(_itemKey, "owner")) {
                address _account = abi.decode(_data, (address));

                if (_nftItem.ownerAddress == _account) {
                    _match = true;
                }
            }
            // If the key is address, search any address property
            else if (compareStrings(_itemKey, "address")) {
                // Decode an address from the abi encded data
                address _account = abi.decode(_data, (address));

                // Check if the address is the same as the minter
                if (_nftItem.minterAddress == _account) {
                    _match = true;
                }

                // Check if the address is the same as the creator
                if (_nftItem.creatorAddress[1] == _account) {
                    _match = true;
                }

                // Check if the address is the same as the owner
                if (_nftItem.ownerAddress == _account) {
                    _match = true;
                }
            }
            // If the key is token_id, search the tokenId property
            else if (compareStrings(_itemKey, "token_id")) {
                uint256 _id = abi.decode(_data, (uint256));

                if (_nftItem.tokenId == _id) {
                    _match = true;
                }
            }
            // If the key is uint256, search the tokenId property
            else if (compareStrings(_itemKey, "uint256")) {
                uint256 _uint256 = abi.decode(_data, (uint256));

                if (_nftItem.tokenId == _uint256) {
                    _match = true;
                }
            }
            // If the key is token_uri, search the tokenURI property
            else if (compareStrings(_itemKey, "token_uri")) {
                string memory _tokenURIStr = abi.decode(_data, (string));

                if (compareStrings(_tokenURIString, _tokenURIStr)) {
                    _match = true;
                }
            }
            // If the key is bytes, search the tokenURI property
            else if (compareStrings(_itemKey, "bytes")) {
                string memory _bytes = abi.decode(_data, (string));

                if (compareStrings(_tokenURIString, _bytes)) {
                    _match = true;
                }
            }
            // If the key is string, search the tokenURI property
            else if (compareStrings(_itemKey, "string")) {
                string memory _string = abi.decode(_data, (string));

                if (compareStrings(_tokenURIString, _string)) {
                    _match = true;
                }
            }
            // If the key is created_at, search using the timestamp
            else if (compareStrings(_itemKey, "created_at")) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (_nftItem.createdAt == _timestamp) {
                    _match = true;
                }
            }
            // If the key is created_before, search using the timestamp
            else if (compareStrings(_itemKey, "created_before")) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (_nftItem.createdAt > _timestamp) {
                    _match = true;
                }
            }
            // If the key is created_after, search using the timestamp
            else if (compareStrings(_itemKey, "created_after")) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (_nftItem.createdAt < _timestamp) {
                    _match = true;
                }
            }
            // If the key is updated_at, search using the timestamp
            else if (compareStrings(_itemKey, "updated_at")) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (_nftItem.updatedAt == _timestamp) {
                    _match = true;
                }
            }
            // If the key is updated_before, search using the timestamp
            else if (compareStrings(_itemKey, "updated_before")) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (_nftItem.updatedAt > _timestamp) {
                    _match = true;
                }
            }
            // If the key is updated_after, search using the timestamp
            else if (compareStrings(_itemKey, "updated_after")) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (_nftItem.updatedAt < _timestamp) {
                    _match = true;
                }
            }
            // If the key is timestamp, search using the timestamp
            else if (compareStrings(_itemKey, "timestamp")) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (_nftItem.createdAt == _timestamp) {
                    _match = true;
                }

                if (_nftItem.updatedAt == _timestamp) {
                    _match = true;
                }
            }
            // The user has specified a custom key
            else {
                // Decode the custom key and the query from the ecoded param
                (string memory _key, string memory _query) = abi.decode(
                    _data,
                    (string, string)
                );

                // search for a pattern in the token URI
                if (stringLength(_key) == 0) { 
                    
                    if (
                        stringContains(_query, _tokenURIString)
                    ) {
                        _match = true;
                    }
                     
                }
            }
        }

        return _match;

    }
/*
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
            * /
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
*/
    function bytes32String(bytes32 _bytes32) public pure returns (string memory) {
        uint8 i = 0;
        while(i < 32 && _bytes32[i] != 0) {
            i++;
        }
        bytes memory bytesArray = new bytes(i);
        for (i = 0; i < 32 && _bytes32[i] != 0; i++) {
            bytesArray[i] = _bytes32[i];
        }
        return string(bytesArray);
    }

}
