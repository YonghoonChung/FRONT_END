module.exports = (app, fs) => {
    app.get('/', (req, resp) => {
        console.log('module1.js 실행');
        resp.render('./index.html', {
            length: 10
        })
    });
    app.get('/about', (req, resp) => {
        resp.render('./about.html');
    })

    app.get('/list', (req, resp) => {
        fs.readFile(__dirname + "/../data/member.json", "utf-8", (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(data);
                resp.writeHead(200, { 'content-type': 'text/json;charset=utf-8' });
                resp.end(data);
            }
        })
    })

    app.post('/join/:userid', (req, resp) => {
        const result = {};
        const userid = req.params.userid;
        if (!req.body["password"] || !req.body["name"]) {
            result["code"] = 100;   //100 : 실패
            result["msg"] = "매개변수가 전달되지 않음"
            resp.json(result);      //내부에 넘긴 객체를 json으로 응답
            return false;
        }
        fs.readFile(__dirname + "/../data/member.json", 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                const members = JSON.parse(data);
                if (members[userid]) {
                    result["code"] = 101;   //중복된 아이디
                    result["msg"] = "중복된 아이디";
                    resp.json(result);
                    return false;
                }
                // {
                //     name: '이체리',
                //     password: '3333',
                //     gender: '남성'
                // }
                console.log(req.body);
                members[userid] = req.body;
                fs.writeFile(__dirname + "/../data/member.json", JSON.stringify(members, null, '\t'), 'utf-8', (err, data) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        result["code"] = 200;
                        result["msg"] = "성공";
                        resp.json(result);
                    }
                })
            }
        })
    })
    app.put("/update/:userid", (req, resp) => {
        const result = {};
        const userid = req.params.userid;
        if (!req.body["password"] || !req.body["name"]) {
            result["code"] = 100;   //100 : 실패
            result["msg"] = "매개변수가 전달되지 않음"
            resp.json(result);      //내부에 넘긴 객체를 json으로 응답
            return false;
        }
        fs.readFile(__dirname + "/../data/member.json", 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                const members = JSON.parse(data);
                if (members[userid]) {
                    members[userid] = req.body;
                    fs.writeFile(__dirname + "/../data/member.json", JSON.stringify(members, null, '\t'), 'utf-8', (err, data) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            result["code"] = 200;
                            result["msg"] = "성공";
                            resp.json(result);
                        }
                    })
                }
            }
        })
    })
    app.delete("/delete/:userid", (req, resp) => {
        const result = {};
        fs.readFile(__dirname + "/../data/member.json", "utf-8", (err, data) => {
            if (err) {
                console.log(err)
            }
            else {
                const members = JSON.parse(data)
                if (!members[req.params.userid]) {
                    result["code"] = 102;
                    result["msg"] = "사용자를 찾을 수 없음";
                    resp.json(result);
                    return false;
                }
                delete members[req.params.userid];
                fs.writeFile(__dirname + "/../data/member.json", JSON.stringify(members, null, '\t'), 'utf-8', (err, data) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        result["code"] = 200;
                        result["msg"] = "성공";
                        resp.json(result);
                    }
                })
            }
        })
    })
}