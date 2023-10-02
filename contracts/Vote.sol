// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Vote is Ownable {
    uint256 private value;

    event ValueChanged(uint256 newValue);

}