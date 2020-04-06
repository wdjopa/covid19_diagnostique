let questions = [];
let t;

$(document).ready(function () {
  $.get("https://coapi.ngrok.io/questions").then((a) => {
    // let questions = {
    //   data: {...a}
    // };
    console.log(a);
    questions = a;

    t = $("#questions_table").DataTable({
      lengthChange: true,
      buttons: ["copy", "excel", "pdf", "print", "colvis"],
      data: questions,
      columns: [
        { data: "question" },
        { data: "choice[,]" },
        { data: "answer" },
        { data: "level" },
        { data: "lang" },
        { data: "id" },
      ],
      columnDefs: [
        {
          // The `data` parameter refers to the data for the cell (defined by the
          // `data` option, which defaults to the column being worked with, in
          // this case `data: 0`.
          render: function (data, type, row) {
            return `<a onclick="updateData(${data})" href="#!"  data-toggle="modal" data-target="#updateQuestion" class="btn btn-xs btn-warning "> <i class="far fa-edit"></i>  </a><a onclick="deleteData(${data})" href="#!" class="btn btn-xs btn-danger"> <i class="fas fa-trash"></i> </a>`;
          },
          targets: 5,
        },
      ],
    });
  });

  /**
  *   {
    "answer": "OUI", 
    "choice": [
      "OUI", 
      "NON"
    ], 
    "id": 13177680715284533035948302063858870276, 
    "lang": "fr", 
    "level": 2, 
    "question": "Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ?"
  }, 
  */
});
let cid, cquestion;

function deleteAll() {
  questions.forEach((question) => {
    deleteData(question.id);
  });
}

function addAll() {
  questions2.forEach((question) => {
    alert("Confirmez ? "+ JSON.stringify(question));
    $.ajax({
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("covid19_admin")).jwt,
      },
      url: "https://coapi.ngrok.io/questions",
      type: "POST",
      data: JSON.stringify(question),
      dataType: "json",

      success: function (result, statut) {
        if (result.status == "success") {
          //  document.location.reload();
          console.log("ajoutée avec success");
        } else {
          $(".error-card").removeClass("d-none");
        }
      },

      error: function (resultat, statut, erreur) {
        console.log(resultat);
        if (erreur == "UNAUTHORIZED") {
          alert("Votre session a expiré");
          localStorage.removeItem("covid19_admin");
          document.location.href = "?page=login";
        }
      },

      complete: function (resultat, statut) {
        $(".btn").removeClass("disabled");
      },
    });
  });
}
function updateData(id) {
  cquestion = questions.find(function (a) {
    return a.id == id;
  });
  cid = id;
  document.questionAModifier.question.value = cquestion.question;
  document.questionAModifier.level.value = cquestion.level;
  document.questionAModifier.lang.value = cquestion.lang;
  document.questionAModifier.prop1.value = cquestion.choice[0];
  document.questionAModifier.prop2.value = cquestion.choice[1];
  cquestion.answer == cquestion.choice[1]
    ? document.querySelector(".chk2").setAttribute("checked", "true")
    : document.querySelector(".chk1").setAttribute("checked", "true");
  console.log(cquestion);
}
if (!JSON.parse(localStorage.getItem("covid19_admin"))) {
  document.location.href = "?page=login";
}

function saveUpdate() {
  $(".btn").addClass("disabled");
  cquestion.question = document.questionAModifier.question.value;
  cquestion.level = document.questionAModifier.level.value;
  cquestion.lang = document.questionAModifier.lang.value;
  cquestion.choice[0] = document.questionAModifier.prop1.value;
  cquestion.choice[1] = document.questionAModifier.prop2.value;

  document.questionAModifier.reponse.value == "prop2"
    ? (cquestion.answer = cquestion.choice[1])
    : (cquestion.answer = cquestion.choice[0]);
  console.log(JSON.parse(localStorage.getItem("covid19_admin")));
  $.ajax({
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("covid19_admin")).jwt,
    },
    url: "https://coapi.ngrok.io/questions/" + cid,
    type: "PUT",
    data: JSON.stringify(cquestion),
    dataType: "json",

    success: function (result, statut) {
      if (result.status == "success") {
        document.location.reload();
      } else {
        $(".error-card").removeClass("d-none");
      }
    },

    error: function (resultat, statut, erreur) {
      console.log(resultat);
      console.log(erreur);
    },

    complete: function (resultat, statut) {
      $(".btn").removeClass("disabled");
    },
  });
}

