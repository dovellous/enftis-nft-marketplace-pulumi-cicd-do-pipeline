import { ERCClass, Web3Config } from ".";

class ERC721FactoryClass extends ERCClass {
  constructor(chain: any, walletAddress: `0x${string}`) {
    const contractName: string = Web3Config.ERC721_FACTORY;

    const contractPrefix: string = "ERC721";

    super(
      contractPrefix,
      Web3Config.ERC721_FACTORY_READS,
      Web3Config.ERC721_FACTORY_WRITES,
      chain,
      walletAddress,
      contractName
    );
  }
}

export { ERC721FactoryClass };
