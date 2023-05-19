/*

███████╗███╗   ██╗███████╗████████╗██╗███████╗    ███╗   ███╗ █████╗ ██████╗ ██╗  ██╗███████╗████████╗██████╗ ██╗      █████╗  ██████╗███████╗
██╔════╝████╗  ██║██╔════╝╚══██╔══╝██║██╔════╝    ████╗ ████║██╔══██╗██╔══██╗██║ ██╔╝██╔════╝╚══██╔══╝██╔══██╗██║     ██╔══██╗██╔════╝██╔════╝
█████╗  ██╔██╗ ██║█████╗     ██║   ██║███████╗    ██╔████╔██║███████║██████╔╝█████╔╝ █████╗     ██║   ██████╔╝██║     ███████║██║     █████╗  
██╔══╝  ██║╚██╗██║██╔══╝     ██║   ██║╚════██║    ██║╚██╔╝██║██╔══██║██╔══██╗██╔═██╗ ██╔══╝     ██║   ██╔═══╝ ██║     ██╔══██║██║     ██╔══╝  
███████╗██║ ╚████║██║        ██║   ██║███████║    ██║ ╚═╝ ██║██║  ██║██║  ██║██║  ██╗███████╗   ██║   ██║     ███████╗██║  ██║╚██████╗███████╗
╚══════╝╚═╝  ╚═══╝╚═╝        ╚═╝   ╚═╝╚══════╝    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝     ╚══════╝╚═╝  ╚═╝ ╚═════╝╚══════╝



░░░░░░  ░░    ░░     ░░░░░░   ░░░░░░  ░░    ░░ ░░░░░░░ ░░      ░░       ░░░░░░  ░░    ░░ ░░░░░░░ 
▒▒   ▒▒  ▒▒  ▒▒      ▒▒   ▒▒ ▒▒    ▒▒ ▒▒    ▒▒ ▒▒      ▒▒      ▒▒      ▒▒    ▒▒ ▒▒    ▒▒ ▒▒      
▒▒▒▒▒▒    ▒▒▒▒       ▒▒   ▒▒ ▒▒    ▒▒ ▒▒    ▒▒ ▒▒▒▒▒   ▒▒      ▒▒      ▒▒    ▒▒ ▒▒    ▒▒ ▒▒▒▒▒▒▒ 
▓▓   ▓▓    ▓▓        ▓▓   ▓▓ ▓▓    ▓▓  ▓▓  ▓▓  ▓▓      ▓▓      ▓▓      ▓▓    ▓▓ ▓▓    ▓▓      ▓▓ 
██████     ██        ██████   ██████    ████   ███████ ███████ ███████  ██████   ██████  ███████ 

░▄▀░▄▀▀░▀▄░░░▀█░█▀█░▀█░▀██░░░░▒▄▀▄░█▒░░█▒░░░▒█▀▄░█░▄▀▒░█▄█░▀█▀░▄▀▀░░▒█▀▄▒██▀░▄▀▀▒██▀▒█▀▄░█▒█▒██▀░█▀▄
░▀▄░▀▄▄░▄▀▒░░█▄░█▄█░█▄░▄▄█░▄▒░░█▀█▒█▄▄▒█▄▄▒░░█▀▄░█░▀▄█▒█▒█░▒█▒▒▄██▒░░█▀▄░█▄▄▒▄██░█▄▄░█▀▄░▀▄▀░█▄▄▒█▄▀


███████╗███╗   ██╗███████╗████████╗██╗███████╗    ███╗   ██╗ █████╗ ████████╗██╗██╗   ██╗███████╗    ████████╗ ██████╗ ██╗  ██╗███████╗███╗   ██╗
██╔════╝████╗  ██║██╔════╝╚══██╔══╝██║██╔════╝    ████╗  ██║██╔══██╗╚══██╔══╝██║██║   ██║██╔════╝    ╚══██╔══╝██╔═══██╗██║ ██╔╝██╔════╝████╗  ██║
█████╗  ██╔██╗ ██║█████╗     ██║   ██║███████╗    ██╔██╗ ██║███████║   ██║   ██║██║   ██║█████╗         ██║   ██║   ██║█████╔╝ █████╗  ██╔██╗ ██║
██╔══╝  ██║╚██╗██║██╔══╝     ██║   ██║╚════██║    ██║╚██╗██║██╔══██║   ██║   ██║╚██╗ ██╔╝██╔══╝         ██║   ██║   ██║██╔═██╗ ██╔══╝  ██║╚██╗██║
███████╗██║ ╚████║██║        ██║   ██║███████║    ██║ ╚████║██║  ██║   ██║   ██║ ╚████╔╝ ███████╗       ██║   ╚██████╔╝██║  ██╗███████╗██║ ╚████║
╚══════╝╚═╝  ╚═══╝╚═╝        ╚═╝   ╚═╝╚══════╝    ╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═══╝  ╚══════╝       ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝



                                                                                 
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

/*********************************** Imports **********************************/