function addData() {
  $(".btn").addClass("disabled");
  cquestion = {
    question: null,
    lang: null,
    level: null,
    choice: [],
  };
  cquestion.question = document.questionAAjouter.question.value;
  cquestion.level = document.questionAAjouter.level.value - 0;
  cquestion.lang = document.questionAAjouter.lang.value;
  cquestion.choice[0] = document.questionAAjouter.prop1.value;
  cquestion.choice[1] = document.questionAAjouter.prop2.value;

  document.questionAAjouter.reponse.value == "prop2"
    ? (cquestion.answer = cquestion.choice[1])
    : (cquestion.answer = cquestion.choice[0]);
  alert(JSON.stringify(cquestion));
  $.ajax({
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("covid19_admin")).jwt,
    },
    url: "https://coapi.ngrok.io/questions",
    type: "POST",
    data: JSON.stringify(cquestion),
    dataType: "json",

    success: function (result, statut) {
      if (result.status == "success") {
        document.location.reload();
      } else {
        $(".error-card").removeClass("d-none");
      }
    },

    error: function (resultat, statut, erreur) {
      console.log(resultat);
      if (erreur == "UNAUTHORIZED") {
        alert("Votre session a expiré");
        localStorage.removeItem("covid19_admin");
        document.location.href = "?page=login";
      }
    },

    complete: function (resultat, statut) {
      $(".btn").removeClass("disabled");
    },
  });
}

function deleteData(cid) {
  if (
    confirm(
      "Êtes vous sur de vouloir supprimer cette question ? Cette suppression sera irreversible"
    )
  ) {
    $.ajax({
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("covid19_admin")).jwt,
      },
      url: "https://coapi.ngrok.io/questions/" + cid,
      type: "DELETE",

      success: function (result, statut) {
        if (result.status == "success") {
          console.log("supprimé avec succes");
        } else {
          $(".error-card").removeClass("d-none");
        }
      },

      error: function (resultat, statut, erreur) {
        console.log(resultat);
        console.log(erreur);
      },

      complete: function (resultat, statut) {
        $(".btn").removeClass("disabled");
      },
    });
  }
}

let questions2 = [];
questions2.push({
  question: "Avez-vous eu de la toux ces derniers jours ?",
  choice: ["Oui", "Non"],
  answer: "Oui",
  level: 1,
  lang: "fr",
});

questions2.push({
  question: "Avez-vous eu un rhume ces derniers jours ?",
  choice: ["Oui", "Non"],
  answer: "Oui",
  level: 1,
  lang: "fr",
});

questions2.push({
  question: "Avez-vous eu de la diarrhée ces 3 derniers jours ?",
  choice: ["Oui", "Non"],
  answer: "Oui",
  level: 1,
  lang: "fr",
});

questions2.push({
  question:
    "Avez-vous eu une perte d'odorat et de goût ? Du mal à sentir des odeurs ou des aliments",
  choice: ["Oui", "Non"],
  answer: "Oui",
  level: 1,
  lang: "fr",
});

questions2.push({
  question: "Avez-vous des maux de tête derniers jours ?",
  choice: ["Oui", "Non"],
  answer: "Oui",
  level: 1,
  lang: "fr",
});

questions2.push({
  question: "Avez-vous eu de la fièvre (>37,8°) ces  derniers jours ?",
  choice: ["Oui", "Non"],
  answer: "Oui",
  level: 1,
  lang: "fr",
});

questions2.push({
  question: "Ressentez-vous une fatigue ?",
  choice: ["Oui", "Non"],
  answer: "Oui",
  level: 1,
  lang: "fr",
});

questions2.push({
  question:
    "Avez-vous eu des maux de gorge qui ont apparu ces derniers jours ?",
  choice: ["Oui", "Non"],
  answer: "Oui",
  level: 2,
  lang: "fr",
});

questions2.push({
  question:
    "Avez-vous eu une gêne respiratoire ou une augmentation de votre gêne habituelle ?",
  choice: ["Oui", "Non"],
  answer: "Oui",
  level: 1,
  lang: "fr",
});

questions2.push({
  question: "Avez-vous des courbatures et douleurs musculaires ?",
  choice: ["Oui", "Non"],
  answer: "Oui",
  level: 1,
  lang: "fr",
});

questions2.push({
  question:
    "Avez-vous été en contact avec des personnes provenant de l'étranger ces 3 dernieres semaines ?",
  choice: ["Oui", "Non"],
  answer: "Oui",
  level: 3,
  lang: "fr",
});

questions2.push({
  question: "Avez-vous été à l'étranger ces 4 dernieres semaines ?",
  choice: ["Oui", "Non"],
  answer: "Oui",
  level: 3,
  lang: "fr",
});

