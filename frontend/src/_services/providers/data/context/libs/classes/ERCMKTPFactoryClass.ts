import { ERCClass, Web3Config } from ".";

class ERCMKTPFactoryClass extends ERCClass {
  constructor(chain: any, walletAddress: `0x${string}`) {
    const contractName: string = Web3Config.ERCMKTP_FACTORY;

    const contractPrefix: string = "ERCMKTP";

    super(
      contractPrefix,
      Web3Config.ERCMKTP_FACTORY_READS,
      Web3Config.ERCMKTP_FACTORY_WRITES,
      chain,
      walletAddress,
      contractName
    );
  }
}

export { ERCMKTPFactoryClass };
