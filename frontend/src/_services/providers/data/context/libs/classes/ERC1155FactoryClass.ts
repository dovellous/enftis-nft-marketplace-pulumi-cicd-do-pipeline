import { BaseFactoryClass, Web3Config, getABIS } from ".";

class ERC1155FactoryClass extends BaseFactoryClass {

    constructor(chain: any, walletAddress: `0x${string}`) {

        const contractName: string = Web3Config.ERC1155_FACTORY;

        super(chain, walletAddress, contractName);

        this.updateCurrentClient(chain, walletAddress);

    }

    async updateCurrentClient(chain: any, walletAddress: `0x${string}`): Promise<any> {

        if (!chain) {
            return;
        }

        const abisArray:any = await getABIS();

        const abiJSON: any = abisArray[`C_${chain.id}`];

        const addressJSON: any = abisArray[`A_${chain.id}`];

        super.updateClient(abiJSON, addressJSON, chain, walletAddress);

    }

    async exe(functionName: string, args: any, successCallback: Function, errorCallback: Function, finalCallback: Function): Promise<any> {

        if (!this.isReady()) {

            this.updateCurrentClient(this.getCurrentChain(), this.getCurrentWalletAddress());

            return await this.exe(functionName, args, successCallback, errorCallback, finalCallback);

        }

        if (Web3Config.ERC1155_FACTORY_READS.includes(functionName)) {

            return await super.readContract(functionName, args, successCallback, errorCallback, finalCallback);

        } else if (Web3Config.ERC1155_FACTORY_WRITES.includes(functionName)) {

            return await super.writeContract(functionName, args, successCallback, errorCallback, finalCallback);

        } else {

            throw ('Function not valid:' + functionName);

        }

    }

}

export { ERC1155FactoryClass }