questions2.push({
  question:
    "Avez-vous été en voyage dans un pays concerné par la pandémie Covid-19 ?",
  choice: ["Oui", "Non"],
  answer: "Oui",
  level: 3,
  lang: "fr",
});

questions2.push({
  question: "Avez-vous été en contact avec un cas de Covid-19 ?",
  choice: ["Oui", "Non"],
  answer: "Oui",
  level: 4,
  lang: "fr",
});

/*
ANCIENNES QUESTIONS
"[{"answer":"OUI","choice":["OUI","NON"],"id":31334,"lang":"fr","level":2,"question":"Vous sentez-vous plus fatigué que d’habitude ?"},{"answer":"OUI","choice":["OUI","NON"],"id":14693,"lang":"fr","level":3,"question":"Avez-vous la toux ?"},{"answer":"BIEN/ASSEZ BIEN","choice":["BIEN/ASSEZ BIEN","MAL/TRES MAL"],"id":22471,"lang":"fr","level":"3","question":"Comment vous sentez-vous ? Bien/Assez bien/mal/très mal ?"},{"answer":"OUI","choice":["OUI","NON"],"id":24375,"lang":"fr","level":1,"question":"Avez-vous une insuffisance rénale chronique dialysée ?"},{"answer":"OUI","choice":["OUI","NON"],"id":14559,"lang":"fr","level":2,"question":"Souffrez-vous de gêne intestinale ?"},{"answer":"OUI","choice":["OUI","NON"],"id":14535,"lang":"fr","level":3,"question":"Faites-vous de la fièvre ?"},{"answer":"OUI","choice":["OUI","NON"],"id":24825,"lang":"fr","level":3,"question":"Avez-vous le nez qui coule ?"},{"answer":"OUI","choice":["OUI","NON"],"id":13751,"lang":"fr","level":1,"question":"Êtes-vous diabétique ?"},{"answer":"OUI","choice":["OUI","NON"],"id":30626,"lang":"fr","level":3,"question":"Effectuez-vous un métier d’extérieur ?"},{"answer":"OUI","choice":["OUI","NON"],"id":16397,"lang":"fr","level":3,"question":"Ressentez-vous une douleur au niveau de la gorge ?"},{"answer":"OUI","choice":["OUI","NON"],"id":33455,"lang":"fr","level":1,"question":"Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive). "},{"answer":"OUI","choice":["OUI","NON"],"id":33320,"lang":"fr","level":1,"question":"Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?"},{"answer":"OUI","choice":["OUI","NON"],"id":81523,"lang":"fr","level":2,"question":"Avez-vous un mal de gorge apparu ces derniers jours ?"},{"answer":"OUI","choice":["OUI","NON"],"id":27432,"lang":"fr","level":1,"question":"Avez-vous une maladie connue pour diminuer vos défenses immunitaires "},{"answer":">=50","choice":[">=50","<50"],"id":81962,"lang":"fr","level":3,"question":"Quel est votre âge ?"},{"answer":"OUI","choice":["OUI","NON"],"id":65943,"lang":"fr","level":3,"question":"Avez-vous été en contact physique avec une personne revenant de l'etranger ces deux derniers mois ?"},{"answer":"OUI","choice":["OUI","NON"],"id":14035,"lang":"fr","level":2,"question":"Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours?"},{"answer":"OUI","choice":["OUI","NON"],"id":19947,"lang":"fr","level":1,"question":"Avez-vous une maladie chronique du foie ?"},{"answer":"OUI","choice":["OUI","NON"],"id":28476,"lang":"fr","level":2,"question":"Souffrez-vous de vertiges ?"},{"answer":"OUI","choice":["OUI","NON"],"id":19416,"lang":"fr","level":3,"question":"Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?"},{"answer":"OUI","choice":["OUI","NON"],"id":10882,"lang":"fr","level":1,"question":"Avez-vous ou avez-vous eu un cancer ?"},{"answer":"OUI","choice":["OUI","NON"],"id":27297,"lang":"fr","level":3,"question":"Souffrez-vous d’une maladie quelconque présentement?"},{"answer":"OUI","choice":["OUI","NON"],"id":14448,"lang":"fr","level":2,"question":"Avez-vous une fatigue inhabituelle ces derniers jours ?"},{"answer":"OUI","choice":["OUI","NON"],"id":66147,"lang":"fr","level":2,"question":"Avez-vous des maux de tête ?"},{"answer":"OUI","choice":["OUI","NON"],"id":16329,"lang":"fr","level":3,"question":"Avez-vous effectué µn voyage au cours de ces trois derniers mois ?"}]"
*/
