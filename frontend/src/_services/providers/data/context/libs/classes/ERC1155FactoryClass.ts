import { ERCClass, Web3Config } from ".";

class ERC1155FactoryClass extends ERCClass {
  constructor(chain: any, walletAddress: `0x${string}`) {
    const contractName: string = Web3Config.ERC1155_FACTORY;

    const contractPrefix: string = "ERC1155";

    super(
      contractPrefix,
      Web3Config.ERC1155_FACTORY_READS,
      Web3Config.ERC1155_FACTORY_WRITES,
      chain,
      walletAddress,
      contractName
    );
  }
}

export { ERC1155FactoryClass };
