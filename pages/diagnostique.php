<div class="container">
    <div class="row m-1 mt-5">
        <div class="col-12">
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="h6 pt-3 text-center">
                Question <span class="num">0</span>/<span class="total">0</span>
            </div>
        </div>
    </div>
    <br>
    <div class="row d-flex justify-content-center ">
        <div class="col-11">
            <div class="card question-card" style="box-shadow: 4px 4px 4px #888;">
                <div class="card-body  question-card-body">
                   <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:transparent;display:block;" width="114px" height="114px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <circle cx="84" cy="50" r="2.5221" fill="#fed616">
                            <animate attributeName="r" repeatCount="indefinite" dur="0.5434782608695652s" calcMode="spline" keyTimes="0;1" values="13;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>
                            <animate attributeName="fill" repeatCount="indefinite" dur="2.1739130434782608s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#fed616;#44bdd1;#75c916;#10be0e;#fed616" begin="0s"></animate>
                        </circle>
                        <circle cx="43.4035" cy="50" r="13" fill="#fed616">
                            <animate attributeName="r" repeatCount="indefinite" dur="2.1739130434782608s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;13;13;13" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
                            <animate attributeName="cx" repeatCount="indefinite" dur="2.1739130434782608s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
                        </circle>
                        <circle cx="77.4035" cy="50" r="13" fill="#10be0e">
                            <animate attributeName="r" repeatCount="indefinite" dur="2.1739130434782608s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;13;13;13" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5434782608695652s"></animate>
                            <animate attributeName="cx" repeatCount="indefinite" dur="2.1739130434782608s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5434782608695652s"></animate>
                        </circle>
                        <circle cx="16" cy="50" r="0" fill="#75c916">
                            <animate attributeName="r" repeatCount="indefinite" dur="2.1739130434782608s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;13;13;13" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.0869565217391304s"></animate>
                            <animate attributeName="cx" repeatCount="indefinite" dur="2.1739130434782608s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.0869565217391304s"></animate>
                        </circle>
                        <circle cx="16" cy="50" r="10.4778" fill="#44bdd1">
                            <animate attributeName="r" repeatCount="indefinite" dur="2.1739130434782608s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;13;13;13" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.6304347826086956s"></animate>
                            <animate attributeName="cx" repeatCount="indefinite" dur="2.1739130434782608s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.6304347826086956s"></animate>
                        </circle>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div class="row d-flex justify-content-center mt-2">
        <div class="col-11  d-flex justify-content-between mt-4 text-uppercase">
            <a href="#!" onclick="revenir()"  class="btn pt-2 pb-2 mr-2 w-100 btn-rounded btn-danger">Annuler</a>
            <!-- <a href="#!" onclick="questionSuivante()"  class="btn pt-2 pb-2  disabled btn-next w-50 ml-2 btn-rounded btn-primary">Continer</a> -->
        </div>
        <div class="col-11 justify-content-between mt-4 text-uppercase" style="font-size: 13px;" id="prerequis_div">
            <center>
                Age: <b id="age">--</b>ans, Quartier: <b id="quartier">--</b>, Tel: <b id="contact_personnel">--</b>.
            </center>
            <b id="adresse_professionnelle" style="display: none">--</b>
            <b id="personne_a_contacter" style="display: none">--</b>
            <br/>
            <button onclick="prerequis_questions(true)" class="btn pt-2 pb-2 mr-2 w-100 btn-rounded btn-primary">CHANGER MES INFORMATIONS</button>
        </div>
    </div>

</div>

<!-- Modal -->
<div class="modal fade" style="z-index: 10000000000000000000" id="datasModal" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Informations</h5>
        <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> -->
      </div>
      <form id="dataForm">
        <div class="modal-body">
            <h5>
                Pour pouvoir effectuer ce test, nous aurons besoin de quelques informations
            </h5>
            <small id="emailHelp" class="form-text text-muted">Vos informations ne seront partagées avec personne.</small>
            <br>
            <br>
            <div class="form-group">
                <label for="noms_form">Noms & Prenoms</label>
                <input type="text" class="form-control" id="noms_form" name="noms" placeholder="Ex : Martin FOTSA" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
                <label for="age_form">Âge*</label>
                <input type="number" min="1" max="120" class="form-control" placeholder="35" required id="age_form" name="age">
            </div>

            <div class="form-group">
                <label for="quartier_form">Quartier - Ville *</label>
                <input type="text" class="form-control" required placeholder="Ex : Biyem-Assi - Yaoundé" id="quartier_form" name="quartier">
            </div>
            <div class="form-group">
                <label for="contact_personnel_form">Tel personnel*</label>
                <input type="tel" class="form-control" required id="contact_personnel_form" placeholder="Ex : +237 6 55 55 55 55"  name="contact_personnel">
            </div>

            <div class="form-group">
                <label for="adresse_professionnelle_form">Adresse professionnelle*</label>
                <input type="text" class="form-control" placeholder="Ex : Ecole des postes - Yaoundé" required id="adresse_professionnelle_form" name="adresse_professionnelle">
            </div>

            <div class="form-group">
                <label for="personne_a_contacter_form">Personne à contacter *</label>
                <input type="text" class="form-control" required id="personne_a_contacter_form" placeholder="Ex : Mme FOTSA 699 99 99 99" name="personne_a_contacter">
            </div>
            <small>(*) : Champs obligatoires</small>
        </div>
        <div class="modal-footer">
            <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
            <button type="submit" class="btn btn-primary">Enregistrer</button>
        </div>
        </form>
    </div>
  </div>
</div>
