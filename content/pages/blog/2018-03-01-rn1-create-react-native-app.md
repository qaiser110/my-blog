---
templateKey: blog-post
path: /react-native-tutorial/create-react-native-app
series: /react-native-tutorial
draft: true
title: 'Creating the ReactNative App using CRNA'
date: 2017-01-04T15:04:10.000Z
description: In this first part pf the series, we'll use the create-react-native-app to create our new React Native project.
category: react-native
tags:
    - programming
    - react-native
---

### About our App

The application we're building is for a Book Store. It will mainly consist of two simple views, Books View and Authors View. The app will contain a navigation drawer with two menu options, allowing the user to switch between the two views. The first option would be for navigating to the Books View, and the other option would be for the Authors View. The Books View will contain the list of books, while the Authors View will containing the list of authors. The Book View will further contain tab navigation allowing the user to switch between Fiction and Non-Fiction books.

We'll be installing everything on a Mac OS. Most of the commands will be the same when you have node installed, but if you face any issues, let me know, or just google it.

So let's get started by bootstrapping our React Native BookStore application.

#### 1. Create React Native application using create-react-native-app CLI (CRNA)

[Create React Native App](https://github.com/react-community/create-react-native-app) is a tool created in collaboration between [Facebook](https://code.facebook.com/) and [Expo](https://expo.io/) team that makes it a breeze to get started with a React Native project.

Assuming that you have [Node](https://nodejs.org/en/download/) already installed, , we need to install `create-react-native-app` globally, so that we can initialize a new React Native project for our Book Store.

```sh
npm install -g create-react-native-app
```

Now, we can use the create-react-native-app CLI to create our new React Native project. Let's name it `rn-bookstore-app`:

```sh
create-react-native-app rn-bookstore-app
```

Once CRNA is done bootstrapping our React Native application, it will show the helpful commands. Let's change directory to the newly created CRNA app, and start it.

```sh
cd rn-bookstore-app
npm start
```

This will launch the !

If you face any issues, please refer to either the [React Native's getting started guide](https://facebook.github.io/react-native/docs/getting-started.html) or [Create React Native app (CRNA) guide](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md)

#### Opening the CRNA app on a real device via Expo

When the app is started via `npm start`, a QR code will be displayed in your terminal. The easiest way to look at our bootstrapped app is using the Expo app. To do that:
1. Install the [Expo](https://expo.io/) client app on your iOS or Android device.
2. Make sure that you are connect to the same wireless network as your computer.
3. Using the Expo app, scan the QR code from your terminal to open your project.

#### Opening the CRNA app in a simulator

To run the app on iOS Simulator, you'll need to install Xcode. To run the app on an Android Virtual Device, you need to setup the Android development environment. Look at the react-native getting started guide for for both the setups.  
