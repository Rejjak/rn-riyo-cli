# RN RIYO CLI
![riyo_riyo](https://user-images.githubusercontent.com/19728368/61596780-6fbdfc00-ac25-11e9-9893-e30d7c4c52f2.png)

The RN RIYO CLI is a development tool for react native app development.
# Features!

  - Generating standard project structure with respect to type i.e, `sidebar`,`tabbar` and `basic`
  - Best rounting configuration implemented that developer can understand easily
  - Managing application package name and app name easily through this CLI that developer can change their android package name and App name without go to any specific file
  - Generating keystore file and place this file in where its need be and edit some files with this keystore information
  - At the time of generating new screen, it's autometically imported to the navigation configurtion file
  - At the time of generating new screen a style file aslo be generate and this will import to this screen with some common code
  - Developer can aslo generate a single file, i.e., component, style and service as per requirment with this CLI
  - Lastly, using this CLI, developer can save their time for creating a new application



### Installation

RN RIYO CLI requires [Node.js](https://nodejs.org/) v8+ and [React Native](https://facebook.github.io/react-native/docs/getting-started) to run perfectly and aslo need `JDK` and `SDK`.


Install the CLI with the following command.

```sh
npm install -g rn-riyo
```


### How to use?
If your system already setup, please follow the below steps

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
Generating keystore file and place this file to specfic folder and edited some files
```sh
rn-riyo g-keystore-file
```
### For more command usage:
```sh
rn-riyo --help
```

Note: I am sorry to say you that there was a minor problem with version 1.0.0 to 1.0.4. If your are currently using oldest version, please uninstall it and re-install latest version again.

In the latest version I have add a new functionality to display a message if new version is available of the CLI.


**Lets chill dude, happy coding!**

License
----

GNU GENERAL PUBLIC LICENSE


