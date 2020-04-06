if (!localStorage.getItem("questionscovid19"))
  document.location.href =
    "?page=accueil&err=Vous n'avez pas encore fait de test";

let questions = JSON.parse(localStorage.getItem("questionscovid19"));

if (!questions) {
  document.location.href =
    "?page=accueil&err=Vous n'avez pas encore fait de test";
}
let score = 0,
  total = 0;
let symptomes = [];
let pronostiques = [];
let gmineur = [],
  gmajeur = [];
let caracteristiques = JSON.parse(localStorage.getItem("caracteristiques"));

conclusion();
function conclusion() {
  let resultat = 0;
  questions.forEach((question) => {
    if (question.rep == question.answer) {
      resultat += question.level;
    }
    // console.log("Resultat", resultat);
  });

  if (resultat >= 0 && resultat <= 2) {
    $(".resultat .avis").html(
      "VOUS SEMBLEZ <span class='text-success'>NE PRESENTER AUCUN SIGNE</span>"
    );
    // $(".resultat .message").html("");
    $(".resultat .precision").html(
      `Nous vous invitons à rester chez vous et à continuer à prendre soin de votre santé. Dès les premiers symptômes, contactez le <a class="text-danger bold" href="tel:1510">1510</a>.<br>Restez chez vous au maximum en attendant que les symptômes disparaissent.
  Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`
    );
    $(".resultat .img").attr("src", "images/diagnosis.svg");
  } else if (resultat >= 3 && resultat <= 5) {
    $(".resultat .avis").html(
      "<span class='text-success'>REFAITES LE TEST DANS 2 JOURS</span>"
    );
    // $(".resultat .message").html(message);
    $(".resultat .precision").html(
      `Nous vous invitons à rester chez vous et à continuer à prendre soin de votre santé. Buvez constamment de l'eau et ayez une bonne hygiène pour écarter tout risque. Dès les premiers symptômes, contactez le <a class="text-danger bold" href="tel:1510">1510</a>.<br>Restez chez vous au maximum en attendant que les symptômes disparaissent.
  Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`
    );
    $(".resultat .img").attr("src", "images/diagnosis.svg");
  } else if (resultat >= 6 && resultat <= 12) {
    // $(".resultat .message").html(message);
    $(".resultat .avis").html(
      "VOUS SEMBLEZ <span class='text-success'>PRESENTER QUELQUES SIGNES</span>"
    );
    $(".resultat .precision")
      .html(`Nous vous conseillons d'effectuer une consultation médicale. Vous pouvez contacter des médecins en cliquant sur les boutons Whatsapp qui sont situés à droite. Des medecins reviendrons vers vous le plus rapidement possible. <br> Vous pouvez également appeler
le 1510 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant
plus de 24h apparaissent.<br>Restez chez vous au maximum en attendant que les symptômes disparaissent.
Prenez votre température deux fois par jour. Rappel des mesures d’hygiène`);
    $(".resultat .img").attr("src", "images/hand-wash.svg");
  } else {
    $(".resultat .img").attr("src", "images/virus (1).svg");
    $(".resultat .avis").html(
      "<span class='text-danger'> BESOIN DE SOINS EN URGENCE</span>"
    );
    $(".resultat .message").html(
      `Aussi vite que vous le pouvez, contactez les numéros suivants (1510, ...) pour vous signaler votre cas auprès des autorités sanitaires compétentes pour votre prise en charge rapide. `
    );
    casurgent(resultat);
  }
}

