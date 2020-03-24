$(document).ready(function() {
  $.get("https://coapi.ngrok.io/questions?count=10").then(a => {
    let questions = {
      data: [...a]
    };
    console.log(questions)
    $("#questions_table").DataTable({
      ajax:questions,
       lengthChange: false,
                buttons: ['copy', 'excel', 'pdf', 'print', 'colvis'],
      columns: [
        { data: "id" },
        { data: "question" },
        { data: "choice[,]" },
        { data: "answer" },
        { data: "level" },
        { data: "lang" }
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
