console.log(__filename);
var fs = require('fs');
var path = require('path');
console.log(__dirname);
console.log(process.cwd());
console.log(__filename);
var hello_path = path.resolve(__dirname, '../assets/hello.txt');
var hello_path1 = path.join(__dirname, '../assets/hello.txt');
console.log(hello_path);
console.log(hello_path1);
console.log(fs.existsSync(hello_path));
fs.readFile(hello_path, function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log("readFile" + data.toString());
    console.log(JSON.parse(data.toString()).compilerOptions.module);
});
console.log('readFile是异步的哦');
var data = fs.readFileSync(hello_path);
console.log("readFileSync" + data.toString());
console.log("readFileSync是同步的哦");
fs.writeFile(hello_path, '\nadd new data', { 'flag': 'a' }, function (err) {
    if (err) {
        console.log(err);
    }
});
fs.appendFile(hello_path, '\n i love you', 'utf-8', function (err) {
    if (err) {
        console.log(err);
    }
});
var data1 = fs.appendFileSync(hello_path, 'china');
console.log(data1 + "哈哈哈");
console.log("哈哈哈" + require.resolve('../assets/hello.txt'));
fs.exists(hello_path1, function (exists) {
    if (exists) {
        console.log('路径存在');
    }
});
//# sourceMappingURL=TestReadfile.class.js.map