const express = require("express");
const cp = require("cookie-parser");

const app = express();
app.use(cp());

app.get('/setcookie', (req,resp)=>{
    console.log('setcookie 호출');
    resp.cookie('member', {id:'apple', name:'김사과', gender:'남성'},{
        maxAge:1000*60*3
    })
    resp.redirect('/showcookie');
})
app.get('/showcookie', (req,resp)=>{
    console.log('showcookie 호출');
    resp.send(req.cookies)
    resp.end();
})
app.listen(3000, ()=>{
    console.log("3000번 포트로 실행...");
})