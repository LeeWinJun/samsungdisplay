<?php
    require_once('config.php');
    $username = $_POST["username"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $company = $_POST["company"];
    $title = $_POST["title"];
    $content = $_POST["content"];
    $nation_lang = $_POST["nation_lang"];
    $news_chk = $_POST["news_chk"];
    $type = $_POST["type"];
    
    if($news_chk == "news"){
        $news_chk = "1"; 
    } else{
        $news_chk = "0";
    }

    // echo "<br/>
    //       username : {$username} <br/>
    //       phone : {$phone} <br/>
    //       email : {$email} <br/>
    //       company : {$company} <br/>
    //       title : {$title} <br/>
    //       content : {$content} <br/>
    //       nation_lang : {$nation_lang} <br/>
    //       news_chk : {$news_chk} <br/>
    //       type : {$type}";


    // $sql = "INSERT INTO inquire_board_2nd(username, phone, email, company, title, content, nation_lang, news_chk, type)
    //         VALUES('테스트', '123', 'abc@abc.com', 'test', 'test', 'test', 'Belgium / French', 0, 1)";

    //insert가 안되는건 news_chk에 값이 없어서 그런거 같아
    //체크를 안하면 news_chk :     << 아무것도 없는 값이 들어와서

    $sql = "INSERT INTO inquire_board_2nd(username, phone, email, company, title,content,nation_lang, news_chk, type)
            VALUES('{$username}', '{$phone}', '{$email}', '{$company}', '{$title}', '{$content}', '{$nation_lang}', {$news_chk}, {$type})"; 
            //VALUES('{$username}', '{$phone}', '{$email}', '{$company}', '{$title}', '{$content}', '{$nation_lang}', , {$type})
            // 이렇게 되니까 에러 발생하는거야 체크 안하고 insert하면 오류나느거 확인하면 돼 

    $result = mysqli_query($conn, $sql);
    
    if($result == false){
        echo "<script>
            alert('문의글 등록이 실패되었습니다');
            error_log(mysqli_error($conn));
        </script>";
    }else{
        echo "<script>
            alert('문의글 등록이 완료되었습니다.');
            location.href = '../service.html';
        </script>";
    }

    mysqli_close($conn);
?>