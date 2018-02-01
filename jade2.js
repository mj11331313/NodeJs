const jade = require('jade');

var file = jade.renderFile('./file/jadeFile2.jade',{
    pretty: true,
    a: 12,
    b: 3,
    json: {width:'100px',height:'200px',background:'red'},
    arr: ['aa','bb','cc'],
    m:33
});

console.log(file);
