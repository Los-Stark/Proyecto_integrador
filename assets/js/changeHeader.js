
const changeDropdown = () => {
    /* Estilo de HTML cuando la pantalla es mas grande de 768 pixelex (Botones) */
    const navstyle = document.getElementById("navbarScroll");
    const buttonstyle = `                        
    <a class="nav-link active" href="/index.html"><button class="btn">Inicio</button></a>
    <div class="nav-item dropdown" id="Dropdowncategories">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <!-- <img src="assets//images/microsoft.svg" alt="ventana"> -->
            Categorias
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Playeras Caballero</a></li>
            <li><a class="dropdown-item" href="#">Playeras Dama</a></li>
            <li><a class="dropdown-item" href="#">Sudaderas</a></li>
        </ul>
    </div>

    <a class="nav-link " href="/AddProduct.html"><button class="btn"> Acceder</button></a>
    <a class="nav-link " href="/contact-us.html"><button class="btn">Contáctanos</button></a>
    <a class="nav-link " href="/about-us.html"><button class="btn">Conócenos</button></a>
    `;
    /* Estilo de HTML cuando la pantalla es menor de 768 pixelex (Lista) */
    const listStyle = `
    <a class="nav-link liststyle" href="/index.html">Inicio</a>
    <a class="nav-link liststyle" href="#">Playeras de Caballero</a>
    <a class="nav-link liststyle" href="#">Playeras de dama</a>
    <a class="nav-link liststyle" href="#">Sudaderas</a>
    <a class="nav-link liststyle" href="/AddProduct.html">Acceder</a>
    <a class="nav-link liststyle" href="/contact-us.html">Contáctanos</a>
    <a class="nav-link liststyle" href="/about-us.html">Conócenos</a>
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
function hideShoppingCart() {
    if (showShoppingCar) {
        document.getElementById("shoppingCart").innerHTML = '';
        showShoppingCar = false;
    }

    else {
        setTimeout(car, 350)
    }

}


function car() {
    document.getElementById("shoppingCart").innerHTML = `<a class="nav-link" href="#" id="shoppingCart">
        <button class="btn "><img src="assets/images/cart2.svg" alt="carro-de-la-compra"></button></a>`;
    showShoppingCar = true;
}


function chengingOrientation() {
    let rotation = window.orientation;
    console.log(rotation)

    if (rotation = 90) {
        document.getElementById("shoppingCart").innerHTML = `<a class="nav-link" href="#" id="shoppingCart">
        <button class="btn "><img src="assets/images/cart2.svg" alt="carro-de-la-compra"></button></a>`;
    }
}

window.addEventListener("orientationchange", chengingOrientation);