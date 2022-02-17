<?php
    include "../include/logincheck.php";
    include "../include/dbconn.php";
    
    // detail.php?boardidx=162
    if(!isset($_GET['boardidx'])){
        echo "<script>alert('잘못된 접근입니다!');location.href='./list.php';</script>";
    }
    $boardidx = $_GET['boardidx'];
    //boardidx가 유효한 번호인지 확인
    $sql = "select boardidx from tb_board where boardidx=$boardidx";
    $result = mysqli_query($conn,$sql);
    $data = mysqli_fetch_array($result);
    if(!isset($data['boardidx'])){
        echo "<script>alert('잘못된 접근입니다!');location.href='./list.php';</script>";
    }
    //조회수 올리기
    $sql = "update tb_board set boardhit = boardhit+1 where boardidx=$boardidx";
    $result = mysqli_query($conn,$sql);

    //게시글 내용 긁어오기(검색해오기)
    $sql = "select * from tb_board where boardidx=$boardidx";
    $result = mysqli_query($conn,$sql);
    $data = mysqli_fetch_array($result);

    $boardidx = $data['boardidx'];
    $boardtitle = $data['boardtitle'];
    $boardcontent = $data['boardcontent'];
    $boardlike = $data['boardlike'];
    $boardhit = $data['boardhit'];
    $userid = $data['userid'];
    $boardregdate = $data['boardregdate'];

    $loginid = $_SESSION['userid'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>글보기</title>
</head>
<body>
    <a href='../logout.php'>로그아웃</a>
    <h2>글보기</h2>
    <table border="1" width="800">
        <tr>
            <th>제목</th>
            <td><?=$boardtitle?></td>
        </tr>
        <tr>
            <th>작성자</th>
            <td><?=$userid?></td>
        </tr>
        <tr>
            <th>날짜</th>
            <td><?=$boardregdate?></td>
        </tr>
        <tr>
            <th>조회수</th>
            <td><?=$boardhit?></td>
        </tr>
        <tr>
            <th>좋아요</th>
            <td id="like"><?=$boardlike?></td>
        </tr>
        <tr>
            <th>내용</th>
            <td><?=$boardcontent?></td>
        </tr>
        <tr>
            <td colspan="2">
<?php
    if($userid == $loginid){
?>
                <a href="./edit.php?boardidx=<?=$boardidx?>">수정</a>
                <a href="./delete.php?boardidx=<?=$boardidx?>">삭제</a>
<?php
    }
    else{
?>
                <img src="../images/like.png" alt="좋아요" width="20" onclick="like();">
<?php
    }
?>
                <a href="./list.php">리스트</a>
            </td>
        </tr>
    </table>
    <hr>
    <form action="reply_ok.php" method="post">
        <input type="hidden" name="boardidx" value="<?=$boardidx?>">
        <p>
            <!-- apple : [              ] [확인]-->
            <?=$loginid?> : <input type="text" name="replycontent" size="100">
            <input type="submit" value="확인">
        </p>
    </form>
    <hr>
<?php
    $sql = "select replyidx,userid,replycontent,replyregdate from tb_reply where boardidx=$boardidx order by replyidx desc";
    $result = mysqli_query($conn,$sql);

    while($data = mysqli_fetch_array($result)){
        $replyidx = $data['replyidx'];
        $userid = $data['userid'];
        $replycontent = $data['replycontent'];
        $replyregdate = $data['replyregdate'];
?>
    <p><?=$userid?> : <?=$replycontent?> (<?=$replyregdate?>)</p>
<?php
    }
?>
</body>
<script>
    function like(){
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == XMLHttpRequest.DONE){
                if(xhr.status == 200){
                    alert("좋아요~♡");
                    document.getElementById("like").innerHTML = xhr.responseText;
                    //document.getElementById("like").innerHTML = document.getElementById("like").innerHTML+1;
                }
            }
        }
        xhr.open("GET","like_ok.php?boardidx=<?=$boardidx?>",true);
        xhr.send();
    }
</script>
</html>