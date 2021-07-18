---
layout: note
emoji: 💻
title: Fix WSL2 Connection Issue to Docker Daemon
description: 'Fix an error in WSL2 where the connection fails with the error:
  "Cannot connect to the Docker daemon at tcp://localhost:2375" '
date: 2021-07-17T18:38:15.299Z
tags:
  - wsl2
---
Recently while setting up docker for Hyperledger in WSL2, I got the following error:

```bash
====> hyperledger/fabric-peer:2.3.2
Cannot connect to the Docker daemon at tcp://localhost:2375. Is the docker daemon running?
```

After a quick research, it turns out that if you are upgrading from WSL1 to WSL2, Windows leaves behind a few legacy settings from WSL1 that causes this issue.

Here is the fix that worked for me:

### Step 1: Check if you have the same issue
1. In WSL2 terminal, run the command: `docker info | head -15`
2. You should see the following error: `ERROR: Cannot connect to the Docker daemon at tcp://localhost:2375. Is the docker daemon running?`

### Step 2: Check if the fix works for you
1. Run the command: `unset DOCKER_HOST`
2. Follow the previous step again. The error should be gone now.

### Step 3: Make the fix permanent
1. Edit the `.bashrc` script with: `vi ~/.bashrc`
2. Search for the line with DOCKER_HOST and comment it out like this:
   `# export DOCKER_HOST=tcp://localhost:2375`
3. Save the file and reload the terminal settings with: `source ~/.bashrc`
