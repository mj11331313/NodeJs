const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req,res){

    var file_name = './www' + req.url;

    fs.readFile(file_name,function(err,data){
        if(err){
            res.write('404');
        }else{
            res.write(data);    // 此处不需要转化为字符串!
        }
        res.end();  // 注意这句代码的位置!
    });
});

server.listen(8080);
