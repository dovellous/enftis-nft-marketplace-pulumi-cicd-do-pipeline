// SPDX-License-Identifier: MIT

/*

███████╗███╗   ██╗███████╗████████╗██╗███████╗
██╔════╝████╗  ██║██╔════╝╚══██╔══╝██║██╔════╝
█████╗  ██╔██╗ ██║█████╗     ██║   ██║███████╗
██╔══╝  ██║╚██╗██║██╔══╝     ██║   ██║╚════██║
███████╗██║ ╚████║██║        ██║   ██║███████║
╚══════╝╚═╝  ╚═══╝╚═╝        ╚═╝   ╚═╝╚══════╝


name        :   Enftis NFT Factory Token
symbol      :   ENFTIS
tokenTypes  :   ERC1155, ERC165, ERC2968
maxSupply   :   uint256.max()
solhcVersion:   0.8.20
version     :   1.0.0
released    :   25 March 2023
developers  :   @enftix
license     :   MIT License
networks    :   ethereum, polygon, binance

░░░█▀▄░▄▀▄░█▒█▒██▀░█▒░░█▒░░▄▀▄░█▒█░▄▀▀
▒░▒█▄▀░▀▄▀░▀▄▀░█▄▄▒█▄▄▒█▄▄░▀▄▀░▀▄█▒▄██

*/

/**
 * Created on 2023-05-05 14:36
 * @summary:
 * @author: dovellous
 * @repository: https://github.com/dovellous/com-enftis
 * @website: https://enftis.com
 *
 */

pragma solidity ^0.8.19;
pragma experimental ABIEncoderV2;

import "./base/ERC20DAO/ERC20DAOBase.sol";

contract ERC20DAO is ERC20DAOBase
{
    constructor(
        string memory _contractName,
        IVotes _tokenAddress,
        TimelockController _timelockAddress,
        uint256 _votingDelay,
        uint256 _votingPeriod,
        uint256 _quorumPercentage,
        uint256 _proposalThreshold
    )
    payable ERC20DAOBase
    (
        _contractName,
        _tokenAddress,
        _timelockAddress,
        _votingDelay,
        _votingPeriod,
        _quorumPercentage,
        _proposalThreshold
    )
    {}
}
