console.log("Hola!!...");



function validateForm() {

    // Obtener valores de los campos de formulario

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    // Validar tipos de entrada
    if (!name || !email || !phone || !message) {
        alert("Todos los campos son obligatorios");
        return false;
    }

    // Validar correo electrónico
    let emailPattern = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    if (!email.match(emailPattern)) {
    alert("El correo electrónico no es válido");
    return false;
}

// Validar telefono
    if (phone.length < 10) {
    alert("El numero telefonico debe tener al menos 10 digitos");
    return false;
}

// Validar mensaje
    if (message.length < 20) {
        alert("El mensaje debe ser mayor a 20 caracteres");
        return false;
    }


// Enviar formulario
return console.log(name, email, phone, message);
}