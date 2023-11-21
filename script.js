function validar_form_contato() {
    var nome = formcontato.nome.value;
    var email = formcontato.email.value;
    var mensagem = formcontato.mensagem.value;

    if (nome == "") {
        alert("Campo nome é obrigatório");
        formcontato.nome.focus();
        return false;
    }
    if (email == "") {
        alert("Campo email é obrigatório");
        formcontato.email.focus();
        return false;
    }
    if (mensagem == "") {
        alert("Campo mensagem é obrigatório");
        formcontato.mensagem.focus();
        return false;
    }
}