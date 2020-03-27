
<!-- ============================================================== -->
<!-- main wrapper -->
<!-- ============================================================== -->
<div class="dashboard-main-wrapper">
    <?php include("inc/header.inc.php") ?>
    <?php include("inc/sidebar.inc.php") ?>
    <!-- ============================================================== -->
    <!-- wrapper  -->
    <!-- ============================================================== -->
    <div class="dashboard-wrapper">
        <div class="dashboard-ecommerce">
            <div class="container-fluid dashboard-content ">
 <!-- ============================================================== -->
                <!-- pageheader  -->
                <!-- ============================================================== -->
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="page-header">
                            <h2 class="pageheader-title">Questions</h2>
                            <p class="pageheader-text">Gérez les questions ici.</p>
                            <div class="page-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#" class="breadcrumb-link">Dashboard</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Questions</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- end pageheader  -->
                <!-- ============================================================== -->
                <div class="">
                     <div class="row">
                    <!-- ============================================================== -->
                    <!-- data table  -->
                    <!-- ============================================================== -->
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="mb-0">Liste des questions</h5>
                                <p>*</p>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="questions_table" class="table table-striped table-bordered" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th>Question</th>
                                                <th>Propositions</th>
                                                <th>Reponse </th>
                                                <th>Niveau dang.</th>
                                                <th>Langue</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                         <tfoot>
                                            <tr>
                                                <th>Question</th>
                                                <th>Propositions</th>
                                                <th>Reponse </th>
                                                <th>Niveau dang.</th>
                                                <th>Langue</th>
                                                <th>Actions</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ============================================================== -->
                    <!-- end data table  -->
                    <!-- ============================================================== -->
                </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="updateQuestion" tabindex="-1" role="dialog" aria-labelledby="updateQuestionLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="updateQuestionLabel">Mise à jour de la question</h5>
                <a href="#" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </a>
            </div>
            <div class="modal-body">
                <form action="#" method="post" name="questionAModifier">
                    <div class="form-group">
                        <label for="question" class="col-form-label">Intitulé de la question</label>
                        <textarea name="question" class="form-control" id="" cols="30" rows="3" placeholder="Votre question"></textarea>
                        <!-- <input id="question" type="text" name="question" class="form-control"> -->
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-6">
                                <label for="question" class="col-form-label">Niveau de dangérosité</label>
                                <select name="level"class="form-control" id="level">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div class="col-sm-6">
                                <label for="question" class="col-form-label">Langue</label>
                                <select name="lang" class="form-control"id="lang">
                                    <option value="fr">Français</option>
                                    <option value="en">English</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="question" class="col-form-label">Propositions</label>
                        <div class="row d-flex justify-content-around">
                            <label class="custom-control custom-checkbox prop1">
                                <input type="radio" name="reponse" checked="false" value="prop1" class="custom-control-input chk1"><span class="custom-control-label"><input id="prop1" type="text" class="form-control" name="prop1" placeholder="Premiere proposition"></span>
                            </label>
                            <label class="custom-control custom-checkbox prop2">
                                <input type="radio"name="reponse" value="prop2" class="custom-control-input chk2"><span class="custom-control-label"><input id="prop2" type="text" class="form-control"name="prop2"  placeholder="Seconde proposition"></span>
                            </label>
                        </div>
                        <small>Cochez la bonne réponse</small>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <a href="#" class="btn btn-light" data-dismiss="modal">Annuler</a>
                <a href="#" onclick="saveUpdate()" class="btn btn-primary">Valider</a>
            </div>
        </div>
    </div>
</div>