const qstring = require('querystring');

// 将数据以json对象的方式返回

var json = qstring.parse('name=lisi&age=18&school=nefu');
console.log(typeof json);

/* 但是类似aaa?name=lisi&age=18这样的数据，
querystring无法解析,这时可以使用url模块解决*/
