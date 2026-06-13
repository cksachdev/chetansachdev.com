---
title: Installing an SSL certificate for Adapt Authoring
date: 2020-12-11 00:15:23
tags:
  - SSL
  - Adapt
  - NGINX
  - AWS
categories:
  - DevOps
description: How to install an SSL certificate for an Adapt Authoring server, including checking Ubuntu version, configuring NGINX with SSL, and setting up SSL on localhost for development.
---

This guide covers the steps to get SSL working on an Adapt Authoring instance — both for production (with NGINX) and for local development.

## Steps

**Step 1: Understand what an SSL certificate is**

If you're new to SSL, start here:
[Cloudflare: What is an SSL Certificate?](https://www.cloudflare.com/learning/ssl/what-is-an-ssl-certificate/)

**Step 2: Check your Ubuntu version**

```bash
lsb_release -a
```

This tells you which Ubuntu version you're running, which affects which SSL commands and package versions apply.

**Step 3: Set up SSL on localhost (for development)**

If you need HTTPS locally during development:
[Localhost SSL fix](https://expeditedsecurity.com/blog/localhost-ssl-fix/)

**Step 4: Configure NGINX with SSL for Node.js**

For production, use NGINX as a reverse proxy in front of your Node.js app with SSL termination:
[Configuring NGINX and SSL with Node.js](https://www.sitepoint.com/configuring-nginx-ssl-node-js/)

NGINX handles the SSL connection, then passes the request to your app on a local port (e.g., 3000).
