function validateForm() {

    // Obtener valores de los campos de formulario

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    let emailPattern = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

    //código para personalizar el mensaje del required

    let selectname = document.getElementById('name');
    selectname.addEventListener('change', function (evt) {
        this.setCustomValidity('');
    });
    selectname.addEventListener('invalid', function (evt) {
        // Required
        if (this.validity.valueMissing) {
            this.setCustomValidity('Por favor introduce tu nombre');
        }
    });

    // Validar correo electrónico

    if (!email.match(emailPattern)) {
        let selectemail = document.getElementById('email');
        selectemail.addEventListener('change', function (evt) {
            this.setCustomValidity('');
        });
        selectemail.addEventListener('invalid', function (evt) {
            // Required
            if (this.validity.valueMissing) {
                this.setCustomValidity('Introducir un email válido');
            }
        });
        return false;
    }

    // Validar telefono

    if (phone.length != 10) {
        let selectphone = document.getElementById('phone');
        selectphone.addEventListener('change', function (evt) {
            this.setCustomValidity('');
        });
        selectphone.addEventListener('invalid', function (evt) {
            // Required
            if (this.validity.valueMissing) {
                this.setCustomValidity('El número debe tener 10 dígitos');
            }
        });
        return false;
    }


    // Validar mensaje
    if (message.length <= 20) {
        let selectmessage = document.getElementById('message');
        selectmessage.addEventListener('change', function (evt) {
            this.setCustomValidity('');
        });
        selectmessage.addEventListener('invalid', function (evt) {
            // Required
            if (this.validity.valueMissing) {
                this.setCustomValidity('El mensaje debe contener mínimo 20 caracteres');
            }

        });
        return false;
    }

    // Enviar formulario

    return document.getElementById("registration").setAttribute("onsubmit", "retun true"),
    alert("Enviado correctamente");
}
