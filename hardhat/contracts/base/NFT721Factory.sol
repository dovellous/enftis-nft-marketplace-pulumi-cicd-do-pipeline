// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "../libraries/ContractLib.sol";

contract NFT721Factory is ERC721URIStorage, Ownable, ReentrancyGuard {
    
    using Counters for Counters.Counter;
    Counters.Counter public tokenIds;
    uint256 public tokenCount;
    address public marketplaceAddress;
    string public contractName;
    string public contractSymbol;
    uint256 public mintFee = 0.0025 ether;

    constructor(
        address _address,
        string memory _name,
        string memory _symbol
    ) ERC721(contractName, contractSymbol) {
        marketplaceAddress = _address;
        contractName = _name;
        contractSymbol = _symbol;
    }

    function mintNFT(string memory tokenURI) public payable returns (uint256) {
        require(msg.value >= mintFee, 'MINTING_FEE_TOO_LOW');
        tokenIds.increment();
        tokenCount++;
        uint256 newTokenId = tokenIds.current();
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        setApprovalForAll(marketplaceAddress, true);
        return newTokenId;
    }

    function setMintFee(uint256 newPrice) external onlyOwner {
        require(newPrice > 0, 'MINTING_FEE_TOO_LOW');
        mintFee = newPrice;
    }

    function getMintFee() public view returns (uint256) {
        return mintFee;
    }

    function withdraw(
        address to,
        uint256 value
    ) external payable onlyOwner nonReentrant {
        require(ContractLib.getBalance() >= value, 'INSUFFICIENT_BALANCE');
        (bool sent, ) = to.call{value: value}("");
        require(sent, 'FAILED_TO_WITHDRAW');
    }

}
