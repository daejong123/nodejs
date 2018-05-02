console.log(__filename);
var util = require('util');
var Person = (function () {
    function Person() {
    }
    Person.prototype.hello = function () {
        console.log('hello method');
    };
    return Person;
}());
var p = new Person();
console.log(p);
var pStr = util.inspect(p);
console.log(pStr);
var isArr = util.isArray([1, 1, 1, 1]);
console.log(isArr);
var isArr1 = util.isArray('123');
console.log(isArr1);
var isArr2 = util.isArray([]);
console.log(isArr2);
var d = new Date();
console.log(d);
console.log(util.isDate(d));
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toTimeString());
var year = d.getFullYear();
console.log(year);
var d1 = Date.now();
console.log(d1);
var d2 = new Date(1525063047116);
console.log(d2.getMinutes());
var d3 = new Date('2018-4-30 12:38');
console.log(d3);
//# sourceMappingURL=TestUtil.class.js.map