---
title: 'Fix: MacBook Pro 2010 crashing after macOS upgrade'
date: 2020-08-13 16:18:48
tags:
  - macOS
  - Computers
categories:
  - Computers
description: Fix random crashes on a MacBook Pro 2010 after upgrading to High Sierra by applying an NVIDIA graphics hotfix from GitHub.
---

After upgrading a MacBook Pro 2010 to High Sierra, the OS kept crashing randomly, making it unusable. The culprit is an NVIDIA GPU driver issue. Here's the fix.

## Steps

**Step 1: Download the GPU hotfix**

Download the fix from this GitHub repo:
[MBPMid2010_GPUFix](https://github.com/julian-poidevin/MBPMid2010_GPUFix)

**Step 2: Apply the fix**

Follow the steps shown in the video below:

{% youtube 8-7UNFKG1eE %}

The fix patches the NVIDIA graphics driver that causes the crashes. After applying it and restarting, the system should be stable.
