const express = require('express');

var server = express();

// 目录1: /user/
var routerUser = express.Router();   // 1.创建一个router（这里是routerUser）

server.use('/user',routerUser);  // 2.将规定的路径和路由对应起来

routerUser.get('/1.html',function( req , res ){  // 输入 http://····/user/1.html 时激活
    res.send('user1');
})
routerUser.get('/2.html',function( req , res ){  // http://····/user/2.html
    res.send('user2');
})

// 3.在router内部通过使用routerUser.get('1.html')或post()等方法再进行细分

// 目录2: /article/
var routerArticle = express.Router();
server.use('/article',routerArticle);

routerArticle.get('/a.html',function( req , res ){
    res.send('article1');
})
routerArticle.get('/b.html',function( req , res ){
    res.send('article2');
})



server.listen(8080);
