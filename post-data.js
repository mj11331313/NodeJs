const http = require('http');
const qstring = require('querystring');

http.createServer(function(req,res){

    /*post：可以将一个大容量的数据一次性发送，
    也可以分段发送，一般分段发送*/
    var i = 1;
    var str = '';  // 用来拼接数据
    //on('data')：每当有一段数据到达时，就会发生一次(会发生很多次)
    req.on('data',function(data){// 这个data表示这一次接收到的数据，是形参
        console.log(`第${i++}次收到数据`);
        str += data;
    });

    //on('end')：所有数据都到达时发送(只发生一次)
    req.on('end',function(){
        var POST = qstring.parse(str);
        console.log(POST);
    });

}).listen(8080);
