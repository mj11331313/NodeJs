const http = require('http');
const qstring = require('querystring');
const fs = require('fs');
const urlDemo = require('url');

var server = http.createServer(function(req,res){
    
    //GET:
    var obj = urlDemo.parse(req.url,true);
    var url = obj.pathname;
    const GET = obj.query;

    //POST:
    var str = '';
    req.on('data',function(data){
        str += data;
    });
    req.on('end',function(){
        const POST = qstring.parse(str);
        console.log(url,GET,POST);

        //文件请求：
        var file_name = './www' + url;   // 地址栏不要输入www!
        fs.readFile(file_name,function(err,data){
            if(err){
                res.write('error');
            }else{
                res.write(data);
            }
            res.end();
        })
    });
   
});
server.listen(8080);
