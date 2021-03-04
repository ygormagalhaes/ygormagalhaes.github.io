function carregaLoading() {
    $("#modal-loading").modal({backdrop: "static", keyboard: false});
}

function ocultaLoading() {
    setTimeout(function () {
        $("#modal-loading").modal("hide");
    }, 500);
    return true;
}
