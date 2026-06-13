---
title: Backup and restore an Adapt Authoring instance
date: 2020-05-10 22:30:47
tags:
  - Adapt
  - AWS
  - DevOps
categories:
  - Development
description: Step-by-step commands to backup and restore an Adapt Authoring tool instance, including zipping app files and dumping/restoring MongoDB data.
---

This guide covers how to back up and restore an Adapt Authoring instance. It involves zipping the application files and dumping/restoring the MongoDB database.

## Backup

**Step 1: Zip the app files (excluding large dependency folders)**

```bash
zip -r * app/* -x\app/bower_components/* -x\node_modules/* -x*.zip
```

**Step 2: Zip custom adapt content**

```bash
zip -r customadapt.zip ./custom_adapt/* -x "*.git*" -x "**/node_modules/*"
```

**Step 3: Dump the MongoDB database**

```bash
mongodump
```

**Step 4: Zip the database dump**

```bash
zip -r adaptdata.zip ./adapt-tenant-master/*
```

## Restore

**Step 1: Restore the MongoDB database**

The `--drop` flag drops each collection before importing, ensuring a clean restore.

```bash
mongorestore --db adapt-tenant-master --drop ./adapt-tenant-master
```

**Step 2: Unzip and deploy the app files** as needed to your target environment.
