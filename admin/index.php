<?php

$pages = scandir("pages/");
$page="login";
if(isset($_GET['page']) && in_array($_GET['page'].".php", $pages)){
    $page = htmlentities($_GET['page']);
}
?> 
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin | Cameroun - Markers Against Covid-19</title>
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="css/<?=$page?>.css"/>
    <meta property="og:type" content="Covid-19" />
    <meta property="og:title" content="Cameroon - Makers Against Covid-19 in Cameroon" />
    <meta property="og:description" content="Obtenez un diagnostique rapide et des conseils sur les précautions à prendre. Vous avez également la liste des centres d'examens rangés par région qui prennent en charge les patients atteint de Covid-19 au Cameroun." />
    <meta property="og:url" content="https://lamater.tech/covid19" />
    <meta property="og:image" content="https://lamater.tech/covid19/img/virus.svg" />
    <meta property="og:site_name" content="Cameroon - Makers Against Covid-19 in Cameroon" />
    <?php if($page == "login") :?>
    <link rel="stylesheet" href="assets/vendor/bootstrap/css/bootstrap.min.css">
    <link href="assets/vendor/fonts/circular-std/style.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/libs/css/style.css">
    <link rel="stylesheet" href="assets/vendor/fonts/fontawesome/css/fontawesome-all.css">
    <style>
        html,
        body {
            height: 100%;
        }

        body {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            padding-top: 40px;
            padding-bottom: 40px;
        }
    </style>
    <?php endif;?>
</head>
<body>
    <?php include("pages/$page.php") ?>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="script.js"></script>
    <script src="scripts/<?=$page?>.js"></script>

    <script src="assets/vendor/jquery/jquery-3.3.1.min.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.js"></script>

</body>
</html>