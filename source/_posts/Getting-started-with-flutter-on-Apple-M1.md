---
title: Getting started with Flutter on Apple M1
date: 2021-05-24 14:29:26
tags:
  - Flutter
  - Apple Silicon
  - Android
categories:
  - Development
description: How to set up Flutter on an Apple M1 Mac, including installing Android Studio, fixing the Android Command Line Tools error, and accepting Android licenses.
---

This guide covers setting up Flutter on an Apple M1 Mac, including fixing common errors with Android Studio and SDK licensing.

## Steps

**Step 1: Download Flutter**

Get the latest stable release for macOS from the [official Flutter install page](https://flutter.dev/docs/get-started/install/macos).

As of writing, this was `flutter_macos_2.2.0-stable.zip`.

**Step 2: Run Flutter Doctor**

```bash
flutter doctor
```

This will show you what's missing. Common issues on a fresh install:

- Android toolchain not found
- Xcode installation incomplete
- CocoaPods not installed

**Step 3: Install Android Studio**

Download from [developer.android.com/studio](https://developer.android.com/studio/index.html) and install it.

**Step 4: Install Android Command Line Tools (critical step)**

Android Studio does not install the Command Line Tools by default. Without them, `flutter doctor --android-licenses` throws a `NoClassDefFoundError`.

To install them:

1. Open Android Studio
2. Go to **Preferences → Appearance & Behavior → System Settings → Android SDK**
3. Click the **SDK Tools** tab
4. Check **Android SDK Command-line Tools (latest)**
5. Click **Apply** and let it install

![SDK Tools screenshot](/images/2021/05/19/83236218-2523-430d-8a78-dc9a27c3f065.png)

**Step 5: Accept Android licenses**

```bash
flutter doctor --android-licenses
```

Accept all prompts. If Step 4 was done correctly, this runs without errors.

**Step 6: Install Xcode**

Download Xcode from the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835) or [Apple Developer](https://developer.apple.com/xcode/download/). Then run:

```bash
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -runFirstLaunch
```

**Step 7: Install CocoaPods**

```bash
sudo gem install cocoapods
```

**Step 8: Verify everything is working**

```bash
flutter doctor
```

All items should show a green checkmark. You're ready to build.

## Getting Started with your first app

Try the official Flutter codelab:
[Build your first Flutter app](https://codelabs.developers.google.com/codelabs/first-flutter-app-pt1)
