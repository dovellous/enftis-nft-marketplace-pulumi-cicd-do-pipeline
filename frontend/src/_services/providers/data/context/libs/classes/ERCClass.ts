import { BaseFactoryClass, getABIS } from ".";

class ERCClass extends BaseFactoryClass {
  contractPrefix: string = "";

  readMethods: Array<string> = [];

  writeMethods: Array<string> = [];

  constructor(
    contractPrefix: string,
    readMethods: Array<string>,
    writeMethods: Array<string>,
    chain: any,
    walletAddress: `0x${string}`,
    contractName: string
  ) {
    super(chain, walletAddress, contractName);

    this.contractPrefix = contractPrefix;

    this.readMethods = readMethods;

    this.writeMethods = writeMethods;

    this.updateCurrentClient(chain, walletAddress);
  }

  async updateCurrentClient(
    chain: any,
    walletAddress: `0x${string}`
  ): Promise<any> {
    if (!chain || !walletAddress) {
      return;
    }

    const prefix: string = this.contractPrefix;

    const abisArray: any = await getABIS();

    const abiJSON: any = abisArray[`${prefix}C_${chain.id}`];

    const addressJSON: any = abisArray[`${prefix}A_${chain.id}`];

    super.updateClient(abiJSON, addressJSON, chain, walletAddress);
  }

  async exe(
    functionName: string,
    args: any,
    successCallback: Function,
    errorCallback: Function,
    finalCallback: Function
  ): Promise<any> {
    if (
      !functionName ||
      !args ||
      !successCallback ||
      !errorCallback ||
      !finalCallback
    ) {
      return;
    }

    if (!this.isReady()) {
      this.updateCurrentClient(
        this.getCurrentChain(),
        this.getCurrentWalletAddress()
      );

      return await this.exe(
        functionName,
        args,
        successCallback,
        errorCallback,
        finalCallback
      );
    }

    if (this.readMethods.includes(functionName)) {
      return await super.readContract(
        functionName,
        args,
        successCallback,
        errorCallback,
        finalCallback
      );
    } else if (this.writeMethods.includes(functionName)) {
      return await super.writeContract(
        functionName,
        args,
        successCallback,
        errorCallback,
        finalCallback
      );
    } else {
      // eslint-disable-next-line no-throw-literal
      throw "Function not valid:" + functionName;
    }
  }
}

export { ERCClass };
