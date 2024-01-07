export const getABIS: any = async (): Promise<any> => {
  const abisArray: any = {};

  //ERC721

  abisArray["ERC721C_1"] = await import(
    "../artifacts/1/ERC721FactoryContract.json"
  );
  abisArray["ERC721A_1"] = await import(
    "../artifacts/1/ERC721FactoryAddress.json"
  );

  abisArray["ERC721C_5"] = await import(
    "../artifacts/5/ERC721FactoryContract.json"
  );
  abisArray["ERC721A_5"] = await import(
    "../artifacts/5/ERC721FactoryAddress.json"
  );

  abisArray["ERC721C_56"] = await import(
    "../artifacts/56/ERC721FactoryContract.json"
  );
  abisArray["ERC721A_56"] = await import(
    "../artifacts/56/ERC721FactoryAddress.json"
  );

  abisArray["ERC721C_97"] = await import(
    "../artifacts/97/ERC721FactoryContract.json"
  );
  abisArray["ERC721A_97"] = await import(
    "../artifacts/97/ERC721FactoryAddress.json"
  );

  abisArray["ERC721C_137"] = await import(
    "../artifacts/137/ERC721FactoryContract.json"
  );
  abisArray["ERC721A_137"] = await import(
    "../artifacts/137/ERC721FactoryAddress.json"
  );

  abisArray["ERC721C_1337"] = await import(
    "../artifacts/1337/ERC721FactoryContract.json"
  );
  abisArray["ERC721A_1337"] = await import(
    "../artifacts/1337/ERC721FactoryAddress.json"
  );

  abisArray["ERC721C_31337"] = await import(
    "../artifacts/31337/ERC721FactoryContract.json"
  );
  abisArray["ERC721A_31337"] = await import(
    "../artifacts/31337/ERC721FactoryAddress.json"
  );

  abisArray["ERC721C_80001"] = await import(
    "../artifacts/80001/ERC721FactoryContract.json"
  );
  abisArray["ERC721A_80001"] = await import(
    "../artifacts/80001/ERC721FactoryAddress.json"
  );

  abisArray["ERC721C_11155111"] = await import(
    "../artifacts/11155111/ERC721FactoryContract.json"
  );
  abisArray["ERC721A_11155111"] = await import(
    "../artifacts/11155111/ERC721FactoryAddress.json"
  );

  //ERC1155

  abisArray["ERC1155C_1"] = await import(
    "../artifacts/1/ERC1155FactoryContract.json"
  );
  abisArray["ERC1155A_1"] = await import(
    "../artifacts/1/ERC1155FactoryAddress.json"
  );

  abisArray["ERC1155C_5"] = await import(
    "../artifacts/5/ERC1155FactoryContract.json"
  );
  abisArray["ERC1155A_5"] = await import(
    "../artifacts/5/ERC1155FactoryAddress.json"
  );

  abisArray["ERC1155C_56"] = await import(
    "../artifacts/56/ERC1155FactoryContract.json"
  );
  abisArray["ERC1155A_56"] = await import(
    "../artifacts/56/ERC1155FactoryAddress.json"
  );

  abisArray["ERC1155C_97"] = await import(
    "../artifacts/97/ERC1155FactoryContract.json"
  );
  abisArray["ERC1155A_97"] = await import(
    "../artifacts/97/ERC1155FactoryAddress.json"
  );

  abisArray["ERC1155C_137"] = await import(
    "../artifacts/137/ERC1155FactoryContract.json"
  );
  abisArray["ERC1155A_137"] = await import(
    "../artifacts/137/ERC1155FactoryAddress.json"
  );

  abisArray["ERC1155C_1337"] = await import(
    "../artifacts/1337/ERC1155FactoryContract.json"
  );
  abisArray["ERC1155A_1337"] = await import(
    "../artifacts/1337/ERC1155FactoryAddress.json"
  );

  abisArray["ERC1155C_31337"] = await import(
    "../artifacts/31337/ERC1155FactoryContract.json"
  );
  abisArray["ERC1155A_31337"] = await import(
    "../artifacts/31337/ERC1155FactoryAddress.json"
  );

  abisArray["ERC1155C_80001"] = await import(
    "../artifacts/80001/ERC1155FactoryContract.json"
  );
  abisArray["ERC1155A_80001"] = await import(
    "../artifacts/80001/ERC1155FactoryAddress.json"
  );

  abisArray["ERC1155C_11155111"] = await import(
    "../artifacts/11155111/ERC1155FactoryContract.json"
  );
  abisArray["ERC1155A_11155111"] = await import(
    "../artifacts/11155111/ERC1155FactoryAddress.json"
  );

  //MKTP

  abisArray["ERCMKTPC_1"] = await import(
    "../artifacts/1/ERCMKTPFactoryContract.json"
  );
  abisArray["ERCMKTPA_1"] = await import(
    "../artifacts/1/ERCMKTPFactoryAddress.json"
  );

  abisArray["ERCMKTPC_5"] = await import(
    "../artifacts/5/ERCMKTPFactoryContract.json"
  );
  abisArray["ERCMKTPA_5"] = await import(
    "../artifacts/5/ERCMKTPFactoryAddress.json"
  );

  abisArray["ERCMKTPC_56"] = await import(
    "../artifacts/56/ERCMKTPFactoryContract.json"
  );
  abisArray["ERCMKTPA_56"] = await import(
    "../artifacts/56/ERCMKTPFactoryAddress.json"
  );

  abisArray["ERCMKTPC_97"] = await import(
    "../artifacts/97/ERCMKTPFactoryContract.json"
  );
  abisArray["ERCMKTPA_97"] = await import(
    "../artifacts/97/ERCMKTPFactoryAddress.json"
  );

  abisArray["ERCMKTPC_137"] = await import(
    "../artifacts/137/ERCMKTPFactoryContract.json"
  );
  abisArray["ERCMKTPA_137"] = await import(
    "../artifacts/137/ERCMKTPFactoryAddress.json"
  );

  abisArray["ERCMKTPC_1337"] = await import(
    "../artifacts/1337/ERCMKTPFactoryContract.json"
  );
  abisArray["ERCMKTPA_1337"] = await import(
    "../artifacts/1337/ERCMKTPFactoryAddress.json"
  );

  abisArray["ERCMKTPC_31337"] = await import(
    "../artifacts/31337/ERCMKTPFactoryContract.json"
  );
  abisArray["ERCMKTPA_31337"] = await import(
    "../artifacts/31337/ERCMKTPFactoryAddress.json"
  );

  abisArray["ERCMKTPC_80001"] = await import(
    "../artifacts/80001/ERCMKTPFactoryContract.json"
  );
  abisArray["ERCMKTPA_80001"] = await import(
    "../artifacts/80001/ERCMKTPFactoryAddress.json"
  );

  abisArray["ERCMKTPC_11155111"] = await import(
    "../artifacts/11155111/ERCMKTPFactoryContract.json"
  );
  abisArray["ERCMKTPA_11155111"] = await import(
    "../artifacts/11155111/ERCMKTPFactoryAddress.json"
  );

  //DAO

  abisArray["ERCDAOC_1"] = await import(
    "../artifacts/1/ERCDAOFactoryContract.json"
  );
  abisArray["ERCDAOA_1"] = await import(
    "../artifacts/1/ERCDAOFactoryAddress.json"
  );

  abisArray["ERCDAOC_5"] = await import(
    "../artifacts/5/ERCDAOFactoryContract.json"
  );
  abisArray["ERCDAOA_5"] = await import(
    "../artifacts/5/ERCDAOFactoryAddress.json"
  );

  abisArray["ERCDAOC_56"] = await import(
    "../artifacts/56/ERCDAOFactoryContract.json"
  );
  abisArray["ERCDAOA_56"] = await import(
    "../artifacts/56/ERCDAOFactoryAddress.json"
  );

  abisArray["ERCDAOC_97"] = await import(
    "../artifacts/97/ERCDAOFactoryContract.json"
  );
  abisArray["ERCDAOA_97"] = await import(
    "../artifacts/97/ERCDAOFactoryAddress.json"
  );

  abisArray["ERCDAOC_137"] = await import(
    "../artifacts/137/ERCDAOFactoryContract.json"
  );
  abisArray["ERCDAOA_137"] = await import(
    "../artifacts/137/ERCDAOFactoryAddress.json"
  );

  abisArray["ERCDAOC_1337"] = await import(
    "../artifacts/1337/ERCDAOFactoryContract.json"
  );
  abisArray["ERCDAOA_1337"] = await import(
    "../artifacts/1337/ERCDAOFactoryAddress.json"
  );

  abisArray["ERCDAOC_31337"] = await import(
    "../artifacts/31337/ERCDAOFactoryContract.json"
  );
  abisArray["ERCDAOA_31337"] = await import(
    "../artifacts/31337/ERCDAOFactoryAddress.json"
  );

  abisArray["ERCDAOC_80001"] = await import(
    "../artifacts/80001/ERCDAOFactoryContract.json"
  );
  abisArray["ERCDAOA_80001"] = await import(
    "../artifacts/80001/ERCDAOFactoryAddress.json"
  );

  abisArray["ERCDAOC_11155111"] = await import(
    "../artifacts/11155111/ERCDAOFactoryContract.json"
  );
  abisArray["ERCDAOA_11155111"] = await import(
    "../artifacts/11155111/ERCDAOFactoryAddress.json"
  );

  //DEFI

  abisArray["ERCDEFIC_1"] = await import(
    "../artifacts/1/ERCDEFIFactoryContract.json"
  );
  abisArray["ERCDEFIA_1"] = await import(
    "../artifacts/1/ERCDEFIFactoryAddress.json"
  );

  abisArray["ERCDEFIC_5"] = await import(
    "../artifacts/5/ERCDEFIFactoryContract.json"
  );
  abisArray["ERCDEFIA_5"] = await import(
    "../artifacts/5/ERCDEFIFactoryAddress.json"
  );

  abisArray["ERCDEFIC_56"] = await import(
    "../artifacts/56/ERCDEFIFactoryContract.json"
  );
  abisArray["ERCDEFIA_56"] = await import(
    "../artifacts/56/ERCDEFIFactoryAddress.json"
  );

  abisArray["ERCDEFIC_97"] = await import(
    "../artifacts/97/ERCDEFIFactoryContract.json"
  );
  abisArray["ERCDEFIA_97"] = await import(
    "../artifacts/97/ERCDEFIFactoryAddress.json"
  );

  abisArray["ERCDEFIC_137"] = await import(
    "../artifacts/137/ERCDEFIFactoryContract.json"
  );
  abisArray["ERCDEFIA_137"] = await import(
    "../artifacts/137/ERCDEFIFactoryAddress.json"
  );

  abisArray["ERCDEFIC_1337"] = await import(
    "../artifacts/1337/ERCDEFIFactoryContract.json"
  );
  abisArray["ERCDEFIA_1337"] = await import(
    "../artifacts/1337/ERCDEFIFactoryAddress.json"
  );

  abisArray["ERCDEFIC_31337"] = await import(
    "../artifacts/31337/ERCDEFIFactoryContract.json"
  );
  abisArray["ERCDEFIA_31337"] = await import(
    "../artifacts/31337/ERCDEFIFactoryAddress.json"
  );

  abisArray["ERCDEFIC_80001"] = await import(
    "../artifacts/80001/ERCDEFIFactoryContract.json"
  );
  abisArray["ERCDEFIA_80001"] = await import(
    "../artifacts/80001/ERCDEFIFactoryAddress.json"
  );

  abisArray["ERCDEFIC_11155111"] = await import(
    "../artifacts/11155111/ERCDEFIFactoryContract.json"
  );
  abisArray["ERCDEFIA_11155111"] = await import(
    "../artifacts/11155111/ERCDEFIFactoryAddress.json"
  );

  return abisArray;
};

