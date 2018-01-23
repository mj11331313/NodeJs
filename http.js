var http = require('http');

/*createServer( callback )：创建一个服务器，
参数是一个回调函数，
每当被访问时就会执行这个函数*/

var server = http.createServer(function(request,response){ 
    
    /*request:包含请求相关信息的对象
    response:包含响应的相关信息的对象    
    */

    console.log(request.url); // 获取请求的地址(返回头部带‘/’的绝对路径)

    response.write('abc'); // 向前台输出内容
    response.end();  // 结束输出
});

/*listen()：监听，参数是要监听的端口 */

server.listen(8080);

//浏览器输入localhost:8080，每访问一次，控制台就会输出一次
