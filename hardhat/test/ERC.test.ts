import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

const MINTER_ROLE: string = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
const ADMIN_ROLE: string = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
const DEFAULT_ROLE: string = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";

const MAXIMUM_SUPPLY: number | any = parseInt(`${process.env.MAXIMUM_SUPPLY}`);

describe("ERC721Factory", async function () {

    let ERC721FactorySmartContract:any;

    let deployer:any, account1:any, account2:any, args:any;

    let deployerAccount:any;

    beforeEach( async () => {

        const { smartContract, _deployer, _account1, _account2, _args } = await loadFixture(deploySmartContract);

        ERC721FactorySmartContract = smartContract;
        deployer = _deployer;
        account1 = _account1;
        account2 = _account2;
        args = _args;

        deployerAccount = await ERC721FactorySmartContract.connect(deployer);

    });

    const deploySmartContract = async (): Promise<{ smartContract: any; _deployer:any ; _account1: any; _account2: any, _args:any }> => {

        const [_deployer, _account1, _account2] = await ethers.getSigners();

        console.log("      ✔ Deploying contracts with the account:", _deployer.address);

        console.log("      ✔ Account balance:", (await _deployer.getBalance()).toString());

        const CONTRACT_FILE: any = process.env.CONTRACT_FILE;

        const CONTRACT_PARAMS: any = require(`../scripts/contract-configs/${CONTRACT_FILE}Config.ts`)

        const ContractLinkedLibrary = await ethers.getContractFactory(CONTRACT_PARAMS.LINKED_LIBRARY);
        const contractLinkedLibrary = await ContractLinkedLibrary.deploy();
        await contractLinkedLibrary.deployed();

        const SmartContract:any = await ethers.getContractFactory(
            CONTRACT_FILE,
            {
                libraries: {
                    Snippets: contractLinkedLibrary.address,
                },
            }
        );

        /*
        console.warn(
            "Deploy with the following arguments",
            CONTRACT_PARAMS.ABI_VALUES
        );
        */

        const smartContract = await SmartContract.deploy(
            CONTRACT_PARAMS.CONTRACT_NAME,
            CONTRACT_PARAMS.CONTRACT_SYMBOL,
            CONTRACT_PARAMS.ABI_ENCODED
        );

        await smartContract.deployed();

        const _args:any = {
            contractName: CONTRACT_PARAMS.CONTRACT_NAME,
            contractSymbol: CONTRACT_PARAMS.CONTRACT_SYMBOL,
            contractABI: CONTRACT_PARAMS.ABI_VALUES
        }

        console.log("  Arguments ...", _args, CONTRACT_PARAMS.ABI_ENCODED);

        return { smartContract, _deployer, _account1, _account2, _args };

    }

    const mintTokens = async () => {

        let mintingFee:number = args.contractABI[7];

        for(let i=1; i<6; i++){
                
            let txn:any = await ERC721FactorySmartContract.mintNewToken(
                account1.address,
                `test-nft-metadata-${i}.json`,
                i*10, 
                {value: mintingFee}
            );

            await txn.wait();
        
        }

        const transaction:any = await deployerAccount.mintNewToken(
            deployer.address,
            `test-nft-metadata-6.json`,
            60, 
            {value: mintingFee}
        );

        await transaction.wait();

        const items:any = await ERC721FactorySmartContract.getNFTItems();

        return items;

    }

    const transferTokens = async () => {

        let txn:any;

        let accountWallet:any = await ERC721FactorySmartContract.connect(account1);
            
            txn = await accountWallet.transferFrom(
                account1.address,
                deployer.address,
                1
            );

            await txn.wait();

            txn = await accountWallet.transferFrom(
                account1.address,
                account2.address,
                2
            );

            await txn.wait();

    }

    const burnTokens = async () => {

        let txn:any;

        let accountWallet:any = await ERC721FactorySmartContract.connect(account1);
            
        txn = await deployerAccount.burnToken(1);

        await txn.wait();

        txn = await accountWallet.burnToken(3);

        await txn.wait();


    }

    describe("Deployment", () => {

        console.log("  Deploying Contract ...");

        it("Should deploy the contract successfully!", async function () {

            expect(await ERC721FactorySmartContract.address).not.to.equal(null);

        });

        it("It has a name", async function () {

            expect(await ERC721FactorySmartContract.name()).to.equal(args.contractName);

        });

        it("It has a symbol", async function () {

            expect(await ERC721FactorySmartContract.symbol()).to.equal(args.contractSymbol);

        });

        it("It has a contract uri", async function () {

            expect(await ERC721FactorySmartContract.contractURI()).to.equal(args.contractABI[0]);

        });

        it("It has a base uri", async function () {

            expect(await ERC721FactorySmartContract.getBaseURI()).to.equal(args.contractABI[1]);

        });

        it("It has a maximum supply", async function () {

            expect(await ERC721FactorySmartContract.getTokenMaximumSupply()).to.equal(args.contractABI[2]);

        });

        it("It sets the royalty fraction", async function () {

            expect(await ERC721FactorySmartContract.getRoyaltyFraction()).to.equal(args.contractABI[3]);

        });

        it("It sets the royalty receiver", async function () {

            expect(await ERC721FactorySmartContract.getRoyaltyReceiver()).to.equal(args.contractABI[4]);

        });

        it("It has admins", async function () {

            expect(await ERC721FactorySmartContract.getRoyaltyFraction()).to.equal(args.contractABI[3]);

        });

        it("It has minters", async function () {

            expect(await ERC721FactorySmartContract.getRoyaltyFraction()).to.equal(args.contractABI[3]);

        });

        it("It sets the minting fee", async function () {

            expect(await ERC721FactorySmartContract.getTokenMintingFee()).to.equal(args.contractABI[7]);

        });

        it("It has owner", async function () {

            expect(await ERC721FactorySmartContract.getOwner()).to.equal(deployer.address);

        });

        it("It has a minter role", async function () {

            expect(await ERC721FactorySmartContract.hasRole(MINTER_ROLE, deployer.address)).to.equal(true);

        });

        it("It has a admin role", async function () {

            expect(await ERC721FactorySmartContract.hasRole(ADMIN_ROLE, deployer.address)).to.equal(true);

        });

        it("It sets the collection category", async function () {

            expect(await ERC721FactorySmartContract.collectionCategory()).to.equal(parseInt(args.contractABI[8]));

        });

        it("It is pausable", async function () {

            const {pausable} = await ERC721FactorySmartContract.contractOptionsStruct()

            expect(pausable).to.equal(true);

        });

        it("It is burnable", async function () {

            const {burnable} = await ERC721FactorySmartContract.contractOptionsStruct()

            expect(burnable).to.equal(true);

        }); 

    });

    describe("Token Transfers", () => {

        let transaction:any;

        beforeEach( async () => {
            
            await mintTokens();

        });

        it(`Must be able to mint tokens`, async function () {

            console.warn("      ✔ Mint Tokens");

            await deployerAccount.balanceOf(account1.address).then((amount:number) =>{
                    
                expect(amount).to.equal(5);
            
            }).catch((err:any) =>{

                console.log("MINT_ERROR:", err);

            });

        });

        it("Updates the total supply after minting", async () => {
        
            const nftItems: Array<any> = await ERC721FactorySmartContract.getNFTItems();

            const currentTotalSupply:number = await ERC721FactorySmartContract.getTokenCurrentSupply();

            expect(nftItems.length).to.equal(currentTotalSupply);

            const mintedTokensCount = 6;

            expect(await ERC721FactorySmartContract.totalSupply()).to.equal(mintedTokensCount);

        })

        it("Emits TokenMinted event", async () => {
            
            expect(transaction).to.emit(ERC721FactorySmartContract, "TokenMinted")

        });

        it("Throws an PriceBelowMintingFee error", async () => {

            const mintingFeeExpected:number = args.contractABI[7];
            
            const mintingFeeTest:number = 6;

            await expect(ERC721FactorySmartContract.mintNewToken(
                account1.address,
                `test-nft-metadata-1.json`,
                10, 
                {value: mintingFeeTest}
            ))
            .to.be.revertedWithCustomError(ERC721FactorySmartContract, "PriceBelowMintingFee")
            .withArgs(mintingFeeExpected, mintingFeeTest, ERC721FactorySmartContract.AMOUNT_BELOW_MINTING_FEE);
            
        });

        it("Throws an MaximumTokenSupplyReached error", async () => {

            const mintingFee:number = args.contractABI[7];

            const tokenMaximumSupply:number = args.contractABI[2];

            let txn:any;

            for(let i=7; i<11; i++){
                
                txn = await ERC721FactorySmartContract.mintNewToken(
                    account1.address,
                    `test-nft-metadata-${i}.json`,
                    i, 
                    {value: mintingFee}
                );

                await txn.wait();
            
            }

            const outOfBoundsTokenId:number = parseInt(await ERC721FactorySmartContract.getTokenCurrentId())+1;

            await expect(ERC721FactorySmartContract.mintNewToken(
                account1.address,
                `test-nft-metadata-11.json`,
                11, 
                {value: mintingFee}
            ))
            .to.be.revertedWithCustomError(ERC721FactorySmartContract, "MaximumTokenSupplyReached")
            .withArgs(tokenMaximumSupply, outOfBoundsTokenId, ERC721FactorySmartContract.MAX_SUPPLY_REACHED);
            
        });

        it(`Must be able to transfer tokens between accounts`, async function () {
        
            console.warn("      ✔ Transfer Tokens");

            await transferTokens();

            let deployerTokens:any, account1Tokens:any, account2Tokens:any;
            
            deployerTokens = await ERC721FactorySmartContract.balanceOf(deployer.address);

            account1Tokens = await ERC721FactorySmartContract.balanceOf(account1.address);

            account2Tokens = await ERC721FactorySmartContract.balanceOf(account2.address);

            expect(deployerTokens).to.equal(2);
        
            expect(account1Tokens).to.equal(3);
        
            expect(account2Tokens).to.equal(1);
        
        });

        it("Emits TokenTransfered event", () => {
            expect(transaction).to.emit(ERC721FactorySmartContract, "TokenTransfered")
        })

        it("Throws an ExceededMaxValue error", async () => {

            const tokenId:number = 11;

            await expect(ERC721FactorySmartContract.tokenTransfer(
                account2.address,
                tokenId
            ))
            .to.be.revertedWithCustomError(ERC721FactorySmartContract, "ExceededMaxValue")
            .withArgs(await ERC721FactorySmartContract.getTokenMaximumSupply(), tokenId, ERC721FactorySmartContract.INDEX_OUT_OF_BOUNDS);
            
        });

        it("Throws an BelowMinValue error", async () => {

            const tokenId:number = 0;

            await expect(ERC721FactorySmartContract.tokenTransfer(
                account2.address,
                tokenId
            ))
            .to.be.revertedWithCustomError(ERC721FactorySmartContract, "BelowMinValue")
            .withArgs(1, tokenId, ERC721FactorySmartContract.INDEX_OUT_OF_BOUNDS);
            
        });

        it("Throws an TokenDoesNotExists error", async () => {

            const tokenId:number = 7;

            await expect(ERC721FactorySmartContract.tokenTransfer(
                account2.address,
                tokenId
            ))
            .to.be.revertedWithCustomError(ERC721FactorySmartContract, "TokenDoesNotExists")
            .withArgs(tokenId, ERC721FactorySmartContract.TOKEN_DOES_NOT_EXISTS);
            
        });

        it(`Must be able to burn tokens`, async function () {
        
            console.warn("      ✔ Burn Tokens");

            await transferTokens();

            await burnTokens();

            let deployerTokens:any, account1Tokens:any, account2Tokens:any;

            deployerTokens = await ERC721FactorySmartContract.balanceOf(deployer.address);

            account1Tokens = await ERC721FactorySmartContract.balanceOf(account1.address);

            account2Tokens = await ERC721FactorySmartContract.balanceOf(account2.address);

            //console.log("TOKEN BALANCES AFTER BURN", deployerTokens, account1Tokens, account2Tokens);

            expect(deployerTokens).to.equal(1);
        
            expect(account1Tokens).to.equal(2);
        
            expect(account2Tokens).to.equal(1);

            const currentTotalSupply:number = await ERC721FactorySmartContract.getTokenCurrentSupply();

            expect(currentTotalSupply).to.equal(4);
        });

        it("Updates the total supply after burning", async () => {
        
            await transferTokens();

            await burnTokens();

            const nftItems: Array<any> = await ERC721FactorySmartContract.getNFTItems();

            const currentTotalSupply:number = await ERC721FactorySmartContract.getTokenCurrentSupply();

            expect(nftItems.length).to.equal(currentTotalSupply);
            
        })

        it("Emits TokenBurned event", () => {
            expect(transaction).to.emit(ERC721FactorySmartContract, "TokenBurned")
        })


    });

    describe("Token Owners", () => {
        
        console.warn("      ✔ Mint Tokens");

        beforeEach( async () => {
            
            await mintTokens();

        });

        it("Verifies the token rightful owners, soon after mint.", async () => {
        
            const nftItems: Array<any> = await ERC721FactorySmartContract.getNFTItems();

            expect(nftItems[0].ownerAddress).to.equal(await ERC721FactorySmartContract.ownerOf(nftItems[0].tokenId));
            expect(nftItems[1].ownerAddress).to.equal(await ERC721FactorySmartContract.ownerOf(nftItems[1].tokenId));
            expect(nftItems[2].ownerAddress).to.equal(await ERC721FactorySmartContract.ownerOf(nftItems[2].tokenId));
            expect(nftItems[3].ownerAddress).to.equal(await ERC721FactorySmartContract.ownerOf(nftItems[3].tokenId));
            expect(nftItems[4].ownerAddress).to.equal(await ERC721FactorySmartContract.ownerOf(nftItems[4].tokenId));
            expect(nftItems[5].ownerAddress).to.equal(await ERC721FactorySmartContract.ownerOf(nftItems[5].tokenId));
            
        })

        it("Verifies the token rightful owners, soon after transfers / ownership change", async () => {
        
            console.warn("      ✔ Transfer Tokens");

            await transferTokens();

            const nftItems: Array<any> = await ERC721FactorySmartContract.getNFTItems();

            expect(nftItems[0].ownerAddress).to.equal(await ERC721FactorySmartContract.ownerOf(nftItems[0].tokenId));
            expect(nftItems[1].ownerAddress).to.equal(await ERC721FactorySmartContract.ownerOf(nftItems[1].tokenId));
            expect(nftItems[2].ownerAddress).to.equal(await ERC721FactorySmartContract.ownerOf(nftItems[2].tokenId));
            expect(nftItems[3].ownerAddress).to.equal(await ERC721FactorySmartContract.ownerOf(nftItems[3].tokenId));
            expect(nftItems[4].ownerAddress).to.equal(await ERC721FactorySmartContract.ownerOf(nftItems[4].tokenId));
            expect(nftItems[5].ownerAddress).to.equal(await ERC721FactorySmartContract.ownerOf(nftItems[5].tokenId));
            
        })

    });

    describe("Token Minter, Creator & Owner", () => {
        
        console.warn("      ✔ Mint Tokens");

        beforeEach( async () => {
            
            await mintTokens();

            await transferTokens();

        });

        it("Retrieve all available tokens", async () => {
        
            const nftItems: Array<any> = await ERC721FactorySmartContract.getNFTItems();
            
            expect(nftItems.length).to.equal(6);
            
        })

        it("Get tokens minted by address : getTokensMintedByAddress", async () => {

            console.warn("      ✔ Get tokens minted");
        
            const nftItems: Array<any> = await ERC721FactorySmartContract.getTokensMintedByAddress(deployer.address);

            expect(nftItems.length).to.equal(6);

            expect(nftItems[0].minterAddress).to.equal(deployer.address);
            expect(nftItems[1].minterAddress).to.equal(deployer.address);
            expect(nftItems[2].minterAddress).to.equal(deployer.address);
            expect(nftItems[3].minterAddress).to.equal(deployer.address);
            expect(nftItems[4].minterAddress).to.equal(deployer.address);
            expect(nftItems[5].minterAddress).to.equal(deployer.address);
            
        })

        it("Get tokens minted by me : getTokensMintedByMe", async () => {

            let deployerWallet:any = await ERC721FactorySmartContract.connect(deployer);
            
            const deployerTokens: Array<any> = await deployerWallet.getTokensMintedByMe();

            expect(deployerTokens.length).to.equal(6);

            expect(deployerTokens[0].minterAddress).to.equal(deployer.address);
            expect(deployerTokens[1].minterAddress).to.equal(deployer.address);
            expect(deployerTokens[2].minterAddress).to.equal(deployer.address);
            expect(deployerTokens[3].minterAddress).to.equal(deployer.address);
            expect(deployerTokens[4].minterAddress).to.equal(deployer.address);
            expect(deployerTokens[5].minterAddress).to.equal(deployer.address);

        })

        it("Get tokens created by address : getTokensCreatedByAddress", async () => {

            console.warn("      ✔ Get tokens created");
        
            const nftItems: Array<any> = await ERC721FactorySmartContract.getTokensCreatedByAddress(deployer.address);

            //console.log(nftItems[0]);
            
            expect(nftItems.length).to.equal(1);

            expect(nftItems[0].creatorAddress[0]).to.equal(deployer.address);
            expect(nftItems[0].creatorAddress[1]).to.equal(deployer.address);
            
        })

        it("Get tokens created by me : getTokensCreatedByMe", async () => {

            const nftItems: Array<any> = await ERC721FactorySmartContract.getTokensCreatedByMe();

            //console.log(nftItems[0]);
            
            expect(nftItems.length).to.equal(1);

            expect(nftItems[0].creatorAddress[0]).to.equal(deployer.address);
            expect(nftItems[0].creatorAddress[1]).to.equal(deployer.address);

        })

        it("Get tokens owned by address : getTokensOwnedByAddress", async () => {

            console.warn("      ✔ Get tokens owned");
        
            const deployerTokens: Array<any> = await ERC721FactorySmartContract.getTokensOwnedByAddress(deployer.address);

            expect(deployerTokens.length).to.equal(2);

            const address1Tokens: Array<any> = await ERC721FactorySmartContract.getTokensOwnedByAddress(account1.address);

            expect(address1Tokens.length).to.equal(3);

            const address2Tokens: Array<any> = await ERC721FactorySmartContract.getTokensOwnedByAddress(account2.address);

            expect(address2Tokens.length).to.equal(1);

        })

        it("Get tokens owned by me : getTokensOwnedByMe", async () => {

            let deployerWallet:any = await ERC721FactorySmartContract.connect(deployer);
            
            const deployerTokens: Array<any> = await deployerWallet.getTokensOwnedByMe();

            expect(deployerTokens.length).to.equal(2);

        })

    });

    describe("Read State Variables", () => {
        
        it("Get the base uri : getBaseURI", async () => {

            console.warn("      ✔ URIs");

            let deployerWallet:any = await ERC721FactorySmartContract.connect(deployer);

            let _baseURI: string = "https://domain.tld/base/url";
            
            await deployerWallet.setBaseURI(_baseURI);

            const baseURI: string = await deployerWallet.getBaseURI();

            expect(baseURI).to.equal(_baseURI);

        })

        it("Get the contract uri : getContractURI", async () => {

            let deployerWallet:any = await ERC721FactorySmartContract.connect(deployer);

            let _contractURI: string = "ipfs://uriKey";
            
            await deployerWallet.setContractURI(_contractURI);

            const contractURI: string = await deployerWallet.getContractURI();

            expect(contractURI).to.equal(_contractURI);

        })

        it("Get the token uri : getTokenURI", async () => {

            const deployerWallet:any = await ERC721FactorySmartContract.connect(deployer);

            const tokenId:number = 1;

            const _tokenURI: string = `test-nft-metadata-${tokenId}.json`;
            
            const baseURI: string = await deployerWallet.getBaseURI();

            const tokenURI: string = await deployerWallet.getTokenURI(tokenId);

            expect(tokenURI).to.equal(`${baseURI}${_tokenURI}`);
            

        })

        
        it("Get the token current counter : getTokenCurrentId", async () => {

            console.warn("      ✔ Token Counter");

            let deployerWallet:any = await ERC721FactorySmartContract.connect(deployer);

            let _tokenIdCounter: string = "1";
            
            let _tokenURI: string = "myUrl";
            
            let transaction:any;
                
            transaction = await deployerAccount.mintNewToken(
                account1.address,
                _tokenURI,
                10, 
                {value: args.contractABI[7]}
            );

            await transaction.wait();

            const tokenIdCounter: string = await deployerWallet.getTokenCurrentId();

            expect(tokenIdCounter).to.equal(_tokenIdCounter);

        })


        it("Get the token uri : getTokenURI", async () => {

            let deployerWallet:any = await ERC721FactorySmartContract.connect(deployer);

            let _tokenURI: string = "test-nft-metadata-1.json";
            
            let transaction:any;
                
            transaction = await deployerAccount.mintNewToken(
                account1.address,
                _tokenURI,
                10, 
                {value: args.contractABI[7]}
            );

            await transaction.wait();

            const baseURI: string = await deployerWallet.getBaseURI();

            const tokenURI: string = await deployerWallet.getTokenURI(1);

            expect(tokenURI).to.equal(`${baseURI}${_tokenURI}`);

        })


    });

    await new Promise(res =>  setTimeout(() => res(null), 5000));

});
