const { exec } = require('child_process');
const fs = require('fs');
module.exports = function(callback){
	exec('npm root -g', (err, stdout, stderr) => {
        let jsonFile = stdout.replace('\n','')+'/rn-riyo/package.json';
        fs.readFile(jsonFile,"utf-8",(err,data)=>{
        	callback(JSON.parse(data));
        });
    }); 
}