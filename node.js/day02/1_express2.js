const express = require('express');
const app = express();

app.use((req, resp)=>{
    //console.log('첫번째 미들웨어 실행!')
    md1(req, resp);
}).listen(3000,()=>{
    console.log('3000번 포트로 서버 실행중...');
})

function md1(req,resp){
    console.log('첫번째 미들웨어 실행!')
    //db 연동
    resp.redirect('https://www.naver.com');
}