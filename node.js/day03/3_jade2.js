// jade에 값 던지기
const express = require('express');
const fs = require('fs');
const jade  = require('jade');

const app = express();
const router = express.Router();

router.route('/userinfo').post((req,resp)=>{
    fs.readFile('./jade2.jade','utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            const jd = jade.compile(data);
            resp.writeHead(200, {'content-type':'text/html'});
            resp.end(jd({userid:'apple', username:'김사과', desc:'예쁨'})); // jade2.jade에 넘겨줬다고 생각해도 무관하다
        }
    })
})
app.use('/',router);
app.all('*',(req,resp)=>{
    resp.status(404).send('<h2>페이지를 찾을 수 없습니다.</h2>')
})
app.listen(3000,()=>{
    console.log('3000포트 사용중');
})