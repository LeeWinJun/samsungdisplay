<?php

    //$conn = mysqli_connect('localhost', 'db유저명', 'db비밀번호', 'db명');
    $conn = mysqli_connect('localhost', 'redseon', 'kjkj124!', 'redseon');

    if (mysqli_connect_errno()) {
        echo "DB 연결에 실패했습니다".mysqli_connect_error();
    } else {
        echo "연결 성공";

    }
  // mysqli_close($conn);

?>