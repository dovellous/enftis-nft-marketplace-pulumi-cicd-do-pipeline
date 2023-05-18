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

import "@openzeppelin/contracts/utils/Strings.sol";

import "hardhat/console.sol";

import "./Structs.sol";
import "./Errors.sol";
import "./Enums.sol";

library Snippets {

    using Strings for *;

    using Structs for *;
    using Errors for *;
    using Enums for *;

    using console for *;

    /********************************** Constants *********************************/

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

    /// The amount cannot be zero
    bytes32 public constant INVALID_AMOUNT =
        keccak256("INVALID_AMOUNT");

    /// Minter Role that can start sales and mint nfts
    bytes32 public constant ROYALTIES_DISABLED =
        keccak256("ROYALTIES_DISABLED");

    /// Minter Role that can start sales and mint nfts
    bytes32 public constant NOT_APPROVED_OR_OWNER =
        keccak256("NOT_APPROVED_OR_OWNER");

    /// Owner data key
    bytes32 public constant OWNER = keccak256("OWNER");
    /// Minter data key
    bytes32 public constant MINTER = keccak256("MINTER");
    /// Creator data key
    bytes32 public constant CREATOR = keccak256("CREATOR");
    /// Owner data key
    bytes32 public constant CREATED_AT = keccak256("CREATED_AT");
    /// Owner data key
    bytes32 public constant CREATED_BEFORE = keccak256("CREATED_BEFORE");
    /// Owner data key
    bytes32 public constant CREATED_AFTER = keccak256("CREATED_AFTER");
    /// Owner data key
    bytes32 public constant UPDATED_AT = keccak256("UPDATED_AT");
    /// Owner data key
    bytes32 public constant UPDATED_BEFORE = keccak256("UPDATED_BEFORE");
    /// Owner data key
    bytes32 public constant UPDATED_AFTER = keccak256("UPDATED_AFTER");
    /// Owner data key
    bytes32 public constant TIMESTAMP = keccak256("TIMESTAMP");
    /// Owner data key
    bytes32 public constant UINT256 = keccak256("MINTER");
    /// Owner data key
    bytes32 public constant STRING = keccak256("STRING");
    /// Owner data key
    bytes32 public constant ADDRESS = keccak256("ADDRESS");
    /// Owner data key
    bytes32 public constant TOKEN_URI = keccak256("TOKEN_URI");
    /// Owner data key
    bytes32 public constant TOKEN_ID = keccak256("TOKEN_ID");

    bytes32 public constant IPFS_PREFIX = keccak256("ipfs://");

    bytes32 public constant BASE_EXTENSION = keccak256(".json");

    function getBaseURI(string memory baseURI) public pure returns (string memory) {
        
        // If there is no baseURI URI, default to "ipfs://" or return the token URI.
        if (bytes(baseURI).length == 0) {
            baseURI = bytes32String(IPFS_PREFIX);
        }

        return baseURI;

    }

    function getTokenURIFromURI(
        string memory baseURI, 
        string memory _tokenURI
    ) public pure returns (
        string memory
    ) {
        return string(
                abi.encodePacked(
                    baseURI, 
                    _tokenURI
                )
            );
    }

    function getTokenURIFromID(
        string memory baseURI, 
        uint256 _tokenId
    ) public pure returns (
        string memory
    ) {
        return string(
                abi.encodePacked(
                    baseURI, 
                    Strings.toString(_tokenId), 
                    bytes32String(BASE_EXTENSION)
                )
            );
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

    function stringLength(
        string memory str
    ) internal pure returns (uint length) {

        uint i = 0;
        bytes memory string_rep = bytes(str);

        while (i < string_rep.length) {
            if (string_rep[i] >> 7 == 0) ++i;
            else if (string_rep[i] >> 5 == bytes1(uint8(0x6))) i += 2;
            else if (string_rep[i] >> 4 == bytes1(uint8(0xE))) i += 3;
            else if (string_rep[i] >> 3 == bytes1(uint8(0x1E)))
                i += 4;
                //For safety
            else ++i;

            ++length;
        }
    }

    function stringContains (string memory what, string memory where) public pure returns (bool) {

        bytes memory whatBytes = bytes (what);
        bytes memory whereBytes = bytes (where);

        require(whereBytes.length >= whatBytes.length);

        bool found = false;
        for (uint i = 0; i <= whereBytes.length - whatBytes.length; ++i) {
            bool flag = true;
            for (uint j = 0; j < whatBytes.length; ++j)
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

    struct slice {
        uint _len;
        uint _ptr;
    }

    /*
     * @dev Returns a slice containing the entire string.
     * @param self The string to make a slice from.
     * @return A newly allocated slice containing the entire string.
     */
    function toSlice(string memory self) internal pure returns (slice memory) {
        uint ptr;
        assembly {
            ptr := add(self, 0x20)
        }
        return slice(bytes(self).length, ptr);
    }

    // Returns the memory address of the first byte after the last occurrence of
    // `needle` in `self`, or the address of `self` if not found.
    function rfindPtr(uint selflen, uint selfptr, uint needlelen, uint needleptr) private pure returns (uint) {
        uint ptr;

        if (needlelen <= selflen) {
            if (needlelen <= 32) {
                bytes32 mask;
                if (needlelen > 0) {
                    mask = bytes32(~(2 ** (8 * (32 - needlelen)) - 1));
                }

                bytes32 needledata;
                assembly { needledata := and(mload(needleptr), mask) }

                ptr = selfptr + selflen - needlelen;
                bytes32 ptrdata;
                assembly { ptrdata := and(mload(ptr), mask) }

                while (ptrdata != needledata) {
                    if (ptr <= selfptr)
                        return selfptr;
                    ptr--;
                    assembly { ptrdata := and(mload(ptr), mask) }
                }
                return ptr + needlelen;
            } else {
                // For long needles, use hashing
                bytes32 hash;
                assembly { hash := keccak256(needleptr, needlelen) }
                ptr = selfptr + (selflen - needlelen);
                while (ptr >= selfptr) {
                    bytes32 testHash;
                    assembly { testHash := keccak256(ptr, needlelen) }
                    if (hash == testHash)
                        return ptr + needlelen;
                    ptr -= 1;
                }
            }
        }
        return selfptr;
    }

    /*
     * @dev Returns True if `self` contains `needle`.
     * @param self The slice to search.
     * @param needle The text to search for in `self`.
     * @return True if `needle` is found in `self`, false otherwise.
     */
    function searchString(string memory _self, string memory _needle) public pure returns (bool) {

        slice memory self = toSlice(_self);

        slice memory needle = toSlice(_needle);

        return rfindPtr(self._len, self._ptr, needle._len, needle._ptr) != self._ptr;
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
        bytes32 _itemKey,
        bytes memory _data,
        Structs.NFTItem memory _nftItem,
        string memory _tokenURIString
    ) public view returns (bool) {
        
        bool _match;

        console.log("\n\nSEARCHING...");

        if (_nftItem.tokenId != 0) {

            // If the token id is zero, thats an invalid token, continue ...
            if (_nftItem.tokenId == 0) {
                return _match;
            }

            // If the creator address is a zero address, thats an invalid token, continue ...
            if (_nftItem.creatorAddress[0] == address(0)) {
                return _match;
            }

            // If the owner address is a zero address, thats an invalid token, continue ...
            if (_nftItem.ownerAddress == address(0)) {
                return _match;
            }

            // If the key is minter, get the token minter address
            if (_itemKey == Snippets.MINTER) {
                address _account = abi.decode(_data, (address));

                if (_nftItem.minterAddress == _account) {
                    _match = true;
                }
            }
            // If the key is creator, get the token creator address
            else if (_itemKey == Snippets.CREATOR) {
                address _account = abi.decode(_data, (address));

                if (_nftItem.creatorAddress[0] == _account) {
                    _match = true;
                }
                
                if (_nftItem.creatorAddress[1] == _account) {
                    _match = true;
                }
                
            }
            // If the key is owner, get the token owner address
            else if (_itemKey == Snippets.OWNER) {
                address _account = abi.decode(_data, (address));

                if (_nftItem.ownerAddress == _account) {
                    _match = true;
                }
            }
            // If the key is address, search any address property
            else if (_itemKey == Snippets.ADDRESS) {
                // Decode an address from the abi encded data
                address _account = abi.decode(_data, (address));

                // Check if the address is the same as the minter
                if (_nftItem.minterAddress == _account) {
                    _match = true;
                }

                // Check if the address is the same as the creator
                if (_nftItem.creatorAddress[0] == _account) {
                    _match = true;
                }

                // Check if the address is the same as the owner
                if (_nftItem.ownerAddress == _account) {
                    _match = true;
                }
            }
            // If the key is token_id, search the tokenId property
            else if (_itemKey == Snippets.TOKEN_ID) {
                uint256 _id = abi.decode(_data, (uint256));

                if (_nftItem.tokenId == _id) {
                    _match = true;
                }
            }
            // If the key is uint256, search the tokenId property
            else if (_itemKey == Snippets.UINT256) {
                uint256 _uint256 = abi.decode(_data, (uint256));

                if (_nftItem.tokenId == _uint256) {
                    _match = true;
                }
            }
            // If the key is token_uri, search the tokenURI property
            else if (_itemKey == Snippets.TOKEN_URI) {
                string memory _tokenURIStr = abi.decode(_data, (string));

                if (compareStrings(_tokenURIString, _tokenURIStr)) {
                    _match = true;
                }
            }
            // If the key is bytes, search the tokenURI property
            else if (_itemKey == Snippets.OWNER) {
                string memory _bytes = abi.decode(_data, (string));

                if (compareStrings(_tokenURIString, _bytes)) {
                    _match = true;
                }
            }
            // If the key is string, search the tokenURI property
            else if (_itemKey == Snippets.STRING) {
                string memory _string = abi.decode(_data, (string));

                if( searchString(_tokenURIString, _string) ){
                    _match = true;
                }
            }
            // If the key is created_before, search using the timestamp
            else if (_itemKey == Snippets.CREATED_BEFORE) {
                uint256 _timestamp = abi.decode(_data, (uint256));
                
                if (_nftItem.createdAt < _timestamp) {
                    _match = true;
                }
            }
            // If the key is created_at, search using the timestamp
            else if (_itemKey == Snippets.CREATED_AT) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (_nftItem.createdAt == _timestamp) {
                    _match = true;
                }
            }
            // If the key is created_after, search using the timestamp
            else if (_itemKey == Snippets.CREATED_AFTER) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (_nftItem.createdAt > _timestamp) {
                    _match = true;
                }
            }
            // If the key is updated_before, search using the timestamp
            else if (_itemKey == Snippets.UPDATED_BEFORE) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (_nftItem.updatedAt < _timestamp) {
                    _match = true;
                }
            }
            // If the key is updated_at, search using the timestamp
            else if (_itemKey == Snippets.UPDATED_AT) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (_nftItem.updatedAt == _timestamp) {
                    _match = true;
                }
            }
            // If the key is updated_after, search using the timestamp
            else if (_itemKey == Snippets.UPDATED_AFTER) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (_nftItem.updatedAt > _timestamp) {
                    _match = true;
                }
            }
            // If the key is timestamp, search using the timestamp
            else if (_itemKey == Snippets.TIMESTAMP) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (_nftItem.createdAt == _timestamp) {
                    _match = true;
                }

                if (_nftItem.updatedAt == _timestamp) {
                    _match = true;
                }
            }
            // Can't do anything beyond this point
            else {
                // Do nothing
            }
        }

        return _match;

    }

    function bytes32String(bytes32 _bytes32) public pure returns (string memory) {
        uint8 i = 0;
        while(i < 32 && _bytes32[i] != 0) {
            ++i;
        }
        bytes memory bytesArray = new bytes(i);
        for (i = 0; i < 32 && _bytes32[i] != 0; ++i) {
            bytesArray[i] = _bytes32[i];
        }
        return string(bytesArray);
    }

    function stringBytes32(string memory source) public pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            result := mload(add(source, 32))
        }
    }

}
