const fs = require('fs'); // fs: file system

/*readFile()：读取文件，参数：文件名，回调函数

回调函数的参数：error->错误信息，data->读取到的数据(二进制)
data.toString()：将数据转化为字符串
*/

fs.readFile('1.txt',function(error,data){
    if(error){
        console.log('读取失败');
    }else{
        console.log(data.toString());
    }
});


/*writeFile()：写文件，参数：文件名，要写的内容，回调函数

writeFile会直接覆盖原文件，而不是追加

回调函数的参数：error->错误信息

*/

fs.writeFile('1.txt','和谁？',function(error){
    console.log(error);
})
