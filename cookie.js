const express = require('express');
const cparser = require('cookie-parser');  // 用来读取cookie

var server = express();

// 读取cookie:
server.use(cparser('kshadiauhfb')); // 读取加密的cookie前需先使用秘钥解密

server.use('/cookie',function(req,res){
    // 写入cookie:
    //req.secret = 'kshadiauhfb';     // 对cookie进行签名(step1),这句话可以不写，cparser('kshadiauhfb')会自动给secret赋值
    res.cookie('username','cynthia',{
        path:'/cookie',     // 将cookie保存在哪个目录下(浏览器输入/cookie才能看到当前cookie值)
        maxAge: 3*24*3600*1000,  // 多长时间后过期（以毫秒单位）
        signed: true    // 对cookie进行签名(step2)
    });
    console.log(req.signedCookies); // 读取加密的cookie
    console.log(req.cookies);   // 读取未加密的cookie
    res.send('ok');
});

// 读取cookie:
/* server.use(cparser());
server.use('/',function(req,res){   // 读取cookie时，可以访问其子路径的cookie，同级和上级不能
    console.log(req.cookies);
    res.send('ok');
}); */

server.listen(8080);
