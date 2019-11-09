const program = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');
const fs = require('fs');
const mkdirp = require('mkdirp');
const colors = require('colors');
const fsextra = require("fs-extra");
const { spawn,exec,spawnSync } = require('child_process');
const rimraf = require("rimraf");
const riyoneed = require('./required');
const execute = Object.create(null);
const riyohelper = require('../helper/index');
const ora = require('ora');
const spinner = ora('');
const npmpackage = require('../lib/npmPackage');
const async = require('async');

execute.dependentcies = function(dir){
    let temp_location = {
        'SIDEBAR'   :'side',
        'TABBAR'    :'tab',
        'BASIC'     :'blank'
    };
    let template_name = dir.toString().toUpperCase();
    if(template_name == 'SIDEBAR' || template_name == 'TABBAR' || template_name == 'BASIC'){
        let file_content = "import React, {Component} from 'react';\n";
        file_content+= "import {SwitchStack} from './src/config/route/switchStack';\n\n\n";
        file_content+="export default class App extends Component {\n\n";
        file_content+="\tconstructor(props){\n";
        file_content+="\t\tsuper(props);\n";
        file_content+="\t}\n\n";
        file_content+="\trender(){\n";
        file_content+="\t\treturn(\n";
        file_content+="\t\t\t<SwitchStack/>\n";
        file_content+="\t\t);\n";
        file_content+="\t}\n";
        file_content+="}";

        if(fs.existsSync('src/')){
            if(fs.existsSync('./App.js')){
                console.log(colors.yellow('[WARNING]')+': found `src` folder & `App.js` file, by doing this it will be permanently delete and will re-generate again as per riyo structure!');
            }else{
                console.log(colors.yellow('[WARNING]')+': found `src` folder, by doing this it will be permanently delete and will re-generate again as per riyo structure!');
            }
            inquirer.prompt({ type: 'confirm', name: 'input', message: 'Do you want to continue?', default: false }).then(function (answers) {
                if(answers.input){
                    rimraf("src", function () { 
                        let des = 'src';
                        exec('npm root -g', (err, stdout, stderr) => {
                            if (err) {
                            console.error(err);
                            return;
                            }
                            let src = stdout.replace('\n','')+'/rn-riyo/test/temp/'+temp_location[template_name]+'/src';
                            fsextra.copy(src,des, function (err) {
                                if (err){
                                    console.log('An error occured while generating template.')
                                    return console.error(err)
                                }
                                riyohelper.genFile('./','App.js',file_content,function(data){
                                    if(data == true){
                                        spinner.succeed('template generated!');
                                        //console.log('\n'+colors.green('[SUCCESS]')+' template generated!\n');
                                        riyoneed();
                                    }
                                });
                            });
                            
                        });
                    });
                }else{
                    console.log('Happy Coding..!');
                }
            });
        }else{
            if(fs.existsSync('./App.js')){
                console.log(colors.yellow('[WARNING]')+': found `App.js` file, by doing this it will be permanently delete and will re-generate again as per riyo structure!');
                inquirer.prompt({ type: 'confirm', name: 'input', message: 'Do you want to continue?', default: false }).then(function (answers) {
                    if(answers.input){
                        let des = 'src';
                        exec('npm root -g', (err, stdout, stderr) => {
                            if (err) {
                                console.error(err);
                                return;
                            }
                            let src = stdout.replace('\n','')+'/rn-riyo/test/temp/'+temp_location[template_name]+'/src';
                            fsextra.copy(src,des, function (err) {
                                if (err){
                                    console.log('An error occured while generating template.')
                                    return console.error(err)
                                }
                                riyohelper.genFile('./','App.js',file_content,function(data){
                                    if(data == true){
                                        spinner.succeed('template generated!');
                                        //console.log('\n'+colors.green('[SUCCESS]')+' template generated!\n');
                                        riyoneed();
                                    }
                                });
                            });
                        });
                    }else{
                        console.log('Happy coding..!');
                    }
                });
            }else{
                common(temp_location,template_name,file_content);
            }
        }
    }else{
        console.log(colors.red('[ERROR]')+': invalid type name['+dir+']');
    }
}
function common(temp_location,template_name,file_content){
    let des = 'src';
    exec('npm root -g', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        let src = stdout.replace('\n','')+'/rn-riyo/test/temp/'+temp_location[template_name]+'/src';
        fsextra.copy(src,des, function (err) {
            if (err){
                console.log('An error occured while generating template.')
                return console.error(err)
            }
            riyohelper.genFile('./','App.js',file_content,function(data){
                if(data == true){
                    spinner.succeed('template generated!');
                    //console.log('\n'+colors.green('[SUCCESS]')+' template generated!\n');
                    riyoneed();
                }
            });
        });
    });
}
execute.tempData = function(dir){
    if(fs.existsSync('src/')){
        dir = 'src/services/myhttp';
        exec('npm root -g', (err, stdout, stderr) => {
            if (err) {
              console.error(err);
              return;
            }
            let src = stdout.replace('\n','')+'/rn-riyo/test/tempsrvone';
            fsextra.copy(src,dir, function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                spinner.start();
                spinner.color = 'yellow';
                spinner.text = 'Processing...';
                exec(npmpackage[4].cmd,(err, stdout, stderr)=>{
                    if (err) {
                        console.error(err);
                        return;
                    }
                    spinner.succeed('File generated!');
                })
            });
        });
    }else{
        let dir = 'myhttp';
        exec('npm root -g', (err, stdout, stderr) => {
            if (err) {
              console.error(err);
              return;
            }
            let src = stdout.replace('\n','')+'/rn-riyo/test/tempsrvone';
            fsextra.copy(src,dir, function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                spinner.start();
                spinner.color = 'yellow';
                spinner.text = 'Processing...';
                exec(npmpackage[4].cmd,(err, stdout, stderr)=>{
                    if (err) {
                        console.error(err);
                        return;
                    }
                    spinner.succeed('File generated!');
                })
            });
        });
    }
}
execute.askForUpdate = function(callback){
    console.log(colors.yellow('[WARNING]')+': The RN RIYO CLI has an update available!');
    inquirer.prompt({ type: 'confirm', name: 'input', message: 'Would you like to update it?', default: false }).then(function (answers) {
        if(answers.input){
            spinner.start();
            spinner.color = 'yellow';
            spinner.text = 'Updating, please wait..!';
            exec(npmpackage[5].cmd, (err, stdout, stderr) => {
                if (err) {
                    console.log(colors.red('[ERROR]')+': Faild to update, you can update it menually!');
                    callback(false);
                    spinner.stop();
                    return;
                }else{
                    spinner.succeed('RN RIYO CLI has been updated!');
                    callback(true);
                }
            }); 
        }else{
            callback(false);
        }
    });
}

