const express = require('express');
const session = require('express-session');
const bp = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bp.urlencoded({extended:false}));
app.use(session({
    secret:'!@#$%^&*',
    resave:false,
    saveUninitailized:true
}))
app.get('/login', (req,resp)=>{
    fs.readFile('./login.html', 'utf-8', (err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            resp.writeHead(200, {'content-type':"text/html"});
            resp.end(data);
        }
    })
})
app.post('/login',(req,resp)=>{
    const userid = req.body.userid;
    const userpw = req.body.userpw;

    if(userid == 'admin' && userpw == '1234'){
        req.session.member={
            id:userid,
            pw:userpw
        }
        resp.redirect('/main')
    }
    else{
        resp.redirect('/login');
    }
})
app.get ('/main',(req,resp)=>{
    const userid =  req.session.member;
    if(member){
        fs.readFile('./main.html','utf-8', (err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                resp.writeHead(200, {'content-type':'text/html'})
                resp.end(data);
            }
        })
    }
    else{
        resp.redirect('/login');
    }
})
app.get ('/logout',(req,resp)=>{
    req.session.destroy(()=>{
        console.log('세션이 삭제되었습니다');
    })
    resp.redirect('/login');
})
app.listen(3000,()=>{
    console.log('3000번 포트에서 실행중 ...');
})