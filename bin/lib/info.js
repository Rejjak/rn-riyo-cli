const rnriyoInfo = Object.create(null);
const package = require('./rnriyo/package');
const rnriyo = require('./rnriyo/rnriyo');
rnriyoInfo.userHelp = function(process){
    console.log('\nOptions:');
    console.log('   -v, --version                                   output the version number');
    console.log('   -h, --help                                      output usage information\n');
    console.log('\nCommands:');
    console.log('   generate-screen [dir]|g-screen [dir]            generate entered screen');
    console.log('   generate-service [dir]|g-service [dir]          generate entered service');
    console.log('   generate-style [dir]|g-style [dir]              generate entered style');
    console.log('   generate-component [dir]|g-component [dir]      generate entered component');
    console.log('   change-package-name [package name]              change application package name');
    console.log('   change-app-name [app name]                      change application name');
    console.log('   generate-keystore-file|g-keystore-file          generate keystore file and settings up for project');
    console.log('   generate-apk|g-apk                              generate signin apk file');
    console.log('   generate-structure [type]|g-structure [type]    generate project structure with`sidebar`,`tabbar` or `basic` type\n');
    process.exit(0);
}

rnriyoInfo.getVersion = function(process){
    package(function(pkg){
        rnriyo();
        console.log('\nRN RIYO CLI: '+pkg.version);
        console.log('\n--------------------------------------------------');
        console.log('Author                 :   '+pkg.author['name']);
        console.log('Email                  :   '+pkg.author['email']+'\n');
        process.exit(0);
    });
}

module.exports = rnriyoInfo;