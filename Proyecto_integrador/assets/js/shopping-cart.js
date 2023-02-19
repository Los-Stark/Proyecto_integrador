
// Obtiene todos los botones "Agregar al carrito"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Se agrega un controlador de eventos para cada botón
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCartClicked);
});

// Función que se ejecuta cuando se hace clic en el botón "Agregar al carrito"
function addToCartClicked(event) {
  const button = event.target;
  const item = button.parentNode.parentNode; // Obtén el elemento padre del botón
  const itemTitle = item.querySelector('p').textContent;
  const itemPrice = item.querySelector('div').textContent;
  const itemImage = item.querySelector('img').src;
  addItemToCart(itemTitle, itemPrice, itemImage);
}

function addItemToCart(title, price, image) {
  // Crea un elemento de carrito
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  const cartContents = `
    <img src="${image}" alt="${title}">
    <div>
      <h3>${title}</h3>
      <h4>${price}</h4>
    </div>
    <button class="remove-item">Eliminar</button>
  `;
  cartItem.innerHTML = cartContents;
  // Se agrega el elemento al contenedor del carrito
  const cartItems = document.getElementById('cart-items');
  cartItems.appendChild(cartItem);
  // Se agrega un controlador de eventos para el botón "Eliminar"
  const removeButtons = document.querySelectorAll('.remove-item');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeItem);
  });
}

function removeItem(event) {
  const buttonClicked = event.target;
  buttonClicked.parentNode.remove();
}
