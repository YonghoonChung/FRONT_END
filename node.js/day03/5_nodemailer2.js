const express = require("express");
const fs = require("fs");
const bp = require("body-parser");
const nm = require('nodemailer');

const app = express();
const router = express.Router();

app.use(bp.urlencoded({extended:false}));

//GET : localhost:3000/mail -> mail.html 띄우기
router.route('/mail').get((req,resp)=>{
    fs.readFile('./mail.html','utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            resp.writeHead(200,{'content-type':'text/html'});
            resp.end(data);
        }
    })
})


//POST : localhost:3000/mail -> 메일 보내기
router.route('/mail').post((req,resp)=>{
    const fromid = req.body.fromid;     //apple
    const frommail = req.body.frommail; //apple@juice.com
    const toid = req.body.toid;
    const tomail = req.body.tomail;
    const title = req.body.title;
    const content = req.body.content;

    //apple<apple@juice.com>
    const fromfmt = `${fromid}<${frommail}>`//fromid+"<"+frommail+">"
    const tofmt = `${toid}<${tomail}>`

    const transport = nm.createTransport({
        service:'naver',
        auth:{
            user:'yonghoon1999@gmail.com',
            pass:'Thedarknight0513'
        },
        host:'smtp.mail.com',
        port:'465'
    })
    const mailOption = {
        from:fromfmt,
        to:tofmt,
        subject:title,
        text:content
    }
    transport.sendMail(mailOption,(err,info)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(info);
        }
        transport.close();
    })

})





app.use('/',router);
app.all('*',(req,resp)=>{
    resp.status(404).send("<h2>페이지를 찾을 수 없습니다.</h2>")
})
app.listen(3000,()=>{
    console.log('3000원짜리 치즈김밥');
})
