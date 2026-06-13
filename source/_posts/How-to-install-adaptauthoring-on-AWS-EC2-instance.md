---
title: How to install Adapt Authoring on an AWS EC2 instance
date: 2020-03-03 16:32:51
tags:
  - AWS
  - Docker
  - Adapt
categories:
  - DevOps
description: Step-by-step guide to installing the Adapt Authoring tool on an AWS EC2 instance using Docker, including setting up root access and pulling the Docker image.
---

This guide covers installing the Adapt Authoring tool on an AWS EC2 instance using Docker.

## Prerequisites

- An AWS EC2 instance running Ubuntu
- SSH access to the instance

## Steps

**Step 1: Switch to root user**

```bash
sudo su
```

**Step 2: Install Docker on EC2**

Follow one of these guides to install Docker on Ubuntu:

- [DigitalOcean: How to install and use Docker on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04)
- [e-Zest: Install Docker on AWS EC2](https://blog.e-zest.com/install-docker-on-aws-ec2)

**Step 3: Pull the Adapt Authoring Docker image**

```bash
docker pull pvadimr/adaptauthoring
```

**Step 4: Run the container**

Follow the instructions on [Docker Hub](https://hub.docker.com/r/pvadimr/adaptauthoring) for the `pvadimr/adaptauthoring` image to start the container with the correct port and volume settings.

**Step 5: (Optional) Set a root password**

If needed, follow [AWS's guide to setting a root password on Linux](https://aws.amazon.com/premiumsupport/knowledge-center/set-change-root-linux/).

## Reference links

- [Docker Hub — adaptauthoring image](https://hub.docker.com/r/pvadimr/adaptauthoring)
- [GitHub — pvadimr/docker-adaptauthoring](https://github.com/pvadimr/docker-adaptauthoring)
- [Dockerising a Node.js and MongoDB app](https://medium.com/statuscode/dockerising-a-node-js-and-mongodb-app-d22047e2806f)
