<?php
    session_start();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>세션 - 2</title>
</head>
<body>
    <h2>세션 - 2</h2>
    <p> 세션ID : <?=session_id()?></p>
    <p>USERID변수 : <?=$_SESSION['userid']?></p>
    <p>USERNAME변수 : <?=$_SESSION['username']?></p>
</body>
</html>