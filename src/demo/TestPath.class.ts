import {log} from "util";

console.log(__filename);
const path1 = require('path');
const fs1 = require('fs');

console.log(path1.sep);

// resolve 转换为绝对路径 先cd后pwd
let hellopath = path1.resolve('../demo', '../assets', 'hello.txt')
console.log("resolve" + hellopath); //resolve/Users/daejong/Desktop/yarn-port/src/assets/hello.txt
console.log(fs1.existsSync(hellopath)); //true
console.log(path1.extname(hellopath)); //.txt

let path2 = path1.join('../assets', '//hello.txt');
// 用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。
console.log(path2); //../assets/hello.txt
console.log("hello");