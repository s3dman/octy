// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Distributor {
    address payable public owner;
    mapping(address => uint) public contributions;
    address payable[] public recipients;

    event TransferReceived(uint _amount);

    constructor(address payable[] memory _addrs) {
        owner = payable(msg.sender);
        for (uint i = 0; i < _addrs.length; i++) {
            recipients.push(_addrs[i]);
        }
    }

    function distribute() public payable {
        require(msg.value > 0, "No Ether sent to distribute");

        uint totalContributions;
        for (uint i = 0; i < recipients.length; i++) {
            totalContributions += contributions[recipients[i]];
        }

        uint[] memory fractions = new uint[](recipients.length);
        uint remainingValue = msg.value;
        for (uint i = 0; i < recipients.length; i++) {
            if (totalContributions == 0 || contributions[recipients[i]] <= remainingValue) {
                fractions[i] = contributions[recipients[i]] * 100 / totalContributions;
                uint share = msg.value * fractions[i] / 100;
                recipients[i].transfer(share);
                emit TransferReceived(share);
                remainingValue -= contributions[recipients[i]];
            }
        }
    }

    function contribute() public payable {
        contributions[msg.sender] += msg.value;
    }

    function destroyAndSendFunds() public {
        require(msg.sender == owner, "Only the owner can call this function");
        selfdestruct(owner);
    }
}
