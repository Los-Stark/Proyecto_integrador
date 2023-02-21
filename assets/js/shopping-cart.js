//Clase para agregar productos a la memoria local y ser leidos por el html de carrito

class CartClass {
  constructor() {
    this.listCartProducts = []
  }
  addProductToCart(title, price, image) {
    const productCart = {
      title: title,
      price: price,
      image: image
    };
    this.listCartProducts.push(productCart);
    localStorage.setItem("ProductsToCart", JSON.stringify(this.listCartProducts))
  }
}

// Obtiene todos los botones "Agregar al carrito"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Se agrega un controlador de eventos para cada botón
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCartClicked);
});

// Función que se ejecuta cuando se hace clic en el botón "Agregar al carrito"
const itemsToCart = new CartClass();
function addToCartClicked(event) {
  const button = event.target;
  const item = button.parentNode.parentNode; // Obtén el elemento padre del botón
  const itemTitle = item.querySelector('p').textContent;
  const itemPrice = item.querySelector('#CardPrice').textContent;
  const itemImage = item.querySelector('img').src;
  console.log(itemImage + " " + itemPrice + " " + itemTitle)
  itemsToCart.addProductToCart(itemTitle, itemPrice, itemImage);

  /* addItemToCart(itemTitle, itemPrice, itemImage); */
}

