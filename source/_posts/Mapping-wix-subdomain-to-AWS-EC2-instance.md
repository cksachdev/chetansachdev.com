---
title: Mapping a Wix subdomain to an AWS EC2 instance
date: 2020-02-14 03:15:57
tags:
  - AWS
  - Wix
  - DNS
  - SSL
categories:
  - DevOps
description: How to point a Wix subdomain to an AWS EC2 instance using an A record and Elastic IP, then secure it with a Let's Encrypt SSL certificate.
---

This guide shows how to map a Wix-managed subdomain to an app running on an AWS EC2 instance, and then add an SSL certificate.

## Steps

**Step 1: Configure an A record in Wix**

In Wix, go to **Domains → Advanced** and add an A record pointing your subdomain to your EC2 instance's IP.

Detailed walkthrough: [Wix — Connecting a subdomain to an external resource](https://support.wix.com/en/article/connecting-a-subdomain-to-an-external-resource-eg-a-blog)

**Step 2: Set up an Elastic IP on AWS**

A regular EC2 IP changes on restart. Use an Elastic IP to get a static address:

1. Go to **EC2 → Elastic IPs → Allocate Elastic IP address**
2. Associate it with your EC2 instance

Guide: [How to set up a custom domain for EC2 without Route53](https://dev.to/maybebored/how-to-set-up-a-custom-domain-for-your-ec2-instance-without-using-route53-f9)

**Step 3: Check DNS propagation**

After saving the A record, it can take up to 48 hours to propagate globally. Check progress at:
[whatsmydns.net](https://www.whatsmydns.net/#A/chetansachdev.com)

**Step 4: Install a Let's Encrypt SSL certificate**

For Bitnami-based EC2 instances, use the `bncert` tool:
[Bitnami: How to install SSL certificates using bncert](https://docs.bitnami.com/general/how-to/understand-bncert/)
