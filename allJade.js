const jade = require('jade');
const fs = require('fs');

var str = jade.renderFile('./file/allJade.jade',{
    pretty: true
});

fs.writeFile('./build/allJade.html',str,function(err){
    if(err)
        console.log('编译失败');
    else
        console.log('编译成功');
})
