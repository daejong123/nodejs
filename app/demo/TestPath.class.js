"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(__filename);
var path1 = require('path');
var fs1 = require('fs');
console.log(path1.sep);
var hellopath = path1.resolve('../demo', '../assets', 'hello.txt');
console.log("resolve" + hellopath);
console.log(fs1.existsSync(hellopath));
console.log(path1.extname(hellopath));
var path2 = path1.join('../assets', '//hello.txt');
console.log(path2);
console.log("hello");
//# sourceMappingURL=TestPath.class.js.map