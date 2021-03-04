$(document).ready(function () {

    $(window).bind("beforeunload", function () {
        carregaLoading();
    });

    let linkAtivo = "";
    $(".nav-item a").each(function () {
        let url = window.location.href;
        if (url === $(this).attr("href")) {
            linkAtivo = $(this).parent().addClass("active");
        } else {
            if (url.indexOf($(this).attr("href")) !== -1 && linkAtivo !== "") {
                return $(this).parent().addClass("active");
            }
        }
    });

    $(document).on("click", ".btn-cancelar-agendamento", function (e) {
        e.preventDefault();
        let link = $(this).attr("href");
        $("#my-modal").modal();
        $("#my-modal .modal").addClass("modal-agenda");
        $("#my-modal .modal-header").addClass("modal-header-agenda");
        $("#my-modal .modal-dialog").addClass("agenda-modal-dialog");
        $("#my-modal .modal-content").addClass("modal-content-agenda");
        $("#my-modal .modal-title").addClass("modal-title-agenda");
        $("#my-modal .modal-footer").addClass("modal-footer-agenda");
        $("#my-modal .close").addClass("close-agenda");
        $("#my-modal .modal-title").html("Você deseja cancelar seu treino ?").addClass("modal-title-agenda py-3 px-5");
        $("#my-modal .modal-body").html("" +
            "<img class='alert-modal mt-2' src= " + window.location.origin + "/mobile/images/alert-circle.png>" +
            "<p class='text-center my-4'>" +
            "Caso continue, seu horário antigo com esse professor irá ser liberado e outras pessoas podem ocupa-lo." +
            "</p>").addClass("modal-body-agenda");
        $(".modal-footer").html("<div class='col-12 py-3'>" +
            "<div class='row d-flex justify-content-center'>" +
            "<div class='col-6'>" +
            "<button type='submit' class='btn-login' data-dismiss='modal'>" +
            "NÃO" +
            "</button>" +
            "</div>" +
            "<div class='col-6'>" +
            "<button type='submit' class='btn-cancela-treino btn-login-outline '>" +
            "SIM" +
            "</button>" +
            "</div>" +
            "</div>" +
            "</div>").addClass("modal-footer-agenda");

        $(document).on("click", ".btn-cancela-treino", function (e) {
            e.preventDefault;
            $(this).attr("disabled", "disabled");
            $("#my-modal").fadeToggle(500);
            window.location = link;
        });
    });

    $ (document).ready (function () {
        $ (".modal-menu a").not (".dropdown-toggle").on ("click", function () {
            $ (".modal-menu").modal ("hide");
        });
    });
    $(document).on("click", ".btn-step-1", function () {
        $(".btn-route-home").addClass("d-none");
        $(".btn-voltar-step").removeClass("d-none");

    });

    $(document).on("click", ".btn-voltar-step", function () {
        if(!$("[data-step='step-2']").hasClass("d-none")){
            $("[data-step='step-2']").addClass("d-none");
            $("[data-step='step-1']").removeClass("d-none");
            $(".progress-2").removeClass("active");
            $(".btn-route-home").removeClass("d-none");
            $(".btn-voltar-step").addClass("d-none");
        }
        if(!$("[data-step='step-3']").hasClass("d-none")){
            $("[data-step='step-3']").addClass("d-none");
            $("[data-step='step-2']").removeClass("d-none");
            $(".progress-2").removeClass("active");
        }
        return false
    });

});

function validateCartao(e) {
    let valor = $(e).val().split("/");
    if (valor.length === 2) {
        if (valor[0] < 0 || valor[0] > 12 || valor[0].length < 2) {
            $(".btn-remove").attr("disabled", true).addClass("disable");
        }
    } else {
        $(".btn-remove").attr("disabled", true).addClass("disable");
    }
}
