console.log(__filename);

const {spawn, exec} = require('child_process');


// 比如要运行 du -sh /disk1 命令， 
// 使用spawn函数需要写成spawn(‘du‘, [‘-sh ‘, ‘/disk1’])，
// 而使用exec函数时，可以直接写成exec(‘du -sh /disk1’)

// spawn是不支持callback函数,执行后就开始不断将数据从子进程返回给主进程,实时监控CPU,内存,IO,网络等数据。
let ls = spawn('ls', ['-a']);
ls.stdout.on('data', data => {
    console.log("stdout" + data)
})
ls.stderr.on('data', data => {
    console.log("stderr" + data)
})
ls.on('close', code => {
    console.log("进程退出" + code);
})

// exec在子进程输出结果将放入buffer中，在结果返回完全之后，再将输出一次性地以回调函数参数的形式返回,有回调函数。
exec('ls -a', (err, stdout, stderr) => {
    if (err) {
        console.log("err" + err);
    }
    console.log("stdout::::" + stdout);
})

process.on('exit', function () {
    setTimeout(function () {
        console.log('This will not run');
    }, 100);
    console.log('node main process say Bye.');
});



console.log(spawn.toString());
/**
 function (file, args, options) {
    var opts = normalizeSpawnArguments.apply(null, arguments);
    var options = opts.options;
    var child = new ChildProcess();

    debug('spawn', opts.args, options);

    child.spawn({
      file: opts.file,
      args: opts.args,
      cwd: options.cwd,
      windowsHide: !!options.windowsHide,
      windowsVerbatimArguments: !!options.windowsVerbatimArguments,
      detached: !!options.detached,
      envPairs: opts.envPairs,
      stdio: options.stdio,
      uid: options.uid,
      gid: options.gid
    });

    return child;
  }
 */
console.log(exec.toString());
/**
 function (command , options, callback) {
    var opts = normalizeExecArgs.apply(null, arguments);
    return exports.execFile(opts.file,
                            opts.options,
                            opts.callback);
  }
 */