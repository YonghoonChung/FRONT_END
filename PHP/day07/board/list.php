<?php
    include "../include/dbconn.php";

    $sql = "select count(boardidx) total from tb_board";
    $result = mysqli_query($conn, $sql);
    $data = mysqli_fetch_array($result);

    $total = $data['total'];

    $pageCount = 10;    //페이지당 게시글 수
    $start = 0;         // 게시글의 시작 행 번호
    $page = 1;          // 페이지 번호(지정하지 않는다면 1페이지)

    //list.php?page = 3
    if(isset($_GET['page'])){
        $page = $_GET['page'];          // 3
        $start = ($page-1)*$pageCount;  // (3-1)*10 ==> 20
    }
    $sql = "select boardidx, boardtitle, userid, boardhit, boardlike, boardregidate
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
        <tr>
            <td>100</td>
            <td><a href="#">가장 최근 게시글</a></td>
            <td>apple</td>
            <td>100</td>
            <td>5</td>
            <td>2022-02-04</td>
        </tr>
        <tr>
            <td colspan="6" align="center">
                <a href="#">1</a> 2 3 4 5
            </td>
        </tr>
    </table>
    <p><a href="./write.php">글쓰기</a></p>
</body>
</html>