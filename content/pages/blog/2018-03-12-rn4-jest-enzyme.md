---
templateKey: blog-post
path: /react-native-tutorial/drawer-navigation-with-react-navigation
series: /react-native-tutorial
cover: /img/products-grid1.jpg
title: Drawer and Tabs Navigation using react-navigation
date: 2017-01-04T15:04:10.000Z
description: In this tutorial, .
category: home-made
tags:
    - programming
    - react-native
    - testing
hashtags:
    - programming
    - testing
---
https://medium.com/react-native-training/learning-to-test-react-native-with-jest-part-1-f782c4e30101 
npm install --save-dev jest babel-jest regenerator-runtime

"scripts": {
  "test": "node node_modules/jest/bin/jest.js --watch"
},
"jest": {
  "preset": "jest-expo"
}

Expo includes all the jest related libraries and configurations

We'll install enzyme, and also add react-dom which is a dependency. We'll also add jest-serializer-enzyme which makes ...
npm install --save-dev enzyme@2.9.1 

npm install --save-dev react-dom@16.0.0-rc.3 react-test-renderer@16.0.0-alpha.12 

jest-serializer-enzyme

// pacakge.json
"jest": {
    "preset": "jest-expo",
    "snapshotSerializers": [
      "./node_modules/jest-serializer-enzyme"
    ]
  },

Also, at the time of this tutorial, there is an open ticket which would cause 
https://github.com/facebook/react-native/issues/13034

Enzyme allows for direct manipulation of the props and state of our components so we can create snapshots for multiple renders of the same component.

https://blog.joinroot.com/mounting-react-native-components-with-enzyme-and-jsdom/ 

http://airbnb.io/enzyme/docs/api/ShallowWrapper/dive.html