export const Web3Config: any = {
  ERC721_FACTORY: "ERC721Factory",
  ERC1155_FACTORY: "ERC1155Factory",
  ERCMKTP_FACTORY: "ERCMKTPFactory",
  ERCDAO_FACTORY: "ERCDAOFactory",
  ERCDEFI_FACTORY: "ERCDEFIFactory",
  ERC721_FACTORY_READS: [
    "getBaseURI",
    "getContractURI",
    "getTokenURI",
    "tokenURI",
    "getOwner",
    "getMarketplaceAddress",
    "getRoyaltyFraction",
    "getRoyaltyReceiver",
    "getTokenRoyaltyInfo",
    "getRoyaltyFeeDenominator",
    "getTokenMaximumSupply",
    "totalSupply",
    "getTokenCurrentSupply",
    "getTokenCurrentId",
    "getTokenMintingFee",
    "getTokensMintedByMe",
    "getTokensMintedByAddress",
    "getTokenMinter",
    "getTokenMintee",
    "getTokensCreatedByMe",
    "getTokensCreatedByAddress",
    "getTokenCreator",
    "getTokensOwnedByMe",
    "getTokensOwnedByAddress",
    "getTokenOwner",
    "getAccountTokenBalance",
    "getNFTItem",
    "getNFTItems",
    "getTokenAuditTrail",
    "collectionName",
    "collectionSymbol",
    "collectionCategory",
    "collectionDescription",
    "collectionBannerMedia",
    "collectionDisplayPicture",
    "searchTokenId",
    "searchTokenURI",
    "searchTimestamp",
    "searchAddress",
    "supportsInterface",
  ],
  ERC721_FACTORY_WRITES: [
    "burnToken",
    "tokenURIExists",
    "mintNewToken",
    "setRoyalties",
    "disableRoyaltiesUntil",
    "transferToken",
    "grantAdminRole",
    "revokeAdminRole",
    "renounceAdminRole",
    "renounceContractOwnership",
    "grantMinterRole",
    "revokeMinterRole",
    "renounceMinterRole",
    "approveAddressForToken",
    "setBaseURI",
    "setContractURI",
    "setCollectionDescription",
    "setCollectionBannerMedia",
    "setCollectionDisplayPicture",
    "setMarketplaceAddress",
    "setMintingFee",
    "setLoggerAddress",
    "setNewOwner",
    "togglePause",
  ],
  ERC1155_FACTORY_READS: [
    "baseURI",
    "uri",
    "tokenURI",
    "tokenURIExists",
    "getTokenURI",
    "getMarketplaceAddress",
    "getTokenSupplies",
    "getTokenMaximumSupply",
    "getTokenCurrentSupply",
    "getTokenMintingFee",
    "getTokensMintedByMe",
    "getTokensMintedByAddress",
    "getTokenMinter",
    "getTokenMintee",
    "getTokensCreatedByMe",
    "getTokensCreatedByAddress",
    "getTokenCreator",
    "getTokensOwnedByMe",
    "getTokensOwnedByAddress",
    "getTokenOwner",
    "getNFTItem",
    "getNFTItems",
    "getTokenAuditTrail",
    "searchTokenId",
    "searchTokenURI",
    "searchTimestamp",
    "searchAddress",
    "supportsInterface",
  ],
  ERC1155_FACTORY_WRITES: [
    "setDefaultRoyalty",
    "deleteDefaultRoyalty",
    "resetTokenRoyalty",
    "setTokenRoyalty",
    "transferToken",
    "setBaseURI",
    "grantAdminRole",
    "revokeAdminRole",
    "renounceAdminRole",
    "renounceContractOwnership",
    "grantMinterRole",
    "revokeMinterRole",
    "renounceMinterRole",
    "setTokenURI",
    "setMarketplaceAddress",
    "setMintingFee",
    "setLoggerAddress",
    "setNewOwner",
    "burn",
    "burnBatch",
    "mintSingle",
    "mintBatch",
    "pause",
    "unpause",
  ],
  ERCMKTP_FACTORY_READS: [
    "getContractURI",
    "getTokenListingFee",
    "getOwner",
    "getCurrentIndexedID",
    "getNFTMarketItemsListedByAddress",
    "getNFTItemUserAddresses",
    "getNFTItemsMintedByAddress",
    "getNFTItemsCreatedByAddress",
    "getNFTItemsOwnedByMe",
    "getNFTItemsOwnedByAddress",
    "getNFTMarketItem",
    "getNFTMarketItems",
    "getNFTItemAuditTrail",
    "getTokenOwnermkt",
    "getNFTmktItems",
    "getTokenOwner721",
    "getAuctionItem",
    "getAuctionItems",
    "getNFT721Items",
    "searchTokenId",
    "searchTokenURI",
    "searchTimestamp",
    "searchAddress",
    "supportsInterface",
  ],
  ERCMKTP_FACTORY_WRITES: [
    "grantAdminRole",
    "revokeAdminRole",
    "renounceAdminRole",
    "renounceContractOwnership",
    "setContractURI",
    "setListingFee",
    "setLoggerAddress",
    "setNewOwner",
    "createNFTMarketItem",
    "changeTokenOwnership",
    "listNFTMarketItem",
    "delistNFTMarketItem",
    "createMarketSale",
    "executeMarketItemSale",
    "bidNFTMarketAuctionItem",
    "sellNFTMarketAuctionItem",
    "fetchUserBids",
  ],
};
