<?php
    $userid = 'apple';
    $username = '김사과';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>변수 - 1</title>
</head>
<body>
    <h2>변수 - 1</h2>
    <?php
        echo("<h3>");
        echo($userid);
        echo("님 환영합니다!</h3>");
        echo("<h3>".$userid."님 환영합니다!</h3>");
        echo("<script>console.log('".$username."')</script>");
        echo "<p>아이디 : {$userid} 이름 : {$username}</p>"
    ?>
    <script>
        console.log("<?=$username?>");
    </script>
</body>
</html>