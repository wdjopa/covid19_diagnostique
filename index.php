<?php

$pages = scandir("pages/");
$page="accueil";
if(isset($_GET['page']) && in_array($_GET['page'].".php", $pages)){
    $page = htmlentities($_GET['page']);
}
?> 
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="theme-color" content="#0E9E2E">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cameroun - Markers Against Covid-19</title>
    <link rel="shortcut icon" href="https://lamater.tech/covid19/images/virus.svg" type="image/x-icon">
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="css/<?=$page?>.css"/>
    <meta property="og:type" content="Covid-19" />
    <meta property="og:title" content="Cameroon - Makers Against Covid-19 in Cameroon" />
    <meta property="og:description" content="Obtenez une aide au diagnostique rapide et des conseils sur les précautions à prendre. Vous avez également la liste des centres d'examens rangés par région qui prennent en charge les patients atteint de Covid-19 au Cameroun." />
    <meta property="og:url" content="https://lamater.tech/covid19" />
    <meta property="og:image" content="https://lamater.tech/covid19/images/virus.svg" />
    <meta property="og:site_name" content="Cameroon - Makers Against Covid-19 in Cameroon" />
    <style>
        @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css";

.float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 6rem;
    right: 1.5rem;
    background-color: #25d366;
    color: #FFF;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 2px 2px 3px #999;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;

}
.float:hover{
    color: white;
    text-decoration: none;
}
    </style>
</head>
<body>
    <?php include("incs/header.inc.php")?>
    <?php include("pages/$page.php") ?>
    <?php include("incs/footer.inc.php")?>

<a href="https://www.dklo.co/#/cv/J91EBOny" class="float text-float" style="background: linear-gradient(to right, #FF8B00, #ff4400)!important; bottom: 11rem;" target="_blank">
	    <img style="width: 2rem;" class="fa" src="https://cdn.shopify.com/s/files/1/0218/6533/2836/files/dikprtr_1.png?398">
    </a>
<a href="https://chat.whatsapp.com/G0bIlPb5NBP8OqW6PpjK48" class="float" target="_blank">
	    <i class="fa fa-whatsapp my-float"></i>
    </a>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="script.js"></script>
   
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="scripts/<?=$page?>.js"></script>
    <!--Start of Tawk.to Script-->
    <script type="text/javascript">
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5e81f1bb69e9320caabe792c/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
    </script> 
    <!--End of Tawk.to Script-->
</body>
</html>