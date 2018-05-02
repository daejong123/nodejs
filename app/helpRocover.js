var mysql = require('mysql');
var fs2 = require('fs');
var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'app',
});
db.connect(function (err) {
    console.log(err);
});
db.query('select * from t_todolist', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log(result);
    console.log(result.length);
    console.log(result[0].todo_content);
    var jsonStr = JSON.stringify(result);
    console.log(jsonStr);
    fs2.writeFileSync('jsondata.json', jsonStr, function (err) {
        if (err) {
            console.log(err);
        }
    });
});
db.end();
//# sourceMappingURL=helpRocover.js.map