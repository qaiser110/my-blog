---
templateKey: blog-post
path: /react-native-tutorial/prettier-eslint-airbnb-styleguide-setup
series: /react-native-tutorial
cover: /img/products-grid1.jpg
title: Setup prettier, eslint, and airbnb style guide
date: 2017-01-04T15:04:10.000Z
description: In this tutorial, we'll setup prettier, eslint, and arirbnb style guide to make sure our code not only looks pretty, but also runs code linting.
category: code-style
tags:
    - programming
    - react-native
hashtags:
    - prettier
    - eslint
    - arirbnb
---
## why is linting tool important

## why is Code styling important

Being a dynamic language, JavaScript is prone to developer error. Since it's not a compile language, error are discovered when the JavaScript code is executed. Linting tools like ESLint allow developers to discover problems with their JavaScript code without executing it. This is why a good linting tool is extremely important to ensure that quality is baked in from the beginning. In order to do that, we'll start our tutorial series by implementing linting tools. You can learn more about ESLint here. https://eslint.org/docs/about/ 

ESLint is configurable and you can set your rules according to your preferences. However different linting rules configuration have have been provided by the community. One of the popular ones is the airbnb styles guides. The eslint-config-airbnb package provides the contains all of the airbnb ESLint rules, including ECMAScript 6+ and React. We'll use that. Go to the repo to follow the instructions, or if you are on a Mac or Linux, simply run this command in the terminal:
(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)

To create the eslint configuration file, 
eslint --init

![initializing linting via eslint-init](img/react-native/eslint-init-initialize.png)

A file .eslintrc.js will be created with the following configurations:

```js
module.exports = {
    "extends": [
      "prettier"
    ],
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
}
```

You might be using experimental features not supported in ESLint itself yet. To avoid linting errors on those experimental features, let's also add babel-eslint

npm install --save-dev babel-eslint

Add "babel-eslint" to .eslintrc.js

```js
module.exports = {
    "parser": "babel-eslint",
    "extends": [
	//...
```

https://medium.freecodecamp.org/adding-some-air-to-the-airbnb-style-guide-3df40e31c57a

We'll a
https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnb-1

Code styling
No one like ugly code. And when you're working in a team, you want to make sure that the code formatting and indentation is consistent throughout the team. Prettier is just the tool for that. It ensures that all the code conforms to a consistent style. 

We'll also add the ESLint plugin for prettier, which will add Prettier as an ESLint rule and report differences as individual ESLint issues. 

Now, there may be conflicts between the ESLint rules and the code formatting done by prettier. Fortunately, there is a plugin available called eslint-config-prettier that turns off all rules that are unnecessary or might conflict with prettier. So let's install all the necessary tools, prettier and eslint-plugin-prettier

npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier

To enable eslint-plugin-prettier plugin, update your .eslintrc.js file to add the "prettier" plugin. And to show linting error on Prettier formatting rules, add the "rule" to show error on "prettier/prettier". Here's our updated .eslintrc.js:

```js
module.exports = {
 "parser": "babel-eslint",
 "extends": [
   "airbnb",
   "prettier"
 ],
 "plugins": [
   "react",
   "prettier",
   "jsx-a11y",
   "import"
  ],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

eslint-config-prettier also ships with a CLI tool to help you check if your configuration contains any rules that are unnecessary or conflict with Prettier. Let's be proactive and do just that.
First, add a script for it to package.json:
{
  "scripts": {
    "eslint-check": "eslint --print-config .eslintrc.js | eslint-config-prettier-check"
  }
}

Now, run the "eslint-check" command: 
npm run eslint-check
This will list the conflicting rules in the terminal. Let's turn off the conflicting rules by updating the .eslintrc.js file. I also prefer singleQuote and trailingComma, so I'll configure those rules as well. This is what our .eslintrc.js file looks like now:

```js
module.exports = {
 "parser": "babel-eslint",
 "extends": [
   "airbnb",
   "prettier"
 ],
 "plugins": [
   "react",
   "jsx-a11y",
   "import"
 ],
 "rules": {
   "prettier/prettier": "error",
   "react/jsx-closing-bracket-location": "off",
   "react/jsx-curly-spacing": "off",
   "react/jsx-equals-spacing": "off",
   "react/jsx-first-prop-new-line": "off",
   "react/jsx-indent": "off",
   "react/jsx-indent-props": "off",
   "react/jsx-max-props-per-line": "off",
   "react/jsx-tag-spacing": "off",
   "react/jsx-wrap-multilines": "off"
 }
}
```

Configure VS Code to run eslint on save
We can configure any IDE to automatically run eslint on Save or as we type, and since we have also configured prettier along with eslint, our code will automatically be pretiffied. VS Code is an IDE popular in the JavaScript community, so I'll show how to setup eslint auto-fix on save using VS Code, but the steps would be similar in any IDE.

To configure VS Code to automatically run eslint on Save, we first need to install the eslint extension. Go to Extensions, search for "ESLint" extension, and install it. Once the ESLint extension is installed, go to Preferences > User Settings, and set "eslint.autoFixOnSave" to true. Also make sure that "files.autoSave" is either "off", "onFocusChange" or "onWindowChange".

Now, open the file App.js. If the eslint is configured correctly, you should see some linting error, like the "react/prefer-stateless-function", "react/jsx-filename-extension", and "no-use-before-define" errors. Let's turn those "off" in the .eslintrc.js file. I also prefer singleQuote and trailingComma, so I'll configure those rules as well. Here is the updated .eslintrc.js file.

```js
module.exports = {
 "parser": "babel-eslint",
 "extends": [
   "airbnb",
   "prettier"
 ],
 "plugins": [
   "react",
   "prettier",
   "jsx-a11y",
   "import"
 ],
 "rules": {
   "prettier/prettier": [
     "error",
     {
       "singleQuote": true,
       "trailingComma": "all",
     }
   ],
   "react/prefer-stateless-function": "off",
   "react/jsx-filename-extension": "off",
   "no-use-before-define": "off",
   "react/jsx-closing-bracket-location": "off",
   "react/jsx-curly-spacing": "off",
   "react/jsx-equals-spacing": "off",
   "react/jsx-first-prop-new-line": "off",
   "react/jsx-indent": "off",
   "react/jsx-indent-props": "off",
   "react/jsx-max-props-per-line": "off",
   "react/jsx-tag-spacing": "off",
   "react/jsx-wrap-multilines": "off"
 }
}
```

I know this was a lot of work, considering that we haven't even started working on our app yet, but trust me this setup would be very beneficial in the long run, even if you're a one person team, and when you're working with other developers, linting and coding standards will go a long way in reducing code defects and ensuring consistency in code style.
https://github.com/qaiser110/react-native-mobx-starter/tree/1-eslint-airbnb-prettier 
