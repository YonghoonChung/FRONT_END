<?php
    $count = $_GET['count'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>테이블 만들기</title>
<style>
    table{
        border-collapse:collapse;
    }
    td{
        border:3px solid red;
        width:300px;
        height : 50px;
        text-align:center;
    }
</style>
</head>
<body>
    <h2>테이블</h2>
    <hr>
    <table>
        <?php
            for ($i=1; $i <=$count; $i++) {
            //     echo "<tr><td>{$i}번째 셀</td></tr>";
            // }
        ?>
        <tr>
            <td><?=$i?>번째 셀</td>
        </tr>
        <?php
        }
        ?>
        
    </table>

</body>
</html>