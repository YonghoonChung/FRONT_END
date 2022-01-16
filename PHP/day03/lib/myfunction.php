<?php
    function hello(){
        echo "<p>Hello PHP!</p>";
    }
    function add($num1, $num2){
        echo "<p>{$num1}+{$num2} = ".($num1+$num2)."</p>";
    }
    function getSum($num1, $num2){
        return $num1+$num2;
    }
    
?>
<!-- html 주석 < 이 내용도 View 파일에 추가가 됨-->