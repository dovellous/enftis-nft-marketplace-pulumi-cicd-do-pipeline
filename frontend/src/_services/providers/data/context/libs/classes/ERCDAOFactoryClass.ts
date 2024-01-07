import { ERCClass, Web3Config } from ".";

class ERCDAOFactoryClass extends ERCClass {
  constructor(chain: any, walletAddress: `0x${string}`) {
    const contractName: string = Web3Config.ERCDAO_FACTORY;

    const contractPrefix: string = "ERCDAO";

    super(
      contractPrefix,
      Web3Config.ERCDAO_FACTORY_READS,
      Web3Config.ERCDAO_FACTORY_WRITES,
      chain,
      walletAddress,
      contractName
    );
  }
}

export { ERCDAOFactoryClass };
