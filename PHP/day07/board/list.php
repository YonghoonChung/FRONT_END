<?php
    include "../include/dbconn.php";
    include "../include/logincheck.php";
    $sql = "select count(boardidx) total from tb_board";
    $result = mysqli_query($conn,$sql);
    $data = mysqli_fetch_array($result);

    $total = $data['total'];

    $pageCount = 10;    //페이지당 보여질 게시글 개수
    $start = 0;         //게시글의 시작 행 번호
    $page = 1;          //페이지 번호(지정하지 않는다면 1페이지)

    // list.php?page=3
    if(isset($_GET['page'])){
        $page = $_GET['page'];          // 3
        $start = ($page-1)*$pageCount;  // (3-1)*10 ==> 20
    }
    $sql = "select boardidx, boardtitle, userid, boardhit, boardlike, boardregdate
    from tb_board order by boardidx desc limit $start, $pageCount";
    $result = mysqli_query($conn,$sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>리스트</title>
</head>
<body>
    <a href='../logout.php'>로그아웃</a>
    <h2>리스트</h2>
    <p>전체 글개수 : <?=$total?></p>
    <table border="1" width="800">
        <tr>
            <th>번호</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>조회수</th>
            <th>좋아요</th>
            <th>날짜</th>
        </tr>
<?php
    while($data = mysqli_fetch_array($result)){
        $boardidx = $data['boardidx'];
        $boardtitle = $data['boardtitle'];
        $userid = $data['userid'];
        $boardhit = $data['boardhit'];
        $boardlike = $data['boardlike'];
        $boardregdate = $data['boardregdate'];

        $sql = "select count(*) cnt from tb_reply where boardidx=$boardidx";
        $rep_result = mysqli_query($conn,$sql);
        $rep_data = mysqli_fetch_array($rep_result);
        $rep_cnt = $rep_data['cnt'];
?>
        <tr>
            <td><?=$boardidx?></td>
            <td><a href="./detail.php?boardidx=<?=$boardidx?>"><?=$boardtitle?></a> - [<?=$rep_cnt?>]</td>
            <td><?=$userid?></td>
            <td><?=$boardhit?></td>
            <td><?=$boardlike?></td>
            <td><?=$boardregdate?></td>
        </tr>
<?php
    }
?>
        <tr>
            <td colspan="6" align="center">
<?php
    //14            132         10
    $endPage = ceil($total/$pageCount);
    for($i=1;$i<=$endPage;$i++){
        if($page == $i){
            echo "[".$i."]";
        }
        else{
            echo "<a href='./list.php?page=$i'>"."[$i]"."</a>";
        }
    }
?>
            </td>
        </tr>
    </table>
    <p><a href="./write.php">글쓰기</a></p>
</body>
</html>