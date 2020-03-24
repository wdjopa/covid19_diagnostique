questionSuivante = () => {
    alert("Le questionnaire n'est pas encore terminé. Vous allez être rédirigé à la fin ")
    document.location.href="?page=fin_diagnostique"
};
let questions = [], current = 0;
$.get("https://coapi.ngrok.io/questions", (a) => {
    questions = a;
    // questions.splice(4,a.length-4)
    $(".total").html(questions.length+1);
    $(".num").html(current+1);
    let age = prompt("Veuillez entrer votre age : ");
    let poids = prompt("Veuillez entrer votre poids : ");
    let taille = prompt("Veuillez entrer votre taille (en cm) : ");
    localStorage.setItem("caracteristiques", JSON.stringify({age : age, poids : poids, taille : taille}))
    startQuiz(current)

});

startQuiz = (id)=>{
    let question = questions[id]

    let html = `
        <h4 class="h5 question">${question.question}</h4>
        <p class="text-center pt-4">
            <div class="form-group d-flex justify-content-around">
                `;
    
    for(let i=0;i<question.choice.length;i++){
        html += `<button class="btn btn-outline-primary rep r${i+1} mr-4" style="min-width: 40% ;" onclick="reponse(${id}, ${i+1})" >${question.choice[i]}</button>`;
    }
    html+=`</div></p>`
    $(".question-card-body").html(html);
}

reponse = (id, c)=>{
    $(".question-card-body .btn").removeClass("btn-primary");
    $(".question-card-body .btn").addClass("btn-outline-primary");
    $(".question-card-body .btn.r" + c).removeClass("btn-outline-primary");
    $(".question-card-body .btn.r" + c).addClass("btn-primary");
    questions[id].rep = questions[id].choice[c-1];
    $(".btn-next").removeClass("disabled");
}

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
        let act = current * 100 / questions.length ;
        document.querySelector(".progress-bar").style.width= act+"%";
        document.querySelector(".progress-bar").setAttribute("aria-valuenow", act);
        startQuiz(current);
        localStorage.setItem("questionscovid19", JSON.stringify(questions));
    }
};

revenir = ()=>{
    if(current == 0)
        document.location.href="?page=accueil"
     current--;
     $(".btn-next").addClass("disabled");
     $(".num").html(current +1);
     startQuiz(current);
     let act = (current * 100) / questions.length;
     document.querySelector(".progress-bar").style.width = act + "%";
     document.querySelector(".progress-bar").setAttribute("aria-valuenow", act);
     startQuiz(current);
}