execute.firstInstall = (callback)=>{
    exec('npm root -g', (err, stdout, stderr) => {
        let src = stdout.replace('\n','')+'/rn-riyo/test/rncli';
        fsextra.copy(src,'node_modules', function (err) {
            callback(true);
        });
    }); 
}

execute.constDateForADay = (date,callback)=>{
    fs.writeFile('node_modules/rncli/file.txt',date,function(err){
        callback(true);
    });
} 

function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
      return fs.statSync(path+'/'+file).isDirectory();
    });
}

execute.changeAppName = function(dir){
    const file_name = 'android/app/src/main/res/values/strings.xml';
    inquirer.prompt({ type: 'confirm', name: 'input', message: 'Are you sure you want to change?', default: false }).then(function (answers) {
        if(answers.input){
            if(fs.existsSync(file_name)){
                fs.readFile(file_name,"utf-8",(err,data)=>{
                    let str = data;
                    let start_pos = str.lastIndexOf('"app_name">')+11;
                    let next_str = str.substr(start_pos,100);
                    let last_pos = next_str.indexOf('</string>');
                    let app_name = str.substr(start_pos,last_pos);
                    let update_str = data.replace(app_name,dir);
                    fs.writeFile(file_name,update_str,function(err){
                        if(err){
                            console.log(colors.red(err));
                            return false;
                        }
                        console.log('\n'+colors.green('[SUCCESS]')+': application name has been changed!\n');
                    });
                })
            }else{
                console.log('\n'+colors.red('[ERROR]')+': file is missing!\n');
            }
        }else{
            console.log('Happy coading..!');
        }
    });
}

