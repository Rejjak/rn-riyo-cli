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
function compareVersions(v1, comparator, v2) {
    "use strict";
    var comparator = comparator == '=' ? '==' : comparator;
    if(['==','===','<','<=','>','>=','!=','!=='].indexOf(comparator) == -1) {
        throw new Error('Invalid comparator. ' + comparator);
    }
    var v1parts = v1.split('.'), v2parts = v2.split('.');
    var maxLen = Math.max(v1parts.length, v2parts.length);
    var part1, part2;
    var cmp = 0;
    for(var i = 0; i < maxLen && !cmp; i++) {
        part1 = parseInt(v1parts[i], 10) || 0;
        part2 = parseInt(v2parts[i], 10) || 0;
        if(part1 < part2)
            cmp = 1;
        if(part1 > part2)
            cmp = -1;
    }
    return eval('0' + comparator + cmp);
}
cli.init = ()=> {
	if(fs.existsSync('node_modules')){
		if(fs.existsSync('node_modules/rncli/file.txt')){
			fs.readFile('node_modules/rncli/file.txt',"utf-8",(err,data)=>{
				if(final_date.toString() == data.toString()){
					riyoInit();
				}else{
					update(function(newVersion){
						if(newVersion !== 'error'){
							package(function(oldVersion){
								if(compareVersions(newVersion,'==',oldVersion.version)){
									constDateForADay();
								}else{
									riyoNative.askForUpdate(oldVersion.version,newVersion,function(result){
										constDateForADay();
									});
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
	}else{
		riyoInit();
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