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
        <div class="col-11 justify-content-between mt-4 text-uppercase" style="position: fixed; bottom: 0px;font-size: 13px;" id="prerequis_div">
            <center>
                Age: <b id="age">--</b>ans, Quartier: <b id="quartier">--</b>, Tel: <b id="contact_personnel">--</b>.
            </center>
            <b id="adresse_professionnelle" style="display: none">--</b>
            <b id="personne_a_contacter" style="display: none">--</b>
            <br/>
            <button onclick="prerequis_questions(true)" class="btn pt-2 pb-2 mr-2 w-100 btn-rounded btn-primary">CHANGER</button>
        </div>
    </div>

</div>
