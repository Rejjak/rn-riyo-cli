const fs = require('fs');
const mkdirp = require('mkdirp');
const colors = require('colors');
const riyohelper = Object.create(null);
const fsextra = require("fs-extra");
function ucFirst(value){
    return value.charAt(0).toUpperCase() + value.slice(1);
}
riyohelper.checkAndroidFiles = (path,callback)=>{
    let folder = 'android/app/'+path;
    if(fs.existsSync(folder)){
        callback(true);
    }else{
        callback(false);
    }
}
riyohelper.genFile = (path,file_name,file_content,callback)=>{
    fs.writeFile(path+'/'+file_name,file_content,function(err){
        if(err){
            console.log(colors.red(err));
        }else{
            callback(true);
        }
    });
}

riyohelper.genFolder = (dir,bool)=>{
    let path = dir.toString();
    let arr = [path];
    let file_name = path+'Screen.js';
    let style_name = path+'Style.js';
    
    if(dir.indexOf('/') !== -1){
        arr = dir.split('/');
        file_name = arr[arr.length-1]+'Screen.js';
        style_name = arr[arr.length-1]+'Style.js';
    }
    if(!fs.existsSync(path)){
        fs.mkdir(path,function(){
            mkdirp(path,function (err) {
                if (err) console.error(err)
                else{
                    let file_content = "/**\n";
                    file_content+="* Created by RN RIYO CLI\n";
                    file_content+="*/\n";
                    file_content+="import React, {Component} from 'react';\n";
                    file_content+="import {View, Text} from 'react-native';\n"
                    file_content+="import "+arr[arr.length-1]+"Style from './"+arr[arr.length-1]+"Style';\n\n\n";
                    file_content+="export default class "+ucFirst(arr[arr.length-1])+"Screen extends Component {\n\n";
                    file_content+="\tconstructor(props){\n";
                    file_content+="\t\tsuper(props);\n";
                    file_content+="\t}\n\n";
                    file_content+="\trender(){\n";
                    file_content+="\t\treturn(\n";
                    file_content+="\t\t\t<View>\n";
                    file_content+="\t\t\t\t<Text style={"+arr[arr.length-1]+"Style.riyoText}>"+arr[arr.length-1]+" works..!</Text>\n";
                    file_content+="\t\t\t</View>\n";
                    file_content+="\t\t);\n";
                    file_content+="\t}\n";
                    file_content+="}";

                    let css_content = "/**\n";
                    css_content+="* Created by RN RIYO CLI\n";
                    css_content+="*/\n";
                    css_content+="import {StyleSheet} from 'react-native';\n\n";
                    css_content+="const "+arr[arr.length-1]+"Style = StyleSheet.create({\n";
                    css_content+="\triyoText:{fontSize: 18},\n";
                    css_content+="});\n\n";
                    css_content+="export default "+arr[arr.length-1]+"Style;";

                    riyohelper.genFile(path,file_name,file_content,function(data){
                        if(data == true){
                            riyohelper.genFile(path,style_name,css_content,function(res){
                                if(res == true){
                                    if(bool == true){
                                        fs.readFile('src/config/route/routingConfig.js',"utf-8",(err,data)=>{
                                            let position = data.lastIndexOf('import');
                                            let update = "import "+ucFirst(arr[arr.length-1])+"Screen from '../../screens/"+arr[arr.length-1]+"/"+arr[arr.length-1]+"Screen';\n";
                                            let file_content = data.toString();
                                            file_content = file_content.substring(position);
                                            let file = fs.openSync('src/config/route/routingConfig.js','r+');
                                            let bufferedText = new Buffer(update+file_content);
                                            fs.writeSync(file, bufferedText, 0, bufferedText.length, position);
                                            fs.close(file);
                                        })
                                    }
                                    console.log('\n'+colors.green('[SUCCESS]')+' Generated a screen named '+arr[arr.length-1]+'\n');
                                }
                            });
                        }
                    });
                }
            });
        })
    }else{
        console.log('\n'+colors.red('[ERROR]')+' File or folder already in your project directory.\n');
    }
}

