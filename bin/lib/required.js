const ora = require('ora');
const spinner = ora('');
const fs = require('fs');
const async = require('async');
const { spawn,exec,spawnSync } = require('child_process');
const npmpackage = require('./npmPackage');
module.exports = function (){
    spinner.start();
    spinner.color = 'yellow';
    async.waterfall([
        function(callback){
            spinner.text = 'Installing required dependencies: 1/3';
            exec(npmpackage[1].cmd,(err, stdout, stderr)=>{
                if (err) {
                    console.error(err);
                    return;
                }
                callback(null,true);
            })
        },
        function(res,callback){
            spinner.text = 'Installing required dependencies: 2/3';
            exec(npmpackage[0].cmd,(err, stdout, stderr)=>{
                if (err) {
                    console.error(err);
                    return;
                }
                callback(null,true);
            })
        },                                   
        function(res,callback){
            spinner.text = 'Installing required dependencies: 3/3';
            exec(npmpackage[2].cmd,(err, stdout, stderr)=>{
                if (err) {
                    console.error(err);
                    return;
                }
                callback(null,true);
            })
        },   
        function(res,callback){
            spinner.text = npmpackage[3].name;
            setTimeout(function(){
                callback(null,true);
            },5000);
        }
    ],function(err,result){
        if(err){
            console.error(err);
            return;
        }
        spinner.succeed('Installation succeed!\n');
        spinner.stop();
        if(fs.existsSync('android') && fs.existsSync('ios')){
            
            let spawnOpts = {
                stdio: 'inherit',
                stdin: 'inherit',
            };

            if(process.platform == 'win32'){
                spawnOpts = {
                    stdio: 'inherit',
                    stdin: 'inherit',
                    shell: true
                };
            }

            let tres = spawnSync('react-native', ['link', 'native-base'], spawnOpts)
            if (tres.status) {
                process.exit(tres.status);
            }
        }
    })
}