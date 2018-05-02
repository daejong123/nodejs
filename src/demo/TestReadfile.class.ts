console.log(__filename);

const fs = require('fs');
const path = require('path');

console.log(__dirname);
console.log(process.cwd());
console.log(__filename);
let hello_path = path.resolve(__dirname, '../assets/hello.txt')
let hello_path1 = path.join(__dirname, '../assets/hello.txt');
console.log(hello_path);
console.log(hello_path1);
console.log(fs.existsSync(hello_path));


// 异步读文件
fs.readFile(hello_path,(err, data) => {
    if(err) {
        console.log(err)
    }
    console.log("readFile" + data.toString());
    console.log(JSON.parse(data.toString()).compilerOptions.module);
}) 
console.log('readFile是异步的哦');



// 同步读文件
let data = fs.readFileSync(hello_path);
console.log("readFileSync" + data.toString());
console.log("readFileSync是同步的哦");


// 异步写文件，通过制定flag=a在内容后面添加内容
fs.writeFile(hello_path, '\nadd new data', { 'flag': 'a' },(err)=>{
    if(err) {
        console.log(err);
    }
});

//writeFileSync

// 异步写写文件 直接添加在文件的后面
fs.appendFile(hello_path, '\n i love you', 'utf-8', err=>{
    if(err) {
        console.log(err);
    }
})

let data1 = fs.appendFileSync(hello_path, 'china');
console.log(data1 + "哈哈哈");

// 也可以使用require模块中的函数 
// let data = fs.readFileSync(require.resolve('./assets/hello.txt'));
console.log("哈哈哈" + require.resolve('../assets/hello.txt')); 
//如果 resolve 的目标路径不存在, 就会抛出 Cannot find module './hello.txt' 的异常. 省略了一道检查文件是否存在的工序 (fs.exists).

// 异步判断文件是否存在
fs.exists(hello_path1, exists=>{
    if(exists) {
        console.log('路径存在')
    }
})
/**
 * JSON.stringify(js_object) 将js-object转换成JSON对象(key是字符串)：{"comName":"/dev/tty.Bluetooth-Incoming-Port"}
 * JSON.parse(json_object) 将json-object转换成js-object(key是变量): { comName: '/dev/tty.Bluetooth-Incoming-Port' }
 */


 /**
  * readFile
  * readFileSync
  * 
  * writeFile
  * writeFileSync
  * 
  * appendFile
  * appendFileSync
  * 
  * exists判断文件
  * existsSync
  * 
  */