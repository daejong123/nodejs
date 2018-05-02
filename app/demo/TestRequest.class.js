var request = require('request');
request('https://api.douban.com/v2/movie/coming_soon', function (err, resp, body) {
    if (err)
        console.log(err);
    var json_str = JSON.stringify(resp);
    var js_obj = JSON.parse(json_str);
    console.log(typeof body + "哈哈哈哈");
    console.log(resp.statusCode);
    if (!err && resp.statusCode === 200) {
        console.log(typeof body);
        var result = JSON.parse(body);
        for (var key in result) {
            console.log(key);
        }
        console.log("title: " + result.title);
        console.log("count: " + result.count);
        var subjects = result.subjects;
        console.log("title");
        subjects.forEach(function (elem) {
            console.log(elem.title);
        });
    }
});
var options = {
    url: 'https://api.douban.com/v2/movie/coming_soon',
    method: 'POST',
    json: true,
    headers: {
        name: 'dottie'
    }
};
var optionsStr = JSON.stringify(options);
console.log(typeof optionsStr);
console.log(optionsStr);
request({
    url: 'https://api.douban.com/v2/movie/coming_soon',
    method: "POST",
    json: true,
    headers: {
        "content-type": "application/json",
    },
}, function (error, response, body) {
    console.log(body);
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
});
//# sourceMappingURL=TestRequest.class.js.map