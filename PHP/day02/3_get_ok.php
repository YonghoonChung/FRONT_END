<?php
    $query = $_GET['query'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>get 방식</title>
</head>
<body>
    <h2>검색 결과</h2>
    <hr>
    <p>이름 : <?=$_GET['name']?></p>
    <p>검색어 : <?=$query?></p>
</body>
</html>