execute.setupFaceBook = function(dir){
    // For android
    let files = {
        AndroidManifest    :'android/app/src/main/AndroidManifest.xml',
        Strings            :'android/app/src/main/res/values/strings.xml'
    };

    async.waterfall([
        function(callback){
            if(
                fs.existsSync(files.AndroidManifest)
                &&
                fs.existsSync(files.Strings)
            ){
                fs.readFile(files.AndroidManifest,"utf-8",(err,data)=>{
                    let str = data;
                    let start_pos = str.lastIndexOf('android:theme="@style/AppTheme">')+32;
                    let isExist = str.lastIndexOf('com.facebook.sdk.ApplicationId');
                    if(isExist == -1){
                        fs.readFile(files.AndroidManifest,"utf-8",(fileerr,filedata)=>{
                            let fileStr = filedata;
                            let updateStr = '\n\t\t\t<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>';
                            let result = fileStr.splice(start_pos, 0,updateStr);
                            fs.writeFile(files.AndroidManifest,result,function(err){
                                if(err){
                                    console.log(colors.red(err));
                                    return false;
                                }
                                fs.readFile(files.Strings,"utf-8",(fileerr,filedata)=>{
                                    let fileStr = filedata;
                                    let start_pos = fileStr.lastIndexOf('</string>')+9;
                                    if(fileStr.lastIndexOf('</string>') == -1){
                                         callback('\nInvalid file,please check your string.xml file',true);
                                    }else{
                                        let updateStr = '\n\t<string name="facebook_app_id">'+dir+'</string>';
                                        let result = fileStr.splice(start_pos, 0,updateStr);
                                        fs.writeFile(files.Strings,result,function(err){
                                            if(err){
                                                console.log(colors.red(err));
                                                return false;
                                            }
                                        });
                                        callback(null,true);
                                    }
                                })
                            });
                        })
                    }else{
                        callback('\nFacebook already setup,you can change facebook app id',true);
                    }
                })
                return false;
            }
        }
    ],function(err,result){
        if(err){
            console.error(err);
            return;
        }
        console.log('\n'+colors.green('[SUCCESS]')+': Facebook integrated!\n');
    });

}

execute.changePackage = function(dir){
    let regex = /^[a-z][a-z0-9_]*(\.[a-z0-9_]+)+[0-9a-z_]$/i;
    inquirer.prompt({ type: 'confirm', name: 'input', message: 'Are you sure you want to change?', default: false }).then(function (answers) {
        if(answers.input){
            if(!regex.test(dir)){
                console.log('\n'+colors.red('[ERROR]')+': invalid package name!\n');
                return false;
            }else{
                let paths = getDirectories('android/app/src/main/java/com/');
                if(paths.length){
                    for(let p=0; p<paths.length;p++){
                        let nextPath = 'android/app/src/main/java/com/'+paths[p];
                        let files = {
                            AndroidManifest :'android/app/src/main/AndroidManifest.xml',
                            MainActivity    :nextPath+'/MainActivity.java',
                            MainApplication :nextPath+'/MainApplication.java',
                            BuildGradle     :'android/app/build.gradle'
                        };
                        async.waterfall([
                            function(callback){
                                if(
                                    fs.existsSync(files.MainActivity) 
                                    && 
                                    fs.existsSync(files.AndroidManifest)
                                    &&
                                    fs.existsSync(files.MainApplication)
                                    &&
                                    fs.existsSync(files.BuildGradle)
                                ){
                                    fs.readFile(files.MainActivity,"utf-8",(err,data)=>{
                                        let str = data;
                                        let start_pos = str.lastIndexOf('package ')+8;
                                        let next_str = str.substr(start_pos,100);
                                        let last_pos = next_str.indexOf(';');
                                        let package = str.substr(start_pos,last_pos);
                                        //console.log(package);
                                        for(let file in files){
                                        fs.readFile(files[file],"utf-8",(fileerr,filedata)=>{
                                                let fileStr = filedata;
                                                let updateStr = fileStr.replace(new RegExp(package, 'gi'), dir);
                                                fs.writeFile(files[file],updateStr,function(err){
                                                    if(err){
                                                        console.log(colors.red(err));
                                                        return false;
                                                    }
                                                });
                                        })
                                        }
                                        callback(null,true);
                                    })
                                    return false;
                                }
                            }
                        ],function(err,result){
                            if(err){
                                console.error(err);
                                return;
                            }
                            console.log('\n'+colors.green('[SUCCESS]')+': application package name has been changed!\n');
                            // if(fs.existsSync('android')){
                            //     const spawnOpts = {
                            //         stdio: 'inherit',
                            //         stdin: 'inherit',
                            //       };
                            //     let tres = spawnSync('react-native', ['upgrade', ''], spawnOpts)
                            //     if (tres.status) {
                            //         process.exit(tres.status);
                            //     }
                            // }
                        });
                    }
                }else{
                    console.log('Respective files not found!');
                }
            }
        }else{
            console.log('Happy coding..!');
        }
    })
}