import '@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20SnapshotUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/extensions/draft-ERC20PermitUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';

/**
 * @dev {ERC20} token, including:
 *
 *  - deploy with upgradeability, replaced constructors with initializer functions
 *  - a admin role that allows for token minting (creation)
 *
 * This contract uses {AccessControl} to lock permissioned functions using the
 * different roles
 *
 */

contract ERC20 is
    Initializable,
    ERC20Upgradeable,
    AccessControlUpgradeable,
    ERC20BurnableUpgradeable,
    ERC20SnapshotUpgradeable,
    PausableUpgradeable,
    ERC20PermitUpgradeable
{
    /*********************************** Structs **********************************/

    struct ContractOptions {
        bool mintEnabled;
        bool burnEnabled;
        bool pauseEnabled;
        bool snapshotEnabled;
    }

    /********************************** Constants *********************************/

    bytes32 public constant IMPLEMENTATION_TYPE = keccak256('ERC20');

    bytes32 public constant OWNER_ROLE = DEFAULT_ADMIN_ROLE;
    bytes32 public constant ADMIN_ROLE = keccak256('ADMIN_ROLE');
    bytes32 public constant MINTER_ROLE = keccak256('MINTER_ROLE');

    /************************************ Vars ************************************/

    ContractOptions public contractOptions;

    /// @dev Returns the URI for the metadata of the contract.
    string public contractURI;

    uint8 internal _decimals;

    /*********************************** Errors ***********************************/

    /**
     * Insufficient permissions for caller.
     *
     * @param userAddress user address.
     * @param requiredRole requested amount to transfer.
     */
    error InsufficientPermissions(address userAddress, bytes32 requiredRole);

    /**
     * Option was not initialized on contract creation.
     *
     * @param option the option that was disabled.
     */
    error DisabledOption(string option);

    /********************************* Modifiers **********************************/

    /**
     * @dev Throws InsufficientPermissions if called by any account other than the owner or admins.
     */
    modifier adminOrOwner() {
        if (
            !hasRole(OWNER_ROLE, _msgSender()) &&
            !hasRole(ADMIN_ROLE, _msgSender())
        ) {
            revert InsufficientPermissions({
                userAddress: _msgSender(),
                requiredRole: ADMIN_ROLE
            });
        }
        _;
    }

    /**
     * @dev Throws DisabledOption if burn option was not enabled on contract creation.
     */
    modifier burnable() {
        if (!contractOptions.burnEnabled) {
            revert DisabledOption({option: 'burn'});
        }
        _;
    }

    /**
     * @dev Throws DisabledOption if mint option was not enabled on contract creation.
     */
    modifier mintable() {
        if (!contractOptions.mintEnabled) {
            revert DisabledOption({option: 'mint'});
        }
        _;
    }

    /**
     * @dev Throws DisabledOption if pause option was not enabled on contract creation.
     */
    modifier pausable() {
        if (!contractOptions.pauseEnabled) {
            revert DisabledOption({option: 'pause'});
        }
        _;
    }

    /**
     * @dev Throws DisabledOption if snapshot option was not enabled on contract creation.
     */
    modifier snapshottable() {
        if (!contractOptions.snapshotEnabled) {
            revert DisabledOption({option: 'snapshot'});
        }
        _;
    }

    /******************************** Constructor *********************************/

    constructor() {
        _disableInitializers();
    }

    /********************************* Initialize *********************************/

    /**
     * @dev initializes clones of this contract
     * @param _defaultAdmin owner address
     * @param data encoded data used for initialization
     */
    function initialize(address _defaultAdmin, bytes calldata data)
        external
        initializer
    {
        /**
         *   _name token name
         *   _symbol token symbol,
         *   _contractURI Returns the URI for the storefront-level metadata of the contract.
         *   _initialSupply initial tokens minted to owner,
         *   __decimals set the decimals
         *   _admins set the admins
         *   _minters set the minters
         *   _contractOptions sets which features to enable
         */
        (
            string memory _name,
            string memory _symbol,
            string memory _contractURI,
            uint256 _initialSupply,
            uint8 __decimals,
            address[] memory _admins,
            address[] memory _minters,
            ContractOptions memory _contractOptions
        ) = abi.decode(
                data,
                (
                    string,
                    string,
                    string,
                    uint256,
                    uint8,
                    address[],
                    address[],
                    ContractOptions
                )
            );

        __ERC20_init(_name, _symbol);
        __ERC20Burnable_init();
        __ERC20Snapshot_init();
        __AccessControl_init();
        __Pausable_init();
        __ERC20Permit_init(_name);

        _decimals = __decimals;
        contractURI = _contractURI;
        contractOptions = _contractOptions;

        _mint(_defaultAdmin, _initialSupply);

        _grantRole(OWNER_ROLE, _defaultAdmin);

        for (uint256 i = 0; i < _admins.length; i++) {
            _grantRole(ADMIN_ROLE, _admins[i]);
        }

        _setRoleAdmin(MINTER_ROLE, MINTER_ROLE);
        for (uint256 i = 0; i < _minters.length; i++) {
            _grantRole(MINTER_ROLE, _minters[i]);
        }
    }

    /******************************* Read Functions *******************************/

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() public view override returns (uint8) {
        return _decimals;
    }

    /******************************* Write Functions ******************************/

    /**
     * @dev Sets the contract metadata uri
     */
    function setContractUri(string calldata _contractURI) public adminOrOwner {
        contractURI = _contractURI;
    }

    /**
     * @dev Destroys `amount` tokens from the caller.
     * @param amount amount
     */
    function burn(uint256 amount) public override burnable {
        super.burn(amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, deducting from the caller's
     * allowance.
     * @param account account which the token is deducted from
     * @param amount amount
     */
    function burnFrom(address account, uint256 amount)
        public
        override
        burnable
    {
        super.burnFrom(account, amount);
    }

    /**
     * @dev Creates `amount` tokens to `to`
     * @param to address in which amount is minted to
     * @param amount amount
     */
    function mint(address to, uint256 amount)
        public
        onlyRole(MINTER_ROLE)
        mintable
    {
        _mint(to, amount);
    }

    /**
     * @dev Triggers stopped state
     */
    function pause() public adminOrOwner pausable {
        _pause();
    }

    /**
     * @dev Returns contract to normal state
     */
    function unpause() public adminOrOwner pausable {
        _unpause();
    }

    /**
     * @dev Creates a new snapshot and returns its snapshot id.
     */
    function snapshot() public adminOrOwner snapshottable returns (uint256) {
        return _snapshot();
    }

    /***************************** Internal Functions *****************************/

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    )
        internal
        override(ERC20Upgradeable, ERC20SnapshotUpgradeable)
        whenNotPaused
    {
        super._beforeTokenTransfer(from, to, amount);
    }
}