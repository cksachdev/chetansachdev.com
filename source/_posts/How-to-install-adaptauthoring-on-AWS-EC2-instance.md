---
title: How to install adaptauthoring on AWS EC2 instance
category:
  - null
tags:
  - AWS
author: [AWS]
top: 1
categories: []
toc: false
date: 2020-03-03 16:32:51
---

https://github.com/pvadimr/docker-adaptauthoring

Switch to root account, where password isn't set
```
sudo su
```

Install docker on AWS EC2 instance
```
https://www.digitalocean.com/community/tutorials/how-to
-install-and-use-docker-on-ubuntu-16-04#step-1-%E2%80%94
-installing-docker
https://blog.e-zest.com/install-docker-on-aws-ec2
```
<br> 

Pull docker image
```
docker pull pvadimr/adaptauthoring
```
Follow the instructions on https://hub.docker.com/r/pvadimr/adaptauthoring



### Set the password for root
https://aws.amazon.com/premiumsupport/knowledge-center/set-change-root-linux/


Reference links:
https://medium.com/statuscode/dockerising-a-node-js-and-mongodb-app-d22047e2806f
https://dev.to/nyagarcia/pokeapi-rest-in-nodejs-with-express-typescript-mongodb-and-docker-part-2-b56
https://github.com/hueter/docker-node-express-boilerplate
https://blog.sourcerer.io/a-crash-course-on-docker-learn-to-swim-with-the-big-fish-6ff25e8958b0
