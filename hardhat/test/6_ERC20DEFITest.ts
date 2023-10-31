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

    describe("DAO Governance Smart Contract", () => {
            
        describe("TKN Governance Token", () => {
            
            it("Has a name", async () => {

            });

        });

        describe("TimeLock Smart Contract", () => {
            
            it("Has a name", async () => {

            });

        });

        describe("Treasury Smart Contract", () => {

            const createTestProposal:Function = async () : Promise<any> => {

                const proposalId:number = 1;

                const proposalDescription:string = "Lorem ipsum dolor sit amet, consectetur adipiscing el";

                const proposalFunds:number = 24;
                
                const tx:any = await ERCTreasurySmartContract.connect(proposerWallet).createProposal(
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

            it("Creates a proposal", async () => {

                const proposalPayload: any = await createTestProposal();
                
                expect(proposalPayload.proposerWalletAddress).to.be.equal(proposerWallet.address);
                expect(proposalPayload.executorWalletAddress).to.be.equal(executorWallet.address);
                expect(proposalPayload.executedAt).to.be.equal(0);
                expect(proposalPayload.amountDisbursed).to.be.false;
                expect(
                    parseFloat(
                        Snippets.weiToEthers(
                            `${await ethers.provider.getBalance(await ERCTreasurySmartContract.getAddress())}`
                        )
                    ).toFixed(5))
                    .to.be.equal(
                    (
                        parseFloat(
                            Snippets.weiToEthers(proposalPayload.totalFunds)
                        )
                    ).toFixed(5)
                );

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

        it("Cast votes and Release Funds", async () => {

            let latestBlock, blockNumber, proposalState;

            //console.log(`Contract ERCTreasurySmartContract Owner: ${await ERCTreasurySmartContract.owner()}`)
            
            //console.log(`deployerWallet: ${deployerWallet.address}`)
            //console.log(`executorWallet: ${executorWallet.address}`)
            //console.log(`proposerWallet: ${proposerWallet.address}`)
            //console.log(`voter1Wallet:   ${voter1Wallet.address}`)
            //console.log(`voter2Wallet:   ${voter2Wallet.address}`)
            //console.log(`voter3Wallet:   ${voter3Wallet.address}`)
            //console.log(`voter4Wallet:   ${voter4Wallet.address}`)
            //console.log(`voter5Wallet:   ${voter5Wallet.address}`)

            //console.log(`deployerWallet BAL: ${await ERCJouelMasterChefSmartContract.balanceOf(deployerWallet.address)}`)
            //console.log(`executorWallet BAL: ${await ERCJouelMasterChefSmartContract.balanceOf(executorWallet.address)}`)
            //console.log(`proposerWallet BAL: ${await ERCJouelMasterChefSmartContract.balanceOf(proposerWallet.address)}`)
            //console.log(`voter1Wallet BAL:   ${await ERCJouelMasterChefSmartContract.balanceOf(voter1Wallet.address)}`)
            //console.log(`voter2Wallet BAL:   ${await ERCJouelMasterChefSmartContract.balanceOf(voter2Wallet.address)}`)
            //console.log(`voter3Wallet BAL:   ${await ERCJouelMasterChefSmartContract.balanceOf(voter3Wallet.address)}`)
            //console.log(`voter4Wallet BAL:   ${await ERCJouelMasterChefSmartContract.balanceOf(voter4Wallet.address)}`)
            //console.log(`voter5Wallet BAL:   ${await ERCJouelMasterChefSmartContract.balanceOf(voter5Wallet.address)}`)

            const executorInitialBalance:any = await ethers.provider.getBalance(executorWallet.address);

            //console.log(`Funds inside of executor: ${(executorInitialBalance)} WEI\n`);

            let treasuryInitialBalance:any = await ethers.provider.getBalance(await ERCTreasurySmartContract.getAddress());

            //console.log(`Funds inside of treasury 0: ${(treasuryInitialBalance)} WEI\n`)

            await delegateAccounts(
                ERCJouelMasterChefSmartContract, 
                deployerWallet,
                voter1Wallet, 
                voter2Wallet, 
                voter3Wallet, 
                voter4Wallet, 
                voter5Wallet
            )

            const proposalDescription:string = "Release Funds from Treasury"

            //console.log(`Proposal Description: ${(proposalDescription)}\n`)

            const id:any = await makeProposal(
                ERCGovernanceDAOSmartContract, 
                ERCTreasurySmartContract,
                proposerWallet,
                executorWallet,
                Snippets.ethersToWei(contractArgs.CONTRACT_PETTY_FUNDS),
                proposalDescription, 
                parseInt(contractArgs.CONTRACT_VOTING_DELAY)
                //contractArgs.CONTRACT_VOTING_DELAY,
                //contractArgs.CONTRACT_VOTING_PERIOD,
                //contractArgs.CONTRACT_PROPOSAL_THRESHOLD,
                //contractArgs.CONTRACT_QUORUM_PERCENTAGE,
            );

            //console.log("Returned Proposal ID", id);

            proposalState = await ERCGovernanceDAOSmartContract.state(id);
            //console.log(`Current state of proposal: ${proposalState.toString()} [${Snippets.getProposalState(proposalState)}] \n`);

            treasuryInitialBalance = await ethers.provider.getBalance(await ERCTreasurySmartContract.getAddress());

            //console.log(`Funds inside of treasury 1: ${(treasuryInitialBalance)} WEI\n`)

            //console.log(`Funds released? ${await ERCTreasurySmartContract.isReleased(id)}\n`)

            expect(await ERCTreasurySmartContract.isReleased(id)).to.be.false;

            expect(treasuryInitialBalance).to.be.equal(Snippets.ethersToWei(parseFloat(contractArgs.CONTRACT_PETTY_FUNDS)));

            expect(String(id).length).to.be.greaterThan(75);

            proposalState = await ERCGovernanceDAOSmartContract.state(id);
            //console.log(`Current state of proposal: ${proposalState.toString()} [${Snippets.getProposalState(proposalState)}] \n`);

            expect(parseInt(proposalState.toString())).to.equal(1); //3 if not ready

            const snapshot = await ERCGovernanceDAOSmartContract.proposalSnapshot(id)
            //console.log(`Proposal created on block ${snapshot.toString()}`)

            const deadline = await ERCGovernanceDAOSmartContract.proposalDeadline(id)
            //console.log(`Proposal deadline on block ${deadline.toString()}\n`)

            expect(parseInt(`${snapshot}`)+parseInt(contractArgs.CONTRACT_VOTING_PERIOD)).to.be.equal(parseInt(`${deadline}`));

            latestBlock = await ethers.provider.getBlock("latest");
            blockNumber = latestBlock?.number;

            //console.log(`Current blocknumber: ${blockNumber}\n`, latestBlock)

            const quorum = await ERCGovernanceDAOSmartContract.quorum(blockNumber - 1)
            //console.log(`Number of votes required to pass: ${Math.round(Snippets.weiToEthers(quorum))}ETH or ${quorum}WEI)}\n`)

            expect(quorum).to.equal(Snippets.ethersToWei(parseInt(contractArgs.CONTRACT_QUORUM_PERCENTAGE)/100*parseInt(contractArgs.CONTRACT_INITIAL_SUPPLY))) // Todo, why the env is not working ??? contractArgs.CONTRACT_QUORUM_PERCENTAGE);

            // Vote
            //console.log(`Casting votes...\n`)

            await castVotes(
                ERCGovernanceDAOSmartContract,
                id,
                voter1Wallet, 
                voter2Wallet, 
                voter3Wallet, 
                voter4Wallet, 
                voter5Wallet,
                contractArgs.CONTRACT_VOTING_PERIOD
            )

            // States: Pending, Active, Canceled, Defeated, Succeeded, Queued, Expired, Executed
            proposalState = await ERCGovernanceDAOSmartContract.state(id)
            
            //console.log(`Current state of proposal: ${proposalState.toString()} [${Snippets.getProposalState(proposalState)}] \n`);

            expect(parseInt(proposalState.toString())).to.equal(4);

            const { againstVotes, forVotes, abstainVotes } = await ERCGovernanceDAOSmartContract.proposalVotes(id)
            //console.log(`Votes For: ${forVotes}`)
            //console.log(`Votes Against: ${againstVotes}`)
            //console.log(`Votes Neutral: ${abstainVotes}\n`)

            
            latestBlock = await ethers.provider.getBlock("latest");
            blockNumber = latestBlock?.number;
            //console.log(`Current blocknumber: ${blockNumber}\n`)

            proposalState = await ERCGovernanceDAOSmartContract.state(id)
            //console.log(`Current state of proposal: ${proposalState.toString()} [${Snippets.getProposalState(proposalState)}] \n`);

            expect(parseInt(proposalState.toString())).to.equal(4);

            // Queue 
            const hash = ethers.keccak256(ethers.toUtf8Bytes(proposalDescription));

            await queueProposal(
                ERCGovernanceDAOSmartContract, 
                ERCTreasurySmartContract, 
                hash, 
                id,
                executorWallet
            );

            proposalState = await ERCGovernanceDAOSmartContract.state(id)
            //console.log(`Current state of proposal: ${proposalState.toString()} [${Snippets.getProposalState(proposalState)}] \n`);

            let proposalPayload:any = await ERCTreasurySmartContract.getProposalDetails(id);

            //console.log("Proposal Payload 0:", proposalPayload)

            treasuryInitialBalance = await ethers.provider.getBalance(await ERCTreasurySmartContract.getAddress());

            //console.log(`Funds inside of treasury 2  : Just before execute XX : ${(await ERCTreasurySmartContract.getAddress())} : ${(treasuryInitialBalance)} WEI\n`)

            treasuryInitialBalance = await ethers.provider.getBalance(ERCTimelockSmartContract.getAddress());

            //console.log(`Funds inside of timeloack 3 : Just before execute YY : ${(await ERCTimelockSmartContract.getAddress())}  : ${(treasuryInitialBalance)} WEI\n`)

            proposalPayload = await executeProposal(
                ERCGovernanceDAOSmartContract, 
                ERCTreasurySmartContract, 
                hash, 
                id,
                parseInt(contractArgs.CONTRACT_MINIMUM_DELAY),
                executorWallet
            );

            //console.log("Proposal Payload 1:", proposalPayload)

            proposalState = await ERCGovernanceDAOSmartContract.state(id)
            //console.log(`Current state of proposal: ${proposalState.toString()} [${Snippets.getProposalState(proposalState)}] \n`);

            //console.log(`Funds released? ${await ERCTreasurySmartContract.isReleased(id)}\n`);

            //console.log(`Funds inside of treasury: ${Snippets.weiToEthers(await ethers.provider.getBalance(ERCTreasurySmartContract.getAddress()))} ETH\n`);

            //console.log(`Funds inside of executor: ${Snippets.weiToEthers(await ethers.provider.getBalance(executorWallet.address))} ETH\n`);

            //console.log(`Snapshot executor proposal:`, await ERCTreasurySmartContract.getProposalDetails(id));

            //console.log(`Snapshot proposal executor:`, await ERCTreasurySmartContract.getProposalExecutor(id));

            expect(await ERCTreasurySmartContract.isReleased(id)).to.be.true;

            expect(await ethers.provider.getBalance(await ERCTreasurySmartContract.getAddress())).to.be.equal(0);

            expect(
                parseFloat(Snippets.weiToEthers(await ethers.provider.getBalance(executorWallet.address))).toFixed(7))
                .to.be
                .equal(
                    (parseFloat(Snippets.weiToEthers(executorInitialBalance)) + parseFloat(contractArgs.CONTRACT_PETTY_FUNDS)).toFixed(7)
                );

        });

    });

    await new Promise(res =>  setTimeout(() => res(null), 5000));

});
