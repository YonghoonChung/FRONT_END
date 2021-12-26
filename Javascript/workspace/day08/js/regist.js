const sendit = function () {
    alert('sendit 호출!');
    // return true;  //모든 입력이 정상적으로 되었으므로 폼을 제출
    // return false; // 입력에 오류가 생겼으므로 폼을 제출하지 않음
    const userid = document.regform.userid;
    if (userid.value == '') {
        alert('아이디를 입력하시오!');
        userid.focus();
        return false;
    }
    if (userid.value.length < 5 || userid.value.length > 12) {
        alert('아이디는 5자이상 12이하로 입력하시오!');
        userid.focus();
        return false;
    }
    const userpw = document.regform.userpw;
    const userpw_re = document.regform.userpw_re;
    if(userpw.value == ''){
        alert('비밀번호 읿력하시오!');
        userpw.focus();
        return false;
    }
    if(userpw.value.length<6|| userpw.value.length>20){
        alert('비밀번호는 6자 이상 20자 이하로 입력하시오!');
        userpw.focus();
        return false;
    }if(userpw_re.value == ''){
        alert('비밀번호 읿력하시오!');
        userpw_re.focus();
        return false;
    }
    if(userpw.value!= userpw_re.value){
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다!');
        userpw.focus();
        return false;
    }
    const name = document.getElementById('username');
    // 정규식 -> 문자열의 형식을 확인할 수 있는 문법
    const expNameText = /[가-힣]+$/; //한글의 모든 글자를 의미함 
    if(!expNameText.test(name.value)){
        alert('한글로만 이루어지지 않음!');
        name.focus();
        return false;
    }
    const hp = document.getElementById('hp');
    const expHpText= /^\d{3}-\d{3,4}-d{4}$/
    if(!expHpText.test(hp.value)){
        alert("휴대폰번호 형식을 확인하세요!")
        hp.focus();
        return false;
    }
    const email = document.regform.email;
    const expEmailText = /^[A-Za-z0-9\.\-]+@[A-Za-z0-9\.\-]+[A-Za-z0-9\.\-]+$/
    if(!expEmailText.test(email.value)){
        alert('이메일 형식을 확인해주세요!');
        email.focus();
        return false;
    }
    const hobbies = document.regform.hobby;
    let flag = false;
    for(let i=0; i<hobbies.length;i++){
        if(hobbies[i].checked){
            flag = true;
            break;
        }
    }
    if(!flag){
        alert('취미는 적어도 1개이상 선택하시오!');
        return false;
    }
    const zipcode = document.regform.zipcode;
    if(zipcode.value == ''){
        alert('주소를 입력하시오!');   
        sample6_execDaumPostcode();
        return false;
    }
    if(address.value== ''){
        alert('상세주소를 입력하세요');
        address2.focus();
        return false;
    }
    return true;
}
window.onload = function(){
    console.log(hobby);
}
