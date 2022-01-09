<?php
    $userid = $_POST['userid'];
    $userpw = $_POST['userpw'];
    $username = $_POST['name'];
    $userphone = $_POST['hp'];
    $useremail = $_POST['email'];
    $userhobby = $_POST['hobby']; //['게임','코딩']
    $hobbystr = $userhobby[0]; //'게임
    for ($i=1; $i < count($userhobby); $i++) { 
        $hobbystr .= ",".$userhobby[$i]; //'게임,코딩'
    }
    $zipcode = $_POST['zipcode'];
    $address1 = $_POST['address1'];
    $address2 = $_POST['address2'];
    $address3 = $_POST['address3'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>회원가입 완료</h2>
    아이디 : <?=$userid?><br>
    비밀번호 : <?=$userpw?><br>
    이름 : <?=$username?><br>
    전화번호 : <?=$userphone?><br>
    이메일 : <?=$useremail?><br>
    취미 : <?=$hobbystr?><br>
    주소 : <?=$address1?><br>
    상세주소 : <?=$address2?><br>
    참고주소 : <?=$address3?><br>
</body>
</html>