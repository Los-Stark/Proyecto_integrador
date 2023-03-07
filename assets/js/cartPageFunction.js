let ProductsOfCart = JSON.parse(localStorage.getItem("ProductsToCart"));
/**
 * Funcion para mostrar productos en el carrito
 */
function addItemToCart() {
  if (!Object.is(null, ProductsOfCart)){
  for (let index = 0; index < ProductsOfCart.length; index++) {
    // Crea un elemento de carrito
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    const cartContents = `
    <div class="row align-items-center my-1"> <!-- columnas propocionales -->
    <img id="image-product" class="col image-fluid  col-8  col-sm-8 col-lg-3 " src="${ProductsOfCart[index].image}" alt="${ProductsOfCart[index].title}">
    <div class="col product-name                    col-4  col-sm-4 col-lg-2 ">${ProductsOfCart[index].title}</div>
    <div class="col product-price                   col-4  col-sm-4 col-lg-2 ">${ProductsOfCart[index].price}</div>
    <div class="col product-size                    col-4  col-sm-4 col-lg-2 ">${ProductsOfCart[index].size}</div>
    <button class="col remove-item                  col-4  col-sm-4 col-lg-3 " value="${ProductsOfCart[index].order}">
    <img  src="assets/images/icons-waste.png" alt="borrar-producto"></button>
    </div>
    `;
    cartItem.innerHTML = cartContents;
    // Se agrega el elemento al contenedor del carrito
    document.querySelector(".panel-products").appendChild(cartItem);
  }
  //Calculando precio total ymostrarlo
  prices();
}
  // Se agrega un controlador de eventos para el botón "Eliminar"
  const removeButtons = document.querySelectorAll('.remove-item');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeItem);
  });
}

/**
 * Funcion que muestra en documento la suma de los precios
 */
const prices = () => {
  let subtotalPrice = 0;
  for (let index = 0; index < ProductsOfCart.length; index++) {
    subtotalPrice += parseInt(ProductsOfCart[index].price.replace('$', ""));
  }
  document.querySelector('.subtotal').innerText = `$${subtotalPrice}`;
  document.querySelector('.shippingPrice').innerText = `$${subtotalPrice * 0.05}`;
  document.querySelector('.total').innerText = `$${subtotalPrice * 1.05}`;
}

/**
 * 
 * @param {*} event Funcion llamada al hacer click de borrar elemento
 * Borra de la memoria local y la vuelve a guardar, ademas llama a la funcion precios
 * para mostrarlos
 */
function removeItem(event) {
  let buttonClicked = event.target;
  if (Object.is(null, buttonClicked.getAttribute("value")))
    buttonClicked = buttonClicked.parentNode;
  for (let index = 0; index < ProductsOfCart.length; index++) {
    if (ProductsOfCart[index].order == buttonClicked.value) {
      ProductsOfCart.splice(index, 1);
    }
  }
  prices();
  localStorage.setItem("ProductsToCart", JSON.stringify(ProductsOfCart))
  buttonClicked.parentNode.parentNode.remove();
  itemsToCart.updateCartItems();
}
//Llamada de la funcion
addItemToCart();

function buying() {
  dataProducts = JSON.parse(localStorage.getItem("ProductsToCart"));
  dataUserActive = JSON.parse(localStorage.getItem("userActive"));
  
  if (Object.is(null, dataProducts)){
    swal({
      title: `Carrito vacio`,
      text: "Agrega productos a tu carrito!",
      icon: "warning",
      button: "Ok",
    });
  }
  else if (Object.is(null, dataUserActive) && (Object.keys(dataProducts).length > 0)){
    swal({
      title: `Regístrate!!!`,
      text: "Regístrate para comprar",
      icon: "warning",
      button: "Ok",
    });
  }
  else if (Object.is(null, dataUserActive) && (Object.keys(dataProducts).length == 0 )){
    swal({
      title: `No estas registrado y no tienes productos!!!`,
      text: "Regístrate y agrega productos para comprar",
      icon: "warning",
      button: "Ok",
    });
  }
  else if(!Object.is(null, dataProducts) && (Object.keys(dataProducts).length == 0)){
    swal({
      title: `Carrito vacio`,
      text: "Agrega productos a tu carrito!",
      icon: "warning",
      button: "Ok",
    });

}
  else if(!Object.is(null, dataUserActive) && (Object.keys(dataProducts).length > 0)){
  swal({
    title: `Compra realizada`,
    text: dataUserActive.username,
    icon: "success",
    button: "Ok",
  });


  const url = 'https://backendproyecto-production.up.railway.app/api/shoppingcart';
  for (let index = 0; index < dataProducts.length; index++) {
    savingCartDataBase = {
      "name": dataProducts[index].title,
      "price": parseInt(dataProducts[index].price.replace('$', "")),
      "imageURL": dataProducts[index].image,
      "talla": dataProducts[index].size,
      "fkIdUser": {
        "idUsuario": dataUserActive.iduser
      }
    }
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(savingCartDataBase), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => console.log())
      .catch(error => console.error('Error:', error));

  }
  productsToRemove = document.querySelectorAll('.cart-item');
  productsToRemove.forEach(productRemove => {productRemove.remove();});
  localStorage.removeItem('ProductsToCart');
  document.querySelector('.subtotal').innerText = "";
  document.querySelector('.shippingPrice').innerText = "";
  document.querySelector('.total').innerText = "";
  }

}