/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "IERC2981",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2981__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "ERC2981",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC2981__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Burnable__factory>;
    getContractFactory(
      name: "ERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>;
    getContractFactory(
      name: "ERC721Royalty",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Royalty__factory>;
    getContractFactory(
      name: "ERC721URIStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721URIStorage__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "ERCConstants",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERCConstants__factory>;
    getContractFactory(
      name: "ERCErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERCErrors__factory>;
    getContractFactory(
      name: "ERCEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERCEvents__factory>;
    getContractFactory(
      name: "ERCFallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERCFallback__factory>;
    getContractFactory(
      name: "ERCModifiers",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERCModifiers__factory>;
    getContractFactory(
      name: "ERC721FactoryBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721FactoryBase__factory>;
    getContractFactory(
      name: "ERC721FactoryBurner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721FactoryBurner__factory>;
    getContractFactory(
      name: "ERC721FactoryGetSet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721FactoryGetSet__factory>;
    getContractFactory(
      name: "ERC721FactoryMinter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721FactoryMinter__factory>;
    getContractFactory(
      name: "ERC721FactoryWorker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721FactoryWorker__factory>;
    getContractFactory(
      name: "ERC721Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Factory__factory>;
    getContractFactory(
      name: "Snippets",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Snippets__factory>;

    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "IERC2981",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC2981>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "ERC2981",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC2981>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Burnable>;
    getContractAt(
      name: "ERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Enumerable>;
    getContractAt(
      name: "ERC721Royalty",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Royalty>;
    getContractAt(
      name: "ERC721URIStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721URIStorage>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "ERCConstants",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERCConstants>;
    getContractAt(
      name: "ERCErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERCErrors>;
    getContractAt(
      name: "ERCEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERCEvents>;
    getContractAt(
      name: "ERCFallback",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERCFallback>;
    getContractAt(
      name: "ERCModifiers",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERCModifiers>;
    getContractAt(
      name: "ERC721FactoryBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721FactoryBase>;
    getContractAt(
      name: "ERC721FactoryBurner",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721FactoryBurner>;
    getContractAt(
      name: "ERC721FactoryGetSet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721FactoryGetSet>;
    getContractAt(
      name: "ERC721FactoryMinter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721FactoryMinter>;
    getContractAt(
      name: "ERC721FactoryWorker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721FactoryWorker>;
    getContractAt(
      name: "ERC721Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Factory>;
    getContractAt(
      name: "Snippets",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Snippets>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
