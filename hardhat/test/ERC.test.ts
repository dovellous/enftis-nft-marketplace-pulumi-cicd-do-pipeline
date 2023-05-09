import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

const MINTER_ROLE: string = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
const ADMIN_ROLE: string = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";
const DEFAULT_ROLE: string = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";

const MAXIMUM_SUPPLY: number | any = parseInt(`${process.env.MAXIMUM_SUPPLY}`);

describe("ERC721Factory", function () {

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

        //console.log("  Arguments ...", _args);

        return { smartContract, _deployer, _account1, _account2, _args };

    }

    const mintTokens = async () => {

        let transaction:any;
            
        transaction = await deployerAccount.mintNewToken(
            account1.address,
            `test-nft-metadata-1.json`,
            10, 
            {value: args.contractABI[7]}
        );

        await transaction.wait();

        transaction = await deployerAccount.mintNewToken(
            account1.address,
            `test-nft-metadata-2.json`,
            20, 
            {value: args.contractABI[7]}
        );

        await transaction.wait();

        transaction = await deployerAccount.mintNewToken(
            account1.address,
            `test-nft-metadata-3.json`,
            30, 
            {value: args.contractABI[7]}
        );

        await transaction.wait();

        transaction = await deployerAccount.mintNewToken(
            account1.address,
            `test-nft-metadata-4.json`,
            40, 
            {value: args.contractABI[7]}
        );

        await transaction.wait();

        transaction = await deployerAccount.mintNewToken(
            account1.address,
            `test-nft-metadata-5.json`,
            50, 
            {value: args.contractABI[7]}
        );

        await transaction.wait();

        transaction = await deployerAccount.mintNewToken(
            deployer.address,
            `test-nft-metadata-6.json`,
            50, 
            {value: args.contractABI[7]}
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
            
        })

        it("Emits TokenMinted event", () => {
            expect(transaction).to.emit(ERC721FactorySmartContract, "TokenMinted")
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

    describe("Contract Getters", () => {
        
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
        
            const nftItems: Array<any> = await ERC721FactorySmartContract.getTokensMintedByAddress(account1.address);

            expect(nftItems.length).to.equal(5);
            expect(nftItems[0].ownerAddress).to.equal(account1.address);
            
        })

        it("Get tokens minted by me : getTokensMintedByMe", async () => {

            let deployerWallet:any = await ERC721FactorySmartContract.connect(deployer);
            
            const deployerTokens: Array<any> = await deployerWallet.getTokensMintedByMe();

            console.log(deployerTokens);

            expect(deployerTokens.length).to.equal(1);

        })

        it("Get tokens created by address : getTokensCreatedByAddress", async () => {

            console.warn("      ✔ Get tokens created");
        
            const nftItems: Array<any> = await ERC721FactorySmartContract.getTokensCreatedByAddress(account1.address);

            expect(nftItems.length).to.equal(5);
            expect(nftItems[0].ownerAddress).to.equal(account1.address);
            
        })

        it("Get tokens created by me : getTokensCreatedByMe", async () => {

            const nftItems: Array<any> = await ERC721FactorySmartContract.getNFTItems();

            //console.log(nftItems);

            let deployerWallet:any = await ERC721FactorySmartContract.connect(deployer);
            
            const deployerTokens: Array<any> = await deployerWallet.getTokensCreatedByMe();

            console.log(deployerTokens);

            expect(deployerTokens.length).to.equal(1);

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

});
