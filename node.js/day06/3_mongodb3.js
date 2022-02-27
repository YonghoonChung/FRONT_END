const express = require('express');
const bp = require('body-parser');
const mc = require('mongodb').MongoClient;

const app = express();
const router = express.Router();

app.use(bp.urlencoded({extended:false}));
let db;

router.route('/member/regist').post((req,resp)=>{ //2
    const userid = req.body.userid;
    const userpw = req.body.userpw;
    const name = req.body.name;
    const gender = req.body.gender;

    if(db){
        // db.collection('member').insertMany([{}]) // 분리를 해놓아야 한다
        // 사용자가 입력해서 넘긴 데이터 네개를 joinMember에 넘겨줌
        // 마지막 매개변수로 db처리 후 호출할 콜백함수 넘겨줌(함수이름 f라고 가정)
        // 흐름이 joinMember함수로 이동
        //                                    f(err,result){}
        joinMember(userid,userpw, name, gender,(err,result)=>{ //3
            if(err){//5
                resp.writeHead('200', {'content-type': 'text/html;'});
                resp.write('<h2>회원가입 실패</h2>');
                resp.write('<p>오류가 발생했습니다.</p>');
                resp.end();
            }
            else{
                if(result.insertedCount>0){
                    resp.writeHead('200', {'content-type': 'text/html;'});
                    resp.write('<h2>회원가입 성공</h2>');
                    resp.write('<p>가입이 성공적으로 완료되었습니다</p>');
                    resp.end();
                }
                else{
                    resp.writeHead('200', {'content-type': 'text/html;'});
                    resp.write('<h2>회원가입 실패</h2>');
                    resp.write('<p>오류가 발생했습니다.</p>');
                    resp.end();
                }   
            }
        })
    }
    else{
        resp.writeHead('200', {'content-type': 'text/html;'});
        resp.write('<h2>데이터베이스 연결 실패</h2>');
        resp.write('<p>mongodb 데이터베이스 연결 실패</p>');
        resp.end();
    }
})

router.route('/member/login').post((req,resp)=>{
    const userid = req.body.userid;
    const userpw = req.body.userpw;

    if(db){
        loginMember(userid, userpw,(err,result)=>{
            if(err){
                resp.writeHead('200', {'content-type': 'text/html;'});
                resp.write('<h2>회원가입 실패</h2>');
                resp.write('<p>오류가 발생했습니다.</p>');
                resp.end();
            }
            else{
                if(result){
                    resp.writeHead('200', {'content-type': 'text/html;'});
                    resp.write('<h2> 성공</h2>');
                    const session = result[0];
                    resp.write(`<p>아이디 : ${session.userid}</p>`);
                    resp.write(`<p>비밀번호 : ${session.userpw}</p>`);
                    resp.write(`<p>이름 : ${session.name}</p>`);
                    resp.write(`<p>성별 : ${session.gender}</p>`);
                    resp.end();

                }
                else{
                    resp.writeHead('200', {'content-type': 'text/html;'});
                    resp.write('<h2>로그인 실패</h2>');
                    resp.write('<p>아이디 또는 비밀번호를 확인하세요</p>');
                    resp.end();
                }
            }
        })
    }
})

