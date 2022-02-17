const express = require('express');
const app = express();

app.use((req,resp)=>{
    resp.writeHead(200, {'content-type':'text/html; charset=utf-8'})
    resp.end('<h2> 익스프레스 서버에서 응답한 메세지입니다.</h2>')
}).listen(3000,()=>{
    console.log('3000번 포트에서 실해중');
})