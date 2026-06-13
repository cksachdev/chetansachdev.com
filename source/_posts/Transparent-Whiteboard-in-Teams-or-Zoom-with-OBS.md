---
title: Transparent whiteboard in Microsoft Teams or Zoom using OBS
date: 2021-03-01 23:43:57
tags:
  - OBS
  - Zoom
  - Microsoft Teams
  - Teaching
categories:
  - Productivity
description: How to create a transparent whiteboard effect in Zoom or Teams using OBS Studio and a virtual camera, so you can write notes while your video shows through.
---

This trick lets you write on a "whiteboard" while your video is visible in the background — great for teaching or presentations in Zoom or Teams.

## How it works

You use **OBS Studio** with its **Virtual Camera** feature. OBS composites your webcam feed with a transparent writing layer, then sends the combined output to Zoom or Teams as a virtual camera.

## Video walkthrough

[Watch on YouTube](https://www.youtube.com/watch?v=-oaikJCR6ec)

## What you need

- [OBS Studio](https://obsproject.com/) (free)
- OBS Virtual Camera (built into OBS 26+)
- A stylus or drawing tablet for writing (optional but recommended)

## Steps

**Step 1:** Install OBS Studio and open it.

**Step 2:** Add a **Video Capture Device** source for your webcam.

**Step 3:** Add a **Display Capture** or **Window Capture** source on top, and use a **Chroma Key** or **Color Correction** filter to make the background transparent.

**Step 4:** Click **Start Virtual Camera** in OBS.

**Step 5:** In Zoom or Teams, change your camera input to **OBS Virtual Camera**.

You can now draw/annotate on your screen and it overlays on your video feed.
