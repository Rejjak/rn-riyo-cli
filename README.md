# RN RIYO CLI
![riyo_riyo](https://user-images.githubusercontent.com/19728368/61596780-6fbdfc00-ac25-11e9-9893-e30d7c4c52f2.png)

The RN RIYO CLI is a development tool for react native app development.
# Features!

  - Generating standard project structure and navigation with respect to type i.e, `sidebar`,`tabbar` and `basic`
  - Best rounting configuration implemented over there
  - Managing application package name and app name easily using this CLI that developer can change their android package name and App name without go to any specific file
  - Generating keystore file, after generating this file, it will autometically configure as react native process.You no need to change menually
  - At the time of generating new screen, it's autometically imported to the navigation configurtion file
  - At the time of generating new screen a style file aslo be generate and this will import to this screen with some common code
  - Developer can aslo generate a single file, i.e., component, style and service as per requirment
  - Lastly, using this CLI, developer can save their time for creating a new application and maintain best project structure

# What's new in the latest version!
- Added facebook integration functionalities with a single command. In this command you can easily setup your facebook integration for both platforms(Android,iOs) if exists. You no need to follow the documention for facebook integration, all the guide will provide this CLI, there will be generate a demo example for you in your project directory after running this command.

```sh
rn-riyo setup-facebook your_facebook_app_id
```

### Installation

RN RIYO CLI requires [Node.js](https://nodejs.org/) v8+ and [React Native](https://facebook.github.io/react-native/docs/getting-started) to run perfectly and aslo need `JDK` and `SDK`.


Install the CLI with the following command.

```sh
npm install -g rn-riyo
```


### How to use?
If your system already have setup, then follow the below steps

STEP-1
```sh
react-native init myApp
```
STEP-2
```sh
cd myApp
```
STEP-3
```sh
rn-riyo g-structure tabbar
```
STEP-4
```sh
react-native run-android or react-native run-ios
```

### Some powerfull commands

Generating new screen
```sh
rn-riyo g-screen homePage
```
Generating new style
```sh
rn-riyo g-style homeStyle
```
Generating new component
```sh
rn-riyo g-component myComponent
```
Generating keystore file
```sh
rn-riyo g-keystore-file
```
### For more command usage:
```sh
rn-riyo --help
```

Note: I am sorry to say you that there was a minor problem with version 1.0.0 to 1.0.4. If your are currently using oldest version, please uninstall it and re-install latest version again.

In the latest version I have added a new functionality to display a message if new version is available of the CLI.


**Lets chill dude, happy coding!**

License
----

GNU GENERAL PUBLIC LICENSE


