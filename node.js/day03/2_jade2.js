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
            resp.end(jd());
        }
    })
})