const multer = require('multer');   // 解析post文件 -> enctype='application/x-www-form-urlencoded'
const express = require('express');
const bodyParser = require('body-parser');  // 解析post数据 -> enctype='multipart/form-data'
const fs = require('fs');
const pathLib = require('path');

var objMulter = multer({dest: './www/upload/'});


var server = express();

// body-parser的使用：
// server.use(bodyParser.urlencoded());

server.use(objMulter.any());    // 接收所有文件
//server.use(objMulter.single('f1'));     // 只接收name值为f1的文件

server.post('/',function(req,res){
    var oldName = req.files[0].path;    // 文件路径
    var newName = oldName + pathLib.extname(req.files[0].originalname); // originalname：原始的文件名；  extname()：获取文件的扩展名（包括.）  
    fs.rename(oldName , newName, function(err){ // 对文件进行重命名
        if(err){
            res.send('上传失败');
        }else{
            res.send('上传成功');
        }
    });
});


server.listen(8080);
