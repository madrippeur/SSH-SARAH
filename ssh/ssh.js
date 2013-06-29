
exports.action = function(data, callback, config, SARAH){
    var api_url;
    config = config.modules.ssh;


var exec = require('child_process').exec;

var ip = config.api_url_ssh_ip;
var port = config.api_url_ssh_port;
var user = config.api_url_ssh_user;
var pass = config.api_url_ssh_pass;
var command = data.cmd_bash;





var process = '%CD%/plugins/ssh/bin/putty';
   callback({'tts': "tout de suite"}); 
process += ' -ssh ' + user + '@' + ip + ' -P ' + port + ' -pw ' + pass + ' -m %CD%/plugins/ssh/bin/scripts/' + command + ' & exit &';
console.log(process);
var child = exec(process,function (error, stdout, stderr) {""});



}
