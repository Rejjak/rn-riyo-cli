const path = require('path')
const inquirer = require('inquirer');
const fs = require('fs');
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
const plist = require('plist');

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
execute.askForUpdate = function(oldV,newV,callback){
    console.log(colors.yellow('[WARNING]')+': The RN RIYO CLI has an update available!');
    console.log("\t-----------------------------------------");
    console.log("\t|\t\t\t\t\t|");
    console.log("\t|\tCurrent Version:- "+oldV+'\t\t|');
    console.log("\t|\t"+colors.green('New Version:- '+newV.trim())+'\t\t|');
    console.log("\t|\t\t\t\t\t|");
    console.log("\t-----------------------------------------");
    
    inquirer.prompt({ type: 'confirm', name: 'input', message: 'Would you like to update it?', default: false }).then(function (answers) {
        if(answers.input){
            if(process.platform == 'win32'){
                spinner.color = 'yellow';
                spinner.text = 'Updating, please wait..!';
                spinner.start();
                exec(npmpackage[5].cmd, (err, stdout, stderr) => {
                    if (err) {
                        spinner.stop();
                        spinner.text = '';
                        console.log(colors.red('[ERROR]')+': Faild to update, you can update it menually!');
                        callback(false);
                        return;
                    }else{
                        spinner.succeed('RN RIYO CLI has been updated!');
                        callback(true);
                    }
                }); 
            }else{
                exec('sudo -h', (err, stdout, stderr) => {
                    if (err) {
                      console.error(err);
                      return;
                    }
                    let text_res_first = stdout.toString().indexOf('Sorry');
                    let text_res_sec = stdout.toString().indexOf('sorry');
                    if(text_res_first == -1 || text_res_sec == -1){
                        let command = cliUpdateCommand();
                        let tres = spawnSync(command.first_arg(), command.sec_arg(), command.third_arg);
                        
                        if (tres.status) {
                            callback(true);
                            process.exit(tres.status);
                            process.exit(0);
                        }
                    }else{
                        spinner.start();
                        spinner.color = 'yellow';
                        spinner.text = 'Updating, please wait..!';
                        exec(npmpackage[5].cmd, (err, stdout, stderr) => {
                            if (err) {
                                spinner.stop();
                                spinner.text = '';
                                console.log(colors.red('[ERROR]')+': Faild to update, you can update it menually!');
                                callback(false);
                                return;
                            }else{
                                spinner.succeed('RN RIYO CLI has been updated!');
                                callback(true);
                            }
                        }); 
                    }
                });
            }
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

function getUnique(array){
    let uniqueArray = [];
    for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

execute.changeFaceBookAppId = function(dir){
    let plistPath = fromDir('ios/','Info.plist');
    let stringPath = fromDir('android/app/src/main/res/values/','strings.xml');
    let platforms = [];
    if(plistPath !== undefined || stringPath !== undefined){
        let content = [];
        if(fs.existsSync(plistPath)){
            let iosObj = plist.parse(fs.readFileSync(plistPath, 'utf8'));
            if(iosObj.FacebookAppID !== undefined){
                let urltypes = iosObj.CFBundleURLTypes;
                let index = urltypes.findIndex(x => x.CFBundleURLSchemes);
                let nextArr = urltypes[index].CFBundleURLSchemes;
                if(urltypes.length>0){
                    nextArr.forEach((ele,i)=>{
                        if(ele.indexOf('fb') != -1){
                            nextArr[i] = 'fb'+dir;
                        }
                    });
                }
                nextArr.push('fb'+dir);
                iosObj.CFBundleURLTypes[index].CFBundleURLSchemes = getUnique(nextArr);
                iosObj.FacebookAppID = dir;
                content.push({
                    file:plistPath,
                    data:plist.build(iosObj)
                });
                platforms.push('iOs');
            }else{
                console.log('\n'+colors.yellow('[WARNING]')+': Facebook integration not found in iOs,so there was nothing to change!\n');
            }
        }


        if(fs.existsSync(stringPath)){
            let andData = fs.readFileSync(stringPath, 'utf8');
            let check = andData.indexOf('facebook_app_id');
            if(check !== -1){
                let start_pos = andData.lastIndexOf('"facebook_app_id">')+18;
                let next_str = andData.substr(start_pos,100);
                let last_pos = next_str.indexOf('</string>');
                let app_id = andData.substr(start_pos,last_pos);
                let update_str = andData.replace(app_id,dir);
                content.push({
                    file:stringPath,
                    data:update_str
                });
                platforms.push('Android');
            }else{
                console.log('\n'+colors.yellow('[WARNING]')+': Facebook integration not found in Android,so there was nothing to change!\n');
            }
        }

        if(content.length>0){
            content.forEach((ele,index)=>{
                fs.writeFile(ele.file,ele.data,function(err){
                    if(err){
                        console.log(colors.red(err));
                        return false;
                    }
                });
            });
            let pltfomr = platforms.toString().replace(',',' and ');
            console.log('\n'+colors.green('[SUCCESS]')+': Facebook app id has been changed for '+pltfomr+'!\n');
        }
    }else{
        console.log('\n'+colors.red('[ERROR]')+': Required files and folders not found!\n');
    }
};
function installFbSdk(callback){
    let deligatePath = fromDir('ios/','AppDelegate.m');
    let plist = fromDir('ios/','Info.plist');
    let mani = fromDir('android/app/src/main/','AndroidManifest.xml');
    let string = fromDir('android/app/src/main/res/values/','strings.xml');
    if((deligatePath !== undefined && plist !== undefined) || (mani !== undefined && string !== undefined)){
        if(fs.existsSync('package.json')){
            fs.readFile('package.json',"utf-8",(err,data)=>{
                let isExist = data.lastIndexOf('react-native-fbsdk');
                if(isExist == -1){
                    if(process.platform == 'win32'){
                        spinner.start();
                        spinner.color = 'yellow';
                        spinner.text = 'Installing Facebook SDK, please wait..!';
                        exec(npmpackage[7].cmd, (err, stdout, stderr) => {
                            if (err) {
                                spinner.stop();
                                spinner.text = '';
                                console.log(colors.red('\n[ERROR]')+': Faild to install.\n');
                                callback(false);
                                return;
                            }else{
                                spinner.stop();
                                callback(true);
                            }
                        }); 
                    }else{
                         exec('sudo -h', (err, stdout, stderr) => {
                            if (err) {
                              console.error(err);
                              return;
                            }
                            let text_res_first = stdout.toString().indexOf('Sorry');
                            let text_res_sec = stdout.toString().indexOf('sorry');
                            if(text_res_first == -1 || text_res_sec == -1){
                                let command = fbSdkCommand();
                                spawnSync(command.first_arg(), command.sec_arg(), command.third_arg);
                                callback(true);
                            }else{
                                spinner.start();
                                spinner.color = 'yellow';
                                spinner.text = 'Installing Facebook SDK, please wait..!';
                                exec(npmpackage[7].cmd, (err, stdout, stderr) => {
                                    if (err) {
                                        spinner.stop();
                                        spinner.text = '';
                                        console.log(colors.red('\n[ERROR]')+': Faild to install.\n');
                                        callback(false);
                                        return;
                                    }else{
                                        spinner.stop();
                                        callback(true);
                                    }
                                }); 
                            }
                        });
                    }
                }else{
                    callback(true);
                }
            });
        }else{
            console.log(colors.red('\n[ERROR]')+': package.json file not found\n');
            callback(false);
        }
    }else{
        console.log(colors.red('\n[ERROR]')+': Required files and folders not found!\n');
        callback(false);
    }
}
execute.setupFaceBook = function(dir){
    installFbSdk(function(res){
        if(res){
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
                                let fileStr = str;
                                let updateStr = "\n\t\t\t<!-- Start_Facebook integration Added by RN-RIYO-CLI -->\n";
                                updateStr+='\t\t\t<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>\n';
                                updateStr+='\t\t\t<!-- END_Facebook integration Added by RN-RIYO-CLI -->';
                                let resultMenifest = fileStr.splice(start_pos, 0,updateStr);
                                
                                fs.readFile(files.Strings,"utf-8",(fileerr,filedata)=>{
                                    let fileStr = filedata;
                                    let start_pos = fileStr.lastIndexOf('</string>')+9;
                                    let check_fb_integration = fileStr.indexOf('facebook_app_id');
                                    if(check_fb_integration == -1){
                                        if(fileStr.lastIndexOf('</string>') == -1){
                                            callback('\nInvalid file,please check your string.xml file',true);
                                        }else{
                                            let updateStr = "\n\t<!-- Start_Facebook integration Added by RN-RIYO-CLI -->\n";
                                            updateStr+='\t<string name="facebook_app_id">'+dir+'</string>\n';
                                            updateStr+='\t<!-- END_Facebook integration Added by RN-RIYO-CLI -->';
                                            let result = fileStr.splice(start_pos, 0,updateStr);
                                        
                                            let finalData = [
                                                {
                                                    file: files.AndroidManifest,
                                                    data:resultMenifest
                                                },
                                                {
                                                    file:files.Strings,
                                                    data:result
                                                }
                                            ];
                                            callback(null,finalData);
                                        } 
                                    }else{
                                        callback('Facebook already setup,you can change facebook app id,please check "strings.xml" file',true);
                                    }
                                });
                            }else{
                                callback('Facebook already setup,you can change facebook app id,please check "AndroidManifest.xml" and "strings.xml" files',true);
                            }
                        })
                        return false;
                    }else{
                        callback(null,[]);
                    }
                },
                function(res,callback){
                    //deligation integration
                    let finalData = res;
                    if(fs.existsSync('ios')){
                        let deligatePath = fromDir('ios/','AppDelegate.m');
                        if(fs.existsSync(deligatePath)){
                            fs.readFile(deligatePath,"utf-8",(err,data)=>{
                                let strr = data;
            
                                let header_pos = strr.indexOf('<React/RCTRootView.h>');
                                let fb_sdk_header = strr.indexOf('<FBSDKCoreKit/FBSDKCoreKit.h>');
                                let link_header = strr.indexOf('<React/RCTLinkingManager.h>');
            
                                if(link_header == -1){
                                    strr = strr.splice(header_pos+21, 0, '\n//Start_facebook integration by RN-RIYO CLI\n#import <React/RCTLinkingManager.h>\n//END_facebook integration');
                                }
            
                                if(fb_sdk_header == -1){
                                    strr = strr.splice(header_pos+21, 0, '\n//Start_facebook integration by RN-RIYO CLI\n#import <FBSDKCoreKit/FBSDKCoreKit.h>\n//END_facebook integration\n');
                                }
            
                                let isExist = strr.lastIndexOf('- (BOOL)application:(UIApplication *)app openURL');
                                let first_start_pos = strr.indexOf('{');
                                let firstUpdate="\n\t//Start_facebook integration by RN-RIYO CLI\n";
                                firstUpdate+="\t[[FBSDKApplicationDelegate sharedInstance] application:application\n";
                                firstUpdate+="\tdidFinishLaunchingWithOptions:launchOptions];\n";
                                firstUpdate+="\t//END_facebook integration\n";
                                let firstCheck = strr.indexOf('didFinishLaunchingWithOptions:launchOptions]');
                                if(firstCheck == -1){
                                    strr = strr.splice((first_start_pos+1), 0,firstUpdate);
                                }
                    
                                let sec_start_pos = strr.lastIndexOf('@end');
                                let updatedStr="//Start_facebook integration added by RN-RIYO CLI\n";
                                updatedStr+="- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options\n";
                                updatedStr+="{\n";
                                updatedStr+="\tif([[FBSDKApplicationDelegate sharedInstance] application:app openURL:url options:options]){\n";
                                updatedStr+="\t\treturn YES;\n";
                                updatedStr+="\t}\n";
                                updatedStr+="\tif([RCTLinkingManager application:app openURL:url options:options]){\n";
                                updatedStr+="\t\treturn YES;\n";
                                updatedStr+="\t}\n";
                                updatedStr+="\treturn NO;\n";
                                updatedStr+="}\n";
                                updatedStr+="//END_facebook integration\n\n";
                                let finalResults=strr.splice(sec_start_pos, 0,updatedStr);
                                if(isExist == -1){
                                    let deligateData = {
                                        file    :   deligatePath,
                                        data    :   finalResults
                                    };
            
                                    finalData.push(deligateData);
                                    callback(null,finalData);
                                }else{
                                    callback('Setup faild due to method already defined for another functionalities,please check "AppDelegate.m" file',true);
                                }
                            })
                        }else{
                            callback('May be this is not a react native project, hahaha...ha',true);
                        }
                    }else{
                        callback(null,finalData);
                    }
                    
                },
                function(res,callback){
                    //plist integration
                    let finalData = res;
                    if(fs.existsSync('ios')){
                        let plistPath = fromDir('ios/','Info.plist');
                        if(fs.existsSync(plistPath)){
                            let obj = plist.parse(fs.readFileSync(plistPath, 'utf8'));
                            if(obj.FacebookAppID !== undefined){
                                callback('Facebook already setup,you can change facebook app id,please check "Info.plist" file',true);
                            }else{
                                fs.readFile(plistPath,"utf-8",(err,data)=>{
                                    let strr = data;
                                    let CFBundleURLTypes = strr.indexOf('<key>CFBundleURLTypes</key>');
                                    if(CFBundleURLTypes == -1){
                                        let questionMarkPos = strr.indexOf('<string>????</string>');
                                        let add_first = '\n\t<!-- Start_Facebook integration added by rn-riyo -->\n';
                                        add_first+='\t<key>CFBundleURLTypes</key>\n';
                                        add_first+='\t<array>\n';
                                        add_first+='\t\t<dict>\n';
                                        add_first+='\t\t\t<key>CFBundleURLSchemes</key>\n';
                                        add_first+='\t\t\t<array>\n';
                                        add_first+='\t\t\t\t<string>fb'+dir+'</string>\n';
                                        add_first+='\t\t\t</array>\n';
                                        add_first+='\t\t</dict>\n';
                                        add_first+='\t</array>\n';
                                        add_first+='\t<!-- END_Facebook integration added by rn-riyo -->';
                                        strr = strr.splice(questionMarkPos+21,0,add_first);
                                    }else{
                                        let CFBundleURLSchemes = strr.indexOf('<key>CFBundleURLSchemes</key>');
                                        if(CFBundleURLSchemes != -1){
                                            let add_first='\n\t\t\t\t<string>fb'+dir+'</string><!-- Start/END_Facebook integration added by rn-riyo -->';
                                            strr = strr.splice(CFBundleURLSchemes+40,0,add_first);
                                        }else{
                                            callback('Invalid file format, please check info.plist file',true);
                                        }
                                    }
                
                                    let LSRequiresIPhoneOS = strr.indexOf('<key>LSRequiresIPhoneOS</key>');
                                    if(LSRequiresIPhoneOS != -1){
                                        let add_sec = '\t<!-- Start_Facebook integration added by rn-riyo -->\n';
                                        add_sec+='\t<key>FacebookAppID</key>\n';
                                        add_sec+='\t<string>'+dir+'</string>\n';
                                        add_sec+='\t<key>FacebookDisplayName</key>\n';
                                        add_sec+='\t<string>'+obj.CFBundleDisplayName+'</string>\n';
                                        add_sec+='\t<key>LSApplicationQueriesSchemes</key>\n';
                                        add_sec+='\t<array>\n';
                                        add_sec+='\t\t<string>fbapi</string>\n';
                                        add_sec+='\t\t<string>fb-messenger-share-api</string>\n';
                                        add_sec+='\t\t<string>fbauth2</string>\n';
                                        add_sec+='\t\t<string>fbshareextension</string>\n';
                                        add_sec+='\t</array>\n';
                                        add_sec+='\t<!-- End_Facebook integration added by rn-riyo -->\n';
                                        strr = strr.splice(LSRequiresIPhoneOS,0,add_sec);
                                    }
                                    //console.log(obj.CFBundleDisplayName);
                                    let plistData = {
                                        file:plistPath,
                                        data:strr
                                    }
                                    finalData.push(plistData);
                                    if(finalData.length>0){
                                        finalData.forEach((ele,index)=>{
                                            fs.writeFile(ele.file,ele.data,function(err){
                                                if(err){
                                                    console.log(colors.red(err));
                                                    return false;
                                                }
                                            });
                                        });
                                        callback(null,true);
                                    }else{
                                        callback('Files or folder not found!!',true);
                                    } 
                                })
                            }
                        }else{
                            callback('This is not your react native project',true);
                        }
                    }else{
                        if(finalData.length>0){
                            finalData.forEach((ele,index)=>{
                                fs.writeFile(ele.file,ele.data,function(err){
                                    if(err){
                                        console.log(colors.red(err));
                                        return false;
                                    }
                                });
                            });
                            callback(null,true);
                        }else{
                            callback('Files or folder not found!!',true);
                        }
                    }
                }
            ],function(err,result){
                if(err){
                    console.error('\n'+colors.red('[ERROR]')+': '+err+'\n');
                    return;
                }
                console.log('\n'+colors.green('[SUCCESS]')+': Facebook integrated successfully..!\n');
                console.log('Note: \n(i) if you are using pod, then please run the command "pod install" into your ios folder for ios only.\n(ii) For example please check your project directory.\n(iii) For more example please go through on "react-native-fbsdk" npm.\n');

                dir = './';
                exec('npm root -g', (err, stdout, stderr) => {
                    if (err) {
                    console.error(err);
                    return;
                    }
                    let src = stdout.replace('\n','')+'/rn-riyo/test/fb';
                    fsextra.copy(src,dir, function (err) {
                        if (err){
                            console.log('Please report to developer')
                            return console.error(err)
                        }
                    });
                });
            });
        }
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
                        const directoryPath = nextPath;
                        fs.readdir(nextPath, function (err, filess) {
                            //handling error
                            if (err) {
                                return console.log('Unable to scan directory: ' + err);
                            } 
                            //listing all files using forEach
                            filess.forEach(function (file,index) {
                                files['RiyoFiles_'+index] = nextPath+'/'+file;
                            });
                        });
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

let byPassValue = ''; 
function fromDir(startPath,filter){
    if (!fs.existsSync(startPath)){
        return;
    }

    let files=fs.readdirSync(startPath);
    for(let i=0;i<files.length;i++){
        let filename=path.join(startPath,files[i]);
        let stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename,filter);
        }
        else if (filename.indexOf(filter)>=0) {
            byPassValue = filename;
        }
    }

    if(byPassValue !== ''){
        return byPassValue;
    }
}

