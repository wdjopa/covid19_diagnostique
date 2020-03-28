let questions = [];
let t; 

$(document).ready(function() {
  $.get("https://coapi.ngrok.io/questions").then(a => {
    // let questions = {
    //   data: {...a}
    // };
    console.log(a)
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
        { data: "id" }
      ],
      columnDefs: [
        {
          // The `data` parameter refers to the data for the cell (defined by the
          // `data` option, which defaults to the column being worked with, in
          // this case `data: 0`.
          render: function(data, type, row) {
            return `<a onclick="updateData(${data})" href="#!"  data-toggle="modal" data-target="#updateQuestion" class="btn btn-xs btn-warning "> <i class="far fa-edit"></i>  </a><a onclick="deleteData(${data})" href="#!" class="btn btn-xs btn-danger"> <i class="fas fa-trash"></i> </a>`;
          },
          targets: 5
        }
      ]
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

function updateData(id) {
  cquestion = questions.find(function(a) {
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
        "Bearer " + JSON.parse(localStorage.getItem("covid19_admin")).jwt
    },
    url: "https://coapi.ngrok.io/questions/" + cid,
    type: "PUT",
    data: JSON.stringify(cquestion),
    dataType: "json",

    success: function(result, statut) {
      if (result.status == "success") {
        document.location.reload()
      } else {
        $(".error-card").removeClass("d-none");
      }
    },

    error: function(resultat, statut, erreur) {
      console.log(resultat);
      console.log(erreur);
    },

    complete: function(resultat, statut) {
      $(".btn").removeClass("disabled");
    }
  });
}


function addData() {
  $(".btn").addClass("disabled");
  cquestion = {
    question: null,
    lang: null,
    level: null,
    choice: []
  };
  cquestion.question = document.questionAAjouter.question.value;
  cquestion.level = document.questionAAjouter.level.value-0;
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
        "Bearer " + JSON.parse(localStorage.getItem("covid19_admin")).jwt
    },
    url: "https://coapi.ngrok.io/questions",
    type: "POST",
    data: JSON.stringify(cquestion),
    dataType: "json",

    success: function(result, statut) {
      if (result.status == "success") {
        document.location.reload();
      } else {
        $(".error-card").removeClass("d-none");
      }
    },

    error: function(resultat, statut, erreur) {
      console.log(resultat);
      if(erreur == "UNAUTHORIZED"){
        alert("Votre session a expiré")
        localStorage.removeItem("covid19_admin")
        document.location.href="?page=login";
      }
    },

    complete: function(resultat, statut) {
      $(".btn").removeClass("disabled");
    }
  });
}

function deleteData(cid){
  if(confirm("Êtes vous sur de vouloir supprimer cette question ? Cette suppression sera irreversible")){
     $.ajax({
       headers: {
         "Content-Type": "application/json",
         Authorization:
           "Bearer " + JSON.parse(localStorage.getItem("covid19_admin")).jwt
       },
       url: "https://coapi.ngrok.io/questions/" + cid,
       type: "DELETE",

       success: function(result, statut) {
         if (result.status == "success") {
           document.location.reload();
         } else {
           $(".error-card").removeClass("d-none");
         }
       },

       error: function(resultat, statut, erreur) {
         console.log(resultat);
         console.log(erreur);
       },

       complete: function(resultat, statut) {
         $(".btn").removeClass("disabled");
       }
     });
  }
}


