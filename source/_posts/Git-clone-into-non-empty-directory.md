---
title: Git clone into non-empty directory
date: 2020-02-14 03:00:36
tags:
  - Git
categories:
  - Development
description: How to clone a Git repository into a folder that already has files, using git init and pull with --allow-unrelated-histories flag.
---

If you need to bring a remote Git repository into a folder that already contains files, you can't use `git clone` directly — it requires an empty directory. Here's the workaround.

## Steps

**Step 1: Navigate to your existing directory**

```bash
cd nonemptydir
```

**Step 2: Initialize a new Git repo**

```bash
git init
```

**Step 3: Add the remote repository**

```bash
git remote add origin https://path/to/the/repository.git
```

**Step 4: Pull the remote history**

The `--allow-unrelated-histories` flag is required because your local folder has no shared commit history with the remote.

```bash
git pull origin master --allow-unrelated-histories
```

**Step 5: (Optional) View the repo in Sourcetree**

```bash
stree .
```

**Step 6: Stage, commit, and push**

```bash
git add -A
git commit -m 'first commit'
git push -u origin master
```