function casurgent(resultat) {
  $.post("https://lamater.tech:2002/sendmail", {
    to: "wilfried.djopa@gmail.com",
    subject: "Cas grave signalé de Covid-19 - Application",
    html: `La personne suivante a obtenu un score de : ${resultat}.<br>
    ${JSON.stringify(caracteristiques)}`,
  });
}
/*
if (caracteristiques.age - 0 >= 70) {
  pronostiques.push("age avancé");
} else {
  if (caracteristiques.age <= 15) {
    alert(` Prenez contact avec votre médecin généraliste au moindre
doute. Cette application n’est pour l’instant pas adaptée aux personnes de
moins de 15 ans. En cas d’urgence, appeler le 1510.`);
    document.location.href = "?page=accueil";
  }
}
if (
  caracteristiques.poids /
    (caracteristiques.taille * caracteristiques.taille) >=
  30
) {
  pronostiques.push("IMC important");
}
console.log(questions);

questions.forEach(question => {
  if (
    question.question.includes("toux", "gorge", "mal de gorge") &&
    question.rep == question.answer
  ) {
    symptomes.push("toux");
  }
  if (
    question.question.includes("vre", "sueurs froides") &&
    question.rep == question.answer
  ) {
    symptomes.push("fievre");
  } else {
    if (question.rep == question.answer) {
      gmineur.push(question);
    } else {
      gmajeur.push(question);
    }
  }
  if (
    question.question.includes("fatigue", "courbatures") &&
    question.rep == question.answer
  ) {
    symptomes.push("fatigue");
    gmineur.push(question);
  }
  if (question.question.includes("diarrh") && question.rep == question.answer) {
    symptomes.push("diarrh");
  }
  if (
    question.question.includes("alimenter") &&
    question.rep == question.answer
  ) {
    symptomes.push("aliment");
    gmajeur.push(question);
  }

  if (question.question.includes("gorge") && question.rep == question.answer) {
    symptomes.push("gorge");
    // gmajeur.push(question);
  }
  if (
    question.question.includes("ne respiratoire") &&
    question.rep == question.answer
  ) {
    // gene respiratoire
    symptomes.push("odorat");
    // symptomes.push("gene respiratoire");
    gmajeur.push(question);
  }
  if (
    question.question.includes("hypertension") &&
    question.rep == question.answer
  ) {
    pronostiques.push(question);
  }
  if (question.question.includes("diab") && question.rep == question.answer) {
    pronostiques.push(question);
  }
  if (question.question.includes("cancer") && question.rep == question.answer) {
    pronostiques.push(question);
  }
  if (
    question.question.includes("maladie respiratoire") &&
    question.rep == question.answer
  ) {
    pronostiques.push(question);
  }
  if (
    question.question.includes("nale chronique dialys") &&
    question.rep == question.answer
  ) {
    pronostiques.push(question); // rénale chronique dialysé
  }

  if (
    question.question.includes("chronique du foie") &&
    question.rep == question.answer
  ) {
    pronostiques.push(question);
  }

  if (
    question.question.includes("enceinte") &&
    question.rep == question.answer
  ) {
    pronostiques.push(question);
  }

  if (
    question.question.includes("fenses immunitaires") &&
    question.rep == question.answer
  ) {
    pronostiques.push(question);
  }

  if (
    question.question.includes("immunosuppresseur") &&
    question.rep == question.answer
  ) {
    pronostiques.push(question);
  }

  score += question.rep == question.answer ? 1 * question.level : 0;
  total += 1 * question.level;
});

// Algo décisionnel
console.log("symptomes",symptomes);
console.log("mineurs", gmineur);
console.log("majeurs", gmajeur);
console.log("pronostiques", pronostiques);

if (symptomes.includes("fievre") && symptomes.includes("toux")) {
  if (
    pronostiques.length == 0 ||
    (gmineur.length >= 1 && gmajeur.length == 0)
  ) {
    milieu(
      "téléconsultation ou médecin généraliste ou visite à domicile (SOS médecins…) "
    );
  } else {
    if (gmineur.length == 0 && gmajeur.length == 0) {
      milieu(
        "téléconsultation ou médecin généraliste ou visite à domicile (SOS médecins…) "
      );
    } else if (gmineur.length == 1) {
      milieu(
        "téléconsultation ou médecin généraliste ou visite à domicile (SOS médecins…) "
      );
    } else if (gmineur.length == 2) {
      milieu(
        " CS MG ou téléCs et si pas possible de le joindre ou téléCS : faite le 1510 "
      );
    } else if (gmajeur.length >= 1) {
      malade(" Appeler le 1510");
    }
  }
} // ELSE IF
else if (
  symptomes.includes("fievre") ||
  (symptomes.includes("toux") && symptomes.includes("gorge")) ||
  (symptomes.includes("toux") && symptomes.includes("odorat")) ||
  (symptomes.includes("fievre") && symptomes.includes("diarrh"))
) {
  if (pronostiques.length == 0) {
    if (
      gmineur.length == 0 &&
      gmajeur.length == 0 &&
      caracteristiques.age < 50
    ) {
      sain(
        " nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes."
      );
    } else if (
      (gmineur.length == 0 &&
        gmajeur.length == 0 &&
        caracteristiques.age >= 50 &&
        caracteristiques.age < 69) ||
      gmineur.length >= 1
    ) {
      milieu(
        "téléconsultation ou médecin généraliste ou visite à domicile (SOS médecins…) "
      );
    }
    else{
         milieu(
           "téléconsultation ou médecin généraliste ou visite à domicile (SOS médecins…) "
         );
    }
  } else {
    if (gmineur.length == 0 && gmajeur.length == 0) {
      milieu(
        "téléconsultation ou médecin généraliste ou visite à domicile (SOS médecins…) "
      );
    } else if (gmineur.length == 1) {
      milieu(
        "téléconsultation ou médecin généraliste ou visite à domicile (SOS médecins…) "
      );
    } else if (gmineur.length == 2) {
      milieu(
        " CS MG ou téléCs et si pas possible de le joindre ou téléCS : faite le 1510 "
      );
    } else if (gmajeur.length >= 1) {
      malade(" Appeler le 1510");
    } else {
      milieu(
        "téléconsultation ou médecin généraliste ou visite à domicile (SOS médecins…) "
      );
    }
  }
} else if (symptomes.includes("toux", "gorge", "odorat")) {
  if (gmineur.length == 0 && gmajeur.length == 0) {
    sain(
      `Votre situation ne relève probablement pas du Covid-19. Consultez votre
médecin au moindre doute. Si de nouveaux symptomes apparaissent, refaites le
test. `
    );
  } else if (
    gmineur.length >= 1 ||
    gmajeur.length >= 1 ||
    pronostiques.length >= 1
  ) {
    sain(
      `Votre situation ne relève probablement pas du Covid-19. Un avis médical est
recommandé. Au moindre doute, appelez le 1510.  `
    );
  }else{
      sain(
        `Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre
médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour
réévaluer la situation. `
      );
  }
} else if (symptomes.length == 0) {
  sain(
    `Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre
médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour
réévaluer la situation. `
  );
}else{
    
         milieu(
           "téléconsultation ou médecin généraliste ou visite à domicile (SOS médecins…) "
         );
}

function sain(message) {
  $(".resultat .avis").html(
    "VOUS SEMBLEZ <span class='text-success'>NE PRESENTER AUCUN SIGNE</span>"
  );
  $(".resultat .message").html(message);
  $(".resultat .precision").html(
    `Nous vous invitons à rester chez vous et à continuer à prendre soin de votre santé. Dès les premiers symptômes, contactez le <a class="text-danger bold" href="tel:1510">1510</a>.<br>Restez chez vous au maximum en attendant que les symptômes disparaissent.
Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`
  );
  $(".resultat .img").attr("src", "images/diagnosis.svg");
}
function milieu(message) {
  $(".resultat .message").html(message);
  $(".resultat .avis").html(
    "VOUS SEMBLEZ <span class='text-success'>PRESENTER QUELQUES SIGNES</span>"
  );
  $(".resultat .precision").html(`appelez
le 1510 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant
plus de 24h apparaissent.<br>Restez chez vous au maximum en attendant que les symptômes disparaissent.
Prenez votre température deux fois par jour. Rappel des mesures d’hygiène`);
  $(".resultat .img").attr("src", "images/hand-wash.svg");
}
function malade(message) {
  $(".resultat .img").attr("src", "images/virus (1).svg");
  $(".resultat .avis").html("<span class='text-danger'>" + message + "</span>");
  $(".resultat .message")
    .html(`<br>Restez chez vous au maximum en attendant que les symptômes disparaissent.
Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`);
}
*/

function share() {
  copyToClipboard();
}
function copyToClipboard() {
  let url = "https://lamater.tech/covid19";
  let selBox = document.createElement("textarea");

  selBox.style.position = "fixed";
  selBox.style.left = "0";
  selBox.style.top = "0";
  selBox.style.opacity = "0";
  selBox.value = url;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  selBox.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  document.body.removeChild(selBox);
  alert("Lien copié");
}
