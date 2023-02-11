


function validateForm(){
    const name = document.getElementById("name-product").value;
    const description = document.getElementById("description-product").value;
    const  price = document.getElementById("price-product").value;
    const url = document.getElementById("url").value;
    const typeOfProduct = document.getElementsByName("typeProduct").value;
    console.log(name, description, price, url,typeOfProduct);


    let image = document.getElementById("preImageProduct");

    image.setAttribute("src",url)

}