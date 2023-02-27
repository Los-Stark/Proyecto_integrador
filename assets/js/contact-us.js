const formulario = document.getElementById('registration');
const inputs= document.querySelectorAll('#registration input');
//Expresiones para formulario
const expresiones = {
	//usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{10}$/, // 7 a 14 numeros.
    message: /^[a-zA-ZÀ-ÿ\s]{1,1000}$/
}
//Incializacion de campos
const campos ={
    name:false,
    email:false,
    phone:false,
    message:false,
}


/**
 * 
 * @param {*} e Funcion que evalua si la expresion coindide con el texto introducido
 */
const validarFormulario=(e)=>{
   switch(e.target.name){
    case "name":
        validarCampo(expresiones.name,e.target,'name');
    break
    case "email":
        validarCampo(expresiones.email,e.target,'email');
    break
    case "phone":
        validarCampo(expresiones.phone,e.target,'phone');
    break
    case "message":
        validarCampo(expresiones.message,e.target,'message');
    break
   }

}
/**
 * 
 * @param {*} expresion Valores correctos para que el campo sea true
 * @param {*} input El valor introducido por el usuario
 * @param {*} campo Valor para poder mostrar en el html el lugar exacto donde tuvo el error
 */
const validarCampo=(expresion,input, campo)=>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo]=true;
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo]=false;
    }
}

/**
 * Evalua cada una de los inputs y llama las funciones de validarformulario
 */
inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});
/**
 * Funcion llamada por el boton de submit, con las disitintas evaluaciones previas
 */
  formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(campos.name && campos.email && campos.phone && campos.message){
        //document.getElementById("registration").setAttribute("onsubmit", "return true")
        swal({
            title: "Enviado correctamente!",
            icon: "success",
            button: "Ok",
          });
        formulario.submit();
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
    }else if(!name || !email || !phone || !message){ 
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
    return false;}
        
    
});


