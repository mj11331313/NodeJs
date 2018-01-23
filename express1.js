const express = require('express');
const exStatic = require('express-static');
//创建服务器：
var server = express();

server.use(exStatic('./www'));

//处理用户的请求：
    // 第一个参数：目录，当用户请求这个目录时会执行后面的函数
server.get('/express1.html',function(req,res){ // 请求express1.html时
    //res.send('express1');
    /*send方法是改进版的write方法，能向前端传输的数据类型更多，
    如json对象等等。 */
    
    console.log('GET');

    res.end();
});
/* server.post('/express1.html',function(req,res){ // 请求express2.html时
    console.log('POST');
    res.end();
}); */

//监听：
server.listen(8080);
