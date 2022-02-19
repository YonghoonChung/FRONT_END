// jade로 파일 구현
const express = require('express');
const fs = require('fs');
const jade = require('jade');

const app = express();
const router = express.Router();

router.route('/about').post((req,resp)=>{
    fs.readFile('./jade1.jade','utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            const jd = jade.compile(data);
            resp.writeHead(200, {'content-type':'text/html'});
            resp.end(jd());
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