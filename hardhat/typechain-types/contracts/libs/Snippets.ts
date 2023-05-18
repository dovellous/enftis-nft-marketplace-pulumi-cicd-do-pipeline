/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace Structs {
  export type NFTItemStruct = {
    minterAddress: PromiseOrValue<string>;
    creatorAddress: [PromiseOrValue<string>, PromiseOrValue<string>];
    ownerAddress: PromiseOrValue<string>;
    tokenId: PromiseOrValue<BigNumberish>;
    createdAt: PromiseOrValue<BigNumberish>;
    updatedAt: PromiseOrValue<BigNumberish>;
  };

  export type NFTItemStructOutput = [
    string,
    [string, string],
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    minterAddress: string;
    creatorAddress: [string, string];
    ownerAddress: string;
    tokenId: BigNumber;
    createdAt: BigNumber;
    updatedAt: BigNumber;
  };
}

export interface SnippetsInterface extends utils.Interface {
  functions: {
    "ADDRESS()": FunctionFragment;
    "ADMIN_ROLE()": FunctionFragment;
    "AMOUNT_BELOW_MINTING_FEE()": FunctionFragment;
    "BASE_EXTENSION()": FunctionFragment;
    "CREATED_AFTER()": FunctionFragment;
    "CREATED_AT()": FunctionFragment;
    "CREATED_BEFORE()": FunctionFragment;
    "CREATOR()": FunctionFragment;
    "INDEX_OUT_OF_BOUNDS()": FunctionFragment;
    "INSUFFICIENT_PERMISSIONS()": FunctionFragment;
    "INVALID_AMOUNT()": FunctionFragment;
    "INVALID_CALLER()": FunctionFragment;
    "IPFS_PREFIX()": FunctionFragment;
    "MAX_SUPPLY_REACHED()": FunctionFragment;
    "MINTER()": FunctionFragment;
    "MINTER_ROLE()": FunctionFragment;
    "NOT_APPROVED_OR_OWNER()": FunctionFragment;
    "NOT_APPROVED_OWNER()": FunctionFragment;
    "NO_ADMINS_SPECIFIED()": FunctionFragment;
    "NO_MINTERS_SPECIFIED()": FunctionFragment;
    "OWNER()": FunctionFragment;
    "ROYALTIES_DISABLED()": FunctionFragment;
    "STRING()": FunctionFragment;
    "TIMESTAMP()": FunctionFragment;
    "TOKEN_DOES_NOT_EXISTS()": FunctionFragment;
    "TOKEN_ID()": FunctionFragment;
    "TOKEN_URI()": FunctionFragment;
    "TOKEN_URI_EXISTS()": FunctionFragment;
    "UINT256()": FunctionFragment;
    "UPDATED_AFTER()": FunctionFragment;
    "UPDATED_AT()": FunctionFragment;
    "UPDATED_BEFORE()": FunctionFragment;
    "ZERO_ADDRESS()": FunctionFragment;
    "bytes32String(bytes32)": FunctionFragment;
    "compareStrings(string,string)": FunctionFragment;
    "getBaseURI(string)": FunctionFragment;
    "getTokenURIFromID(string,uint256)": FunctionFragment;
    "getTokenURIFromURI(string,string)": FunctionFragment;
    "searchHasMatch(bytes32,bytes,(address,address[2],address,uint256,uint256,uint256),string)": FunctionFragment;
    "searchString(string,string)": FunctionFragment;
    "stringBytes32(string)": FunctionFragment;
    "stringContains(string,string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ADDRESS"
      | "ADMIN_ROLE"
      | "AMOUNT_BELOW_MINTING_FEE"
      | "BASE_EXTENSION"
      | "CREATED_AFTER"
      | "CREATED_AT"
      | "CREATED_BEFORE"
      | "CREATOR"
      | "INDEX_OUT_OF_BOUNDS"
      | "INSUFFICIENT_PERMISSIONS"
      | "INVALID_AMOUNT"
      | "INVALID_CALLER"
      | "IPFS_PREFIX"
      | "MAX_SUPPLY_REACHED"
      | "MINTER"
      | "MINTER_ROLE"
      | "NOT_APPROVED_OR_OWNER"
      | "NOT_APPROVED_OWNER"
      | "NO_ADMINS_SPECIFIED"
      | "NO_MINTERS_SPECIFIED"
      | "OWNER"
      | "ROYALTIES_DISABLED"
      | "STRING"
      | "TIMESTAMP"
      | "TOKEN_DOES_NOT_EXISTS"
      | "TOKEN_ID"
      | "TOKEN_URI"
      | "TOKEN_URI_EXISTS"
      | "UINT256"
      | "UPDATED_AFTER"
      | "UPDATED_AT"
      | "UPDATED_BEFORE"
      | "ZERO_ADDRESS"
      | "bytes32String"
      | "compareStrings"
      | "getBaseURI"
      | "getTokenURIFromID"
      | "getTokenURIFromURI"
      | "searchHasMatch"
      | "searchString"
      | "stringBytes32"
      | "stringContains"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "ADDRESS", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AMOUNT_BELOW_MINTING_FEE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BASE_EXTENSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CREATED_AFTER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CREATED_AT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CREATED_BEFORE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "CREATOR", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "INDEX_OUT_OF_BOUNDS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INSUFFICIENT_PERMISSIONS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INVALID_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INVALID_CALLER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IPFS_PREFIX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_SUPPLY_REACHED",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MINTER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MINTER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "NOT_APPROVED_OR_OWNER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "NOT_APPROVED_OWNER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "NO_ADMINS_SPECIFIED",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "NO_MINTERS_SPECIFIED",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "OWNER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ROYALTIES_DISABLED",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "STRING", values?: undefined): string;
  encodeFunctionData(functionFragment: "TIMESTAMP", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "TOKEN_DOES_NOT_EXISTS",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "TOKEN_ID", values?: undefined): string;
  encodeFunctionData(functionFragment: "TOKEN_URI", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "TOKEN_URI_EXISTS",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "UINT256", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "UPDATED_AFTER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UPDATED_AT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UPDATED_BEFORE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ZERO_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bytes32String",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "compareStrings",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBaseURI",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenURIFromID",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenURIFromURI",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "searchHasMatch",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      Structs.NFTItemStruct,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "searchString",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "stringBytes32",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "stringContains",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "ADDRESS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ADMIN_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "AMOUNT_BELOW_MINTING_FEE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BASE_EXTENSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CREATED_AFTER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "CREATED_AT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "CREATED_BEFORE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "CREATOR", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "INDEX_OUT_OF_BOUNDS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INSUFFICIENT_PERMISSIONS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INVALID_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INVALID_CALLER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IPFS_PREFIX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_SUPPLY_REACHED",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MINTER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MINTER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "NOT_APPROVED_OR_OWNER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "NOT_APPROVED_OWNER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "NO_ADMINS_SPECIFIED",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "NO_MINTERS_SPECIFIED",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "OWNER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ROYALTIES_DISABLED",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "STRING", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TIMESTAMP", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "TOKEN_DOES_NOT_EXISTS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "TOKEN_ID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TOKEN_URI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "TOKEN_URI_EXISTS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "UINT256", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "UPDATED_AFTER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "UPDATED_AT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "UPDATED_BEFORE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ZERO_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bytes32String",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "compareStrings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBaseURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTokenURIFromID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenURIFromURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "searchHasMatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "searchString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stringBytes32",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stringContains",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Snippets extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SnippetsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    AMOUNT_BELOW_MINTING_FEE(overrides?: CallOverrides): Promise<[string]>;

    BASE_EXTENSION(overrides?: CallOverrides): Promise<[string]>;

    CREATED_AFTER(overrides?: CallOverrides): Promise<[string]>;

    CREATED_AT(overrides?: CallOverrides): Promise<[string]>;

    CREATED_BEFORE(overrides?: CallOverrides): Promise<[string]>;

    CREATOR(overrides?: CallOverrides): Promise<[string]>;

    INDEX_OUT_OF_BOUNDS(overrides?: CallOverrides): Promise<[string]>;

    INSUFFICIENT_PERMISSIONS(overrides?: CallOverrides): Promise<[string]>;

    INVALID_AMOUNT(overrides?: CallOverrides): Promise<[string]>;

    INVALID_CALLER(overrides?: CallOverrides): Promise<[string]>;

    IPFS_PREFIX(overrides?: CallOverrides): Promise<[string]>;

    MAX_SUPPLY_REACHED(overrides?: CallOverrides): Promise<[string]>;

    MINTER(overrides?: CallOverrides): Promise<[string]>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    NOT_APPROVED_OR_OWNER(overrides?: CallOverrides): Promise<[string]>;

    NOT_APPROVED_OWNER(overrides?: CallOverrides): Promise<[string]>;

    NO_ADMINS_SPECIFIED(overrides?: CallOverrides): Promise<[string]>;

    NO_MINTERS_SPECIFIED(overrides?: CallOverrides): Promise<[string]>;

    OWNER(overrides?: CallOverrides): Promise<[string]>;

    ROYALTIES_DISABLED(overrides?: CallOverrides): Promise<[string]>;

    STRING(overrides?: CallOverrides): Promise<[string]>;

    TIMESTAMP(overrides?: CallOverrides): Promise<[string]>;

    TOKEN_DOES_NOT_EXISTS(overrides?: CallOverrides): Promise<[string]>;

    TOKEN_ID(overrides?: CallOverrides): Promise<[string]>;

    TOKEN_URI(overrides?: CallOverrides): Promise<[string]>;

    TOKEN_URI_EXISTS(overrides?: CallOverrides): Promise<[string]>;

    UINT256(overrides?: CallOverrides): Promise<[string]>;

    UPDATED_AFTER(overrides?: CallOverrides): Promise<[string]>;

    UPDATED_AT(overrides?: CallOverrides): Promise<[string]>;

    UPDATED_BEFORE(overrides?: CallOverrides): Promise<[string]>;

    ZERO_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    bytes32String(
      _bytes32: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    compareStrings(
      a: PromiseOrValue<string>,
      b: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getBaseURI(
      baseURI: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getTokenURIFromID(
      baseURI: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getTokenURIFromURI(
      baseURI: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    searchHasMatch(
      _itemKey: PromiseOrValue<BytesLike>,
      _data: PromiseOrValue<BytesLike>,
      _nftItem: Structs.NFTItemStruct,
      _tokenURIString: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    searchString(
      _self: PromiseOrValue<string>,
      _needle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    stringBytes32(
      source: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { result: string }>;

    stringContains(
      what: PromiseOrValue<string>,
      where: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  ADDRESS(overrides?: CallOverrides): Promise<string>;

  ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  AMOUNT_BELOW_MINTING_FEE(overrides?: CallOverrides): Promise<string>;

  BASE_EXTENSION(overrides?: CallOverrides): Promise<string>;

  CREATED_AFTER(overrides?: CallOverrides): Promise<string>;

  CREATED_AT(overrides?: CallOverrides): Promise<string>;

  CREATED_BEFORE(overrides?: CallOverrides): Promise<string>;

  CREATOR(overrides?: CallOverrides): Promise<string>;

  INDEX_OUT_OF_BOUNDS(overrides?: CallOverrides): Promise<string>;

  INSUFFICIENT_PERMISSIONS(overrides?: CallOverrides): Promise<string>;

  INVALID_AMOUNT(overrides?: CallOverrides): Promise<string>;

  INVALID_CALLER(overrides?: CallOverrides): Promise<string>;

  IPFS_PREFIX(overrides?: CallOverrides): Promise<string>;

  MAX_SUPPLY_REACHED(overrides?: CallOverrides): Promise<string>;

  MINTER(overrides?: CallOverrides): Promise<string>;

  MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

  NOT_APPROVED_OR_OWNER(overrides?: CallOverrides): Promise<string>;

  NOT_APPROVED_OWNER(overrides?: CallOverrides): Promise<string>;

  NO_ADMINS_SPECIFIED(overrides?: CallOverrides): Promise<string>;

  NO_MINTERS_SPECIFIED(overrides?: CallOverrides): Promise<string>;

  OWNER(overrides?: CallOverrides): Promise<string>;

  ROYALTIES_DISABLED(overrides?: CallOverrides): Promise<string>;

  STRING(overrides?: CallOverrides): Promise<string>;

  TIMESTAMP(overrides?: CallOverrides): Promise<string>;

  TOKEN_DOES_NOT_EXISTS(overrides?: CallOverrides): Promise<string>;

  TOKEN_ID(overrides?: CallOverrides): Promise<string>;

  TOKEN_URI(overrides?: CallOverrides): Promise<string>;

  TOKEN_URI_EXISTS(overrides?: CallOverrides): Promise<string>;

  UINT256(overrides?: CallOverrides): Promise<string>;

  UPDATED_AFTER(overrides?: CallOverrides): Promise<string>;

  UPDATED_AT(overrides?: CallOverrides): Promise<string>;

  UPDATED_BEFORE(overrides?: CallOverrides): Promise<string>;

  ZERO_ADDRESS(overrides?: CallOverrides): Promise<string>;

  bytes32String(
    _bytes32: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  compareStrings(
    a: PromiseOrValue<string>,
    b: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getBaseURI(
    baseURI: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getTokenURIFromID(
    baseURI: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getTokenURIFromURI(
    baseURI: PromiseOrValue<string>,
    _tokenURI: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  searchHasMatch(
    _itemKey: PromiseOrValue<BytesLike>,
    _data: PromiseOrValue<BytesLike>,
    _nftItem: Structs.NFTItemStruct,
    _tokenURIString: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  searchString(
    _self: PromiseOrValue<string>,
    _needle: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  stringBytes32(
    source: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  stringContains(
    what: PromiseOrValue<string>,
    where: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    ADDRESS(overrides?: CallOverrides): Promise<string>;

    ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    AMOUNT_BELOW_MINTING_FEE(overrides?: CallOverrides): Promise<string>;

    BASE_EXTENSION(overrides?: CallOverrides): Promise<string>;

    CREATED_AFTER(overrides?: CallOverrides): Promise<string>;

    CREATED_AT(overrides?: CallOverrides): Promise<string>;

    CREATED_BEFORE(overrides?: CallOverrides): Promise<string>;

    CREATOR(overrides?: CallOverrides): Promise<string>;

    INDEX_OUT_OF_BOUNDS(overrides?: CallOverrides): Promise<string>;

    INSUFFICIENT_PERMISSIONS(overrides?: CallOverrides): Promise<string>;

    INVALID_AMOUNT(overrides?: CallOverrides): Promise<string>;

    INVALID_CALLER(overrides?: CallOverrides): Promise<string>;

    IPFS_PREFIX(overrides?: CallOverrides): Promise<string>;

    MAX_SUPPLY_REACHED(overrides?: CallOverrides): Promise<string>;

    MINTER(overrides?: CallOverrides): Promise<string>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

    NOT_APPROVED_OR_OWNER(overrides?: CallOverrides): Promise<string>;

    NOT_APPROVED_OWNER(overrides?: CallOverrides): Promise<string>;

    NO_ADMINS_SPECIFIED(overrides?: CallOverrides): Promise<string>;

    NO_MINTERS_SPECIFIED(overrides?: CallOverrides): Promise<string>;

    OWNER(overrides?: CallOverrides): Promise<string>;

    ROYALTIES_DISABLED(overrides?: CallOverrides): Promise<string>;

    STRING(overrides?: CallOverrides): Promise<string>;

    TIMESTAMP(overrides?: CallOverrides): Promise<string>;

    TOKEN_DOES_NOT_EXISTS(overrides?: CallOverrides): Promise<string>;

    TOKEN_ID(overrides?: CallOverrides): Promise<string>;

    TOKEN_URI(overrides?: CallOverrides): Promise<string>;

    TOKEN_URI_EXISTS(overrides?: CallOverrides): Promise<string>;

    UINT256(overrides?: CallOverrides): Promise<string>;

    UPDATED_AFTER(overrides?: CallOverrides): Promise<string>;

    UPDATED_AT(overrides?: CallOverrides): Promise<string>;

    UPDATED_BEFORE(overrides?: CallOverrides): Promise<string>;

    ZERO_ADDRESS(overrides?: CallOverrides): Promise<string>;

    bytes32String(
      _bytes32: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    compareStrings(
      a: PromiseOrValue<string>,
      b: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getBaseURI(
      baseURI: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getTokenURIFromID(
      baseURI: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getTokenURIFromURI(
      baseURI: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    searchHasMatch(
      _itemKey: PromiseOrValue<BytesLike>,
      _data: PromiseOrValue<BytesLike>,
      _nftItem: Structs.NFTItemStruct,
      _tokenURIString: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    searchString(
      _self: PromiseOrValue<string>,
      _needle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    stringBytes32(
      source: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    stringContains(
      what: PromiseOrValue<string>,
      where: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    AMOUNT_BELOW_MINTING_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    BASE_EXTENSION(overrides?: CallOverrides): Promise<BigNumber>;

    CREATED_AFTER(overrides?: CallOverrides): Promise<BigNumber>;

    CREATED_AT(overrides?: CallOverrides): Promise<BigNumber>;

    CREATED_BEFORE(overrides?: CallOverrides): Promise<BigNumber>;

    CREATOR(overrides?: CallOverrides): Promise<BigNumber>;

    INDEX_OUT_OF_BOUNDS(overrides?: CallOverrides): Promise<BigNumber>;

    INSUFFICIENT_PERMISSIONS(overrides?: CallOverrides): Promise<BigNumber>;

    INVALID_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    INVALID_CALLER(overrides?: CallOverrides): Promise<BigNumber>;

    IPFS_PREFIX(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_SUPPLY_REACHED(overrides?: CallOverrides): Promise<BigNumber>;

    MINTER(overrides?: CallOverrides): Promise<BigNumber>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    NOT_APPROVED_OR_OWNER(overrides?: CallOverrides): Promise<BigNumber>;

    NOT_APPROVED_OWNER(overrides?: CallOverrides): Promise<BigNumber>;

    NO_ADMINS_SPECIFIED(overrides?: CallOverrides): Promise<BigNumber>;

    NO_MINTERS_SPECIFIED(overrides?: CallOverrides): Promise<BigNumber>;

    OWNER(overrides?: CallOverrides): Promise<BigNumber>;

    ROYALTIES_DISABLED(overrides?: CallOverrides): Promise<BigNumber>;

    STRING(overrides?: CallOverrides): Promise<BigNumber>;

    TIMESTAMP(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN_DOES_NOT_EXISTS(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN_ID(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN_URI(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN_URI_EXISTS(overrides?: CallOverrides): Promise<BigNumber>;

    UINT256(overrides?: CallOverrides): Promise<BigNumber>;

    UPDATED_AFTER(overrides?: CallOverrides): Promise<BigNumber>;

    UPDATED_AT(overrides?: CallOverrides): Promise<BigNumber>;

    UPDATED_BEFORE(overrides?: CallOverrides): Promise<BigNumber>;

    ZERO_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    bytes32String(
      _bytes32: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    compareStrings(
      a: PromiseOrValue<string>,
      b: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBaseURI(
      baseURI: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenURIFromID(
      baseURI: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenURIFromURI(
      baseURI: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    searchHasMatch(
      _itemKey: PromiseOrValue<BytesLike>,
      _data: PromiseOrValue<BytesLike>,
      _nftItem: Structs.NFTItemStruct,
      _tokenURIString: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    searchString(
      _self: PromiseOrValue<string>,
      _needle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stringBytes32(
      source: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stringContains(
      what: PromiseOrValue<string>,
      where: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    AMOUNT_BELOW_MINTING_FEE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    BASE_EXTENSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CREATED_AFTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CREATED_AT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CREATED_BEFORE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CREATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    INDEX_OUT_OF_BOUNDS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    INSUFFICIENT_PERMISSIONS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    INVALID_AMOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    INVALID_CALLER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    IPFS_PREFIX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_SUPPLY_REACHED(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MINTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    NOT_APPROVED_OR_OWNER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    NOT_APPROVED_OWNER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    NO_ADMINS_SPECIFIED(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    NO_MINTERS_SPECIFIED(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    OWNER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROYALTIES_DISABLED(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    STRING(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TIMESTAMP(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOKEN_DOES_NOT_EXISTS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TOKEN_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOKEN_URI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOKEN_URI_EXISTS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UINT256(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UPDATED_AFTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UPDATED_AT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UPDATED_BEFORE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ZERO_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bytes32String(
      _bytes32: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    compareStrings(
      a: PromiseOrValue<string>,
      b: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBaseURI(
      baseURI: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenURIFromID(
      baseURI: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenURIFromURI(
      baseURI: PromiseOrValue<string>,
      _tokenURI: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    searchHasMatch(
      _itemKey: PromiseOrValue<BytesLike>,
      _data: PromiseOrValue<BytesLike>,
      _nftItem: Structs.NFTItemStruct,
      _tokenURIString: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    searchString(
      _self: PromiseOrValue<string>,
      _needle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stringBytes32(
      source: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stringContains(
      what: PromiseOrValue<string>,
      where: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
