# RN RIYO CLI
![riyo_riyo](https://user-images.githubusercontent.com/19728368/61596780-6fbdfc00-ac25-11e9-9893-e30d7c4c52f2.png)

RN RIYO CLI is a development tool for React Native app development.

# Features

- Generates standard project structure and navigation based on type: `sidebar`, `tabbar`, or `basic`.
- Implements optimized routing configuration.
- Easily manage application package name and app name. Developers can change the Android package name and app name without modifying specific files.
- Generates a keystore file and automatically configures it with React Native. No manual changes needed.
- Automatically imports new screens into the navigation configuration file when generated.
- Generates a corresponding style file for each new screen, imported with common code.
- Allows generation of individual files, such as components, styles, and services as needed.
- Saves developers time by creating new applications with a well-structured project setup.

# What's New in the Latest Version
- Added Facebook integration functionality with a single command. Easily set up Facebook integration for both Android and iOS platforms. No need to follow lengthy documentation—a demo example is generated in your project directory after running this command.

```sh
rn-riyo setup-facebook your_facebook_app_id
```

### Installation

RN RIYO CLI requires [Node.js](https://nodejs.org/) v8+, [React Native](https://facebook.github.io/react-native/docs/getting-started), `JDK`, and `SDK`.

Install the CLI with the following command:

```sh
npm install -g rn-riyo
```

### How to Use

If your system is already set up, follow these steps:

**Step 1:**  
```sh
react-native init myApp
```  
**Step 2:**  
```sh
cd myApp
```  
**Step 3:**  
```sh
rn-riyo g-structure tabbar
```  
**Step 4:**  
```sh
react-native run-android
# or
react-native run-ios
```  

### Powerful Commands

**Generate a new screen:**  
```sh
rn-riyo g-screen homePage
```  

**Generate a new style:**  
```sh
rn-riyo g-style homeStyle
```  

**Generate a new component:**  
```sh
rn-riyo g-component myComponent
```  

**Generate a keystore file:**  
```sh
rn-riyo g-keystore-file
```  

### For More Command Usage
```sh
rn-riyo --help
```  

**Note:** This will only work for class base component, will implement functional base later.

**Let's chill, dude! Happy coding!**

---

**License**  
GNU GENERAL PUBLIC LICENSE
