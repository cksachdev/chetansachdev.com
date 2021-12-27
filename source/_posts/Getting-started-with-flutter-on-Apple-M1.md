---
title: Getting started with flutter on Apple M1
category:
  - null
tags:
  - null
top: 1
originContent: ''
categories: []
toc: false
date: 2021-05-24 14:29:26
---

Download flutter_macos_2.2.0-stable.zip from https://flutter.dev/docs/get-started/install/macos

Codelab 1:
https://codelabs.developers.google.com/codelabs/first-flutter-app-pt1?utm_source=google-io21&utm_medium=referral&utm_campaign=io21-resources#0



```
❯ flutter doctor

  ╔════════════════════════════════════════════════════════════════════════════╗
  ║                 Welcome to Flutter! - https://flutter.dev                  ║
  ║                                                                            ║
  ║ The Flutter tool uses Google Analytics to anonymously report feature usage ║
  ║ statistics and basic crash reports. This data is used to help improve      ║
  ║ Flutter tools over time.                                                   ║
  ║                                                                            ║
  ║ Flutter tool analytics are not sent on the very first run. To disable      ║
  ║ reporting, type 'flutter config --no-analytics'. To display the current    ║
  ║ setting, type 'flutter config'. If you opt out of analytics, an opt-out    ║
  ║ event will be sent, and then no further information will be sent by the    ║
  ║ Flutter tool.                                                              ║
  ║                                                                            ║
  ║ By downloading the Flutter SDK, you agree to the Google Terms of Service.  ║
  ║ Note: The Google Privacy Policy describes how data is handled in this      ║
  ║ service.                                                                   ║
  ║                                                                            ║
  ║ Moreover, Flutter includes the Dart SDK, which may send usage metrics and  ║
  ║ crash reports to Google.                                                   ║
  ║                                                                            ║
  ║ Read about data we send with crash reports:                                ║
  ║ https://flutter.dev/docs/reference/crash-reporting                         ║
  ║                                                                            ║
  ║ See Google's privacy policy:                                               ║
  ║ https://policies.google.com/privacy                                        ║
  ╚════════════════════════════════════════════════════════════════════════════╝


Running "flutter pub get" in flutter_tools...                    1,010ms
Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel stable, 2.2.0, on macOS 11.2.2 20D80 darwin-arm, locale en-IN)
[✗] Android toolchain - develop for Android devices
    ✗ Unable to locate Android SDK.
      Install Android Studio from: https://developer.android.com/studio/index.html
      On first launch it will assist you in installing the Android SDK components.
      (or visit https://flutter.dev/docs/get-started/install/macos#android-setup for detailed instructions).
      If the Android SDK has been installed to a custom location, please use
      `flutter config --android-sdk` to update to that location.

[✗] Xcode - develop for iOS and macOS
    ✗ Xcode installation is incomplete; a full installation is necessary for iOS development.
      Download at: https://developer.apple.com/xcode/download/
      Or install Xcode via the App Store.
      Once installed, run:
        sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
        sudo xcodebuild -runFirstLaunch
    ✗ CocoaPods not installed.
        CocoaPods is used to retrieve the iOS and macOS platform side's plugin code that responds to your plugin usage on the Dart side.
        Without CocoaPods, plugins will not work on iOS or macOS.
        For more info, see https://flutter.dev/platform-plugins
      To install see https://guides.cocoapods.org/using/getting-started.html#installation for instructions.
[✓] Chrome - develop for the web
[!] Android Studio (not installed)
[✓] VS Code (version 1.54.3)
[✓] Connected device (1 available)

! Doctor found issues in 3 categories.

```

From the above error you can see that Android studio and XCode are required and the links to download are provide. Download both of them and try running ```flutter doctor``` again.

Accepting android licenses
```
~/dev/startup_namer
❯ flutter doctor --android-licenses
Exception in thread "main" java.lang.NoClassDefFoundError: javax/xml/bind/annotation/XmlSchema
	at com.android.repository.api.SchemaModule$SchemaModuleVersion.<init>(SchemaModule.java:156)
	at com.android.repository.api.SchemaModule.<init>(SchemaModule.java:75)
	at com.android.sdklib.repository.AndroidSdkHandler.<clinit>(AndroidSdkHandler.java:81)
	at com.android.sdklib.tool.sdkmanager.SdkManagerCli.main(SdkManagerCli.java:73)
	at com.android.sdklib.tool.sdkmanager.SdkManagerCli.main(SdkManagerCli.java:48)
Caused by: java.lang.ClassNotFoundException: javax.xml.bind.annotation.XmlSchema
	at java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:581)
	at java.base/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(ClassLoaders.java:178)
	at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:522)
	... 5 more
```

Android Studio doesn't install Android Command Line tools by default. Follow the screenshots below:
![image.png](/images/2021/05/19/83236218-2523-430d-8a78-dc9a27c3f065.png)
![Screenshot 20210519 at 9.08.29 PM.png](/images/2021/05/19/e9c07119-7f9d-477a-a1a4-4035e463cc42.png)
![Screenshot 20210519 at 9.09.19 PM.png](/images/2021/05/19/dbbcfbff-639a-45fe-9ec1-9dd6a8215329.png)
![Screenshot 20210519 at 9.09.31 PM.png](/images/2021/05/19/78f76659-99c2-46dc-903a-ab7208ca8c6e.png)
![Screenshot 20210519 at 9.09.37 PM.png](/images/2021/05/19/badf9f61-cb70-4cce-b4db-3d86b80b6099.png)
![Screenshot 20210519 at 9.10.35 PM.png](/images/2021/05/19/0c3fba2c-e61d-4be1-99e0-3664ba1e2883.png)

Now rerunning ```flutter doctor --android-licenses``` doesn't throw any exception. 
