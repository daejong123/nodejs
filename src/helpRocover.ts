const mysql = require('mysql');
const fs2 = require('fs');

const db = mysql.createConnection({
    // host: '127.0.0.1',
    // user: 'root',
    // password: 'Fablab_666', //ssh Fablab151
    // database: 'mfe_course_platform',
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'app',
});

db.connect(err => {
    console.log(err);
});

db.query('select * from t_todolist', (err,result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
    console.log(result.length);
    console.log(result[0].todo_content);
    /**
     * [
     *  {"open_id":"1101","todo_id":1,"todo_title":"java","todo_completed":1,"todo_content":"今天写SpringBoot了吗?","create_time":"2018-01-10T10:25:34.000Z","update_time":"2017-11-12 23:32:54"},
     *  {"open_id01","todo_id":3,"todo_title":null,"todo_completed":0,"todo_content":"今天学习了吗?","create_time":"2018-01-10T10:28:37.000Z","update_time":null}
     * ]
     */
    let jsonStr = JSON.stringify(result);
    console.log(jsonStr);
    //写进文件。
    fs2.writeFileSync('jsondata.json', jsonStr, (err) => {
        if (err) {
            console.log(err);
        }
    })
});
db.end();

// let schoolName = 'nStjS0CFG8';
// let sql = `SELECT 'data', temp_work.course_name, temp_work.student_ids from (SELECT * FROM mfe_course_platform.temp_data where data like '%help%' and work_id in (select id from mfe_course_platform_1.temp_work where school_name = '${schoolName}') UNION SELECT * FROM mfe_course_platform_1.temp_data where data like '%help%' and work_id in (select id from mfe_course_platform_1.temp_work where school_name = '${schoolName}')) A join mfe_course_platform.temp_work where A.work_id = temp_work.id;`;
//
// // sshpass -p Fablab151 ssh -o StrictHostKeyChecking=no -p 22 root@course.wonderbits.cn
// const my_exec = require('child_process').exec;
// my_exec('ssh root@course.wonderbits.cn  | mysql -uroot -pFablab_666', (err, stdout, stdin) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(stdout);
//     console.log(stdin);
// });

