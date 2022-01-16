<?php
    session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
</head>
<body>
    <h2>로그인</h2>
    <?php
        if(!isset($_SESSION['userid'])){
    ?>
    <form action="9_login_ok.php" method="post">
        <p> 아이디 : <input type="text" name="userid"></p>
        <p> 비밀번호 : <input type="password" name="userpw"></p>
        <p><input type="submit" value="로그인"></p>
    </form>
    <?php
    }
    else{
    ?>
        <p><?=$_SESSION['userid']?>님 환영합니다.</p>
        <p><a href="./9_logout_ok.php">로그아웃</a></p>
    <?php
    }
    ?>
</body>
</html>