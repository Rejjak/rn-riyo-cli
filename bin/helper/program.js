const riyoNative = Object.create(null); 
const fs = require('fs');
const execute = require('../lib/execute');
const riyohelper = require('../helper/index');
const rnriyo = require('../lib/info');
const colors = require('colors');
riyoNative.riyoVersion = (riyoprogram,process)=>{
    riyoprogram.option("-v, --version", "output the version number", function() {
        rnriyo.getVersion(process);
    });
}

riyoNative.riyoHelp = (riyoprogram,process)=>{
    riyoprogram.option("-h, --help", "output usage information", function() {
        rnriyo.userHelp(process);
    });
}

riyoNative.askForUpdate = (callback)=>{
    execute.askForUpdate(function(data){
        callback(data);
    });
}

riyoNative.firstInstall = (callback)=>{
    execute.firstInstall(function(data){
        callback(data);
    });
}

riyoNative.constDateForADay = (date,callback)=>{
    execute.constDateForADay(date,function(data){
        callback(data);
    });
} 

riyoNative.riyoCommander = (riyoprogram,process)=>{
    riyoprogram
    .command('generate-screen <dir>')
    .description('generate entered screen')
    .action(function (dir) {
        if(fs.existsSync('src/')){
            if(dir.indexOf('/') !== -1){
                let arr = dir.split('/');
                dir = arr[arr.length-1];
            }
            dir = 'src/screens/'+dir;
            riyohelper.genFolder(dir);
        }else{
            riyohelper.genFolder(dir);
        }
    });
  
    riyoprogram
        .command('g-screen <dir>')
        .description('generate entered screen')
        .action(function (scr) {
            if(fs.existsSync('src/')){
                if(scr.indexOf('/') !== -1){
                    let arr = scr.split('/');
                    scr = arr[arr.length-1];
                }
                let dir = 'src/screens/'+scr;
                riyohelper.genFolder(dir,true);
            }else{
                riyohelper.genFolder(scr,false);
            }
        }); 
    
    riyoprogram
        .command('generate-service <dir>')
        .description('generate entered service')
        .action(function (dir) {
            if(fs.existsSync('src/')){
                if(dir.indexOf('/') !== -1){
                    let arr = dir.split('/');
                    dir = arr[arr.length-1];
                }
                dir = 'src/services/'+dir;
                riyohelper.genServiceFolder(dir);
            }else{
                riyohelper.genServiceFolder(dir);
            }
        });

    riyoprogram
        .command('g-service <dir>')
        .description('generate entered service')
        .action(function (dir) {
            if(fs.existsSync('src/')){
                if(dir.indexOf('/') !== -1){
                    let arr = dir.split('/');
                    dir = arr[arr.length-1];
                }
                dir = 'src/services/'+dir;
                riyohelper.genServiceFolder(dir);
            }else{
                riyohelper.genServiceFolder(dir);
            }
        });
        
    riyoprogram
        .command('generate-style <dir>')
        .description('generate entered style')
        .action(function (dir) {
            if(fs.existsSync('src/')){
                if(dir.indexOf('/') !== -1){
                    let arr = dir.split('/');
                    dir = arr[arr.length-1];
                }
                dir = 'src/assets/css/'+dir;
                riyohelper.genCssFolder(dir);
            }else{
                riyohelper.genCssFolder(dir);
            }
        });
    
    riyoprogram
        .command('g-style <dir>')
        .description('generate entered style')
        .action(function (dir) {
            if(fs.existsSync('src/')){
                if(dir.indexOf('/') !== -1){
                    let arr = dir.split('/');
                    dir = arr[arr.length-1];
                }
                dir = 'src/assets/css/'+dir;
                riyohelper.genCssFolder(dir);
            }else{
                riyohelper.genCssFolder(dir);
            }
        }); 
        
        
    riyoprogram
        .command('generate-component <dir>')
        .description('generate entered component')
        .action(function (dir) {
            if(fs.existsSync('src/')){
                if(dir.indexOf('/') !== -1){
                    let arr = dir.split('/');
                    dir = arr[arr.length-1];
                }
                dir = 'src/components/'+dir;
                riyohelper.genComponentFolder(dir);
            }else{
                riyohelper.genComponentFolder(dir);
            }
        }); 

    riyoprogram
        .command('g-component <dir>')
        .description('generate entered component')
        .action(function (dir) {
            if(fs.existsSync('src/')){
                if(dir.indexOf('/') !== -1){
                    let arr = dir.split('/');
                    dir = arr[arr.length-1];
                }
                dir = 'src/components/'+dir;
                riyohelper.genComponentFolder(dir);
            }else{
                riyohelper.genComponentFolder(dir);
            }
        }); 

    riyoprogram
        .command('g-myhttp')
        .description('generate http service for testing purpose')
        .action(function (dir) {
            execute.tempData(dir);
        });  
        
        
    riyoprogram
        .command('generate-structure <templete>')
        .description('generate structure')
        .action(function (dir) {
            execute.dependentcies(dir);
        }); 
        
    riyoprogram
        .command('g-structure <templete>')
        .description('generate structure')
        .action(function (dir) {
            execute.dependentcies(dir);
        });    
        
    riyoprogram
        .command('change-package-name <package>')
        .description('change application package name')
        .action(function (dir) {
            execute.changePackage(dir);
        }); 
        
    riyoprogram
        .command('generate-keystore-file')
        .description('generate keystore file')
        .action(function (dir) {
            execute.generateCertificate('dir');
        });

    riyoprogram
        .command('g-keystore-file')
        .description('generate keystore file')
        .action(function (dir) {
            execute.generateCertificate('dir');
        }); 

    riyoprogram
        .command('g-apk')
        .description('generate apk file')
        .action(function (dir) {
            execute.buildApk('dir');
        }); 

    riyoprogram
        .command('generate-apk')
        .description('generate apk file')
        .action(function (dir) {
            execute.buildApk('dir');
        });     

    riyoprogram
        .command('change-app-name <package>')
        .description('change app name')
        .action(function (dir) {
            execute.changeAppName(dir.toString().replace('/',''));
        });  

    riyoprogram.on('command:*', function () {
        console.error(''+colors.red('[ERROR]')+' command not found: %s\nSee --help for a list of available commands.',riyoprogram.args.join(' '));
        process.exit(1);
    });

    riyoprogram.parse(process.argv);

    if (process.argv.indexOf("version") !== -1) {
        riyoprogram.help();
    }

}

module.exports = riyoNative;