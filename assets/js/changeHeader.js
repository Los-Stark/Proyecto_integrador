
const changeDropdown = () => {
    /* Estilo de HTML cuando la pantalla es mas grande de 768 pixelex (Botones) */
    const navstyle = document.getElementById("navbarScroll");
    const buttonstyle = `                        
    <a class="nav-link active" href="/index.html"><button class="btn">Inicio</button></a>
    <div class="nav-item dropdown" id="Dropdowncategories">
        <button class="btn dropdown-toggle categories" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Categorías
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/man-t-shirt.html">Playeras Caballero</a></li>
            <li><a class="dropdown-item" href="/woman-t-shirt.html">Playeras Dama</a></li>
            <li><a class="dropdown-item" href="/hoodie.html">Sudaderas</a></li>
        </ul>
    </div>

    <a class="nav-link " href="/contact-us.html"><button class="btn">Contáctanos</button></a>
    <a class="nav-link " href="/about-us.html"><button class="btn">Conócenos</button></a>
    <a class="nav-link " href="/logInRegister.html"><button class="btn"> Acceder</button></a>
    `;
    /* Estilo de HTML cuando la pantalla es menor de 768 pixelex (Lista) */
    const listStyle = `
    <a class="nav-link liststyle" href="/index.html">Inicio</a>
    <a class="nav-link liststyle" href="/man-t-shirt.html">Playeras de Caballero</a>
    <a class="nav-link liststyle" href="/woman-t-shirt.html">Playeras de dama</a>
    <a class="nav-link liststyle" href="/hoodie.html">Sudaderas</a>
    <a class="nav-link liststyle" href="/contact-us.html">Contáctanos</a>
    <a class="nav-link liststyle" href="/about-us.html">Conócenos</a>
    <a class="nav-link liststyle" href="/logInRegister.html">Acceder</a>
    `;
    /* Evaluacion de tamaño de pantalla */
    window.innerWidth < 768 ? navstyle.innerHTML = listStyle : navstyle.innerHTML = buttonstyle;
    window.addEventListener('resize', () => {
        window.innerWidth < 768 ? navstyle.innerHTML = listStyle : navstyle.innerHTML = buttonstyle;
    });
}


changeDropdown();



/* bloque para ocultar el carrito al apretar el boton en version celular y mostrar 
al presionar de nuevo se uso el metodo settimeout */
let showShoppingCar = true;
const shopCart = `<a  class="nav-link" href="shopping-cart.html" id="shoppingCart">
<button class="btn "><img src="assets/images/cart2.svg" alt="carro-de-la-compra"><span id="cartItems"></span></button></a>`;
function hideShoppingCart() {
    if (showShoppingCar) {
        document.getElementById("shoppingCart").innerHTML = '';
        showShoppingCar = false;
     
        
    }
    else {
        setTimeout(car, 350);
       
        
    }
}
/**
 * Funcion que muestra el carrito
 */
function car() {
    
    document.getElementById("shoppingCart").innerHTML = shopCart;
    itemsToCart.updateCartItems();

    showShoppingCar = true;
    
}
/**
 * Funcion que evalua si hay rotacion de pantalla
 */
window.addEventListener("orientationchange", () => {
    let rotation = window.orientation;
    console.log(rotation)

    if (rotation = 90) {
        document.getElementById("shoppingCart").innerHTML = shopCart;
    }
});

