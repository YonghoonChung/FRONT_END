<?php
    include "./lib/myfunction.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>함수</title>
</head>
<body>
    <?php
        include "./layout/header.php";  
    ?>
    <h2>함수</h2>

    <?=hello()?>
    <?php
        hello();
        add(10,3);
        echo getSum(10,20);
        echo "<p>".getSum(10,20)."</p>";
    ?>
    <?=getSum(20,30)?>
</body>
</html>