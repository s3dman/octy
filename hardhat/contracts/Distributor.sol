// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Distributor {
    address payable public owner;
    address payable[] public recipients;

    event TransferReceived(uint _amount);

    constructor(address payable[] memory _addrs) {
        owner = payable(msg.sender);
        for (uint i = 0; i < _addrs.length; i++) {
            recipients.push(_addrs[i]);
        }
    }

    function distribute(uint[] memory _frac) public payable {
        require(msg.value > 0, "No Ether sent to distribute");
        require(_frac.length == recipients.length, "Fractions length does not match recipients length");

        uint totalFractions;
        for (uint i = 0; i < _frac.length; i++) {
            totalFractions += _frac[i];
        }
        require(totalFractions == 100, "Fractions do not sum up to 100%");

        for (uint i = 0; i < recipients.length; i++) {
            uint256 share = msg.value * _frac[i] / 100;
            recipients[i].transfer(share);
            emit TransferReceived(share);
        }
    }

    function destroyAndSendFunds() public {
        require(msg.sender == owner, "Only the owner can call this function");
        selfdestruct(owner);
    }
}
