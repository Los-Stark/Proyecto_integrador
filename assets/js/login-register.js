document.getElementById("btn-register").addEventListener("click", register);
document.getElementById("btn-login").addEventListener("click", iniciarSesion);
window.addEventListener("resize", pageWidth);

//Declarando variables
const contenedorLoginRegister = document.querySelector(".contenedor-login-register");
const formLogin = document.querySelector(".form-login");
const formRegister = document.querySelector(".form-register");
const backBoxLogin = document.querySelector(".back-box-login");
const backBoxRegister = document.querySelector(".back-box-register");
var pressKey = 0;
function pageWidth() {
    if (window.innerWidth > 768) {
        backBoxLogin.style.display = "block";
        backBoxRegister.style.display = "block";
        pressKey = 0
    }
    else if (pressKey != 1) {
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

function abrirTeclado() {
    //document.documentElement.style.scrollBehavior = "smooth"; // Animaci??n
    //document.documentElement.scrollTop = 0; // Desplazamiento
    pressKey = 1;
}

/********************* Funcion para registrar****************************/


//Clase para creacion de objetos y guardarlos en memoria local*****
/* 
class Item {
    //Creacion de id
    constructor(startId = 1) {
        this.listUsers = [];
        this.startId = startId;
    }
    //Funcion para instanciar objetos, agregarlos al array y guardarlos
    addNewUsers(name, user, phone, email, password, confirmPassword) {
        const users = {
            id: this.startId++,
            name: name,
            user: user,
            phone: phone,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };

        this.listUsers.push(users);

        localStorage.setItem("listUsers", JSON.stringify(this.listUsers));
    }
}

const item = new Item(1); */


// Validacion de campos

const formAddUser = document.getElementById('form-register');
const inputsAddUser = document.querySelectorAll('#form-register input');
const formLoginUser = document.getElementById('form-login')
const inputsLoginUser = document.querySelectorAll('#form-login input');

const expressions = {
    name: /^[a-zA-Z??-??\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    phone: /^\d{10}$/, // 7 a 14 numeros.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
}

const fields = {
    name: false,
    user: false,
    phone: false,
    email: false,
    password: false
}

const validateForm = (e) => {
    switch (e.target.name) {
        case "name":
            validateField(expressions.name, e.target, 'name');
            break
        case "user":
            validateField(expressions.user, e.target, 'user');
            break
        case "phone":
            validateField(expressions.phone, e.target, 'phone');
            break
        case "email":
            validateField(expressions.email, e.target, 'email');
            break
        case "password":
            validatePassword()
            validateField(expressions.password, e.target, 'password');
            break
        case "confirmPassword":
            validatePassword();
            break
    }
}

const validateField = (expression, input, field) => {
    if (expression.test(input.value)) {
        document.getElementById(`grupo__${field}`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${field} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        fields[field] = true;
    } else {
        document.getElementById(`grupo__${field}`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${field} .formulario__input-error`).classList.add('formulario__input-error-activo');
        fields[field] = false;
    }
}

//validar que la contrase??a sea correcta
const validatePassword = () => {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    if (password.value !== confirmPassword.value) {
        document.getElementById(`grupo__confirmPassword`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__confirmPassword .formulario__input-error`).classList.add('formulario__input-error-activo');
        fields['password'] = false;
    } else {
        document.getElementById(`grupo__confirmPassword`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__confirmPassword .formulario__input-error`).classList.remove('formulario__input-error-activo');
        fields['password'] = true;
    }

}

inputsAddUser.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});

formAddUser.addEventListener('submit', (e) => {
    e.preventDefault();

    if (fields.name && fields.user && fields.phone && fields.email && fields.password) {
/*         item.addNewUsers(formAddUser.name.value, formAddUser.user.value, formAddUser.phone.value, formAddUser.email.value, formAddUser.password.value),
            formAddUser.reset(); */
        swal({
            title: "Registrado correctamente!",
            icon: "success",
            button: "Ok",
        });
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        const data = {
            name: formAddUser.name.value,
            userName: formAddUser.user.value,
            phone: formAddUser.phone.value,
            email: formAddUser.email.value,
            password: formAddUser.password.value
        };
        saveNewUsers(data);
        formAddUser.reset(); 
    } else {
        (!fields.name && !fields.user && !fields.phone && !fields.email && !fields.password)
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
        return false;
    }
});

//formulario iniciar sesion

formLoginUser.addEventListener('submit', (e) => {
    e.preventDefault();
    // Obtener los valores de los campos de entrada
    let username = document.getElementById('user-login').value;
    let password = document.getElementById('password-login').value;
    let error = true;
    function getUsers() {
        const url = `https://backendproyecto-production.up.railway.app/api/users`;
    
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(userObj => {
                for (let index = 0; index < userObj.length; index++) {
                    if (userObj[index].userName == username && userObj[index].password == password) {
                        error = false;
                        formLoginUser.reset();
                        swal({
                            title: `Bienvenido ${username}`,
                            icon: "success",
                            button: "Ok",
                        });
                        const userActive = {
                            iduser: userObj[index].idUsuario,
                            username: userObj[index].userName
                        };
                        localStorage.setItem("userActive", JSON.stringify(userActive));
                        break;
                    }
                }
                if (error) {
                    swal({
                        title: "Nombre de usuario o contrase??a incorrectos.",
                        icon: "warning",
                        text: "Int??ntalo de nuevo.",
                        button: "Ok",
                    });
                }
    
            })
            .catch(error => console.log("Error " + error));
    }
    getUsers(); 

});



function saveNewUsers(data){
    const url = 'https://backendproyecto-production.up.railway.app/api/users';
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => console.log())
        .catch(error => console.error('Error:', error));

}; 
