document.getElementById("btn-register").addEventListener("click", register);
document.getElementById("btn-login").addEventListener("click", iniciarSesion);
window.addEventListener("resize", pageWidth);

//Declarando variables
const contenedorLoginRegister = document.querySelector(".contenedor-login-register");
const formLogin = document.querySelector(".form-login");
const formRegister = document.querySelector(".form-register");
const backBoxLogin = document.querySelector(".back-box-login");
const backBoxRegister = document.querySelector(".back-box-register");

function pageWidth() {
    if (window.innerWidth > 768) {
        backBoxLogin.style.display = "block";
        backBoxRegister.style.display = "block";
    }
    else {
        backBoxRegister.style.display = "block";
        backBoxRegister.style.opacity = "1";
        backBoxLogin.style.display = "none";
        formLogin.style.display = "block";
        contenedorLoginRegister.style.left = "0px";
        formRegister.style.display = "none";

    }
}
pageWidth();
function iniciarSesion() {
    if (window.innerWidth > 768) {
        formLogin.style.display = "block";
        contenedorLoginRegister.style.left = "0px";
        formRegister.style.display = "none";
        backBoxRegister.style.opacity = "1";
        backBoxLogin.style.opacity = "0";
    }
    else {
        formLogin.style.display = "block";
        contenedorLoginRegister.style.left = "0px";
        formRegister.style.display = "none";
        backBoxRegister.style.display = "block";
        backBoxLogin.style.display = "none";
    }

}

function register() {
    if (window.innerWidth > 768) {
        formRegister.style.display = "block";
        contenedorLoginRegister.style.left = "350px";
        formLogin.style.display = "none";
        backBoxRegister.style.opacity = "0";
        backBoxLogin.style.opacity = "1";
    }
    else {
        formRegister.style.display = "block";
        contenedorLoginRegister.style.left = "0px";
        formLogin.style.display = "none";
        backBoxRegister.style.display = "none";
        backBoxLogin.style.display = "block";
        backBoxLogin.style.opacity = "1";

    }

}