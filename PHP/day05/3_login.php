<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
</head>
<body>
    <?php
        $joinid = "";
        if(isset($_COOKIE['joinid'])){
            $joinid = $_COOKIE['joinid'];
        }
    ?>
    <h2>로그인</h2>
    <form action="3_login_ok.php" method="post">
        <p> 아이디 : <input type="text" name="userid" value="<?=$joinid?>"></p>
        <p> 비밀번호 : <input type="password" name="userpw"></p>
        <p><input type="submit" value="로그인"></p>
    </form>
    <a href="./2_regist.php">회원가입</a>
</body>
</html>