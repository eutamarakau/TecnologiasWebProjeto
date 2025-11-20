// JS para o formulário de login
document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById("formLogin");

    formLogin.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Login realizado com sucesso! ");

        // Redirecionar depois de 1 segundo
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    });
});