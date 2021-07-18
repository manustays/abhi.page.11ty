---
layout: note
emoji: ⛓
title: Study Notes on Ethereum Virtual Machine (EVM)
description: My study notes on the Ethereum Virtual Machine (EVM) from the
  Ethereum official docs.
date: 2021-05-29T06:24:39.916Z
tags:
  - ethereum
  - blockchain
  - solidity
links:
  - https://docs.soliditylang.org/en/v0.8.4/introduction-to-smart-contracts.html
---
## Ethereum Accounts

- Two types of Etherium accounts:
    - External Accounts
        - Users
        - Address = public key
    - Contract Accounts
        - smart contracts (code)
        - Address generated when the contract is created (it is derived from the creator address and the number of transactions sent from that address, the so-called “nonce”)
- EVM treats both types of accounts equally.
- Every account has a persistent key-value store mapping 256-bit words to 256-bit words called storage.
- Every account has a balance in Ether (in “Wei” to be exact, 1 ether is 10**18 wei) which can be modified by sending transactions that include Ether.

## Ethereum Transactions

- message that is sent from one account to another account (which might be the same or empty)
- It can include binary data (**payload**) and Ether.
- If the target account contains code, that code is executed and the payload is provided as input data.
- If the *target account is not set* (the transaction does not have a recipient or the recipient is set to null), the transaction ***creates a new contract***.
    - the address of that contract is not the zero address, but an address derived from the sender and its number of transactions sent (the “nonce”)
    - The payload of such a contract creation transaction is taken to be EVM bytecode and executed
    - The output data of this execution is permanently stored as the code of the contract.
    - This means that in order to create a contract, you do not send the actual code of the contract, but in fact code that returns that code when executed.
    - ⚠ While a contract is being created, its code is still empty. Because of that, you should not call back into the contract under construction until its constructor has finished executing.

## Gas

- Gas price is set by the creator of transaction
    - They have to pay gas_price * gas upfront from sending account
- Any remaining gas after execution is refunded back to sender account
- If all gas is used up before transaction is complete, an *out-of-gas* exception is triggered and all modifications to the state are reverted.

## Storage, Memory, and the Stack

- **Storage**
    - Non-Volatile: persistent between function calls & transactions
    - It's a key-value store that maps 256-bit words to 256-bit words
    - not possible to enumerate storage from within a contract
    - is comparatively **costly to read**, and even more to **initialise and modify** storage
    - Because of this cost, you should minimize what you store in persistent storage
    - Store data like derived calculations, caching, and aggregates outside of the contract
    - A contract can neither read nor write to any storage apart from its own
- **Memory**
    - Volatile: fresh instance for each message call
    - it is linear and can be addressed at byte level
    - reads are limited to a width of 256 bits
    - writes can be either 8 bits or 256 bits wide
    - Memory is expanded by a word (256-bit), when accessing (either reading or writing) a previously untouched memory word (i.e. any offset within a word)
    - At the time of expansion, the cost in gas must be paid
    - Memory is more costly the larger it grows (it scales quadratically)
- **Stack**
    - all computations are performed on the stack
    - maximum size of 1024 elements and contains words of 256 bits
    - It is possible to copy one of the **topmost sixteen elements** to the top of the stack or swap the topmost element with one of the **sixteen elements** below it
    - All other operations take the topmost two (or one, or more, depending on the operation) elements from the stack and push the result onto the stack
    - it is possible to move stack elements to storage or memory to get deeper access to the stack

    ## Message Calls

    - Contracts can call other contracts or send Ether to non-contract accounts by the means of message calls
    - Message calls are like transactions, in fact, every transaction consists of a top-level message call which in turn can create further message calls
    - Calls are **limited to a depth of 1024**, which means that for more complex operations, loops should be preferred over recursive calls.
    - Furthermore, only 63/64th of the gas can be forwarded in a message call, which causes a depth limit of a little less than one thousand in practice.

    ## Delegatecall / Callcode and Libraries

    - The ***delegatecall*** is a special variant of a message call
    - code at the target address is executed in the context of the calling contract and `msg.sender` and `msg.value` do not change their values.
    - This means that a contract can dynamically load code from a different address at runtime.
    - Storage, current address, and balance still refer to the calling contract, only the code is taken from the called address.
    - This makes it possible to implement the “library” feature in Solidity.

    ## Logs

    - specially indexed data structure that maps all the way up to the block level
    - This feature called **logs** is used by Solidity to implement `events`
    - Contracts cannot access log data after it has been created
    - but they can be efficiently accessed from outside the blockchain
    - Since some part of the log data is stored in bloom filters, it is possible to search for this data in an efficient and cryptographically secure way, so even “light clients” can still find these logs.

    ## Create

    - Contracts can even create other contracts using a special opcode (i.e. they do not simply call the zero address as a transaction would)
    - only difference between these create calls and normal message calls is that the payload data is executed, and the result stored as code and the caller / creator receives the address of the new contract on the stack

    ## Deactivate and Self-destruct

    - only way to remove code from the blockchain is when a contract at that address performs the `selfdestruct` operation
    - remaining Ether stored at that address is sent to a designated target and then the storage and code is removed from the state
    - it is potentially dangerous, as if someone sends Ether to removed contracts, the Ether is forever lost
    - If you want to deactivate your contracts, you should instead disable them by changing some internal state which causes all functions to revert. This makes it impossible to use the contract, as it returns Ether immediately