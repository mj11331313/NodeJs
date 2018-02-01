const urlDemo = require('url');

// parse方法加上参数true，则该方法会自动将url里的全部数据解析成一个json对象：
var obj = urlDemo.parse('http://www.baidu.com/index?name=zhangsan&age=12',true);

console.log(obj.pathname,obj.query);
//pathname：地址   query：json数据对象
