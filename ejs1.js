const ejs = require('ejs');

ejs.renderFile('./file/ejs1.ejs',{
    json: {arr:[
        {user: 'zhang',pass: '1212'},
        {user: 'lisi',pass:'3333'},
        {user: 'wang',pass: '898999'}
    ]}
},function(err,data){
    console.log(data);
})
