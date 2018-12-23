<?php
    //http://localhost/グラブルクイズ/result.php?correctCount=10&quizCount=14
    if(isset($_GET['correctCount'])) {
        $correctCount = htmlspecialchars($_GET['correctCount']);
    }
    if(isset($_GET['quizCount'])) {
        $quizCount = htmlspecialchars($_GET['quizCount']);
    }
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>result</title>
    <link rel="stylesheet" href="css/resultStyle.css">
</head>
<body>
    <div id="result">
<!--        クイズジャンルを分けてグラフ化-->
        <p id="score"><?=$quizCount?>門中<?=$correctCount?>問正解</p>
        <div id="again">
            once again
        </div>
    </div> 
    <script>
        var again = document.getElementById("again");
        again.addEventListener('click', function(){
            window.location.href = "index.html";
        });
        
    </script>
</body>
</html>