riyohelper.genCssFolder = (dir)=>{
    let path = dir.toString();
    let arr = [path];
    let style_name = path+'Style.js';
    
    if(dir.indexOf('/') !== -1){
        arr = dir.split('/');
        style_name = arr[arr.length-1]+'Style.js';
    }
    if(!fs.existsSync(path)){
        fs.mkdir(path,function(){
            mkdirp(path,function (err) {
                if (err) console.error(err)
                else{
                    let css_content = "/**\n";
                    css_content+="* Created by RN RIYO CLI\n";
                    css_content+="*/\n";
                    css_content+="import {StyleSheet} from 'react-native';\n\n";
                    css_content+="const "+arr[arr.length-1]+"Style = StyleSheet.create({\n";
                    css_content+="\triyoText:{fontSize: 18},\n";
                    css_content+="});\n\n";
                    css_content+="export default "+arr[arr.length-1]+"Style;";

                    riyohelper.genFile(path,style_name,css_content,function(res){
                        if(res == true){
                            console.log('\n'+colors.green('[SUCCESS]')+' Generated a css named '+arr[arr.length-1]+'\n');
                        }
                    });
                }
            });
        })
    }else{
        console.log('\n'+colors.red('[ERROR]')+' File or folder already in your project directory.\n');
    }
}

riyohelper.genComponentFolder = (dir)=>{
    let path = dir.toString();
    let arr = [path];
    let file_name = path+'Component.js';
   
    if(dir.indexOf('/') !== -1){
        arr = dir.split('/');
        file_name = arr[arr.length-1]+'Component.js';
    }
    if(!fs.existsSync(path)){
        fs.mkdir(path,function(){
            mkdirp(path,function (err) {
                if (err) console.error(err)
                else{
                    let file_content = "/**\n";
                    file_content+="* Created by RN RIYO CLI\n";
                    file_content+="*/\n";
                    file_content+="import React, {Component} from 'react';\n";
                    file_content+="import {View, Text} from 'react-native';\n\n\n";
                    file_content+="export default class "+ucFirst(arr[arr.length-1])+"Component extends Component {\n\n";
                    file_content+="\tconstructor(props){\n";
                    file_content+="\t\tsuper(props);\n";
                    file_content+="\t}\n\n";
                    file_content+="\trender(){\n";
                    file_content+="\t\treturn(\n";
                    file_content+="\t\t\t<View>\n";
                    file_content+="\t\t\t\t<Text>"+arr[arr.length-1]+" works..!</Text>\n";
                    file_content+="\t\t\t</View>\n";
                    file_content+="\t\t);\n";
                    file_content+="\t}\n";
                    file_content+="}";

                    riyohelper.genFile(path,file_name,file_content,function(data){
                        if(data == true){
                            console.log('\n'+colors.green('[SUCCESS]')+' Generated a component named '+arr[arr.length-1]+'\n');
                        }
                    });
                }
            });
        })
    }else{
        console.log('\n'+colors.red('[ERROR]')+' File or folder already in your project directory.\n');
    }
}

riyohelper.genServiceFolder = (dir)=>{
    let path = dir.toString();
    let arr = [path];
    let file_name = path+'Service.js';
    if(dir.indexOf('/') !== -1){
        arr = dir.split('/');
        file_name = arr[arr.length-1]+'Service.js';
    }
    if(!fs.existsSync(path)){
        fs.mkdir(path,function(){
            mkdirp(path,function (err) {
                if (err) console.error(err)
                else{
                    let file_content = "/**\n";
                    file_content+="* Created by RN RIYO CLI\n";
                    file_content+="*/\n";
                    file_content+="class "+ucFirst(arr[arr.length-1])+"Service{\n";
                    file_content+="\ttestMethod(){\n";
                    file_content+="\t\t//Sleep\n";
                    file_content+="\t}\n";
                    file_content+="}\n";
                    file_content+="export default new "+ucFirst(arr[arr.length-1])+"Service;";
    
                    riyohelper.genFile(path,file_name,file_content,function(data){
                        if(data == true){
                            console.log('\n'+colors.green('[SUCCESS]')+' Generated a service named '+arr[arr.length-1]+'\n');
                        }
                    });
                }
            });
        })
    }else{
        console.log('\n'+colors.red('[ERROR]')+' File or folder already in your project directory.\n');
    }
}

module.exports = riyohelper;