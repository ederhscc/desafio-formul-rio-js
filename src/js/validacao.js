const form = document.querySelector("#form"),
    inputName = document.querySelector("#nome"),
    inputEmail = document.querySelector("#email"),
    inputTel = document.querySelector("#tel"),
    inputMensage = document.querySelector("#msg"),
    labels = document.querySelectorAll(".label");

form.addEventListener("submit", function (event) {
    // para validar antes de enviar
    event.preventDefault();

    // Verifica se o nome está vazio
    if (inputName.value === "") {
        inputName.classList.add("nao-validado");
        labels[0].classList.add("campo-obrigatorio");
        return;
    } else {
        removeNaoValidadoECampoObrigatorio();
    }

    // Verifica se o email está preenchido e se é válido
    if (inputEmail.value === "") {
        inputEmail.classList.add("nao-validado");
        labels[1].classList.add("campo-obrigatorio");
        return;

    } else if (inputEmail.value !== "" && !emailEValido(inputEmail.value)) {
        alert('Este email não é válido!');
        inputEmail.classList.add("nao-validado");
        return;
    } else {
        removeNaoValidadoECampoObrigatorio();
    }

    // Verifica se o telefone está preenchido
    if (inputTel.value === "") {
        inputTel.classList.add("nao-validado");
        labels[2].classList.add("campo-obrigatorio");
        return;

    } else if (inputTel.value !== "" && !validacaoTelefone(inputTel.value, 9)) {
        inputTel.classList.add("nao-validado");
        alert('O telefone tem que ter 9 digitos no mínimo!');
        return;
    } else {
        removeNaoValidadoECampoObrigatorio();
    }

    // Verifica se o campo da mensagem está vazio
    if (inputMensage.value === "") {
        inputMensage.classList.add("texto-nao-validado");
        labels[3].classList.add("campo-obrigatorio-texto");
        return;
    } else {
        inputMensage.classList.remove("texto-nao-validado");
        labels[3].classList.remove("campo-obrigatorio-texto");
        
    }

    // Se todos os campos estiverem preenchidos, então envia o form
    form.submit();
});

nomePreenchido();
emailPreenchido();
telefonePreenchido();
mensagemPreenchida();

function removeNaoValidadoECampoObrigatorio() {
    const naoValidado = document.querySelectorAll(".nao-validado"),
        campoObrigatorio = document.querySelectorAll(".campo-obrigatorio");

    if (naoValidado) {
        naoValidado.forEach((element) => {
            element.classList.remove("nao-validado");
        });
    }

    if (campoObrigatorio) {
        campoObrigatorio.forEach((element) => {
            element.classList.remove("campo-obrigatorio");
        });
        
    }
    return;
}

function nomePreenchido() {
    inputName.addEventListener("change", function () {
        if (inputName.value !== "") {
            inputName.classList.add("validado");
            return;
        }
    });
}

function emailEValido(email) {
    // Cria uma regex para validar email (usuario123@host.com.br)
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;

}

function emailPreenchido() {
    inputEmail.addEventListener("change", function () {
        if (inputEmail.value !== "") {
            inputEmail.classList.add("validado");
            return;
        }
    });
}

function validacaoTelefone(telefone, minDigitos) {
    if (telefone.length >= minDigitos) {
        return true;
    }
    return false;
}

function telefonePreenchido() {
    inputTel.addEventListener("change", function () {
        if (inputTel.value !== "") {
            inputTel.classList.add("validado");
            return;
        }
    });
}

function mensagemPreenchida() {
    inputMensage.addEventListener("change", function () {
        if (inputMensage.value !== "") {
            inputMensage.classList.add("validado");
            return;
        }
    });
}
