<?php
    $result = "";
    $lines = @file("data.txt") or $result = "파일을 가져올 수 없습니다."; //예외처리
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=``, initial-scale=1.0">
    <title>파일 입출력 - 2</title>
</head>
<body>
    <h2>파일 입출력 - 2</h2>
    <?php
        if($lines != null){
            for ($i=0; $i < count($lines);  $i++) { 
                $result .= $lines[$i]."<hr>";
            }
        }
    ?>
    <p><?=$result?></p>
</body>
</html>