function fbSdkCommand(){
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
            cmd:'sudo npm install react-native-fbsdk@1.0.4 --save',
            first_arg:function(){
                return 'sh';
            },
            sec_arg:function(){
                return ['-c',this.cmd];
            },
            third_arg:spawnOpts.others
        },
        'darwin'    :   {
            cmd:'sudo npm install react-native-fbsdk@1.0.4 --save',
            first_arg:function(){
                return 'sh';
            },
            sec_arg:function(){
                return ['-c',this.cmd];
            },
            third_arg:spawnOpts.others
        },
        'linux'     :   {
            cmd:'sudo npm install react-native-fbsdk@1.0.4 --save',
            first_arg:function(){
                return 'sh';
            },
            sec_arg:function(){
                return ['-c',this.cmd];
            },
            third_arg:spawnOpts.others
        },
        'sunos'     :   {
            cmd:'sudo npm install react-native-fbsdk@1.0.4 --save',
            first_arg:function(){
                return 'sh';
            },
            sec_arg:function(){
                return ['-c',this.cmd];
            },
            third_arg:spawnOpts.others
        },
        'win32'     :   {
            cmd:'npm install react-native-fbsdk@1.0.4 --save',
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

function cliUpdateCommand(){
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
            cmd:'sudo npm install -g rn-riyo',
            first_arg:function(){
                return 'sh';
            },
            sec_arg:function(){
                return ['-c',this.cmd];
            },
            third_arg:spawnOpts.others
        },
        'darwin'    :   {
            cmd:'sudo npm install -g rn-riyo',
            first_arg:function(){
                return 'sh';
            },
            sec_arg:function(){
                return ['-c',this.cmd];
            },
            third_arg:spawnOpts.others
        },
        'linux'     :   {
            cmd:'sudo npm install -g rn-riyo',
            first_arg:function(){
                return 'sh';
            },
            sec_arg:function(){
                return ['-c',this.cmd];
            },
            third_arg:spawnOpts.others
        },
        'sunos'     :   {
            cmd:'sudo npm install -g rn-riyo',
            first_arg:function(){
                return 'sh';
            },
            sec_arg:function(){
                return ['-c',this.cmd];
            },
            third_arg:spawnOpts.others
        },
        'win32'     :   {
            cmd:'npm install -g rn-riyo',
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

String.prototype.replaceBetween = function(start, end, what) {
    return this.substring(0, start) + what + this.substring(end);
};

module.exports = execute;