// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "./ContractA.sol";

contract ContractB {
    ContractA public a;

    constructor(ContractA a_) public {
        a = a_;
    }

    function asd() public view returns (uint256) {
        return a.qwe();
    }
}
