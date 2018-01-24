const http = require('http');
const qstring = require('querystring');
const fs = require('fs');
const urlDemo = require('url');

var users = {};

var server = http.createServer(function(req,res){
    
    var str = '';

    req.on('data',function(data){
        str += data;
    });

    req.on('end',function(){

        var obj = urlDemo.parse(req.url,true);
        const url = obj.pathname;
        const GET = obj.query;
        const POST = qstring.parse(str);

        // obj获取有问题!!!
        console.log(obj);
        if(url == '/user'){   //访问接口
            switch(GET.act){
                case 'reg':
                    //1.检查用户名是否已存在
                    if(users[GET.user]){
                        res.write('{"ok":false,"msg":"此用户已存在"}');
                    }else{
                    //2.插入到users
                        users[GET.user] = GET.pass;
                        res.write('{"ok":true,"msg":"注册成功"}');
                    }
                    break;
                case 'login':
                    //1.检查用户名是否存在
                    if(users[GET.user] == null){
                        res.write('{"ok":false,"msg":"此用户不存在"}');
                    //2.检查密码是否正确                    
                    }else if(users[GET.user] != GET.pass){
                        res.write('{"ok":false,"msg":"用户名或密码错误"}');
                    }else{
                        res.write('{"ok":true,"msg":"登录成功"}');
                    }
                    break;
                default:
                    res.write('{"ok":false,"msg":"未知的act"}');
            }
            res.end();
        }else{          //访问文件
            var file_name = './www' + url;
            fs.readFile(file_name,function(err,data){
                if(err){
                    res.write('error');
                }else{
                    res.write(data);
                }
    
                res.end();
            })
        }
    });
});
server.listen(8080);


