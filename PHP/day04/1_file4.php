<?php
    // POST로 전송된 데이터가 있다면(댓글을 썼을떄)
    if($_POST != null){
        //fs라는 변수에 "reply.txt"를 "a"모드(append)로 열어서 넣어라!
        $fs = @fopen("reply.txt","a") or exit("break");
        if($fs != null){
            //POST로 보낸 'msg'라는 이름의 데이터를 msg라는 변수에 넣어라!
            $msg = $_POST['msg'];
            //fs 변수로 열은 파일에 msg라는 변수에 있는 데이터에 \n 연결해서 추가해라!
            fputs($fs,$msg."\n");
            //fs 변수에 넣어둔 열린 파일 닫기!
            fclose($fs);
        }
    }
    $result = "";
    $fs = @fopen("reply.txt","r") or exit("break");
    //fs에 열어둔 파일에 커서가 마지막까지 왔는지 확인(feof : 마지막이라면 true)
    //fs의 끝까지 안왔다면 반복
    while(!feof($fs)){
        //fs의 한 줄을 읽어오며 커서를 아래로 내리고 내용은 msg변수에 넣음
        $msg = fgets($fs);
        //msg에 읽힌 내용이 "" 아니라면(내용이 없는줄이 아니라면)
        if($msg != ""){
            // result에 msg를 앞에다가 연결
            $result = $msg."<br>".$result;
        }
    }
    fclose($fs);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>파일을 이용한 댓글</title>
</head>
<body>
    <h2>파일을 이용한 댓글</h2>
    <form method="post">
        <p>
            <label>댓글 <input type="text" name="msg"></label>
            <input type="submit" value="댓글달기">
        </p>    
    </form>
    <hr>
    <p>
        <?=$result?>
    </p>
</body>
</html>