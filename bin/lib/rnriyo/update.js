const { exec } = require('child_process');
module.exports = function(callback){
  exec('npm view rn-riyo version', (err, stdout, stderr) => {
    if (err) {
      callback('error');
      return;
    }
    callback(stdout);
  });
}