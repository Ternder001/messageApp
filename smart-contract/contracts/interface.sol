// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

// Interface for the contract with getMessage function
interface MessageContract {
    function getMessage() external view returns (string memory);
}

// Your contract that interacts with MessageContract
contract MyContract {
    // Address of the deployed MessageContract
    address public messageContractAddress = 0x2E11eaB06070CAd7C43A043CF0428E59830D3857;

    // Function to get the message from MessageContract
    function getMessageFromOtherContract() public view returns (string memory) {
        // Create an instance of the interface
        MessageContract messageContract = MessageContract(messageContractAddress);

        // Call the getMessage function from MessageContract
        return messageContract.getMessage();
    }
}