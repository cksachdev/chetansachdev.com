---
title: Sync Mongo data from prod to dev machine via ssh
category:
  - null
tags:
  - null
top: 1
originContent: ''
categories: []
toc: false
date: 2020-06-04 14:40:32
---

With MongoDB 4.0 and earlier there db.copyDatabase() and db.cloneDatabase().<br> Stackoverflow script available on the link below for MongoDB 4.0 and earlier:<br>
https://stackoverflow.com/questions/16619598/sync-mongodb-via-ssh
https://sheharyar.me/blog/sync-mongodb-local-and-production-heroku/ 
<br>

For MongoDB >4.0 mongo-sync module doesn't seem to work. I had a mongodb<br> instance on AWS EC2 and needed to sync the data to debug the issue and <br>replicate in dev environment. Below is a command which will sync mongodb from<br> aws ec2. Below command does the following:
<br>
1 .  connect to aws instance using keypair pem file
2 . use mongodump to export the data from server
3 . pipe the data to local machine
4 . restore the data in local machine
<br>

```sh
ssh -i PATH_TO_KEYPAIR.pem 
USERNAME@IP_ADDRESS 'mongodump > 
/dev/null && tar -zc dump && rm -rf dump' 
| tar -zx && 
mongorestore dump && rm -rf dump
```
