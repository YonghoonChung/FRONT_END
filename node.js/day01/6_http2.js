const fs = require('fs');
const http = require('http');

http.createServer((req,resp)=>{
    //이미 요청이 들어왔다는 뜻이다.
    fs.readFile('./test.html', 'utf-8', (err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            resp.writeHead(200, {'content-type': 'text/html'});
            resp.end(data);
        }
    })
}).listen(3000,()=>{
    console.log(`3000번 포트로 실행중`);
})