let ProductsOfCart = JSON.parse(localStorage.getItem("ProductsToCart"));
function addItemToCart() {
  let subtotalPrice=0;
  for (let index = 0; index < ProductsOfCart.length; index++) {

    console.log(ProductsOfCart[index].title)
    console.log(ProductsOfCart[index].price)
    console.log(ProductsOfCart[index].image)
    // Crea un elemento de carrito
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    const cartContents = `
    <div class="row"> <!-- columnas propocionales -->
    <img id="image-product" class="col image-fluid  col-sm-6 col-md-3 col-lg-3" src="${ProductsOfCart[index].image}" alt="${ProductsOfCart[index].title}">
    <div class="col product-name col-sm-3 col-md-3 col-lg-3">${ProductsOfCart[index].title}</div>
    <div class="col product-price  col-sm-1 col-md-2 col-lg-2">${ProductsOfCart[index].price}</div>
    <div class="col total  col-sm-6 col-md-2 col-lg-2"><strong>150</strong></div>
    <button class="col remove-item col-sm-2 col-md-6 col-lg-2">Borrar</button>
  </div>
    `;
    cartItem.innerHTML = cartContents;
    // Se agrega el elemento al contenedor del carrito
    //const cartItems = document.getElementById('cart-items');
    document.querySelector(".panel-products").appendChild(cartItem);
    //Calculando precio total
    subtotalPrice+=parseInt(ProductsOfCart[index].price);
  }
  document.querySelector('.subtotal').innerText=`$${subtotalPrice}`;
  document.querySelector('.shippingPrice').innerText=`$${subtotalPrice*0.05}`;
  document.querySelector('.total').innerText=`$${subtotalPrice*1.05}`;
  // Se agrega un controlador de eventos para el botón "Eliminar"
  const removeButtons = document.querySelectorAll('.remove-item');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeItem);
  });
}


addItemToCart();
function removeItem(event) {
  const buttonClicked = event.target;
  const productToDrop = buttonClicked.value;
  console.log(productToDrop);
  buttonClicked.parentNode.remove();

}
