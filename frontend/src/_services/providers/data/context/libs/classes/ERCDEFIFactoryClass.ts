import { ERCClass, Web3Config } from ".";

class ERCDEFIFactoryClass extends ERCClass {
  constructor(chain: any, walletAddress: `0x${string}`) {
    const contractName: string = Web3Config.ERCDEFI_FACTORY;

    const contractPrefix: string = "ERCDEFI";

    super(
      contractPrefix,
      Web3Config.ERCDEFI_FACTORY_READS,
      Web3Config.ERCDEFI_FACTORY_WRITES,
      chain,
      walletAddress,
      contractName
    );
  }
}

export { ERCDEFIFactoryClass };
