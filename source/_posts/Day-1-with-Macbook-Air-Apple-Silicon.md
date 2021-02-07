---
title: Day 1 with Macbook Air - Apple Silicon
category:
  - null
tags:
  - null
top: 1
originContent: "**First impression:**\n- No heating issue\n- Loooong battery backup\n- Good sound quality\n\n*Initial stats without any installation:*\n![Screenshot 20210207 at 11.22.00 PM.png](/images/2021/02/08/a099994a-0d3c-4f1f-abe3-fd040dcdd4c4.png)\n\n![Screenshot 20210207 at 11.21.51 PM.png](/images/2021/02/08/6b2654e2-94d0-4f09-884f-38d5b9f93fdb.png)\n\n![Screenshot 20210207 at 11.21.20 PM.png](/images/2021/02/08/a3d7957c-33b1-4813-af22-486ce75195e2.png)\n\n\n**Development environment setup:**\nIt's difficult to figure out all the apps which are ported to Apple Silicon. I tried to setup the nodejs development environment and run into following issues:\n1. I need different node versions and manage them using nvm. Installing nvm and trying to install node doesn't work(as of 8th feb 2021). Solution is to launch terminal/iterm with \"Open using Rosetta\" and then proceed with installing node. This enables x64 for all the apps running from Terminal.\n\t- right click your terminal app from Finder\n\t- select \"Get Info\"\n\t- enable \"Open using Rosetta\"\n![image.png](/images/2021/02/08/c8b67c00-5d51-4211-8b3a-97a0188de194.png)\n*Reference*:\n- [https://stackoverflow.com/questions/64899827/nodejs-on-apple-silicon-m1](https://stackoverflow.com/questions/64899827/nodejs-on-apple-silicon-m1)\n- [https://news.ycombinator.com/item?id=25132217](https://news.ycombinator.com/item?id=25132217)\n- [https://github.com/nodejs/TSC/issues/886](https://github.com/nodejs/TSC/issues/886)\n2. Install Rosetta using the command below:\n```\nsoftwareupdate --install-rosetta\n```\n*Reference*: [https://apple.stackexchange.com/questions/408375/zsh-bad-cpu-type-in-executable](https://apple.stackexchange.com/questions/408375/zsh-bad-cpu-type-in-executable)\n3. If running into issues with node applications, ensure you are running with right arch type:\n```\nnode -p process.arch\n```\nto change arch run the command below:\n```\narch -x86_64 $SHELL\n```\n4.  With the above settings, I was able to install all required apps using brew\n```\nbrew install iterm2 alfred licecap sublime-text visual-studio-code karabiner-elements sourcetree araxis-merge itsycal the-unarchiver  easyfind omnidisksweeper\n```\n\n**Miscellaneous issues:**\n\"You don't have permission to open the application\"\n![Screenshot 20210208 at 1.25.18 AM.png](/images/2021/02/08/4ef93402-f751-4fcb-9946-2eb202206bd5.png)\nTo fix this issue:\n1. Open terminal\n2. Enter:   sudo chmod -R 755 /path/to/app\n3. Press enter\n4. Then enter your password\n5. Open the app and it should work.\n\n\n"
categories: []
toc: false
date: 2021-02-08 02:01:36
---

**First impression:**
- No heating issue
- Loooong battery backup
- Good sound quality

*Initial stats without any installation:*
![Screenshot 20210207 at 11.22.00 PM.png](/images/2021/02/08/a099994a-0d3c-4f1f-abe3-fd040dcdd4c4.png)

![Screenshot 20210207 at 11.21.51 PM.png](/images/2021/02/08/6b2654e2-94d0-4f09-884f-38d5b9f93fdb.png)

![Screenshot 20210207 at 11.21.20 PM.png](/images/2021/02/08/a3d7957c-33b1-4813-af22-486ce75195e2.png)


**Development environment setup:**
It's difficult to figure out all the apps which are ported to Apple Silicon. I tried to setup the nodejs development environment and run into following issues:
1. I need different node versions and manage them using nvm. Installing nvm and trying to install node doesn't work(as of 8th feb 2021). Solution is to launch terminal/iterm with "Open using Rosetta" and then proceed with installing node. This enables x64 for all the apps running from Terminal.
	- right click your terminal app from Finder
	- select "Get Info"
	- enable "Open using Rosetta"
![image.png](/images/2021/02/08/c8b67c00-5d51-4211-8b3a-97a0188de194.png)
*Reference*:
- [https://stackoverflow.com/questions/64899827/nodejs-on-apple-silicon-m1](https://stackoverflow.com/questions/64899827/nodejs-on-apple-silicon-m1)
- [https://news.ycombinator.com/item?id=25132217](https://news.ycombinator.com/item?id=25132217)
- [https://github.com/nodejs/TSC/issues/886](https://github.com/nodejs/TSC/issues/886)
2. Install Rosetta using the command below:
```
softwareupdate --install-rosetta
```
*Reference*: [https://apple.stackexchange.com/questions/408375/zsh-bad-cpu-type-in-executable](https://apple.stackexchange.com/questions/408375/zsh-bad-cpu-type-in-executable)
3. If running into issues with node applications, ensure you are running with right arch type:
```
node -p process.arch
```
to change arch run the command below:
```
arch -x86_64 $SHELL
```
4.  With the above settings, I was able to install all required apps using brew
```
brew install iterm2 alfred licecap sublime-text visual-studio-code karabiner-elements sourcetree araxis-merge itsycal the-unarchiver  easyfind omnidisksweeper
```

**Miscellaneous issues:**
"You don't have permission to open the application"
![Screenshot 20210208 at 1.25.18 AM.png](/images/2021/02/08/4ef93402-f751-4fcb-9946-2eb202206bd5.png)
To fix this issue:
1. Open terminal
2. Enter:   sudo chmod -R 755 /path/to/app
3. Press enter
4. Then enter your password
5. Open the app and it should work.


