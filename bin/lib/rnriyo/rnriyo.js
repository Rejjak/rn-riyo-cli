const chalk = require('chalk');
const figlet = require('figlet');
module.exports = ()=>{
    console.log('\n'+
        chalk.red(
            figlet.textSync('RN RIYO CLI', { horizontalLayout: 'full' })
        )
    );
}