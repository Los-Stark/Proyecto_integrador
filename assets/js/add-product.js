
class Item{

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

        localStorage.setItem("Products",JSON.stringify(this.products));
    }
}

const item = new Item(0);
function validateForm(){
    
    const name = document.getElementById("name-product").value;
    const description = document.getElementById("description-product").value;
    const  price = document.getElementById("price-product").value;
    const url = document.getElementById("url").value;
    const typeOfProduct = document.getElementsByName("typeProduct");
        for(i = 0; i < typeOfProduct.length; i++) {
            if(typeOfProduct[i].checked)console.log(typeOfProduct[i].value);
        }
    

    console.log(name, description, price, url,typeOfProduct);

    let image = document.getElementById("preImageProduct");

    image.setAttribute("src",url);
    
    item.addProduct(name,description,url,price);

}