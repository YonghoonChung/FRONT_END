// 두개의 ejs파일을 합친다

const express = require('express');
const bp = require('body-parser');
const fs = require('fs');
const ejs = require('ejs');

const app = express();
const router = express.Router();

app.use(bp.urlencoded({extended:false}));

let header = null;
let body = null;

try{
    header = fs.readFileSync('./header.ejs', 'utf-8');
    body = fs.readFileSync('./body.ejs', 'utf-8');
}catch(e){
    console.log('예외상황이 발생');
}

router.route('/about').post((req,resp)=>{
    const html = ejs.render(header,
        {
            title:"매개변수로 전달된 타이틀",
            content:ejs.render( // 이게 제일 먼저 시작
                body,
                {msg:'매개변수로 전달된 텍스트 메세지!'})
        }
    );
    resp.end(html);
})

app.use('/',router);
app.all('*',(req,resp)=>{
    resp.status(404).send('<h2>페이지를 찾을 수 없습니다.</h2>')
})
app.listen(3000,()=>{
    console.log('3000포트 사용중');
})