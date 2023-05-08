// SPDX-License-Identifier: MIT
/**
 * Created on 2023-05-05 14:36
 * @summary:
 * @author: dovellous
 */
pragma solidity ^0.8.18;
pragma experimental ABIEncoderV2;

import "../../../libs/Snippets.sol";
import "./ERC721FactoryBase.sol";

abstract contract ERC721FactoryWorker is ERC721FactoryBase {

    
    using Counters for Counters.Counter;

    /**
     * @dev Retrieves a list of all available tokens.
     * @return NFTItem[] memory nftItems : an array of NFT items.
     *
     */
    function _tokens() internal view returns (NFTItem[] memory) {

        // Lets use current id `_tokenIdCounter.current` 
        // as opposed to the maximum supply `tokenMaximumSupply`
        // When tokens are burnt the maximum supply will decrease
        // Hence using maximum supply as the maximum length of 
        // array checked will lead to underflow, and we will 
        // not be dealing with the actual tokenId on the indices.
        // So we are better off with current token id which is ever incrementally changing.

        NFTItem[] memory nftItems;

        // Unchecked : @see https://github.com/dovellous/com-enftis/blob/master/gas-saving-tips/unchecked-code-block.md
        unchecked {

            uint256 numberOfMintedTokens = _tokenIdCounter.current();

            // Specify the array size to save gas
            // Fixed Arrays : @see https://github.com/dovellous/com-enftis/blob/master/gas-saving-tips/fixed-arrays.md
            uint256 numberOfAvailableTokens;

            for (uint256 i; i < numberOfMintedTokens; ++i) {
                // Check if the token exists by checking its id
                // Remember some tokens might have been burnt
                if (_exists((i + 1))) {
                    // If the token with this id exists, increment
                    // Thge number of expected tokens for array's use
                    ++numberOfAvailableTokens;
                }
            }

            // Create a fixed array set with the actual number of tokens computed above
            nftItems = new NFTItem[](numberOfAvailableTokens);

            //Cleanup : @see https://github.com/dovellous/com-enftis/blob/master/gas-saving-tips/cleanup-variables.md
            delete numberOfAvailableTokens;

            // Set the current index to zero, increament only if the token is valid
            // Use that index to push the token with the current id to the array
            uint256 currentIndex;

            for (uint256 i; i < numberOfMintedTokens; ++i) {
                // Oncemore, check if the token with the current id exists
                if (_exists((i + 1))) {
                    //If it exists, push the current token to the array
                    nftItems[currentIndex] = tokenIdToNFTItem[(i + 1)];

                    // Increment the current index for the next valid token
                    // In principle, the max currentIndex mube be equal to (numberOfMintedTokens-1)
                    ++currentIndex;
                }
            }

            //Cleanup : @see https://github.com/dovellous/com-enftis/blob/master/gas-saving-tips/cleanup-variables.md
            delete currentIndex;
            delete numberOfMintedTokens;
        }

        // Return tokens array
        return nftItems;
    }

    /**
     * @dev Retrieves and array of tokens minted by an address.
     * @param _account account address that minted the token.
     * @return NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function _tokensMintedBy(
        address _account
    ) internal view returns (NFTItem[] memory) {
        NFTItem[] memory _tokensMintedByAddress = _userNFTS(_account, 0);

        return _tokensMintedByAddress;
    }

    /**
     * @dev Retrieves and array of tokens created by an address.
     * @param _account account address that created the token.
     * @return NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function _tokensCreatedBy(
        address _account
    ) internal view returns (NFTItem[] memory) {
        NFTItem[] memory _tokensCreatedByAddress = _userNFTS(_account, 1);

        return _tokensCreatedByAddress;
    }

    /**
     * @dev Retrieves and array of tokens owned by an address.
     * @param _account account address that owns the token.
     * @return NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function _tokensOwnedBy(
        address _account
    ) internal view returns (NFTItem[] memory) {
        NFTItem[] memory _tokensOwnedByAddress = _userNFTS(_account, 2);

        return _tokensOwnedByAddress;
    }

    /**
     * @dev Retrieves the royalty info of a token including the fee base on price supplied.
     * @param _account The account to look for on the soecified address property.
     * @param _addressPropertyIndex The index of the address type.
     * @return NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function _userNFTS(
        address _account,
        uint8 _addressPropertyIndex
    ) internal view returns (NFTItem[] memory) {
        // Declare the variable that will hold the token array
        NFTItem[] memory nftItems;

        // Encode the _account parameter and pass it to the search function
        bytes memory _accountEncoded = abi.encode(_account);

        // Index 0 - Represents the Minter Account
        if (_addressPropertyIndex == 0) {
            // Fetch token items minted by address
            nftItems = _search("minter", _accountEncoded);
        }

        // Index 1 - Represents the Creator Account
        if (_addressPropertyIndex == 1) {
            // Fetch token items created by address
            nftItems = _search("creator", _accountEncoded);
        }

        // Index 2 - Represents the Owner Account
        if (_addressPropertyIndex == 2) {
            // Fetch token items owned by address
            nftItems = _search("owner", _accountEncoded);
        }

        // Return tokens array
        return nftItems;
    }

    /**
     * @dev Search NFTs using a set of key value pair
     * @param _itemKey The NFT key to validate the query against.
     * @param _data The data holds the encoded params to use in the query
     * @return NFTItem[] An array of NFTItems returned from the search query.
     *
     */
    function _search(
        string memory _itemKey,
        bytes memory _data
    ) internal view returns (NFTItem[] memory) {
        // Get the current token id for minted tokens
        // Its safer to use this id as opposed to the maximum supply
        // Because some tokens might have been burned
        // We would rather iterate over, up to the maximum minted tokens
        // Then ignore those that would have been burned by cheking _exists()
        uint256 numberOfMintedTokens = _tokenIdCounter.current();

        // Declare the number of tokens to return in an array
        // We are going to use a fixed array, so we will compute the
        // Number of tokens that we would want to return.
        uint256 numberOfResultsTokens;

        // Declare the variable to hold the results NFT tokens.
        NFTItem[] memory nftItems;

        // Unchecked : @see https://github.com/dovellous/com-enftis/blob/master/gas-saving-tips/unchecked-code-block.md
        unchecked {
            // For each index+1 check if the token exists, ignore those that are invalid !exist().
            for (uint256 i; i < numberOfMintedTokens; ++i) {
                // Check if there is a match in the search query provided against the token.
                (NFTItem memory __, bool _match) = _searchProperty(
                    _itemKey,
                    _data,
                    (i + 1)
                );
                // If there is a match increment the 
                // number of result tokens - numberOfResultsTokens.
                if (_match) {
                    ++numberOfResultsTokens;
                }
            }

            // Since we now know the exact number of tokens to return, declare the array variable.
            nftItems = new NFTItem[](numberOfResultsTokens);

            // Let's make sure that the number of tokens expected is greater than zero.
            if (numberOfResultsTokens > 0) {
                // Declare the current index to assist when pushing an nftItem to the results array.
                uint256 currentIndex;

                // Iterate the number of minted tokens
                // This time we want to check if there is match when a
                // Search is performed against a token attribute.
                for (uint256 i; i < numberOfMintedTokens; ++i) {
                    // Get the nft token item and the check if there is a match
                    (NFTItem memory _nftItem, bool _match) = _searchProperty(
                        _itemKey,
                        _data,
                        (i + 1)
                    );
                    // If we found a match, then add the item to the array,
                    // Only increment the currentIndex when there is a match.
                    if (_match) {
                        // Push the NFT token to query
                        nftItems[currentIndex] = _nftItem;
                        ++currentIndex;
                    }

                    // Save gas, delete an redundant variables
                    delete _nftItem;
                    delete _match;
                }

                // Free up some memory
                delete currentIndex;
            }
        }

        // Free up some memory
        delete numberOfMintedTokens;
        delete numberOfResultsTokens;

        // Return an array of NFT items.
        return nftItems;
    }

    /**
     * @dev Search NFTs using a set of key value pair
     * @param _itemKey The NFT key to validate the query against.
     * @param _data The data holds the encoded params to use in the query
     * @param _tokenId The id of the token to perform a query on
     * @return nftItem  nftItem
     * @return _match An array of NFTItems returned from the search query.
     *
     */
    function _searchProperty(
        string memory _itemKey,
        bytes memory _data,
        uint256 _tokenId
    ) internal view returns (NFTItem memory, bool) {
        
        bool _match;

        // Declare the variable to hold the NFT.
        NFTItem memory nftItem;

        if (_tokenId != 0) {
            // Set the NFT token to perform a query
            nftItem = tokenIdToNFTItem[_tokenId];

            // If the token id is zero, thats an invalid token, continue ...
            if (nftItem.tokenId == 0) {
                return (nftItem, _match);
            }

            // If the creator address is a zero address, thats an invalid token, continue ...
            if (nftItem.creatorAddress == address(0)) {
                return (nftItem, _match);
            }

            // If the owner address is a zero address, thats an invalid token, continue ...
            if (nftItem.ownerAddress == address(0)) {
                return (nftItem, _match);
            }

            // If the key is minter, get the token minter address
            if (Snippets.compareStrings(_itemKey, "minter")) {
                address _account = abi.decode(_data, (address));

                if (nftItem.minterAddress == _account) {
                    _match = true;
                }
            }
            // If the key is creator, get the token creator address
            else if (Snippets.compareStrings(_itemKey, "creator")) {
                address _account = abi.decode(_data, (address));

                if (nftItem.creatorAddress == _account) {
                    _match = true;
                }
            }
            // If the key is owner, get the token owner address
            else if (Snippets.compareStrings(_itemKey, "owner")) {
                address _account = abi.decode(_data, (address));

                if (nftItem.ownerAddress == _account) {
                    _match = true;
                }
            }
            // If the key is address, search any address property
            else if (Snippets.compareStrings(_itemKey, "address")) {
                // Decode an address from the abi encded data
                address _account = abi.decode(_data, (address));

                // Check if the address is the same as the minter
                if (nftItem.minterAddress == _account) {
                    _match = true;
                }

                // Check if the address is the same as the creator
                if (nftItem.creatorAddress == _account) {
                    _match = true;
                }

                // Check if the address is the same as the owner
                if (nftItem.ownerAddress == _account) {
                    _match = true;
                }
            }
            // If the key is token_id, search the tokenId property
            else if (Snippets.compareStrings(_itemKey, "token_id")) {
                uint256 _id = abi.decode(_data, (uint256));

                if (nftItem.tokenId == _id) {
                    _match = true;
                }
            }
            // If the key is uint256, search the tokenId property
            else if (Snippets.compareStrings(_itemKey, "uint256")) {
                uint256 _uint256 = abi.decode(_data, (uint256));

                if (nftItem.tokenId == _uint256) {
                    _match = true;
                }
            }
            // If the key is token_uri, search the tokenURI property
            else if (Snippets.compareStrings(_itemKey, "token_uri")) {
                string memory _tokenURIStr = abi.decode(_data, (string));

                if (Snippets.compareStrings(nftItem.tokenURI, _tokenURIStr)) {
                    _match = true;
                }
            }
            // If the key is bytes, search the tokenURI property
            else if (Snippets.compareStrings(_itemKey, "bytes")) {
                string memory _bytes = abi.decode(_data, (string));

                if (Snippets.compareStrings(nftItem.tokenURI, _bytes)) {
                    _match = true;
                }
            }
            // If the key is string, search the tokenURI property
            else if (Snippets.compareStrings(_itemKey, "string")) {
                string memory _string = abi.decode(_data, (string));

                if (Snippets.compareStrings(nftItem.tokenURI, _string)) {
                    _match = true;
                }
            }
            // If the key is created_at, search using the timestamp
            else if (Snippets.compareStrings(_itemKey, "created_at")) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (nftItem.createdAt == _timestamp) {
                    _match = true;
                }
            }
            // If the key is created_before, search using the timestamp
            else if (Snippets.compareStrings(_itemKey, "created_before")) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (nftItem.createdAt > _timestamp) {
                    _match = true;
                }
            }
            // If the key is created_after, search using the timestamp
            else if (Snippets.compareStrings(_itemKey, "created_after")) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (nftItem.createdAt < _timestamp) {
                    _match = true;
                }
            }
            // If the key is updated_at, search using the timestamp
            else if (Snippets.compareStrings(_itemKey, "updated_at")) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (nftItem.updatedAt == _timestamp) {
                    _match = true;
                }
            }
            // If the key is updated_before, search using the timestamp
            else if (Snippets.compareStrings(_itemKey, "updated_before")) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (nftItem.updatedAt > _timestamp) {
                    _match = true;
                }
            }
            // If the key is updated_after, search using the timestamp
            else if (Snippets.compareStrings(_itemKey, "updated_after")) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (nftItem.updatedAt < _timestamp) {
                    _match = true;
                }
            }
            // If the key is timestamp, search using the timestamp
            else if (Snippets.compareStrings(_itemKey, "timestamp")) {
                uint256 _timestamp = abi.decode(_data, (uint256));

                if (nftItem.createdAt == _timestamp) {
                    _match = true;
                }

                if (nftItem.updatedAt == _timestamp) {
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

                //TODO: try nftItem[_key] = string ? true:false
                // Try string(_key).length != 0

                // search for a pattern in the token URS
                if (true) { 
                    //Also if tokenURI in nftItem
                    //TODO
                    /*
                    StringsLib.slice memory s = nftItem.tokenURI.toSlice();

                    if (
                        s.startsWith(string(_query).toSlice()) ||
                        s.until(string(_query).toSlice()) ||
                        s.beyond(string(_query).toSlice()) ||
                        s.endsWith(string(_query).toSlice())
                    ) {
                        _match = true;
                    }
                    */
                }
            }
        }

        return (nftItem, _match);

    }

}