execute.generateCertificate = function(dir){
    inquirer
    .prompt([
        {
        name: 'keyStoreName',
        message: 'Please enter keystore name!',
        default: 'my-release-key',
        },
        {
        name: 'aliasName',
        message: 'Please enter alias name!',
        default: 'my-key-alias',
        },
    ])
    .then(info => {
        async.waterfall([
            function(callback){
                let command = finalKeyStoreCommand(info.keyStoreName,info.aliasName);
                let tres = spawnSync(command.first_arg(), command.sec_arg(), command.third_arg);
                
                if (tres.status) {
                    process.exit(tres.status);
                    process.exit(0);
                }
                callback(null,info.keyStoreName);
            },
        ],function(err,result){
            if(err){
                console.error(err);
                process.exit(0);
                return;
            }
            let file_name = info.keyStoreName+'.keystore';
            if(fs.existsSync('./'+file_name) && fs.existsSync('android/app')){
                inquirer.prompt([
                    {
                    name: 'password',
                    message: 'Please enter keystore password again!',
                    type:'password'
                    }
                ]).then(doc=>{
                    if(doc !='' && doc.password.length>5){
                        fs.renameSync('./'+file_name,'android/app/'+file_name);
                        fs.readFile('android/gradle.properties',"utf-8",(err,data)=>{
                            let str = data+'\n\n';
                            let MYAPP_RELEASE_STORE_FILE = str.lastIndexOf('MYAPP_RELEASE_STORE_FILE');
                            let MYAPP_RELEASE_KEY_ALIAS = str.lastIndexOf('MYAPP_RELEASE_KEY_ALIAS');
                            let MYAPP_RELEASE_STORE_PASSWORD = str.lastIndexOf('MYAPP_RELEASE_STORE_PASSWORD');
                            let MYAPP_RELEASE_KEY_PASSWORD = str.lastIndexOf('MYAPP_RELEASE_KEY_PASSWORD');
                            if(
                                MYAPP_RELEASE_STORE_FILE !=-1
                                &&
                                MYAPP_RELEASE_KEY_ALIAS !=-1
                                &&
                                MYAPP_RELEASE_STORE_PASSWORD !=-1
                                &&
                                MYAPP_RELEASE_KEY_PASSWORD !=-1
                            ){
                                str = str.splice(MYAPP_RELEASE_STORE_FILE, 0, '#').splice(MYAPP_RELEASE_KEY_ALIAS+1, 0, '#').splice(MYAPP_RELEASE_STORE_PASSWORD+2, 0, '#').splice(MYAPP_RELEASE_KEY_PASSWORD+3, 0, '#');
                            }
            
                            let data_cont="MYAPP_RELEASE_STORE_FILE="+file_name+"\n";
                            data_cont+="MYAPP_RELEASE_KEY_ALIAS="+info.aliasName+"\n";
                            data_cont+="MYAPP_RELEASE_STORE_PASSWORD="+doc.password+"\n";
                            data_cont+="MYAPP_RELEASE_KEY_PASSWORD="+doc.password+"\n";
                            let final_data = str+data_cont;
                            fs.writeFile('android/gradle.properties',final_data,function(err){
                                if(err){
                                    console.log(colors.red(err));
                                    fs.unlinkSync('./'+file_name);
                                    process.exit(0);
                                    return false;
                                }
    
                                fs.readFile('android/app/build.gradle',"utf-8",(err,grad_data)=>{
                                    let str = grad_data;
                                    let start_pos = str.lastIndexOf('splits {') || str.lastIndexOf('splits{');
                                    let check_config = str.lastIndexOf('signingConfigs');
                                    if(check_config == -1){
                                        let signConfig = "signingConfigs {\n";
                                        signConfig+="\t\trelease {\n";
                                        signConfig+="\t\t\tif (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {\n";
                                        signConfig+="\t\t\t\tstoreFile file(MYAPP_RELEASE_STORE_FILE)\n";
                                        signConfig+="\t\t\t\tstorePassword MYAPP_RELEASE_STORE_PASSWORD\n";
                                        signConfig+="\t\t\t\tkeyAlias MYAPP_RELEASE_KEY_ALIAS\n";
                                        signConfig+="\t\t\t\tkeyPassword MYAPP_RELEASE_KEY_PASSWORD\n";
                                        signConfig+="\t\t\t}\n";
                                        signConfig+="\t\t}\n";
                                        signConfig+="\t}";
                                        signConfig+="\n\n\t";
                                        let result = str.splice(start_pos, 0, signConfig);
                                        let start_next_pos = result.lastIndexOf('"proguard-rules.pro"');
                                        let text_last = '\n\t\t\tsigningConfig signingConfigs.release';
                                        let final_result=result.splice(start_next_pos+20, 0, text_last);
                                        fs.writeFile('android/app/build.gradle',final_result,function(err){
                                            if(err){
                                                console.log(colors.red(err));
                                                fs.unlinkSync('./'+file_name);
                                                process.exit(0);
                                                return false;
                                            }
                                            console.log('\n'+colors.green('[SUCCESS]')+': keystore file has been generated!\n');
                                            inquirer.prompt({ type: 'confirm', name: 'input', message: 'Do you want to build apk file now?', default: false }).then(function (answers) {
                                                if(answers.input){
                                                    execute.buildApk('dir');
                                                }
                                            });
                                        });
                                    }else{
                                        console.log('\n'+colors.green('[SUCCESS]')+': keystore file has been generated!\n');
                                        inquirer.prompt({ type: 'confirm', name: 'input', message: 'Do you want to build apk file now?', default: false }).then(function (answers) {
                                            if(answers.input){
                                                execute.buildApk('dir');
                                            }
                                        });
                                    }
                                });
                            });
                        })
                    }else{
                        fs.unlinkSync('./'+file_name);
                        console.log(colors.red('\n[ERROR]')+': invalid password,please try again!');
                        process.exit(0);
                    }
                })
            }
        })
    });
}

