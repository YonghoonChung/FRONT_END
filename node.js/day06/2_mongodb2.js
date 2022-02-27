const client = require('mongodb').MongoClient;
client.connect('mongodb://127.0.0.1:27017',{useUnifiedTopology:true},(err,conn)=>{
    if(err){
        console.log(`db연결 실패`);
    }
    else{
        const members = conn.db('frontend').collection('member');
        // insertOne(객체,콜백함수);
        // members.insertOne(
        //     {userid:'jamun',name:'천자문'},
        //     (err,result)=>{
        //         if(err){
        //             console.log(`데이터 삽입 실패`)
        //         }
        //         else{
        //             console.log(`데이터 삽입 성공`)
        //         }
        //     }
        // );

        //insertMany([객체1,객체2,..],콜백함수);
        // members.insertMany(
        //     [{userid:'jamun',userpw:'9999',name:'천자문',gender:'여자'}],
        //     (err,result)=>{
        //         if(err){
        //             console.log(`데이터 삽입 실패`)
        //         }
        //         else{
        //             console.log(`데이터 삽입 성공`)
        //         }
        //     }
        // )

        // updateOne(객체,{$set:수정할객체},콜백함수)
        // members.updateOne({userid:'jamun'},{$set:{userpw:'aaaa'}},(err,result)=>{
        //     if(err){
        //         console.log(`데이터 수정 실패`);
        //     }
        //     else{
        //         console.log(`데이터 수정 성공`);
        //     }
        // })
        
        // deleteOne(객체,콜백함수)
        members.deleteOne({userid:'jamun'},(err,result)=>{
            if(err){
                console.log(`데이터 삭제 실패`);
            }
            else{
                console.log(`데이터 삭제 성공`);
                
            }
        })
    }
})