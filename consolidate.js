const consolidate = require('consolidate');     // consolidate：模板整合（为多种模板提供统一的接口）
const multer = require('multer');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const pathLib = require('path');

var objMulter = multer({dest: './www/upload/'});

var server = express();

server.set('view engine','html');   // 对server进行全局的设置：以html的方式对用户呈现

server.set('views','./file');   // 指明模板文件的位置

server.engine('html',consolidate.ejs);    // 指明当前服务使用哪种模板引擎：对html使用ejs来编译

server.get('/index',function( req , res ){
    res.render('ejsFile.ejs',{name: 'zhang啊'});    // 渲染：指明要渲染哪个模板文件，以及对文件中的变量进行赋值
})

server.listen(8080);
