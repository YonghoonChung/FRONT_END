<?php
    session_start();
    session_unset();
?>

<script>
    alert('로그아웃 되었습니다');
    location.href = "9_login.php";
</script>