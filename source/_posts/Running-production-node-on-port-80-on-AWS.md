---
title: Running a production Node.js app on port 80 on AWS
date: 2020-05-10 22:24:13
tags:
  - Node.js
  - AWS
  - Linux
categories:
  - DevOps
description: How to allow a Node.js process to bind to port 80 on Linux without running as root, using the setcap command to grant the capability.
---

By default, only the `root` user can bind to ports below 1024 (including port 80) on Linux. Running Node.js as root is a security risk. The fix is to grant the Node binary the network binding capability without full root access.

## Solution

Run this command once on your EC2 instance:

```bash
sudo setcap 'cap_net_bind_service=+ep' $(which node)
```

This grants the Node.js binary permission to bind to privileged ports. Your app can then listen on port 80 as a regular user.

## How it works

- `setcap` sets Linux capabilities on a specific executable
- `cap_net_bind_service` is the capability that allows binding to ports below 1024
- `$(which node)` resolves to the path of your Node binary (e.g. `/usr/bin/node`)

## Note

If you update Node.js (via nvm or a package manager), you'll need to re-run the command since the binary path changes.
