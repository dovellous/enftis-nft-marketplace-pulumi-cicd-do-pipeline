import {time, loadFixture} from "@nomicfoundation/hardhat-network-helpers";
import {anyValue} from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import {expect} from "chai";
import {ethers} from "hardhat";
import {
    castVotes,
    delegateAccounts,
    makeProposal,
    queueProposal,
    executeProposal,
    moveTime
} from "../scripts/helpers/deployer-helper";
import {BigNumber} from "ethers";
import helpers from "@nomicfoundation/hardhat-toolbox/network-helpers";
import {ModifierFlags} from "typescript";

const fs = require('fs');

const Snippets = require("../scripts/libs/Snippets");

const provider: any = ethers.getDefaultProvider();

const targetDir: string = './test/txt/';

fs.mkdirSync(targetDir, {recursive: true});

const CHAIN_IDS: Array<any> = process.env.CHAIN_IDS !== null ? String(process.env.CHAIN_IDS).split(",") : [];

describe(`${process.env.CONTRACT_FILE_MCF}`, async function () {
    let ERCJWLXTKNSmartContract: any;
    let ERCJouelMasterChefSmartContract: any;

    let deployerWallet:any, aliceWallet:any, bobWallet:any, charlieWallet:any, donWallet:any, args:any;

    let deployerWalletAccount:any;
    let aliceWalletAccount:any;
    let bobWalletAccount:any;
    let charlieWalletAccount:any;
    let donWalletAccount:any;

    beforeEach(async () => {

        const { smartContract, governanceTokenSmartContract, _deployerWallet, _aliceWallet, _bobWallet, _charlieWallet, _donWallet, _args } = await loadFixture(deploySmartContract);

        ERCJouelMasterChefSmartContract = smartContract;
        ERCJWLXTKNSmartContract = governanceTokenSmartContract;
        deployerWallet = _deployerWallet;
        aliceWallet = _aliceWallet;
        bobWallet = _bobWallet;
        charlieWallet = _charlieWallet;
        donWallet = _donWallet;
        args = _args;

        deployerWalletAccount = await ERCJouelMasterChefSmartContract.connect(deployerWallet);
        aliceWalletAccount = await ERCJouelMasterChefSmartContract.connect(aliceWallet);
        bobWalletAccount = await ERCJouelMasterChefSmartContract.connect(bobWallet);
        charlieWalletAccount = await ERCJouelMasterChefSmartContract.connect(charlieWallet);
        donWalletAccount = await ERCJouelMasterChefSmartContract.connect(donWallet);

    });

    const deploySmartContract = async (): Promise<any> => {

        const [_deployerWallet, _aliceWallet, _bobWallet, _charlieWallet, _donWallet] = await ethers.getSigners();

        //console.log("      💰  Deploying contracts with the account:", deployerWallet.address);

        //console.log("      💴  Account balance:", (await provider.getBalance(deployerWallet.address)).toString());

        const CONTRACT_FILE: any = process.env.CONTRACT_FILE_MCF;

        const CONTRACT_PARAMS: any = require(`../scripts/contract-configs/${CONTRACT_FILE}.Config.ts`)

        // console.log( "Deploy with the following arguments", CONTRACT_PARAMS );

        // ++++++++++++

        //JWLXTKN
        const ERCJWLXTKNSmartContractAddressBuffer: any = fs.readFileSync(`${targetDir}JWLXTKN.txt`);

        const ERCJWLXTKNSmartContractAddress: string = ERCJWLXTKNSmartContractAddressBuffer.toString();

        const ERCJWLXTKNSmartContractABIBuffer: any = fs.readFileSync(`./artifacts/contracts/JWLXTKN.sol/JWLXTKN.json`);

        const ERCJWLXTKNSmartContractABI: string = ERCJWLXTKNSmartContractABIBuffer.toString();

        const ERCJWLXTKNSmartContractABIObject: any = JSON.parse(ERCJWLXTKNSmartContractABI);

        const ercJWLXTKNSmartContract = new ethers.Contract(ERCJWLXTKNSmartContractAddress, ERCJWLXTKNSmartContractABIObject.abi, provider);

        // Deploy token

        const ercJouelMasterChefSmartContract: any = await ethers.getContractFactory(CONTRACT_FILE);

        console.log([
            ERCJWLXTKNSmartContractAddress,
            await ercJWLXTKNSmartContract.getAddress(),
            CONTRACT_PARAMS.CONTRACT_JWLMCF_TREASURY_ACCOUNT,
            CONTRACT_PARAMS.CONTRACT_JWLTKN_PER_BLOCK,
            CONTRACT_PARAMS.CONTRACT_JWLMCF_START_BLOCK,
            CONTRACT_PARAMS.CONTRACT_JWLMCF_MULTIPLIER
        ]);

        ERCJouelMasterChefSmartContract = await ercJouelMasterChefSmartContract.deploy(
            await ercJWLXTKNSmartContract.getAddress(),
            CONTRACT_PARAMS.CONTRACT_JWLMCF_TREASURY_ACCOUNT,
            CONTRACT_PARAMS.CONTRACT_JWLTKN_PER_BLOCK,
            CONTRACT_PARAMS.CONTRACT_JWLMCF_START_BLOCK,
            CONTRACT_PARAMS.CONTRACT_JWLMCF_MULTIPLIER
        );

        await ERCJouelMasterChefSmartContract.waitForDeployment();

        ERCJouelMasterChefSmartContract.on(
            "*",
            (event: any) => {
                ////console.log(`EVENT: ERCJouelMasterChefSmartContract\n`, event.event, event.args, event.eventSignature)
            }
        )

        // ++++++++++++

        const _args:any = {
            contractGVNAddress: ERCJWLXTKNSmartContractAddress,
            contractGVNFile: CONTRACT_PARAMS.CONTRACT_FILE_TKN,
            contractGVNName: CONTRACT_PARAMS.CONTRACT_NAME_TKN,
            contractGVNSymbol: CONTRACT_PARAMS.CONTRACT_SYMBOL_TKN,
            contractGVNDecimals: CONTRACT_PARAMS.CONTRACT_DECIMALS_TKN,
            contractGVNInitialSupply: CONTRACT_PARAMS.CONTRACT_INITIAL_SUPPLY_DAO,
            contractGVNTotalSupply: CONTRACT_PARAMS.CONTRACT_MAXIMUM_SUPPLY_DAO,
            contractTreasuryAccount: CONTRACT_PARAMS.CONTRACT_JWLMCF_TREASURY_ACCOUNT,
            contractTokenspErBlock: CONTRACT_PARAMS.CONTRACT_JWLTKN_PER_BLOCK,
            contractStartBlock: CONTRACT_PARAMS.CONTRACT_JWLMCF_START_BLOCK,
            contractMultiplier: CONTRACT_PARAMS.CONTRACT_JWLMCF_MULTIPLIER,
            contractABI: CONTRACT_PARAMS.ABI_VALUES,
            contractENC: CONTRACT_PARAMS.ABI_ENCODED,
            contractParams: CONTRACT_PARAMS
        }

        console.log("  Arguments ...", _args);

        return { smartContract: ERCJouelMasterChefSmartContract, governanceTokenSmartContract: ercJWLXTKNSmartContract, _deployerWallet, _aliceWallet, _bobWallet, _charlieWallet, _donWallet, _args };

    }

    describe("Deployment", () => {

        it("Should deploy the contract successfully!", async function () {

            //console.log("  Deploying Contract ...", await ERCGovernanceDAOSmartContract.getAddress());

            expect(await ERCJouelMasterChefSmartContract.getAddress()).to.be.properAddress;

        });

    });

    describe("Jouel Governance Token", () => {

        describe("JWLXTKN Governance Token", () => {

            it("Has an address", async () => {

                const address: any = await ERCJWLXTKNSmartContract.getAddress();

                //console.log(address);

                expect(address).to.equal(args.contractGVNAddress);

            });

            it("Has a name", async () => {

                const name: any = await ERCJWLXTKNSmartContract.connect(deployerWallet).name();

                //console.log(name);

                expect(name).to.equal(args.contractGVNName);

            });

            it("Has a symbol", async () => {

                const symbol: any = await ERCJWLXTKNSmartContract.connect(deployerWallet).symbol();

                //console.log(symbol);

                expect(symbol).to.equal(args.contractGVNSymbol);

            });

            it("Has 18 decimals", async () => {

                const decimals: bigint = await ERCJWLXTKNSmartContract.connect(deployerWallet).decimals();

                //console.log(decimals);

                expect(decimals).to.equal(BigInt(args.contractGVNDecimals));

            });

            it("Has a total supply", async () => {

                const totalSupply: bigint = await ERCJWLXTKNSmartContract.connect(deployerWallet).totalSupply();

                //console.log(totalSupply);

                expect(totalSupply).to.equal(Snippets.ethersToWei(args.contractGVNTotalSupply));

            });

            it("Has its own balance in JWLTKN", async () => {

                const balance: bigint = await ERCJWLXTKNSmartContract.connect(deployerWallet).balanceOf(await ERCJWLXTKNSmartContract.getAddress());

                //console.log(balance);

                expect(balance).to.equal(BigInt(0));

            });

            it("Shows a balance of a deployer", async () => {

                let balance: bigint = await ERCJWLXTKNSmartContract.connect(deployerWallet).balanceOf(deployerWallet.address);

                console.log(balance);

                balance = await ERCJWLXTKNSmartContract.connect(deployerWallet).balanceOf(aliceWallet.address);

                console.log(balance);

                balance = await ERCJWLXTKNSmartContract.connect(deployerWallet).balanceOf(bobWallet.address);

                console.log(balance);

                balance = await ERCJWLXTKNSmartContract.connect(deployerWallet).balanceOf(charlieWallet.address);

                console.log(balance);

                balance = await ERCJWLXTKNSmartContract.connect(deployerWallet).balanceOf(donWallet.address);

                console.log(balance);

                expect(balance).to.equal(args.contractGVNInitialSupply);

            });

        });

    });

    await new Promise(res => setTimeout(() => res(null), 5000));

});
