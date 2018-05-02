const request = require('request');

request('https://api.douban.com/v2/movie/coming_soon', (err, resp, body) => {
    if (err) console.log(err);
    // console.log(resp.statusCode);
    let json_str = JSON.stringify(resp)
    let js_obj = JSON.parse(json_str);
    console.log(typeof body + "哈哈哈哈");
    // console.log(js_obj);
    // for(let o in resp) {
    //     console.log(o + ","+ resp.o)
    // }
    // console.log(resp.body);
    // console.log(body);

    /**
     * 注意只有js的object才可以使用点语法调用。 而json本质就是一对大括号{”str“: value} 无法使用点语法。
     * request的get请求后，返回的结果resp是一个object对象。里面包含了许多属性如 statusCode， headers， body等等。
     * 注意返回的body属性的值是一个string。如’{’count':20, 'subjects':[{'title':'王者归来'}]}‘, 因此想要解析json-str数据，就要将他转换成js-obj对象。
     */

    console.log(resp.statusCode);
    if (!err && resp.statusCode === 200) {
        console.log(typeof body);  //string
        let result = JSON.parse(body); //json-string to js-obj
        // console.log(result);
        for (let key in result) {
            //count start total subjects title
            console.log(key);
        }
        console.log("title: " + result.title);
        console.log("count: " + result.count);
        let subjects: any[] = result.subjects as any[];
        // let a: Array<any> = [];
        console.log("title");
        subjects.forEach(elem => {
            console.log(elem.title);
        })
    }
});


let options = {
    url: 'https://api.douban.com/v2/movie/coming_soon',
    method: 'POST',
    json: true,
    headers: {
        name: 'dottie'
    }
};

let optionsStr = JSON.stringify(options);
console.log(typeof optionsStr);
console.log(optionsStr);


request({
    url: 'https://api.douban.com/v2/movie/coming_soon',
    method: "POST",
    json: true,
    headers: {
        "content-type": "application/json",
    },
    // body: JSON.stringify(requestData)
}, (error, response, body) => {
    console.log(body);
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});