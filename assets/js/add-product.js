
/**
 * Clase para creacion de objetos y guardarlos en memoria local
 */
class Item {
    //Creacion de id
    constructor(startId = 0) {
        this.products = [];
        this.startId = startId;
    }
    //Funcion para instanciar objetos, agregarlos al array y guardarlos
    addProduct(name, description, src, price,type) {
        const product = {
            id: this.startId++,
            name: name,
            description: description,
            src: src,
            price: price,
            type: type

        };

        this.products.push(product);

        localStorage.setItem("Products", JSON.stringify(this.products));
    }
}

//Previsualizacion de imagen
const urlImage = document.getElementById("url-image");
urlImage.addEventListener('input',  ()=>
document.getElementById("preImageProduct")
.setAttribute("src", urlImage.value));
//Constructor
const item = new Item(0);

function validateForm() {
    let url = document.getElementById("url-image").value;
    let name = document.getElementById("name-product").value;
    let description = document.getElementById("description-product").value;
    let price = document.getElementById("price-product").value;
    let typeOfProduct = document.getElementsByName("typeProduct");
    let type;
    //Obtencion de valor en radio button
    for (i = 0; i < typeOfProduct.length; i++) {
        if (typeOfProduct[i].checked)
            type = typeOfProduct[i].value;
    }
    if(name.length>0 && description.length>15 && price>100 && url && type)
    {
    console.log(name, description,url, price, type);
    item.addProduct(name, description, url, price,type);
    //Simulacion visual de actualizacion y se ponne los inputs a 0
    document.getElementById('productForm').reset();
    }

    //Validaciones y alerts:
}
