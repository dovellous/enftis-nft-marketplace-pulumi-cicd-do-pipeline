export const getABIS:any = async() : Promise<any> => {

    const abisArray: any = {};

    abisArray['C_1'] = await import('../artifacts/1/ERC721FactoryContract.json');
    abisArray['A_1'] = await import('../artifacts/1/ERC721FactoryAddress.json');

    abisArray['C_5'] = await import('../artifacts/5/ERC721FactoryContract.json');
    abisArray['A_5'] = await import('../artifacts/5/ERC721FactoryAddress.json');

    abisArray['C_56'] = await import('../artifacts/56/ERC721FactoryContract.json');
    abisArray['A_56'] = await import('../artifacts/56/ERC721FactoryAddress.json');

    abisArray['C_97'] = await import('../artifacts/97/ERC721FactoryContract.json');
    abisArray['A_97'] = await import('../artifacts/97/ERC721FactoryAddress.json');

    abisArray['C_137'] = await import('../artifacts/137/ERC721FactoryContract.json');
    abisArray['A_137'] = await import('../artifacts/137/ERC721FactoryAddress.json');

    abisArray['C_1337'] = await import('../artifacts/1337/ERC721FactoryContract.json');
    abisArray['A_1337'] = await import('../artifacts/1337/ERC721FactoryAddress.json');

    abisArray['C_31337'] = await import('../artifacts/31337/ERC721FactoryContract.json');
    abisArray['A_31337'] = await import('../artifacts/31337/ERC721FactoryAddress.json');

    abisArray['C_80001'] = await import('../artifacts/80001/ERC721FactoryContract.json');
    abisArray['A_80001'] = await import('../artifacts/80001/ERC721FactoryAddress.json');

    abisArray['C_11155111'] = await import('../artifacts/11155111/ERC721FactoryContract.json');
    abisArray['A_11155111'] = await import('../artifacts/11155111/ERC721FactoryAddress.json');

    return abisArray;

}


export const Web3Config: any = {
    ERC721_FACTORY:  'ERC721Factory',
    ERC1155_FACTORY: 'ERC1155Factory',
    ERCMKTP_FACTORY: 'ERCMKTPFactory',
    ERC721_FACTORY_READS: [
        'getBaseURI', 'getContractURI', 'getTokenURI', 'tokenURI', 'getOwner', 'getMarketplaceAddress', 'getRoyaltyFraction', 'getRoyaltyReceiver', 'getTokenRoyaltyInfo', 'getRoyaltyFeeDenominator', 'getTokenMaximumSupply', 'totalSupply', 'getTokenCurrentSupply', 'getTokenCurrentId', 'getTokenMintingFee', 'getTokensMintedByMe', 'getTokensMintedByAddress', 'getTokenMinter', 'getTokenMintee', 'getTokensCreatedByMe', 'getTokensCreatedByAddress', 'getTokenCreator', 'getTokensOwnedByMe', 'getTokensOwnedByAddress', 'getTokenOwner', 'getAccountTokenBalance', 'getNFTItem', 'getNFTItems', 'getTokenAuditTrail', 'collectionName', 'collectionSymbol', 'collectionCategory', 'collectionDescription', 'collectionBannerMedia', 'collectionDisplayPicture', 'searchTokenId', 'searchTokenURI', 'searchTimestamp', 'searchAddress', 'supportsInterface'
    ],
    ERC721_FACTORY_WRITES: [
        'burnToken', 'tokenURIExists', 'mintNewToken', 'setRoyalties', 'disableRoyaltiesUntil', 'transferToken', 'grantAdminRole', 'revokeAdminRole', 'renounceAdminRole', 'renounceContractOwnership', 'grantMinterRole', 'revokeMinterRole', 'renounceMinterRole', 'approveAddressForToken', 'setBaseURI', 'setContractURI', 'setCollectionDescription', 'setCollectionBannerMedia', 'setCollectionDisplayPicture', 'setMarketplaceAddress', 'setMintingFee', 'setLoggerAddress', 'setNewOwner', 'togglePause'
    ],
    ERC1155_FACTORY_READS: [
        'baseURI', 'uri', 'tokenURI', 'tokenURIExists', 'getTokenURI', 'getMarketplaceAddress', 'getTokenSupplies', 'getTokenMaximumSupply', 'getTokenCurrentSupply', 'getTokenMintingFee', 'getTokensMintedByMe', 'getTokensMintedByAddress', 'getTokenMinter', 'getTokenMintee', 'getTokensCreatedByMe', 'getTokensCreatedByAddress', 'getTokenCreator', 'getTokensOwnedByMe', 'getTokensOwnedByAddress', 'getTokenOwner', 'getNFTItem', 'getNFTItems', 'getTokenAuditTrail', 'searchTokenId', 'searchTokenURI', 'searchTimestamp', 'searchAddress', 'supportsInterface'
    ],
    ERC1155_FACTORY_WRITES: [
        'setDefaultRoyalty', 'deleteDefaultRoyalty', 'resetTokenRoyalty', 'setTokenRoyalty', 'transferToken', 'setBaseURI', 'grantAdminRole', 'revokeAdminRole', 'renounceAdminRole', 'renounceContractOwnership', 'grantMinterRole', 'revokeMinterRole', 'renounceMinterRole', 'setTokenURI', 'setMarketplaceAddress', 'setMintingFee', 'setLoggerAddress', 'setNewOwner', 'burn', 'burnBatch', 'mintSingle', 'mintBatch', 'pause', 'unpause'
    ],
    ERCMKTP_FACTORY_READS: [
        'getContractURI', 'getTokenListingFee', 'getOwner', 'getCurrentIndexedID', 'getNFTMarketItemsListedByAddress', 'getNFTItemUserAddresses', 'getNFTItemsMintedByAddress', 'getNFTItemsCreatedByAddress', 'getNFTItemsOwnedByMe', 'getNFTItemsOwnedByAddress', 'getNFTMarketItem', 'getNFTMarketItems', 'getNFTItemAuditTrail', 'getTokenOwnermkt', 'getNFTmktItems', 'getTokenOwner721', 'getAuctionItem', 'getAuctionItems', 'getNFT721Items', 'searchTokenId', 'searchTokenURI', 'searchTimestamp', 'searchAddress', 'supportsInterface'
    ],
    ERCMKTP_FACTORY_WRITES: [
        'grantAdminRole', 'revokeAdminRole', 'renounceAdminRole', 'renounceContractOwnership', 'setContractURI', 'setListingFee', 'setLoggerAddress', 'setNewOwner', 'createNFTMarketItem', 'changeTokenOwnership', 'listNFTMarketItem', 'delistNFTMarketItem', 'createMarketSale', 'executeMarketItemSale', 'bidNFTMarketAuctionItem', 'sellNFTMarketAuctionItem', 'fetchUserBids'
    ],
}