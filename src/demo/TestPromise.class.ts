const Q = require('q');

export class PromiseDemo {
    static hello(name: string): Q.Promise<string> {  //泛型string表示resolve的参数类型为字符串
        let deferred = Q.defer();
        if(name === "dottie") {
            deferred.resolve(name+' nihao');
        } else {
            deferred.reject(new Error("输入姓名不对"));
        }
        return deferred.promise;
    }
}


PromiseDemo.hello('dottie')
    .then(name=>{console.log(name)}, error=>{console.log(error)})

PromiseDemo.hello('dottie1')
    .then(name=>{console.log(name)}, error=>{console.log(error.message)})

PromiseDemo.hello('dottie')
    .then(value => {console.log(value)}, error=>{console.log(error)})
