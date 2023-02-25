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
      <img src="${ProductsOfCart[index].image}" alt="${ProductsOfCart[index].title}">
      <div>
        <h3>${ProductsOfCart[index].title}</h3>
        <h4>${ProductsOfCart[index].price}</h4>
      </div>
      <button class="remove-item" value="${ProductsOfCart[index].order}">Eliminar</button>
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
