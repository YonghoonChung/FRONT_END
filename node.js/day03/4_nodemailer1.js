const nm = require('nodemailer');
const transport = nm.createTransport({
    service:'naver',
    auth:{
        user:'yonghoon1999@naver.com',
        pass:'Thedarknight0513'
    },
    host:'smtp.mail.com',
    port:'465'
})
const mailOption = {
    from:'용네이버<yonghoon1999@naver.com>',
    to:'용구글<yonghoon1999@gmail.com>',
    subject:'node.js로 보내는 메일',
    // text:'안녕하세요. node.js로 보내는 메일입니다.'
    html:'<h2> 안녕하세요. node.js로 보내는 메일입니다.</h2><p style="font-size:15px;color:deeppink;">정말 잘 가나요????</p>'
}
transport.sendMail(mailOption, (err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(info);
    }
    transport.close();
})