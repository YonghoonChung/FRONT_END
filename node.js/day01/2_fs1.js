//require() : 다른 곳에 있는 모듈을 불러오는 함수
const fs = require("fs");
//비동기식
//readFile('파일경로','인코딩방식',함수) : 경로에 있는 파일을 읽고 넘겨주는 콜백함수 호출
// err : 파일 읽기 실패시 에러에 대한 무언가가 담김
// data : 파일 읽기 성공시 파일의 데이터를 담아줌
fs.readFile('./text1.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("비동기식으로 파일 읽기 : "+data);
    }
})

//동기식
const text = fs.readFileSync('./text1.txt','utf-8');
console.log("동기식으로 파일 읽기 : "+text);

//파일 여는데 시간이 걸리니 비동기식은 파일을 열면서 지나갔다가
//동기식 먼저 처리하고 다시 돌아와서 콜백함수로 결과 보여줌