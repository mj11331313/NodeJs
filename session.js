const express = require('express');
const cparser = require('cookie-parser');
const csession = require('cookie-session');

var server = express();

// 写入session
server.use(cparser());  // 必须先解析cookie，才能获取session
server.use(csession({ 
    name: 'userpass',
    keys : ['aaa','bbb','ccc'],  // 加密，密钥组，每次使用不同密钥来提高安全性
    maxAge: 20*60*1000
}));

server.use('/',function( req , res ){

    if(req.session['count'] == null ){  // 读取session
        req.session['count'] = 1;   // 写入session值
    }else{
        req.session['count'] ++ ;
    }

    // 删除session:
    // delete req.session['count']; 

    console.log(req.session['count']);



    res.end();
});

server.listen(8080);
