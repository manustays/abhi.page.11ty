---
layout: note
emoji: 💻
title: Set & persist Google DNS server in WSL2
description: How to setup & persist Google DNS Server in WSL2
date: 2021-07-10T08:15:48.053Z
tags:
  - wsl
---
Here is how you setup an alternative DNS server (like. Google DNS) on WSL2 and persist it between  WSL restart:

1. Create the WSL config file (if it does not already exist): `/etc/wsl.conf`
2. Enter the following lines to preserve the DNS config between restarts:
   ```
   [network]
   generateResolvConf = false
   ```
3. Shutdown WSL and start again by running the following command in Windows terminal: `wsl --shutdown`
4. Edit (or, create) the file `/etc/resolv.conf`:
   1. Comment any other line that starts with "nameserver".
   2. Enter the following lines:
      ```
      nameserver 8.8.4.4
      nameserver 8.8.8.8
      ```
5. Restart WSL again after running the following command in Windows terminal: `wsl --shutdown`