router.route('/member/edit').put((req,resp)=>{
    const userid = req.body.userid;
    const userpw = req.body.userpw;
    const name = req.body.name;
    const gender = req.body.gender;

    if(db){
        editMember(userid, userpw, name, gender, (err,result)=>{
            if(err){
                resp.writeHead('200', {'content-type': 'text/html;'});
                resp.write('<h2>회원정보 수정 실패</h2>');
                resp.write('<p>오류가 발생했습니다</p>');
                resp.end();
            }
            else{
                if(result.modifiedCount > 0){
                    resp.writeHead('200', {'content-type': 'text/html;'});
                    resp.write('<h2>회원정보 수정 성공</h2>');
                    resp.write('<p>정보 수정을 성공했습니다.</p>');
                    resp.end();
                }
                else{
                    resp.writeHead('200', {'content-type': 'text/html;'});
                    resp.write('<h2>회원정보 수정 실패</h2>');
                    resp.write('<p>존재하지 않는 아이디입니다.</p>');
                    resp.end();
                }
            }
        })
    }
})
router.route('member/delete').delete((req,resp)=>{
    const userid = req.body.userid;
    if(db){
        deleteMember(userid,(err,result)=>{
            if(err){
                resp.writeHead('200',{'content-type':'text/html'})
                resp.write('<h2>회원정보 삭제 실패</h2>');
                resp.write('<p>오류가 발생했습니다.</p>');
                resp.end();
            }
            else{
                if(result.deletedCount > 0){
                    resp.writeHead('200',{'content-type':'text/html'})
                    resp.write('<h2>회원정보 삭제 성공</h2>')
                    resp.write('<p>회원 탈퇴 성공.. 다시 꼭 돌아오세요..☆</p>')
                    resp.end();
                }
                else{
                    resp.writeHead('200',{'content-type':'text/html'})
                    resp.write('<h2>회원정보 삭제 실패</h2>');
                    resp.write('<p>존재하지 않는 사용자입니다.</p>')
                    resp.end();
                }
            }
        })
    }
})
router.route('/member/deleteJSON').delete((req,resp)=>{
    console.log(req.body.userid);
    const userid = req.body.userid;
    if(db){
        deleteMember(userid,(err,result)=>{``
            if(err){
                resp.writeHead('200',{'content-type':'text/html'})
                resp.write('X');
                resp.end();
            }
            else{
                if(result.deletedCount > 0){
                    resp.writeHead('200',{'content-type':'text/html'})
                    resp.write('O')
                    resp.end();
                }
                else{
                    resp.writeHead('200',{'content-type':'text/html'})
                    resp.write('X');
                    resp.end();
                }
            }
        })
    }
})
router.route('/member/deleteView').get((req,resp)=>{
    fs.readFile('./4_leaveId.html','utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            resp.writeHead(200,{'content-type':'text/html'});
            resp.end(data);
        }
    })
})
//                         [가입시도하는 데이터]f(err,result)
const joinMember = function(userid,userpw,name,gender,callback){ //4
    const members = db.collection('member');
    // 넘겨준 데이터로 객체 만들어서 mongodb에 삽입
    members.insertMany(
        [{userid:userid, userpw:userpw, name:name, gender:gender}],
        (err,result)=>{
            // 이 함수는 몽고디비 모듈이 데이터 처리 후 호출할 함수
            // 실패한다면
            if(err){
                console.log(err);
                // f(err,null); ----> callback 함수에 다시 호출
                callback(err,null);
                return;
            }
            else{//6
                if(result.insertedCount > 0){
                    console.log(`사용자 document ${result.insertedCount}명이 추가되었습니다`);
                }
                else{
                    console.log(`사용자 document가 추가되지 않았습니다`);
                }
                callback(null, result); //----> callback 함수에 다시 호출
            }
        }
    )
}
const loginMember = function(userid,userpw,callback){
    const members = db.collection('member');

    members.find({userid:userid, userpw:userpw}).toArray((err,result)=>{
        if(err){
            console.log(err);
            callback(err,null);
            return;
        }
        else{
            if(result.length > 0){
                console.log('일치하는 사용자가 있습니다');
                callback(null,result);
            }
            else{
                console.log(`일치하는 사용자가 없습니다`);
                callback(null,null);
            }
        }
    })
}
const editMember = function(userid, userpw, name, gender, callback){
    const members = db.collection('member');
    members.updateOne(
        {userid:userid},
        {$set : {userid:userid, userpw:userpw, name:name, gender:gender}},
        (err,result)=>{
            if(err){
                console.log(err);
                callback(err,null);
                return;
            }
            else{
                if(result.modifiedCount > 0){
                    console.log(`사용자 document ${result.modifiedCount}명 수정되었습니다.`);
                }
                else{
                    console.log(`수정된 document가 없습니다`);
                }
                callback(null,result);
            }
        }
    )
}
const deleteMember = function(userid,callback){
    const members = db.collection('member');

    members.deleteOne({userid:userid},(err,result)=>{
        if(err){
            console.log(err);
            callback(err,null);
            return;
        }
        else{
            if(result.deletedCount > 0){
                console.log(`사용자 document ${result.deletedCount}명 삭제되었습니다.`)
            }
            else{
                console.log(`삭제된 사용자가 없습니다.`)
            }
            callback(null,result);
        }
    })
}



app.use("/",router);
app.listen(3000,()=>{
    console.log(`3000번 포트로 연결`);
    dbConn(); // 1
})

function dbConn(){
    const url = "mongodb://127.0.0.1:27017"
    mc.connect(url,{useUnifiedTopology:true},(err,conn)=>{
        if(err){
            console.log(`DB연결 실패 : ${err}`);
        }
        else{
            db = conn.db('frontend');
            console.log(`DB 연결 성공`);
        }
    })
}