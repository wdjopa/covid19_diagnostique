$("#login-form").submit(function(event) {
  $(".error-card").addClass("d-none");
  event.preventDefault();
  $(".btn").addClass("disabled");
  let data = {
    username: $("#username").val(),
    password: $("#password").val()
  };

  console.log(data);
  $.ajax({
    headers: {
      //   Accept: "*/*",
      "Content-Type": "application/json"
    },
    url: "https://coapi.ngrok.io/auth",
    type: "POST",
    data: JSON.stringify(data),
    dataType: "json",

    success: function(result, statut) {
      if (result.status == "success") {
        localStorage.setItem("covid19_admin", JSON.stringify(result));
        document.location.href="?page=questions"
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
});
