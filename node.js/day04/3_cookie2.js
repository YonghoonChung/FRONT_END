const express = require('express');
const cp = require('cookie-parser');
const bp = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bp.urlencoded({extended:false}));
app.use(cp("!@#$%^&*"));
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
        const ex = new Date(Date.now()+(1000*60*60*24));
        resp.cookie('userid', userid,{
            expires:ex,
            signed:true
        })
        resp.redirect('/main')
    }
    else{
        resp.redirect('/login');
    }
})
app.get ('/main',(req,resp)=>{
    const userid =  req.signedCookies.userid;
    if(userid){
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
    resp.clearCookie('userid');
    resp.redirect('/login');
})
app.listen(3000,()=>{
    console.log('3000번 포트에서 실행중 ...');
})