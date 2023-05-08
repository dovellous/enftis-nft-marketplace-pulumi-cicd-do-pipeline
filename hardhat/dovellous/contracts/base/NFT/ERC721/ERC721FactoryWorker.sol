// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
pragma experimental ABIEncoderV2;

import "./ERC721FactoryBase.sol";

abstract contract ERC721FactoryWorker is ERC721FactoryBase {
    using Counters for Counters.Counter;

    /// Counters
    Counters.Counter public _tokenIdCounter;

    /**
     * @dev Retrieves the royalty info of a token including the fee base on price supplied.
     *
     */
    function getTokenCurrentId() external view returns (uint256) {
        return _tokenIdCounter.current();
    }

    /**
     * @dev Retrieves the royalty info of a token.
     * @return numberOfTokensOwned the price of the token.
     *
     */
    function _tokens() internal view returns (NFTItem[] memory) {
        // Lets use current id `_tokenIdCounter.current` as opposed to the maximum supply `tokenMaximumSupply`
        // When tokens are burnt the maximum supply will decrease
        // Hence using maximum supply as the maximum length of array checked
        // will lead to underflow, and we will not be dealing with the actual tokenId on the indices.
        // So we are better off with current token id which is ever incrementally changing

        NFTItem[] memory nftItems;

        // Unchecked : @see https://github.com/dovellous/com-enftis/blob/master/gas-saving-tips/unchecked-code-block.md
        unchecked {

            uint256 numberOfMintedTokens = _tokenIdCounter.current();

            // Specify the array size to save gas
            // Fixed Arrays : @see https://github.com/dovellous/com-enftis/blob/master/gas-saving-tips/fixed-arrays.md
            uint256 numberOfAvailableTokens;

            for (uint256 i = 0; i < numberOfMintedTokens; ++i) {

                uint256 currentTokenId = i + 1;

                if (_exists(currentTokenId)) {
                    ++numberOfAvailableTokens;
                }

            }

            nftItems = new NFTItem[](numberOfAvailableTokens);

            for (uint256 i = 0; i < numberOfAvailableTokens; ++i) {
                
                uint256 currentTokenId = i + 1;

                if (_exists(currentTokenId)) {
                    nftItems[i] = tokenIdToNFTItem[currentTokenId];
                }

            }

            //Cleanup : @see https://github.com/dovellous/com-enftis/blob/master/gas-saving-tips/cleanup-variables.md
            delete numberOfAvailableTokens;

            delete numberOfMintedTokens;

        }

        return nftItems;

    }

    /**
     * @dev Retrieves the royalty info of a token.
     * @param _account the id of the token.
     * @return numberOfTokensOwned the price of the token.
     *
     */
    function _tokensCreatedBy(
        address _account
    ) internal view returns (NFTItem[] memory) {
        // Lets use current id `_tokenIdCounter.current` as opposed to the maximum supply `tokenMaximumSupply`
        // When tokens are burnt the maximum supply will decrease
        // Hence using maximum supply as the maximum length of array checked
        // will lead to underflow, and we will not be dealing with the actual tokenId on the indices.
        // So we are better off with current token id which is ever incrementally changing

        NFTItem[] memory tokensCreatedByAddress;

        // Unchecked : @see https://github.com/dovellous/com-enftis/blob/master/gas-saving-tips/unchecked-code-block.md
        unchecked {

            uint256 numberOfMintedTokens = _tokenIdCounter.current();

            // Specify the array size to save gas
            // Fixed Arrays : @see https://github.com/dovellous/com-enftis/blob/master/gas-saving-tips/fixed-arrays.md
            uint256 numberOfTokensCreated;

            for (uint256 i = 0; i < numberOfMintedTokens; ++i) {
                // Is it ok to assign this variable for better code legbility?
                // Is it better to use memory or storage in this case?

                if (tokenIdToNFTItem[i + 1].creatorAddress == _account) {
                    ++numberOfTokensCreated;
                }

            }

            tokensCreatedByAddress = _userNFTS(
                numberOfTokensCreated,
                numberOfMintedTokens,
                _account,
                true
            );

            //Cleanup : @see https://github.com/dovellous/com-enftis/blob/master/gas-saving-tips/cleanup-variables.md
            delete numberOfTokensCreated;

            delete numberOfMintedTokens;

        }

        return tokensCreatedByAddress;

    }

    /**
     * @dev Retrieves the royalty info of a token including the fee base on price supplied.
     *
     */
    function _userNFTS(
        uint256 numberOfUserTokens,
        uint256 numberOfMintedTokens,
        address _account,
        bool ownedTokens
    ) internal view returns (NFTItem[] memory) {
        NFTItem[] memory nftItems = new NFTItem[](numberOfUserTokens);

        unchecked {

            if (numberOfUserTokens != 0) {
                // Value initialized at zero, hence the arithmetic operation will never underflow.
                uint256 currentIndex;

                // The arithmetic operation will never overflow
                // Because we are limiting the number to `numberOfMintedTokens`

                for (uint256 i; i < numberOfMintedTokens; ++i) {

                    uint256 tokenId = i + 1;

                    NFTItem memory nftItem = tokenIdToNFTItem[tokenId];

                    if (ownedTokens) {
                        if (ownerOf(tokenId) != _account) {
                            continue;
                        }
                    } else {
                        if (nftItem.creatorAddress != _account) {
                            continue;
                        }
                    }

                    nftItems[currentIndex] = nftItem;
                    // Prefix with operator saves gas
                    // Integer Increament : @see https://github.com/dovellous/com-enftis/blob/master/gas-saving-tips/interger-increament.md
                    ++currentIndex;
                }

                //Cleanup : @see https://github.com/dovellous/com-enftis/blob/master/gas-saving-tips/cleanup-variables.md
                delete currentIndex;
            
            }

        }

        return nftItems;

    }

    /**
     * @dev Retrieves the royalty info of a token.
     * @param _account the id of the token.
     * @return numberOfTokensOwned the price of the token.
     *
     */
    function _tokensOwnedBy(
        address _account
    ) internal view returns (NFTItem[] memory) {
        // Lets use current id `_tokenIdCounter.current` as opposed to the maximum supply `tokenMaximumSupply`
        // When tokens are burnt the maximum supply will decrease
        // Hence using maximum supply as the maximum length of array checked
        // will lead to underflow, and we will not be dealing with the actual tokenId on the indices.
        // So we are better off with current token id which is ever incrementally changing
        uint256 numberOfMintedTokens = _tokenIdCounter.current();

        NFTItem[] memory _tokensOwnedByAddress;

        unchecked {
            // Specify the array size to save gas
            // Fixed Arrays : @see https://github.com/dovellous/com-enftis/blob/master/gas-saving-tips/fixed-arrays.md
            uint256 numberOfTokensOwned = balanceOf(_account);

            // Unchecked : @see https://github.com/dovellous/com-enftis/blob/master/gas-saving-tips/unchecked-code-block.md
            if (numberOfTokensOwned != 0) {
                _tokensOwnedByAddress = _userNFTS(
                    numberOfTokensOwned,
                    numberOfMintedTokens,
                    _account,
                    true
                );
            }

            //Cleanup : @see https://github.com/dovellous/com-enftis/blob/master/gas-saving-tips/cleanup-variables.md
            delete numberOfMintedTokens;
            delete numberOfTokensOwned;

        }

        return _tokensOwnedByAddress;

    }

}
