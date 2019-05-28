const https = require('https');
const { exec } = require('child_process');
module.exports = function(callback){
  exec('npm view jio-queryfff', (err, stdout, stderr) => {
    if (err) {
      callback('error');
      return;
    }
    let start_pos = stdout.indexOf("latest: '")+9;
    let end_pos = stdout.indexOf("' }");
    let latest_version = stdout.substr(start_pos,end_pos-start_pos);
    callback(latest_version);
  });
}