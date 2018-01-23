const http = require('http');
//const qstring = require('querystring');
const urlDemo = require('url');


http.createServer(function(req,res){

    //req：获取请求的数据

    /* var GET = {};
    if( req.url.indexOf('?') != -1 ){
        var arr = req.url.split('?');
        var url = arr[0];
        GET = qstring.parse(arr[1]); 
    }else{
        var url = req.url;
    } */
    var obj = urlDemo.parse(req.url,true);
    var GET = obj.query;
    var url = obj.pathname;

    console.log(url,GET);
    
    res.write('ass');
    res.end();

}).listen(8080);
