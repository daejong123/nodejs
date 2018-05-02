console.log(__filename);
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
console.log(spawn.toString());
console.log(exec.toString());
var ls = spawn('ls', ['-a']);
ls.stdout.on('data', function (data) {
    console.log("stdout" + data);
});
ls.stderr.on('data', function (data) {
    console.log("stderr" + data);
});
ls.on('close', function (code) {
    console.log("进程退出" + code);
});
exec('ls -a', function (err, stdout, stderr) {
    if (err) {
        console.log("err" + err);
    }
    console.log("stdout::::" + stdout);
});
//# sourceMappingURL=TestChildProcess.class.js.map