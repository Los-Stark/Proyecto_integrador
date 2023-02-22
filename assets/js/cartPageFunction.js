function addItemToCart() {
  let ProductsOfCart = JSON.parse(localStorage.getItem("ProductsToCart"));
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
      <button class="remove-item">Eliminar</button>
    `;
    cartItem.innerHTML = cartContents;
    // Se agrega el elemento al contenedor del carrito
    //const cartItems = document.getElementById('cart-items');
    document.querySelector(".panel-products").appendChild(cartItem);
  }
  // Se agrega un controlador de eventos para el botón "Eliminar"
  const removeButtons = document.querySelectorAll('.remove-item');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeItem);
  });
}


addItemToCart();
function removeItem(event) {
  const buttonClicked = event.target;
  buttonClicked.parentNode.remove();
}
