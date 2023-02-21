function addItemToCart() {
    let ProductsOfCart = JSON.parse(localStorage.getItem("ProductsToCart"));
    console.log(ProductsOfCart[1].title)
    console.log(ProductsOfCart[1].price)
    console.log(ProductsOfCart[1].image)
    // Crea un elemento de carrito
     const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    const cartContents = `
      <img src="${ProductsOfCart[1].image}" alt="${ProductsOfCart[1].title}">
      <div>
        <h3>${ProductsOfCart[1].title}</h3>
        <h4>${ProductsOfCart[1].price}</h4>
      </div>
      <button class="remove-item">Eliminar</button>
    `;
    cartItem.innerHTML = cartContents;
    // Se agrega el elemento al contenedor del carrito
     const cartItems = document.getElementById('cart-items');
    document.querySelector(".panel-products").appendChild(cartItem); 
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
  