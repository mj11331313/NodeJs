const jade = require('jade');

// 将传入的字符串渲染成标签:
//var str = jade.render('html');  

// 将传入的文件全部渲染成标签:
var file = jade.renderFile('./file/jadeFile1.jade',{   
    pretty: true,    // 格式化渲染（格式化输出），只是为了方便调试时输出观看
    name: 'Cynthia'
});     

console.log(file);
