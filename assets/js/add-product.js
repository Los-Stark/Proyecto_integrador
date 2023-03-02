
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
        swal({
            title: "No puede haber campos vacios",
            icon: "warning",
            button: "Ok",
          });
        return false
    }

    return item.addProduct(name, description, url, price, type),
    document.getElementById("productForm").reset(),
    document.getElementById("preImageProduct"). src="./assets/images/previsual.png",
    swal({
        title: "El producto se registro correctamente",
        icon: "success",
        button: "Ok",
      });
    
}
