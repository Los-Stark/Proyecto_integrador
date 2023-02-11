
class Item {

    constructor(startId = 0) {
        this.products = [];
        this.startId = startId;
    }

    addProduct(name, description, src, price) {
        const product = {
            id: this.startId++,
            name: name,
            description: description,
            src: src,
            price: price

        };

        this.products.push(product);

        localStorage.setItem("Products", JSON.stringify(this.products));
    }
}


const urlImage = document.getElementById("url");
urlImage.addEventListener('input',  ()=>
document.getElementById("preImageProduct")
.setAttribute("src", urlImage.value));


function validateForm() {
    const url = document.getElementById("url").value;
    const item = new Item(0);
    const name = document.getElementById("name-product").value;
    const description = document.getElementById("description-product").value;
    const price = document.getElementById("price-product").value;
    const typeOfProduct = document.getElementsByName("typeProduct");

    let type;
    for (i = 0; i < typeOfProduct.length; i++) {
        if (typeOfProduct[i].checked)
            type = typeOfProduct[i].value;
    }


    console.log(name, description, price, url, type);

    let image = document.getElementById("preImageProduct");

    image.setAttribute("src", url);

    item.addProduct(name, description, url, price);

}
