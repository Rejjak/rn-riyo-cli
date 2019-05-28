const program = require('commander');
const riyoNative = require('./bin/helper/program');
const update = require('./bin/lib/rnriyo/update');
const riyohelper = require('./bin/helper/index');
const fs = require('fs');
const cli = Object.create(null);
const date = new Date();
const day = date.getDate();
const month = date.getMonth()+1;
const year = date.getFullYear();
const final_date = day+'/'+month+'/'+year;
const package = require('./bin/lib/rnriyo/package');
cli.init = ()=> {
	if(fs.existsSync('node_modules/rncli/file.txt')){
		fs.readFile('node_modules/rncli/file.txt',"utf-8",(err,data)=>{
			if(final_date == data){
				riyoNative.riyoVersion(program,process);
		    	riyoNative.riyoHelp(program,process);
		    	riyoNative.riyoCommander(program,process);
			}else{
				update(function(newVersion){
					if(newVersion != 'error'){
						package(function(oldVersion){
							if(newVersion != oldVersion.version){
								riyoNative.askForUpdate(function(result){
									constDateForADay();
								});
							}else{
								constDateForADay(); 
							}
						});
					}else{
						constDateForADay();
					}
				});
			}
		})
	}else{
		riyoNative.firstInstall(function(){
			riyoInit();
		});                     
	}
}

function riyoInit(){
	riyoNative.riyoVersion(program,process);
	riyoNative.riyoHelp(program,process);
	riyoNative.riyoCommander(program,process);
}

function constDateForADay(){
	riyoNative.constDateForADay(final_date,function(){
		riyoInit();
	}); 
}

module.exports = cli;