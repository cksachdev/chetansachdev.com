---
title: Resetting Visual Studio Code in macOS
category:
  - null
tags:
  - null
top: 1
originContent: ''
categories: []
toc: false
date: 2020-02-08 03:29:30
---

I have been exploring lot of visual studio code extensions and the side affect of it was that it slowed down my experience with Visual Studio Code. I wanted to preserve the extensions which I have already tried. To achieve this I found the settings folder of VSCode and then took a backup of those files. Below are the commands, in case you are trying to achieve the same:
Close VScode and run below two commands in terminal
```
mv ~/Library/Application Support/Code ~/Library/Application Support/backup-Code
mv ~/.vscode ~/backup-vscode
```
After these, all your settings and extensions are backed up. Next launch VSCode and then press **⌘ + ,** to open Visual Studio Code settings.
and then add:
```
{
    "workbench.colorTheme": "ArtSchool",
    "editor.fontFamily": "Operator Mono",
    "editor.fontLigatures": true,
    "editor.wordWrap": "on",
    "editor.mouseWheelZoom": true,
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```

Ofcourse, you need to install the specified theme, font and formatter plugin to make it work. After the above settings, your editor should look like below screenshot:
![image.png](/images/2020/02/08/06ba4fb0-49f5-11ea-984d-f70f4cd221c6.png)

