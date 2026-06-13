---
title: Wix SSL certificate won't work for an externally hosted site
date: 2020-03-13 12:12:32
tags:
  - SSL
  - Wix
  - AWS
categories:
  - DevOps
description: Why Wix's SSL certificate doesn't apply to externally hosted sites and how to install your own SSL certificate on an AWS EC2 instance instead.
---

If you're using Wix as a domain registrar but hosting your actual site externally (e.g., on AWS EC2), Wix's built-in SSL certificate won't cover your externally hosted content. You need to install SSL directly on your server.

## Why Wix SSL doesn't work here

Wix's SSL is provisioned only for sites hosted on Wix's own infrastructure. When you point a subdomain or domain to an external IP, Wix has no control over the SSL on that server — you must set it up yourself.

## Solution: Install SSL on your AWS EC2 instance

**Option 1: Use Let's Encrypt (free)**

Let's Encrypt provides free SSL certificates. Install `certbot` on your EC2 instance and follow the prompts:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

- [Let's Encrypt community: Wix wildcard SSL for externally hosted site](https://community.letsencrypt.org/t/wix-wildcard-ssl-for-externally-hosted-site/77346)
- [Check existing certificates for your domain](https://crt.sh/?q=chetansachdev.com)

**Option 2: Use AWS Certificate Manager (ACM)**

If your EC2 instance sits behind a Load Balancer, you can use a free ACM certificate:

- [How to add SSL certificate to AWS EC2 with ACM](https://stackoverflow.com/questions/34945299/how-to-add-ssl-certificate-to-aws-ec2-with-the-help-of-new-aws-certificate-manag)
- [Install AWS SSL certificate to EC2 without Load Balancer](https://serverfault.com/questions/947057/install-aws-ssl-certificate-to-ec2-instance-without-load-balancer)

**Option 3: Use RapidSSL for a paid certificate**

- [RapidSSL: How to install an SSL certificate on AWS EC2](https://www.rapidsslonline.com/ssl/how-to-install-an-ssl-certificate-on-aws-ec2-instance/)

## Requesting a third-party SSL through Wix (limited cases)

Wix has limited support for this scenario:
[Wix: Request third-party SSL certificates](https://support.wix.com/en/article/request-third-party-ssl-certificates)
