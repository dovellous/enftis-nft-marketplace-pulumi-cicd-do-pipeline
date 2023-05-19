// SPDX-License-Identifier: MIT
/**
 * Created on 2023-05-05 14:36
 * @summary:
 * @author: dovellous
 */
pragma solidity ^0.8.19;
pragma experimental ABIEncoderV2;

import "./ERC1155FactoryWorker.sol";

abstract contract ERC1155FactoryMinter is ERC1155FactoryWorker {
    
    using Counters for Counters.Counter;

    using Snippets for *;
    /// royalty states

    address payable public royaltyReceiver;

    uint96 public royaltyFraction;

    uint256 public royaltiesDisabledUntil;

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
            revert Errors.MaximumTokenSupplyReached({
                maxValue: tokenMaximumSupply,
                value: newTokenId,
                message: Snippets.MAX_SUPPLY_REACHED
            });
        }

        // Ensure that the amount supplied is equal to the minting fee specified.
        if (msg.value < mintingFee) {
            revert Errors.PriceBelowMintingFee({
                mintingFee: mintingFee,
                value: msg.value,
                message: Snippets.AMOUNT_BELOW_MINTING_FEE
            });
        }

        // Ensure that the token URI provided already exists. NFTs are non-fungible.
        if (tokenURIExists(_tokenURI)) {
            revert Errors.TokenURIAlreadyExists({
                tokenURI: _tokenURI,
                tokenURIExists: usedTokenURIs[_tokenURI],
                message: Snippets.TOKEN_URI_EXISTS
            });
        }

        unchecked {

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

            if (royaltiesDisabledUntil < block.timestamp) {
                if (_royaltyFraction > 0) {
                    setRoyalties(
                        _msgSender(),
                        _royaltyFraction,
                        newTokenId
                    );
                }
            }
        }

        return newTokenId;

    }

    
    /**
     * @dev Mints a new token for the first time to set maxSupply and tokenURI.
     *
     * @param to address of account to mint to.
     * @param tokenId is the tokenId to mint.
     * @param amount amount to be minted.
     * @param maxSupply sets the max token supply of a token if maxSupplyById[tokenId] = 0.
     * @param tokenURI sets the tokenURI of a token if tokenURIs[tokenId] is an empty string.
     * @param data data to be passed to _mint.
     *
     * Emits a TransferSingle event.
     *
     * Requirements:
     *
     * - The caller must be a minter.
     * - `to` cannot be the zero address.
     * - If `to` refers to a smart contract,
     * it must implement IERC1155Receiver.onERC1155Received and return the acceptance magic value.
     */
    function mint(
        address to,
        uint256 tokenId,
        uint256 amount,
        uint256 maxSupply,
        string memory tokenURI,
        bytes memory data
    ) public onlyRole(MINTER_ROLE) {
        _mintHelper(tokenId, amount, maxSupply, tokenURI);
        _mint(to, tokenId, amount, data);
    }

    /**
     * @dev Mints a token such that if for the first time,
     * sets maxTokenSupply to unlimited and the tokenURI to the tokenId.
     *
     * @param to address of account to mint to.
     * @param tokenId is the tokenId to mint.
     * @param amount amount to be minted.
     *
     * Emits a TransferSingle event.
     *
     * Requirements:
     *
     * - The caller must be a minter.
     * - `to` cannot be the zero address.
     * - If `to` refers to a smart contract,
     * it must implement IERC1155Receiver.onERC1155Received and return the acceptance magic value.
     */
    function mint(
        address to,
        uint256 tokenId,
        uint256 amount
    ) public onlyRole(MINTER_ROLE) {
        mint(
            to,
            tokenId,
            amount,
            type(uint256).max,
            Strings.toString(tokenId),
            bytes('')
        );
    }

    /**
     * @dev Mints a batch of new tokens.
     *
     * @param to address of account to mint to.
     * @param tokenIds tokenIds to be minted.
     * @param amounts amounts to be minted.
     * @param maxSupplies maxSupplies sets the max allowed to be minted if maxSupply[tokenId] = 0.
     * @param tokenURIs sets the tokenURI of a token if tokenURIs[tokenId] is an empty string. If left empty defaults to tokenId.
     * @param data data to be passed to _mintBatch.
     *
     * Emits a TransferBatch event.
     *
     * Requirements:
     *
     * - tokenIds, amounts, tokenURIs array size must be equal.
     * - The caller must be a minter.
     * - Account cannot be the zero address.
     */
    function mintBatch(
        address to,
        uint256[] calldata tokenIds,
        uint256[] calldata amounts,
        uint256[] memory maxSupplies,
        string[] memory tokenURIs,
        bytes memory data
    ) public onlyRole(MINTER_ROLE) {
        if (
            !(tokenIds.length == maxSupplies.length &&
                tokenIds.length == amounts.length &&
                tokenIds.length == tokenURIs.length)
        ) {
            revert ArrayLengthMismatch();
        }
        for (uint256 i = 0; i < amounts.length; i++) {
            _mintHelper(tokenIds[i], amounts[i], maxSupplies[i], tokenURIs[i]);
        }
        _mintBatch(to, tokenIds, amounts, data);
    }

    /**
     * @dev Mints a batch of new tokens.
     * sets maxSupplies to unlimited and the tokenURI to the tokenId.
     *
     * @param to address of account to mint to.
     * @param tokenIds tokenIds to be minted.
     * @param amounts amounts to be minted.
     *
     * Emits a TransferBatch event.
     *
     * Requirements:
     *
     * - tokenIds, amounts, tokenURIs array size must be equal.
     * - The caller must be a minter.
     * - Account cannot be the zero address.
     */
    function mintBatch(
        address to,
        uint256[] calldata tokenIds,
        uint256[] calldata amounts
    ) public onlyRole(MINTER_ROLE) {
        string[] memory tokenURIs = new string[](tokenIds.length);
        uint256[] memory maxSupplies = new uint256[](tokenIds.length);
        for (uint256 i = 0; i < tokenIds.length; i++) {
            tokenURIs[i] = Strings.toString(tokenIds[i]);
            maxSupplies[i] = type(uint256).max;
        }
        mintBatch(to, tokenIds, amounts, maxSupplies, tokenURIs, bytes(''));
    }

    /**
     * @dev Pauses token transfers. See {Pausable}.
     *
     * Requirements:
     *
     * - Only Owner/Admin can call this method.
     * - Only contracts with pausable active can call this method.
     */
    function pause() public onlyAdmin pausable {
        _pause();
    }

    /**
     * @dev Unpauses token transfers. See {Pausable}.
     *
     * Requirements:
     *
     * - Only Owner/Admin can call this method.
     * - Only contracts with pausable active can call this method.
     */
    function unpause() public onlyAdmin pausable {
        _unpause();
    }

    /**
     * @dev Sets the new base URI for this contract.
     *
     * @param _baseURI is the new base URI for the contract
     *
     * Requirements:
     *
     * - Only Owner/Admin can call this method.
     */
    function setBaseURI(string calldata _baseURI) external onlyAdmin {
        _setURI(_baseURI);
    }

    /**
     * @dev Sets the store-front metadatab URI for this contract.
     *
     * @param _contractURI is the store-front metadata URI for the contract.
     *
     * Requirements:
     * - Only Admin can call this method.
     */
    function setContractURI(string calldata _contractURI) external onlyAdmin {
        contractURI = _contractURI;
    }

    /**
     * @dev Sets the new _owner for this contract.
     *
     * @param __owner is the new _owner address for the contract.
     *
     * Requirements:
     * - Only Owner can call this method
     */
    function setOwner(address __owner) external onlyOwner {
        _owner = __owner;
        emit OwnerChanged(_owner);
    }

    /**
     * @dev Sets the new tokenURI for a token.
     *
     * @param _tokenId is the tokenId to set a new tokenURI on.
     * @param _tokenURI is the new tokenURI to set on the token.

     * Requirements:
     * - Only Owner/Admin can call this method
     */
    function setTokenURI(uint256 _tokenId, string calldata _tokenURI)
        external
        onlyAdmin
    {
        _tokenURIs[_tokenId] = _tokenURI;
    }

    /*********************************** Internal Functions ***********************************/

    /**
     * @dev Overrides token transfer for pausable. See {Pausable-whenNotPaused}.
     */
    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    /**
     * @dev Helper that handles business logic for maxUniqueIds, maxTokenSupply, currentSupply and tokenURIs.
     *
     * @param tokenId is the tokenId to mint.
     * @param amount amount to be minted.
     * @param maxSupply sets the max token supply of a token if maxSupplyById[tokenId] = 0.
     * @param tokenURI sets the tokenURI of a token if tokenURIs[tokenId] is an empty string.
     */
    function _mintHelper(
        uint256 tokenId,
        uint256 amount,
        uint256 maxSupply,
        string memory tokenURI
    ) internal {
        if (maxSupplyById[tokenId] == 0) {
            if (maxSupply == 0) {
                revert ZeroTokenSupply({
                    maxTokenSupply: maxUniqueIds,
                    tokenId: tokenId
                });
            }
            _uniqueIdCounter.increment();
            if (_uniqueIdCounter.current() > maxUniqueIds) {
                revert ExceededMaxUniqueIds({
                    maxUniqueIds: maxUniqueIds,
                    tokenId: tokenId
                });
            }
            maxSupplyById[tokenId] = maxSupply;
        }

        if (mintedSupplyById[tokenId] + amount > maxSupplyById[tokenId]) {
            revert ExceededMaxSupply({
                maxSupply: maxSupplyById[tokenId],
                tokenId: tokenId
            });
        }
        mintedSupplyById[tokenId] += amount;
        supplyById[tokenId] += amount;

        if (bytes(_tokenURIs[tokenId]).length == 0) {
            _tokenURIs[tokenId] = tokenURI;
        }
    }

    /**
     * @dev Sets the new royalty percentage.
     * @param _royaltyFraction The percentage to pay the royalties.
     * @param _royaltyReceiver The receiver of the royalties
     * @param _tokenId The id of the token to set the royalty
     * 
     * If we set 1, per = 100 * 1 -> 100 / 100 => 1%
     * 
     * There are no fractions in solidity
     *
     * Emits an {RoyaltyFractionChanged} event.
     *
     * Requirements:
     *
     * - Only Admin can call this method
     * - The royaltyReceiver must not be a zero address
     * 
     * Notes 
     * - If _royaltyFraction is zero hen royalties are disabled for new items for that moment
     * - If _tokenId is zero or undefined, set the default values
     * 
     */
    function setRoyalties(
        address _royaltyReceiver,
        uint96 _royaltyFraction,
        uint256 _tokenId
    ) public onlyAdmin whenRoyaltiesAreEnabled(royaltiesDisabledUntil) {

        if(_royaltyReceiver != address(0)){
            royaltyReceiver = payable(_royaltyReceiver);
            if(_tokenId != 0){
                _setTokenRoyalty(
                    _tokenId,
                    _royaltyReceiver,
                    _royaltyFraction
                );
            }else{
                _setDefaultRoyalty(
                    _royaltyReceiver, 
                    _royaltyFraction
                );
            }
        }
        royaltyFraction = _royaltyFraction;
        emit RoyaltiesChanged(_royaltyReceiver, _royaltyFraction, _tokenId);
    }

    /*
     * @dev Enables / Disabled royalties for a specific period
     * @param _timestamp the block timestamp afterwhich royalties can be set
     * 
     * Requirements:
     * - Only the admin can call this function
     * 
     */
    function disableRoyaltiesUntil(uint256 _timestamp) external onlyAdmin {
        royaltiesDisabledUntil = _timestamp;
        if(_timestamp > 0){
            emit RoyaltiesDisabled(_timestamp);
        }else{
            emit RoyaltiesEnabled();
        }
    }
 
}
