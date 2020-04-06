questionSuivante = () => {
  alert(
    "Le questionnaire n'est pas encore terminé. Vous allez être rédirigé à la fin "
  );
  document.location.href = "?page=fin_diagnostique";
};
let questions = [],
  current = 0;

/**
 * storage_set
 * This method will set parameters in the storage with localStorage
 * key : The key of the parameter
 * value : the value the parameter will contain if null, then prompt
 * extra_string : The extra_string
 * force : to force the update
 */
storage_set = (key, value = null, force = false, extra_string = "") => {
  // if it is not in localstorage or
  // if it is in localstorage and we force the update
  if (
    localStorage.getItem(key) == null ||
    (localStorage.getItem(key) !== null && force)
  ) {
    // if the value is null, then prompt
    if (value === null) {
      value = prompt(
        "Veuillez entrer votre " + key.split("_").join(" ") + " " + extra_string + ": "
      );
    }

    if (value !== "null" && value !== null) {
      localStorage.setItem(key, value);
    }
  }
};

/**
 * prerequis_questions
 * This method will only ask all necessary questions at the start
 * force : this parameter is to force the update
 */
prerequis_questions = (force = false) => {
  // Let set the age
  storage_set("age", null, force);
  // Let set le quartier
  storage_set("quartier", null, force);
  // Let set le contact personnel
  storage_set("contact_personnel", null, force);
  // Let set le personne_a_contacter
  storage_set("personne_a_contacter", null, force, " (Tel et nom)");
  // Let set le adresse_professionnelle
  storage_set("adresse_professionnelle", null, force);
  // We set caracteristiques
  storage_set(
    "caracteristiques",
    JSON.stringify({
      age: age,
      quartier: quartier,
      contact_personnel: contact_personnel,
      personne_a_contacter: personne_a_contacter,
      adresse_professionnelle: adresse_professionnelle,
    }),
    force
  );

  // if we update with force, then re-actualise the dom
  if (force) {
    set_dom_from_storage([
      "age",
      "quartier",
      "contact_personnel",
      "personne_a_contacter",
      "adresse_professionnelle",
    ]);
  }
};

/**
 * set_dom_from_storage
 * Let's update each element in the DOM from localstorage
 */
set_dom_from_storage = (array_key) => {
  for (let i = 0; i < array_key.length; i++) {
    $("#" + array_key[i]).html(localStorage.getItem(array_key[i]));
  }
};

$.get("https://coapi.ngrok.io/questions?count=19", (a) => {
  questions = a;
  $(".total").html(questions.length + 1);
  $(".num").html(current + 1);

  prerequis_questions();
  set_dom_from_storage([
    "age",
    "quartier",
    "contact personnel",
    "personne à contacter",
    "adresse professionnelle",
  ]);

  startQuiz(current);
});

startQuiz = (id) => {
  let question = questions[id];

  let html = `
        <h4 class="h5 question">${question.question}</h4>
        <p class="text-center pt-4">
            <div class="form-group d-flex justify-content-around">
                `;

  for (let i = 0; i < question.choice.length; i++) {
    html += `<button class="btn btn-outline-primary rep r${
      i + 1
    } mr-4" style="min-width: 40% ;" onclick="reponse(${id}, ${i + 1})" >${
      question.choice[i]
    }</button>`;
  }
  html += `</div></p>`;
  $(".question-card-body").html(html);
};

reponse = (id, c) => {
  $(".question-card-body .btn").removeClass("btn-primary");
  $(".question-card-body .btn").addClass("btn-outline-primary");
  $(".question-card-body .btn.r" + c).removeClass("btn-outline-primary");
  $(".question-card-body .btn.r" + c).addClass("btn-primary");
  questions[id].rep = questions[id].choice[c - 1];
  $(".btn-next").removeClass("disabled");

  questionSuivante();
};

questionSuivante = () => {
  if (current + 1 == questions.length) {
    document.location.href = "?page=fin_diagnostique";
    localStorage.setItem("questionscovid19", JSON.stringify(questions));
  }
  if (questions[current].rep) {
    current++;
    $(".btn-next").addClass("disabled");
    $(".num").html(current + 1);
    startQuiz(current);
    let act = (current * 100) / questions.length;
    document.querySelector(".progress-bar").style.width = act + "%";
    document.querySelector(".progress-bar").setAttribute("aria-valuenow", act);
    startQuiz(current);
    localStorage.setItem("questionscovid19", JSON.stringify(questions));
  }
};

revenir = () => {
  if (current == 0) document.location.href = "?page=accueil";
  current--;
  $(".btn-next").addClass("disabled");
  $(".num").html(current + 1);
  startQuiz(current);
  let act = (current * 100) / questions.length;
  document.querySelector(".progress-bar").style.width = act + "%";
  document.querySelector(".progress-bar").setAttribute("aria-valuenow", act);
  startQuiz(current);
};
