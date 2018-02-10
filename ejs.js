const ejs = require('ejs');

var file = ejs.renderFile('./file/ejsFile.ejs', {name: 'Cynthia'} , function( err , data ){
    if(err)                                   // ↑ 给文件中的name传值
        console.log('编译失败');
    else
        console.log(data);
});

console.log(file);
