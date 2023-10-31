import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { castVotes, delegateAccounts, makeProposal, queueProposal, executeProposal, moveTime } from "../scripts/helpers/deployer-helper";
import { BigNumber } from "ethers";
import helpers from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ModifierFlags } from "typescript";

const fs = require('fs');

const Snippets = require("../scripts/libs/Snippets");

const provider:any = ethers.getDefaultProvider();

const targetDir:string = './test/txt/';

fs.mkdirSync(targetDir, { recursive: true });

const CHAIN_IDS:Array<any> = process.env.CHAIN_IDS !== null ? String(process.env.CHAIN_IDS).split(",") : [];

describe(`${process.env.CONTRACT_FILE_MCF}`, async function () {

    let ERCJouelMasterChefSmartContract:any;

    let deployerWallet:any,
        executorWallet:any, 
        proposerWallet:any, 
        voter1Wallet:any, 
        voter2Wallet:any, 
        voter3Wallet:any, 
        voter4Wallet:any, 
        voter5Wallet:any,
        contractArgs:any;

    beforeEach( async () => {

        await loadFixture(deploySmartContract);
        
    });

    const deploySmartContract = async (): Promise<any> => {

        const [ _deployer, _executor, _proposer, _voter1, _voter2, _voter3, _voter4, _voter5 ] = await ethers.getSigners();
        
        deployerWallet = _deployer;
        executorWallet = _executor;
        proposerWallet = _proposer;
        voter1Wallet = _voter1;
        voter2Wallet = _voter2;
        voter3Wallet = _voter3;
        voter4Wallet = _voter4;
        voter5Wallet = _voter5;
        
        //console.log("      💰  Deploying contracts with the account:", deployerWallet.address);

        //console.log("      💴  Account balance:", (await provider.getBalance(deployerWallet.address)).toString());

        const CONTRACT_FILE: any = process.env.CONTRACT_FILE_MCF;

        const CONTRACT_PARAMS: any = require(`../scripts/contract-configs/${CONTRACT_FILE}.Config.ts`)

        // console.log( "Deploy with the following arguments", CONTRACT_PARAMS );

        // ++++++++++++

        //JWLXTKN
        const ERCJWLXTKNSmartContractAddressBuffer:any = fs.readFileSync(`${targetDir}JWLXTKN.txt`);

        const ERCJWLXTKNSmartContractAddress:string = ERCJWLXTKNSmartContractAddressBuffer.toString();

        const ERCJWLXTKNSmartContractABIBuffer:any = fs.readFileSync(`./artifacts/contracts/JWLXTKN.sol/JWLXTKN.json`);

        const ERCJWLXTKNSmartContractABI:string = ERCJWLXTKNSmartContractABIBuffer.toString();

        const ERCJWLXTKNSmartContractABIObject:any = JSON.parse(ERCJWLXTKNSmartContractABI);

        let ERCJWLXTKNSmartContract: any = new ethers.Contract(ERCJWLXTKNSmartContractAddress, ERCJWLXTKNSmartContractABIObject.abi, provider);

        // Deploy token

        const ercJouelMasterChefSmartContract:any = await ethers.getContractFactory(CONTRACT_FILE);
        
        console.log([
            ERCJWLXTKNSmartContractAddress, 
            await ERCJWLXTKNSmartContract.getAddress(),
            CONTRACT_PARAMS.CONTRACT_JWLMCF_TREASURY_ACCOUNT, 
            CONTRACT_PARAMS.CONTRACT_JWLTKN_PER_BLOCK, 
            CONTRACT_PARAMS.CONTRACT_JWLMCF_START_BLOCK,
            CONTRACT_PARAMS.CONTRACT_JWLMCF_MULTIPLIER
        ]);

        ERCJouelMasterChefSmartContract = await ercJouelMasterChefSmartContract.deploy(
            await ERCJWLXTKNSmartContract.getAddress(),
            CONTRACT_PARAMS.CONTRACT_JWLMCF_TREASURY_ACCOUNT, 
            CONTRACT_PARAMS.CONTRACT_JWLTKN_PER_BLOCK, 
            CONTRACT_PARAMS.CONTRACT_JWLMCF_START_BLOCK,
            CONTRACT_PARAMS.CONTRACT_JWLMCF_MULTIPLIER
        );

        await ERCJouelMasterChefSmartContract.waitForDeployment();

        const ercJouelMasterChefSmartContractAddress:string = await ERCJouelMasterChefSmartContract.getAddress();

        fs.writeFileSync(`${targetDir}JWLMCF.txt`, ercJouelMasterChefSmartContractAddress);

        CHAIN_IDS.map((chain: any) => {

            const path: any = `../frontend/src/_services/providers/data/context/libs/artifacts/${chain}`;

            if (!fs.existsSync(path)) {
                fs.mkdirSync(path, { recursive: true });
            }

            // Addresses

            fs.writeFileSync(
                `${path}/JWLMCFAddress.json`,
                `{ "address": "${ercJouelMasterChefSmartContractAddress}" }`
            );
            
            // Contracts

            fs.copyFile('./artifacts/contracts/JWLMCF.sol/JWLMCF.json', `${path}/JWLMCFContract.json`, (err:any) => {
                if (err) throw err;
                console.log('Artifact file [ JWLMCF + Address ] copied successfully!');
            });

        })

        ERCJouelMasterChefSmartContract.on(
            "*",
            (event:any) => {
                ////console.log(`EVENT: ERCJouelMasterChefSmartContract\n`, event.event, event.args, event.eventSignature)
            }
        )

        // ++++++++++++
        
        contractArgs = CONTRACT_PARAMS;

        return { deployerWallet, executorWallet, proposerWallet, voter1Wallet, voter2Wallet, voter3Wallet, voter4Wallet, voter5Wallet, contractArgs};

    }

    describe("Deployment", () => {

        it("Should deploy the contract successfully!", async function () {

            //console.log("  Deploying Contract ...", await ERCGovernanceDAOSmartContract.getAddress());

            expect(await ERCJouelMasterChefSmartContract.getAddress()).to.be.properAddress;

        });

    });

    describe("Jouel MasterChef Smart Contract", () => {
            
        describe("JWLXTKN Governance Token", () => {

            it("Has a name", async () => {

            });

        });

        describe("Jouel MasterChef Smart Contract", () => {

            it("Has a name", async () => {

            });

            const createTestProposal:Function = async () : Promise<any> => {

                const proposalId:number = 1;

                const proposalDescription:string = "Lorem ipsum dolor sit amet, consectetur adipiscing el";

                const proposalFunds:number = 24;
                
                const tx:any = await ERCJouelMasterChefSmartContract.connect(proposerWallet).createProposal(
                    proposalId,
                    proposalDescription,
                    proposerWallet.address,
                    executorWallet.address, 
                    { 
                        value: Snippets.ethersToWei(proposalFunds)
                    }
                
                );

                await tx.wait(1);

                return await ERCTreasurySmartContract.getProposalDetails(proposalId);

            }
            
            it("Has an owner", async () => {

                expect(await ERCTreasurySmartContract.owner()).to.be.equal(await ERCTimelockSmartContract.getAddress());

            });

            it("Executes a proposal", async () => {

                await createTestProposal();

                //console.log("Proposal created, awaiting execution...");

                const executorInitialBalance: any = await ethers.provider.getBalance(executorWallet.address);

                const tx:any = await ERCTreasurySmartContract.connect(executorWallet).executeProposal(
                    1
                );

                await tx.wait(1);

                const proposalPayload: any = await ERCTreasurySmartContract.getProposalDetails(1);

                //console.log("Proposal payload after execution :", proposalPayload);

                expect(proposalPayload.proposerWalletAddress).to.be.equal(proposerWallet.address);
                expect(proposalPayload.executorWalletAddress).to.be.equal(executorWallet.address);
                expect(proposalPayload.executedAt).to.be.greaterThan(0);
                expect(proposalPayload.amountDisbursed).to.be.true;

                expect(
                    parseInt(
                        Snippets.weiToEthers(
                            `${await ethers.provider.getBalance(await ERCTreasurySmartContract.getAddress())}`
                        )
                    ))
                    .to.be.equal(0);
                
                expect(
                    parseFloat(
                        Snippets.weiToEthers(
                            `${await ethers.provider.getBalance(executorWallet.address)}`
                        )
                    ).toFixed(5))
                    .to.be.equal(
                        (
                            parseFloat(
                                Snippets.weiToEthers(proposalPayload.totalFunds)
                            )
                            +
                            parseFloat(
                                Snippets.weiToEthers(executorInitialBalance)
                            )
                        ).toFixed(5)
                    );

            });

        });

    });

    await new Promise(res =>  setTimeout(() => res(null), 5000));

});
