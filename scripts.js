document.addEventListener("DOMContentLoaded", function () {
    const mensagemInput = document.getElementById("mensagem");
    const contador = document.getElementById("contador-mensagem");

    mensagemInput.addEventListener("input", function () {
        const atual = mensagemInput.value.length;
        contador.textContent = atual;
    });

    contador.textContent = mensagemInput.value.length;

    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("focus", function () {
            this.classList.remove("erro-input");
            this.style.borderColor = "blue";

            const erroMsg = document.getElementById(`erro-${this.id}`);
            if (erroMsg) {
                erroMsg.style.display = "none";
            }
        });

        input.addEventListener("blur", function () {
            const erroMsg = document.getElementById(`erro-${this.id}`);

            if (this.value.trim() === "") {
                this.classList.add("erro-input");
                this.style.borderColor = "red";

                if (erroMsg) {
                    erroMsg.textContent = "Campo não pode estar vazio";
                    erroMsg.style.display = "block";
                }
            } else {
                this.classList.remove("erro-input");
                this.style.borderColor = "green";

                if (erroMsg) {
                    erroMsg.style.display = "none";
                }
            }
        });
    });

    const formulario = document.getElementById("meu-formulario");
    if (formulario) {
        formulario.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Formulário enviado com sucesso!");
        });
    }
});
