const mysql = require('mysql');

// 1.连接：
var db = mysql.createConnection({   // 新建连接
    host:'localhost',   // 哪台服务器
    port:3307,      // 端口号
    user:'root',    // 用户名
    password:'',    // 密码
    database:'project1'     // 数据库名
});


// 2.查询：
db.query("SELECT * FROM `user`;", ( err , data ) => {
    if(err){
        console.log(err);
    }else{
        console.log(JSON.stringify(data));  // 将返回的数据转化为json格式
    }
});
