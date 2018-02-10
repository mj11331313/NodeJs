const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');
const mysql = require('mysql');
const common = require('./libs/common');

const db = mysql.createPool({ // 新建连接池
    host:'localhost',
    port:3307,
    user:'root',
    password:'',
    database:'project1'
});

var server = express();

server.listen(8080);

// 1.解析cookie:
server.use(cookieParser('abcdefg'));

// 2.使用session:
/* var arr = [];
for(var i = 0 ; i < 1000 ; i ++ ){
    arr.push();
} */
// server.use(cookieSession());


// 3.post数据：
server.use(bodyParser.urlencoded({extended: false}));
server.use(multer({dest: ''}).any());


// 4.配置模板引擎：
server.set('view engine','html');
server.set('views','./template');
server.engine('html',consolidate.ejs);

// 接收用户请求：(利用express的链式操作)
server.get('/',( req , res , next ) => {    
    // query: 操作数据库：
    db.query("SELECT * FROM `banner`", ( err , data ) => {
        if(err){
            res.status(500).send('database error').end();   // status: 向前台发回一个状态码
        }else{
            res.banners = data;   // 传递数据         
            next();
        }
    });
})

server.get('/',( req , res , next ) => {
    db.query("SELECT id,title,summary FROM `article`",( err , data ) => {
        if(err){
            res.status(500).send('database error').end(); 
        }else{
            res.articles = data;   
            next();
        }
    })
})

server.get('/',( req , res ) => {
    res.render('index.ejs',{
        banners: res.banners,
        articles: res.articles
    });
})

server.get('/article',( req , res ) => {
    if( req.query.id ){     // 获取id
        db.query(`SELECT * FROM article WHERE id=${req.query.id}`,( err , data ) => {
            if(err){
                res.status(500).send('数据库有问题，请稍后重试').end();
            }else{
                if(data.length == 0 ){
                    res.status(404).send('请求的文章找不到').end();
                }else{
                    var articleData = data[0];

                    articleData.sDate =common.time2date(articleData.post_time);
                    articleData.content = articleData.content.replace(/^/gm,'<p>').replace(/$/gm,'</p>');   // 使用正则表达式为每段文字的首部添加一个<p>，尾部添加一个</p>
                     
                    res.status(200).render('context.ejs',{
                        article_data: articleData
                     });
                }
            }
        })
    }else{
        res.status(404).send('请求的文章找不到').end();
    }
})

// 4.static数据：
server.use(static('./www'));
