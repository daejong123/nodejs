console.log(__filename);        
const util = require('util');

class Person {
    name: string;
    age: number;
    hello() {
        console.log('hello method');
    }
}
let p = new Person();
console.log(p)
let pStr = util.inspect(p)
console.log(pStr);

let isArr = util.isArray([1,1,1,1]);
console.log(isArr);

let isArr1 = util.isArray('123');
console.log(isArr1);

let isArr2 = util.isArray([]);
console.log(isArr2);

let d = new Date();
console.log(d); //2018-04-30T04:37:27.116Z
console.log(util.isDate(d));
console.log(d.toLocaleString()); //2018-4-30 12:40:42
console.log(d.toLocaleDateString()) //2018-4-30
console.log(d.toLocaleTimeString()) //12:38:54

console.log(d.toString()); //Mon Apr 30 2018 12:40:15 GMT+0800 (CST)
console.log(d.toDateString()); //Mon Apr 30 2018
console.log(d.toTimeString()); //12:39:37 GMT+0800 (CST)

let year = d.getFullYear()
console.log(year); //2018

let d1 = Date.now();
console.log(d1); //1525063047116

let d2 = new Date(1525063047116);
console.log(d2.getMinutes());

////Invalid Date若输入格式有问题 则返回Invalid Date
let d3 = new Date('2018-4-30 12:38'); 
console.log(d3);



