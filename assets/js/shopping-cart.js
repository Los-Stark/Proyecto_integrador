//Clase para agregar productos a la memoria local y ser leidos por el html de carrito

class CartClass {
  constructor(currentOrder=0) {
    const localData=JSON.parse(localStorage.getItem("ProductsToCart"));
    if (!Object.is(null, localData) && Object.keys(localData).length != 0){
      this.listCartProducts = localData;
      this.currentOrder=localData[localData.length-1].order;
      }
      else{
    this.listCartProducts = [];
    this.currentOrder=currentOrder;

      }
  }

  updateCartItems() {
      const cartItems = document.getElementById('cartItems');
      const localData = JSON.parse(localStorage.getItem("ProductsToCart"));
      const numItems = localData ? localData.length :0;
      if(numItems>0)
      cartItems.textContent = numItems;
      else 
      cartItems.textContent = "";
    
  }

  addProductToCart(title, price, image,size) {
    const productCart = {
      order: ++this.currentOrder,
      title: title,
      price: price,
      image: image,
      size: size
    };
    //Revisa si la memoria local esta vacia
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
  const itemSizeCH = item.querySelector(".clothesSizesCH").checked;
  const itemSizeM = item.querySelector(".clothesSizesM").checked;
  const itemSizeG = item.querySelector(".clothesSizesG").checked;
  let sizeItem;
  if(itemSizeCH) sizeItem="CH";
  else if(itemSizeM) sizeItem="M";
  else if(itemSizeG) sizeItem="G";

  itemsToCart.addProductToCart(itemTitle, itemPrice, itemImage,sizeItem);
  itemsToCart.updateCartItems();
  

  /* addItemToCart(itemTitle, itemPrice, itemImage); */
}
itemsToCart.updateCartItems();

var productCounters = {};


