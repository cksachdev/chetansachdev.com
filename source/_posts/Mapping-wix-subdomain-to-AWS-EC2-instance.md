---
title: Mapping wix subdomain to AWS EC2 instance
category:
  - null
tags:
  - [AWS]
author: [AWS]
top: 1
originContent: ''
categories: []
toc: false
date: 2020-02-14 03:15:57
---

1. Configure A record in wix Advance settings. Refer to link below for step by step details.
https://support.wix.com/en/article/connecting-a-subdomain-to-an-external-resource-eg-a-blog
2. Set up Elastic IP and associate address to Private IP. Refer to link below:
https://dev.to/maybebored/how-to-set-up-a-custom-domain-for-your-ec2-instance-without-using-route53-f9
3. Check DNS propagation status for your new subdomain
https://www.whatsmydns.net/#A/chetansachdev.com

Installing LetsEncrypt SSL certificate. Below is a link for bitnami installation. 
https://docs.bitnami.com/general/how-to/understand-bncert/