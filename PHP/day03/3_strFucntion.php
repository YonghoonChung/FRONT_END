<?php
    $str1 = "abcdefghijklmnopqrstuvwxyz";
    $str2 = "가나다라마바사아자차카타파하";
    $str3 = 'apple/banana/cherry/durian';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>문자열 함수</title>
</head>
<body>
    <h2>문자열 함수</h2>

    <?php
        echo strlen($str1)."<br>";
        echo strlen($str2)."<br>";
        // echo mb_strlen($str2,"utf-8")."<br>";
        echo "<hr>";
        echo strcmp("abcd", 'abcf')."<br>";//뒤에 문자가 크면 -1, 같으면 0, 작으면 1
        echo strcmp("abcd", 'ABCD')."<br>";
        echo strcmp("10", '2')."<br>";
        echo strcmp("abc", 'abc')."<br>";
        echo "<hr>";
        echo strstr("$str1", 'cd')."<br>"; // 뒤의 인자부터 출력
        echo strpos("$str1", 'cd')."<br>"; // 뒤의 인자부터 출력
        echo "<hr>";
        echo substr($str1, 2)."<br>"; //해당 인자부터 출력한다.
        echo substr($str1, -2)."<br>"; // 뒤에서 두번째
        echo substr($str1, 2,5)."<br>"; //start to end 출력
        echo "<hr>";
        $arr =  explode('/',$str3);
        foreach ($arr as $name){
            echo $name. " ";
        }
        echo "<hr>";
        $str3 = str_replace("/","*",$str3) ;
        echo $str3;
        echo "<hr>";
    ?>
</body>
</html>