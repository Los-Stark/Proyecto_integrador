
/**
 * Clase para creacion de objetos y guardarlos en memoria local
 */
class Item {
    //Creacion de id y arreglo de productos
    constructor(startId = 0) {
        this.products = [];
        this.startId = startId;
    }
    //Funcion para instanciar objetos, agregarlos al array y guardarlos
    addProduct(name, description, src, price, type) {
        const product = {
            id: this.startId++,
            name: name,
            description: description,
            src: src,
            price: price,
            type: type

        };
        //Guarda en memoria local
        this.products.push(product);
        localStorage.setItem("Products", JSON.stringify(this.products));
    }
}

//Previsualizacion de imagen 
let urlImage = document.getElementById("url-image");
urlImage.addEventListener('input', () =>
    document.getElementById("preImageProduct")
        .setAttribute("src", urlImage.value));
//Constructor
const item = new Item(0);
/**
 * 
 * @returns la validacion de los datos del formulario e agregar productos
 */
function validateForm() {
    let url = document.getElementById("url-image").value;
    let name = document.getElementById("name-product").value;
    let description = document.getElementById("description-product").value;
    let price = document.getElementById("price-product").value;
    let typeOfProduct = document.getElementsByName("typeProduct");
    let type;

    let radioSelected = false;
    for (let i = 0; i < typeOfProduct.length; i++) {
        if (typeOfProduct[i].checked) {
            radioSelected = true;
            type = typeOfProduct[i].value;
            break;
        }
    }

    if (!url || !name || !description || !price || !radioSelected) {
        alert("No puede haber campos vacios");   
        return false
    }

    return item.addProduct(name, description, url, price, type),
    document.getElementById("productForm").reset(),
    document.getElementById("preImageProduct"). src="./assets/images/previsual.png",
    alert("El archivo se subio correctamente.");
    
}

    //document.getElementById("productForm").setAttribute("onsubmit", "return true");

    //Validaciones y alerts:
    //Condicional para verificar si se han llenado los campos de texto
    /*let textFieldsFilled = true;
    const textFields = document.querySelectorAll("input[type='text'], textarea");
    for (let i = 0; i < textFields.length; i++) {
        if (textFields[i].value.trim() === "") {
            textFieldsFilled = false;
            break;
        }
    }
    if (!textFieldsFilled) {
        alert("Por favor llene todos los campos correctamente.");
        return;
    }

    //Condicional para verificar si se ha seleccionado algún botón de radio
    let radioSelected = false;
    const radioButtons = document.querySelectorAll("input[type='radio']");
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            radioSelected = true;
            break;
        }
    }
    if (!radioSelected) {
        alert("Por favor seleccione un tipo de producto.");
        return;
    }
    
    //Obtencion de valor en radio button
    for (i = 0; i < typeOfProduct.length; i++) {
        if (typeOfProduct[i].checked)
            type = typeOfProduct[i].value;
    }
    if (name.length > 0 && description.length > 0 && price > 0 && url && type) {
        console.log(name, description, url, price, type);
        item.addProduct(name, description, url, price, type);
        //Simulacion visual de actualizacion y se ponne los inputs a 0
        
        document.getElementById("url-image").value="";
        document.getElementById("name-product").value="";
        document.getElementById("description-product").value="";
        document.getElementById("price-product").value="";
    }*/

