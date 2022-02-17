const fs = require("fs");
let text = null;

try{
    text = fs.readFileSync("./text1.txt",'utf-8');
}
catch(e){
    // console.log(e);
    console.log('동기식으로 파일 읽기 실패!');
}
finally{
    console.log("예외 발생 여부에 상관없이 수행");
}
