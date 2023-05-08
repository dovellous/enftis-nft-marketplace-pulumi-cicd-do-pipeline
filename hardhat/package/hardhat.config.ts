import { HardhatUserConfig } from "hardhat/config";
import { config as dotEnvConfig } from "dotenv";
import "@nomicfoundation/hardhat-toolbox";
dotEnvConfig();

module.exports = {
  defaultNetwork: `${process.env.DEFAULT_NETWORK_NAME}`,
  etherscan: {
    apiKey: {
      sepolia: `${process.env.ETHERSCAN_API_KEY}`,
    }
  },
  networks: {
    hardhat: {
      
    },
    sepolia: {
      url: `${process.env.ALCHEMY_URL_SEPOLIA}/${process.env.ALCHEMY_KEY}`,
      accounts: [`${process.env.DEPLOYER_ACCOUNT_KEY}`]
    }
  },
  solidity: {
    compilers: [
      {
        version: `${process.env.SOLC_COMPILER_VERSION}`,
        settings: {
          optimizer: {
            enabled: true,
            runs: 1,
            details: {
              yul: true
            }
          }
        }
      },
    ]
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 60000
  }
}
