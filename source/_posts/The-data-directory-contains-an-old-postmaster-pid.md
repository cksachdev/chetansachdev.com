---
title: 'Fix: The data directory contains an old postmaster.pid'
date: 2020-05-10 22:34:17
tags:
  - PostgreSQL
  - Database
  - macOS
categories:
  - Development
description: How to fix the PostgreSQL error "The data directory contains an old postmaster.pid file" on macOS by deleting the stale PID file.
---

This error occurs when PostgreSQL didn't shut down cleanly and left a stale `postmaster.pid` file behind. The fix is simply to delete that file.

## The error

![PostgreSQL postmaster.pid error](/images/2020/05/10/b672658d-3c3c-43da-89bc-3b9a1465b68a.png)

## Solution

**Step 1: Delete the stale PID file**

```bash
rm ~/Library/Application\ Support/Postgres/var-12/postmaster.pid
```

> Replace `var-12` with your actual PostgreSQL version directory if different (e.g., `var-14`, `var-15`).

**Step 2: Start PostgreSQL again**

Open the Postgres.app and click **Start**, or run:

```bash
pg_ctl -D /Users/$(whoami)/Library/Application\ Support/Postgres/var-12 start
```

PostgreSQL should start normally now.
