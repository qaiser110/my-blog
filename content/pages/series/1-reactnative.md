---
templateKey: blog-post
path: /react-native-tutorial
series: /react-native-tutorial
cover: /img/MobX_ReactNative_State_Management.jpg
title: Real-world ReactNative apps made easy with RNE, Jest and MobX MST
date: 2018-05-02T15:04:10.000Z
description: This is an intro to building mobile apps in ReactNative. It covers state management in Mobx, code styling and linting tools (prettier, eslint, and arirbnb style guide), and testing the app via jest and enzyme.
chapters:
    - /react-native-tutorial/prettier-eslint-airbnb-styleguide
    - /react-native-tutorial/drawer-navigation-tabs-with-react-navigation
    - /react-native-tutorial/testing-with-jest-enzyme
    - /react-native-tutorial/mobx-state-tree
category: programming
tags:
    - eslint
    - react-native
    - unit-testing
hashtags:
    - CRNA
    - ReactNative
    - MobX
    - eslint
    - prettier
    - JavaScript
---

In this series, we'll build a real-world mobile application in ReactNative, and also explore some of the development practices and libraries, including directory structure, state management (in Mobx), code styling and linting tools ([Prettier](https://prettier.io/), [ESLint](https://eslint.org/), and [Arirbnb style guide](https://github.com/airbnb/javascript)), user interface in [React Native Elements](https://react-native-training.github.io/react-native-elements/), and an important, but often ignored part - unit-testing your application (via [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme)).

## State Management in React

React and ReactNative have made the building Single Page Applications and Mobile Applications fun and easy, but they only cover the view of the applications. State Management and UI design could still be a painful part of building the app. There are several popular State Management libraries available for React. I've used Redux, Mobx, and RxJS, and while all three of them are good in their own ways, I've enjoyed MobX the most because of its simplicity, elegance and powerful state management.

[Redux](https://redux.js.org/introduction/three-principles), based primarily on the concepts of functional programming and pure functions, tries to solve the complexity of state management by imposing some restrictions on when updates are possible. These restrictions are reflected in three basic principles: a single source of truth, read-only state, and pure functions. You can read more about [these principles in Redux documentation](https://redux.js.org/introduction/three-principles). While I'm a fan of functional programming, I've experienced that you have to deal with a lot of unnecessary boilerplate code when working with Redux. You have to write code for dispatching actions and transforming state yourself in Redux. Mobx, on the other hand, does this job for you, making it easier to maintain and fun to work with. You need the right amount of code and restrictions in MobX to achieve a superior state management and a good developer experience. In Redux, you also have to spend a substantial amount of time in normalizing and de-normalizing your data. In MobX, you don't need to normalize the data, and MobX automatically tracks the relations between state and derivations. We'll go into this later.

[RxJS](http://reactivex.io/rxjs) reactive programming library for JavaScript. It is different from MobX in that RxJS allows you to react to events while in MobX, you observe the values (or state) and helps you react to changes in state. Although both RxJS and MobX provide the ability to perform reactive programming, they are quite different in their approaches. In RxJS, you have to use different operators, .


## About our App

The application we're building is for a Book Store. It will mainly consist of two simple views, Books View and Authors View. The app will contain a navigation drawer with two menu options, allowing the user to switch between the two views. The first option would be for navigating to the Books View, and the other option would be for the Authors View. The Books View will contain the list of books, while the Authors View will containing the list of authors. The Book View will further contain tab navigation allowing the user to switch between Fiction and Non-Fiction books.

We'll be installing everything on a Mac OS. Most of the commands will be the same when you have node installed, but if you face any issues, let me know, or just google it.

### Topics Covered

There are five parts in this series. We'll cover different topics and libraries necessary to create and test a full blown React Native application:

1. In this part, we'll install `create-react-native-app`, and use it to bootstrap our Book Store application.
2. In [part II](/react-native-tutorial/prettier-eslint-airbnb-styleguide), we'll setup prettier, eslint, and arirbnb style guide for our project.
3. In [part III](/react-native-tutorial/drawer-navigation-tabs-with-react-navigation), we'll add Drawer and Tabs Navigation using react-navigation.
4. In [part IV](/react-native-tutorial/testing-with-jest-enzyme), we'll test our React components with Jest and Enzyme
5. In [part V](/react-native-tutorial/mobx-state-tree), we'll work on the state management of our app using MobX (mobx-state-tree). It will also involve some UI changes and more navigation. We'll sort and filter the books by genre, and allow the user to see the Book detail screen when the user taps on a book.

Here's a demo of the Bookstore app we're going to build:

![ReactNative Bookstore App](react-native_BookList_final-app.gif)

### What we won't Covered

There are a few things we won't cover in this series, which you may want to consider in your project:

1. Tools for adding static type system in JavaScript, like [flow](https://flow.org/) and [TypeScript](https://www.typescriptlang.org/).
2. Although we will add some styles to our app, we won't go into details and the different options available for adding styles in a ReactNative application. The [styled-components](https://github.com/styled-components/styled-components) library is one of the most popular ones for both React and ReactNative applications.
3. We won't build a separate backend for our application. We will go through integration with the Google Books API, but we'll use mock data for the most part.

Before we continue to the first part of this series, we'll initialize our ReactNative app using [CRNA](https://github.com/react-community/create-react-native-app) CLI. So let's get started!

## Create React Native application using create-react-native-app CLI (CRNA)

[Create React Native App](https://github.com/react-community/create-react-native-app) is a tool created in collaboration between [Facebook](https://code.facebook.com/) and [Expo](https://expo.io/) team that makes it a breeze to get started with a React Native project.

Assuming that you have [Node](https://nodejs.org/en/download/) already installed, , we need to install `create-react-native-app` globally, so that we can initialize a new React Native project for our Book Store.

```sh
npm install -g create-react-native-app
```

Now, we can use the create-react-native-app CLI to create our new React Native project. Let's name it `bookstore-app`:

```sh
create-react-native-app bookstore-app
```

Once CRNA is done bootstrapping our React Native application, it will show the helpful commands. Let's change directory to the newly created CRNA app, and start it.

```sh
cd bookstore-app
npm start
```

This will start the packager, giving the option to launch the iOS or Android simulator, or open the app on a real device. 

If you face any issues, please refer to either the [React Native's getting started guide](https://facebook.github.io/react-native/docs/getting-started.html) or [Create React Native app (CRNA) guide](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md)

### Opening the CRNA app on a real device via Expo

When the app is started via `npm start`, a QR code will be displayed in your terminal. The easiest way to look at our bootstrapped app is using the Expo app. To do that:
1. Install the [Expo](https://expo.io/) client app on your iOS or Android device.
2. Make sure that you are connect to the same wireless network as your computer.
3. Using the Expo app, scan the QR code from your terminal to open your project.

### Opening the CRNA app in a simulator

To run the app on iOS Simulator, you'll need to install Xcode. To run the app on an Android Virtual Device, you need to setup the Android development environment. Look at the react-native getting started guide for for both the setups.  
