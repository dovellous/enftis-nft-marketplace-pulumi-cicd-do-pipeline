import { ethers } from "hardhat";
const path = require("path");

const Snippets = {
    ethersToWei: (value: any) => {
      return ethers.utils.parseUnits(value.toString(), "ether");
    },
    weiToEthers: (value: any) => {
      return ethers.utils.formatEther(value);
    },
    saveFrontendFiles: (token: any, tokenName: string) => {
        const fs = require("fs");
        const contractsDir = path.join(__dirname, "../../..", "frontend", "src", "contracts");

        console.log("Copying from Contracts Dir:", contractsDir);
      
        if (!fs.existsSync(contractsDir)) {
          fs.mkdirSync(contractsDir);
        }
      

          const contractAddressConfig:any = new Object();

          contractAddressConfig[tokenName] = token.address;

        fs.writeFileSync(
          path.join(contractsDir, `${tokenName}ContractAddress.json`),
          JSON.stringify(contractAddressConfig, undefined, 2)
        );
      
        const TokenArtifact = artifacts.readArtifactSync(tokenName);
      
        fs.writeFileSync(
          path.join(contractsDir, `${tokenName}.json`),
          JSON.stringify(TokenArtifact, null, 2)
        );
      }
  };

module.exports = Snippets;