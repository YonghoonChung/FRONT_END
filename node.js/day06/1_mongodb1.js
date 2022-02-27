//mongodb에 연결해서 요청을 보낼 클라이언트 객체
const client = require('mongodb').MongoClient;
//connect(url,설정객체,함수)
// useUnifiedTopology : 통합모드
client.connect('mongodb://127.0.0.1:27017',{useUnifiedTopology:true},(err,conn)=>{
    if(err){
        console.log('데이터베이스 연결 실패!');
        console.log(err);
    }
    else{
        console.log('데이터베이스 연결 성공!');
        console.log(`connected:${conn}`);

        const db = conn.db('frontend');
        const members = db.collection('member');
        members.find({userid:'banana'}).toArray((err,result)=>{
            if(err){// 진짜 검색 실패
                console.log('알수없는 이유로 검색 실패...');
            }
            else{// 데이터가 존재하긴 함
                if(result.length > 0){ // 실제 존재
                    console.log(`데이터가 존재합니다.`)
                    const banana = result[0];
                    console.log(`아이디 : ${banana.userid}`)
                    console.log(`이름 : ${banana.name}`)
                    console.log(`성별 : ${banana.gender}`);
                }
                else{ // 데이터가 없음 
                    console.log('데이터가 존재하지 않습니다.')
                }
            }
        })
    }
})

