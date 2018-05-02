"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Q = require('q');
var PromiseDemo = (function () {
    function PromiseDemo() {
    }
    PromiseDemo.hello = function (name) {
        var deferred = Q.defer();
        if (name === "dottie") {
            deferred.resolve(name + ' nihao');
        }
        else {
            deferred.reject(new Error("输入姓名不对"));
        }
        return deferred.promise;
    };
    return PromiseDemo;
}());
exports.PromiseDemo = PromiseDemo;
PromiseDemo.hello('dottie')
    .then(function (name) { console.log(name); }, function (error) { console.log(error); });
PromiseDemo.hello('dottie1')
    .then(function (name) { console.log(name); }, function (error) { console.log(error.message); });
PromiseDemo.hello('dottie')
    .then(function (value) { console.log(value); }, function (error) { console.log(error); });
//# sourceMappingURL=TestPromise.class.js.map