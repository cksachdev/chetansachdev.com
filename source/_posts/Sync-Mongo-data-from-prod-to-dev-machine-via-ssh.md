---
title: Sync MongoDB data from production to dev machine via SSH
date: 2020-06-04 14:40:32
tags:
  - MongoDB
  - SSH
  - Database
  - AWS
categories:
  - Development
description: How to copy a MongoDB database from an AWS EC2 production server to your local dev machine in one command using SSH, mongodump, and mongorestore piped together.
---

When you need to replicate a production MongoDB database locally to debug an issue, you can do it in one piped command over SSH — no intermediate file needed.

## Context

- `db.copyDatabase()` and `db.cloneDatabase()` were removed in MongoDB 4.0+
- The `mongo-sync` module doesn't work well with MongoDB >4.0
- The approach below works with any version by piping `mongodump` output directly over SSH

## The command

```bash
ssh -i PATH_TO_KEYPAIR.pem USERNAME@IP_ADDRESS \
  'mongodump > /dev/null && tar -zc dump && rm -rf dump' \
  | tar -zx && mongorestore dump && rm -rf dump
```

**What this does, step by step:**

1. SSH into your EC2 instance using your key pair
2. Run `mongodump` on the server to export the database
3. Compress the dump with `tar -zc` and stream it back through the pipe
4. `tar -zx` decompresses it locally
5. `mongorestore dump` imports it into your local MongoDB
6. Clean up the local dump folder

## Reference

- [Sync MongoDB via SSH — Stack Overflow](https://stackoverflow.com/questions/16619598/sync-mongodb-via-ssh)
- [Sync MongoDB local and production (Heroku)](https://sheharyar.me/blog/sync-mongodb-local-and-production-heroku/)
