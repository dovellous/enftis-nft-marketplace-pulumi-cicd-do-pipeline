/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface ERCModifiersInterface extends utils.Interface {
  functions: {
    "ADMIN_ROLE()": FunctionFragment;
    "AMOUNT_BELOW_MINTING_FEE()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "INDEX_OUT_OF_BOUNDS()": FunctionFragment;
    "INSUFFICIENT_PERMISSIONS()": FunctionFragment;
    "INVALID_CALLER()": FunctionFragment;
    "MAX_SUPPLY_REACHED()": FunctionFragment;
    "MINTER_ROLE()": FunctionFragment;
    "NOT_APPROVED_OWNER()": FunctionFragment;
    "NO_ADMINS_SPECIFIED()": FunctionFragment;
    "NO_MINTERS_SPECIFIED()": FunctionFragment;
    "TOKEN_DOES_NOT_EXISTS()": FunctionFragment;
    "TOKEN_URI_EXISTS()": FunctionFragment;
    "ZERO_ADDRESS()": FunctionFragment;
    "contractOptionsStruct()": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ADMIN_ROLE"
      | "AMOUNT_BELOW_MINTING_FEE"
      | "DEFAULT_ADMIN_ROLE"
      | "INDEX_OUT_OF_BOUNDS"
      | "INSUFFICIENT_PERMISSIONS"
      | "INVALID_CALLER"
      | "MAX_SUPPLY_REACHED"
      | "MINTER_ROLE"
      | "NOT_APPROVED_OWNER"
      | "NO_ADMINS_SPECIFIED"
      | "NO_MINTERS_SPECIFIED"
      | "TOKEN_DOES_NOT_EXISTS"
      | "TOKEN_URI_EXISTS"
      | "ZERO_ADDRESS"
      | "contractOptionsStruct"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "renounceRole"
      | "revokeRole"
      | "supportsInterface"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AMOUNT_BELOW_MINTING_FEE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INDEX_OUT_OF_BOUNDS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INSUFFICIENT_PERMISSIONS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INVALID_CALLER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_SUPPLY_REACHED",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINTER_ROLE",
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
  encodeFunctionData(
    functionFragment: "TOKEN_DOES_NOT_EXISTS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TOKEN_URI_EXISTS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ZERO_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractOptionsStruct",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "ADMIN_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "AMOUNT_BELOW_MINTING_FEE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INDEX_OUT_OF_BOUNDS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INSUFFICIENT_PERMISSIONS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INVALID_CALLER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_SUPPLY_REACHED",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINTER_ROLE",
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
  decodeFunctionResult(
    functionFragment: "TOKEN_DOES_NOT_EXISTS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TOKEN_URI_EXISTS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ZERO_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractOptionsStruct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface ERCModifiers extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERCModifiersInterface;

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
    ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    AMOUNT_BELOW_MINTING_FEE(overrides?: CallOverrides): Promise<[string]>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    INDEX_OUT_OF_BOUNDS(overrides?: CallOverrides): Promise<[string]>;

    INSUFFICIENT_PERMISSIONS(overrides?: CallOverrides): Promise<[string]>;

    INVALID_CALLER(overrides?: CallOverrides): Promise<[string]>;

    MAX_SUPPLY_REACHED(overrides?: CallOverrides): Promise<[string]>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    NOT_APPROVED_OWNER(overrides?: CallOverrides): Promise<[string]>;

    NO_ADMINS_SPECIFIED(overrides?: CallOverrides): Promise<[string]>;

    NO_MINTERS_SPECIFIED(overrides?: CallOverrides): Promise<[string]>;

    TOKEN_DOES_NOT_EXISTS(overrides?: CallOverrides): Promise<[string]>;

    TOKEN_URI_EXISTS(overrides?: CallOverrides): Promise<[string]>;

    ZERO_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    contractOptionsStruct(
      overrides?: CallOverrides
    ): Promise<[boolean, boolean] & { pausable: boolean; burnable: boolean }>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  AMOUNT_BELOW_MINTING_FEE(overrides?: CallOverrides): Promise<string>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  INDEX_OUT_OF_BOUNDS(overrides?: CallOverrides): Promise<string>;

  INSUFFICIENT_PERMISSIONS(overrides?: CallOverrides): Promise<string>;

  INVALID_CALLER(overrides?: CallOverrides): Promise<string>;

  MAX_SUPPLY_REACHED(overrides?: CallOverrides): Promise<string>;

  MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

  NOT_APPROVED_OWNER(overrides?: CallOverrides): Promise<string>;

  NO_ADMINS_SPECIFIED(overrides?: CallOverrides): Promise<string>;

  NO_MINTERS_SPECIFIED(overrides?: CallOverrides): Promise<string>;

  TOKEN_DOES_NOT_EXISTS(overrides?: CallOverrides): Promise<string>;

  TOKEN_URI_EXISTS(overrides?: CallOverrides): Promise<string>;

  ZERO_ADDRESS(overrides?: CallOverrides): Promise<string>;

  contractOptionsStruct(
    overrides?: CallOverrides
  ): Promise<[boolean, boolean] & { pausable: boolean; burnable: boolean }>;

  getRoleAdmin(
    role: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  grantRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  renounceRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    AMOUNT_BELOW_MINTING_FEE(overrides?: CallOverrides): Promise<string>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    INDEX_OUT_OF_BOUNDS(overrides?: CallOverrides): Promise<string>;

    INSUFFICIENT_PERMISSIONS(overrides?: CallOverrides): Promise<string>;

    INVALID_CALLER(overrides?: CallOverrides): Promise<string>;

    MAX_SUPPLY_REACHED(overrides?: CallOverrides): Promise<string>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<string>;

    NOT_APPROVED_OWNER(overrides?: CallOverrides): Promise<string>;

    NO_ADMINS_SPECIFIED(overrides?: CallOverrides): Promise<string>;

    NO_MINTERS_SPECIFIED(overrides?: CallOverrides): Promise<string>;

    TOKEN_DOES_NOT_EXISTS(overrides?: CallOverrides): Promise<string>;

    TOKEN_URI_EXISTS(overrides?: CallOverrides): Promise<string>;

    ZERO_ADDRESS(overrides?: CallOverrides): Promise<string>;

    contractOptionsStruct(
      overrides?: CallOverrides
    ): Promise<[boolean, boolean] & { pausable: boolean; burnable: boolean }>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
  };

  estimateGas: {
    ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    AMOUNT_BELOW_MINTING_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    INDEX_OUT_OF_BOUNDS(overrides?: CallOverrides): Promise<BigNumber>;

    INSUFFICIENT_PERMISSIONS(overrides?: CallOverrides): Promise<BigNumber>;

    INVALID_CALLER(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_SUPPLY_REACHED(overrides?: CallOverrides): Promise<BigNumber>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    NOT_APPROVED_OWNER(overrides?: CallOverrides): Promise<BigNumber>;

    NO_ADMINS_SPECIFIED(overrides?: CallOverrides): Promise<BigNumber>;

    NO_MINTERS_SPECIFIED(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN_DOES_NOT_EXISTS(overrides?: CallOverrides): Promise<BigNumber>;

    TOKEN_URI_EXISTS(overrides?: CallOverrides): Promise<BigNumber>;

    ZERO_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    contractOptionsStruct(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    AMOUNT_BELOW_MINTING_FEE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    INDEX_OUT_OF_BOUNDS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    INSUFFICIENT_PERMISSIONS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    INVALID_CALLER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_SUPPLY_REACHED(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MINTER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    NOT_APPROVED_OWNER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    NO_ADMINS_SPECIFIED(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    NO_MINTERS_SPECIFIED(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TOKEN_DOES_NOT_EXISTS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TOKEN_URI_EXISTS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ZERO_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    contractOptionsStruct(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
