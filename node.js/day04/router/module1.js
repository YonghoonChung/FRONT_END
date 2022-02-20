module.exports = (app,fs)=>{
    app.get('/', (req,resp)=>{
        console.log('module1.js 실행');
        resp.render('./index.html', {
            length:10
        })
    })
}