execute.buildApk = function(dir){
    console.log('Please go through the following steps!\n');
    console.log(colors.green('[STEP-1]')+': cd android');
    console.log(colors.green('[STEP-2]')+': ./gradlew assembleRelease');
    console.log('\n\n\nNote: I will make a functionality on this with single command as soon as possible!');
}

function finalKeyStoreCommand(keyName,aliasName){
    let spawnOpts = {
        'win32':{
            stdio: 'inherit',
            stdin: 'inherit',
            shell: true
        },
        'others':{
            stdio: 'inherit',
            stdin: 'inherit',
        }
    }
    let command = {
        'freebsd':{
            cmd:'sudo keytool -genkey -v -keystore '+keyName+'.keystore -alias '+aliasName+' -keyalg RSA -keysize 2048 -validity 10000',
            first_arg:function(){
                return 'sh';
            },
            sec_arg:function(){
                return ['-c',this.cmd];
            },
            third_arg:spawnOpts.others
        },
        'darwin'    :   {
            cmd:'sudo keytool -genkey -v -keystore '+keyName+'.keystore -alias '+aliasName+' -keyalg RSA -keysize 2048 -validity 10000',
            first_arg:function(){
                return 'sh';
            },
            sec_arg:function(){
                return ['-c',this.cmd];
            },
            third_arg:spawnOpts.others
        },
        'linux'     :   {
            cmd:'sudo keytool -genkey -v -keystore '+keyName+'.keystore -alias '+aliasName+' -keyalg RSA -keysize 2048 -validity 10000',
            first_arg:function(){
                return 'sh';
            },
            sec_arg:function(){
                return ['-c',this.cmd];
            },
            third_arg:spawnOpts.others
        },
        'sunos'     :   {
            cmd:'sudo keytool -genkey -v -keystore '+keyName+'.keystore -alias '+aliasName+' -keyalg RSA -keysize 2048 -validity 10000',
            first_arg:function(){
                return 'sh';
            },
            sec_arg:function(){
                return ['-c',this.cmd];
            },
            third_arg:spawnOpts.others
        },
        'win32'     :   {
            cmd:'keytool -genkeypair -v -keystore '+keyName+'.keystore -alias '+aliasName+' -keyalg RSA -keysize 2048 -validity 10000',
            first_arg:function(){
                return this.cmd;
            },
            sec_arg:function(){
                return [];
            },
            third_arg:spawnOpts.win32
        }
    }
    return command[process.platform];
}

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};
module.exports = execute;