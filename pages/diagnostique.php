<div class="container">
    <div class="row m-1 mt-5">
        <div class="col-12">
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="h6 pt-3 text-center">
                Question <span class="num">5</span>/<span class="total">10</span>
            </div>
        </div>
    </div>
    <br>
    <div class="row d-flex justify-content-center ">
        <div class="col-11">
            <div class="card " style="box-shadow: 4px 4px 4px #888;">
                <div class="card-body">
                    <h4 class="h6 question">2. Avez vous ressenti des douleurs à la gorge ces derniers jours ?</h4>
                    <p class="text-center pt-4">
                        <form action="method" action="post">
                            <div class="form-group">
                                <input type="checkbox" class="form-checkbox" id="exampleInputEmail1" aria-describedby="emailHelp">
                                <label for="exampleInputEmail1">Oui</label>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" class="form-checkbox" id="exampleInputEmail1" aria-describedby="emailHelp">
                                <label for="exampleInputEmail1">Non</label>
                            </div>
                        </form>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="row d-flex justify-content-center mt-2">
        <div class="col-11  d-flex justify-content-between mt-4 text-uppercase">
            <a href="?page=accueil" class="btn pt-2 pb-2  mr-2 w-50 btn-rounded btn-info">Annuler</a>
            <a href="#!" onclick="questionSuivante()" class="btn pt-2 pb-2  w-50 ml-2 btn-rounded btn-primary">Continer</a>
        </div>
    </div>
</div>
