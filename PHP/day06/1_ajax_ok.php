<?php
    $userid = null;
    $userpw = null;

    if(isset($_GET['userid'])){
        $userid = $_GET['userid'];
        $userpw = $_GET['userpw'];
    }
    else{
        $userid = $_POST['userid'];
        $userpw = $_POST['userpw'];
    }

    echo($userid."<br>");
    echo($userpw."<br>");

?>
