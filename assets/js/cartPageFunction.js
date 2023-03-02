let ProductsOfCart = JSON.parse(localStorage.getItem("ProductsToCart"));
/**
 * Funcion para mostrar productos en el carrito
 */
function addItemToCart() {
  for (let index = 0; index < ProductsOfCart.length; index++) {
    // Crea un elemento de carrito
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    const cartContents = `
    <div class="row align-items-center"> <!-- columnas propocionales -->
    <img id="image-product" class="col image-fluid  col-sm-6 col-md-3 col-lg-3 col-xl-3" src="${ProductsOfCart[index].image}" alt="${ProductsOfCart[index].title}">
    <div class="col product-name col-sm-3 col-md-3 col-lg-3 col-xl-3">${ProductsOfCart[index].title}</div>
    <div class="col product-price  col-sm-1 col-md-2 col-lg-3 col-xl-3">${ProductsOfCart[index].price}</div>
    <button class="col remove-item col-sm-2 col-md-6 col-lg-3 col-xl-3" value="${ProductsOfCart[index].order}"><img class="waste-icon" src="assets/images/icons-waste.png" alt="borrar-producto"></button>
    </div>
    `;
    cartItem.innerHTML = cartContents;
    // Se agrega el elemento al contenedor del carrito
    document.querySelector(".panel-products").appendChild(cartItem);
  }
  //Calculando precio total ymostrarlo
  prices();
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
    subtotalPrice += parseInt(ProductsOfCart[index].price.replace('$',""));
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
  const buttonClicked = event.target;
  const productToDrop = buttonClicked.value;
  for (const key in ProductsOfCart) {
    if (ProductsOfCart[key].order == productToDrop) { ProductsOfCart.splice(key, 1) }

  }
  prices();
  localStorage.setItem("ProductsToCart", JSON.stringify(ProductsOfCart))
  buttonClicked.parentNode.remove();
}
//Llamada de la funcion
addItemToCart();