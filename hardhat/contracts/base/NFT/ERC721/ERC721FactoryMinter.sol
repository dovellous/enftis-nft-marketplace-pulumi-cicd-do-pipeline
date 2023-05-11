// SPDX-License-Identifier: MIT
/**
 * Created on 2023-05-05 14:36
 * @summary:
 * @author: dovellous
 */
pragma solidity ^0.8.19;
pragma experimental ABIEncoderV2;

import "./ERC721FactoryWorker.sol";

abstract contract ERC721FactoryMinter is ERC721FactoryWorker {
    
    using Counters for Counters.Counter;

    using Snippets for *;
    /// royalty states

    bool public royaltiesEnabled;

    address payable public royaltyReceiver;

    uint96 public royaltyFraction;

    /// Minting fee
    uint256 public mintingFee;

    /*********************************** Mappings ***********************************/

    mapping(uint256 => Structs.RoyaltyItem) internal tokenIdToRoyaltyItem;

    mapping(string => bool) internal usedTokenURIs;

    /**
     * @dev Retrieves the royalty info of a token including the fee base on price supplied.
     *
     */
    function tokenURIExists(
        string calldata _tokenURI
    ) public view returns (bool) {
        return usedTokenURIs[_tokenURI] == true;
    }

    /**
     * @dev Mints a new token.
     *
     * @param _to address to mint to.
     * @param _tokenURI uri of the token to be minted.
     * @return tokenId id of the minted token.
     *
     * Requirements:
     *
     * - The caller must be an admin or owner.
     */
    function mintNewToken(
        address _to,
        string calldata _tokenURI,
        uint96 _royaltyFraction
    ) public payable onlyMinter returns (uint256) {
        // Set the tokenId
        _tokenIdCounter.increment(); // start tokenId at 1

        uint256 newTokenId = _tokenIdCounter.current();

        if (newTokenId > tokenMaximumSupply) {
            revert Errors.ExceededMaxValue({
                maxValue: tokenMaximumSupply,
                value: newTokenId,
                message: MAX_SUPPLY_REACHED
            });
        }

        // Ensure that the amount supplied is equal to the minting fee specified.
        if (msg.value < mintingFee) {
            revert Errors.PriceBelowMintingFee({
                mintingFee: mintingFee,
                value: msg.value,
                message: AMOUNT_BELOW_MINTING_FEE
            });
        }

        // Ensure that the token URI provided already exists. NFTs are non-fungible.
        if (tokenURIExists(_tokenURI)) {
            revert Errors.TokenURIAlreadyExists({
                tokenURI: _tokenURI,
                tokenURIExists: usedTokenURIs[_tokenURI],
                message: TOKEN_URI_EXISTS
            });
        }

        unchecked {

            /*

            struct NFTItem {
                address minterAddress;
                address creatorAddress;
                address ownerAddress;
                uint256 tokenId;
                uint createdAt;
                uint updatedAt;
            }

            */

            tokenIdToNFTItem[newTokenId] = Structs.NFTItem(
                _msgSender(),
                [_msgSender(), _to],
                _to,
                newTokenId,
                block.timestamp,
                block.timestamp
            );

            tokenURIs[newTokenId] = _tokenURI;

            usedTokenURIs[_tokenURI] = true;

            _safeMint(_to, newTokenId);

            _setTokenURI(newTokenId, _tokenURI);

            // Give the marketplace approval to transact NFTs between users
            if(marketplaceAddress != address(0)){
                setApprovalForAll(marketplaceAddress, true);
            } 

            _tokenCurrentSupply.increment();

            if (royaltiesEnabled) {
                if (_royaltyFraction > 0) {
                    tokenIdToRoyaltyItem[newTokenId] = Structs.RoyaltyItem(
                        true,
                        _msgSender(),
                        royaltyFraction,
                        type(uint256).min,
                        newTokenId
                    );

                    _setTokenRoyalty(
                        newTokenId,
                        _msgSender(),
                        _royaltyFraction
                    );
                } else {
                    tokenIdToRoyaltyItem[newTokenId] = Structs.RoyaltyItem(
                        true,
                        _msgSender(),
                        royaltyFraction,
                        type(uint256).min,
                        newTokenId
                    );

                    _setTokenRoyalty(
                        newTokenId,
                        royaltyReceiver,
                        royaltyFraction
                    );
                }
            }
        }

        return newTokenId;

    }

}
