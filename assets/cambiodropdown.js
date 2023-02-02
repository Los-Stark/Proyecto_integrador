
const changeDropdown = () => {

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

    <a class="nav-link " href="#"><button class="btn"> Acceder</button></a>
    <a class="nav-link " href="#"><button class="btn">Contáctanos</button></a>
    <a class="nav-link " href="/aboutUs.html"><button class="btn">Conócenos</button></a>
    `;
    const listStyle= `
    <a class="nav-link liststyle" href="/index.html">Inicio</a>
    <a class="nav-link liststyle" href="#">Playeras de Caballero</a>
    <a class="nav-link liststyle" href="#">Playeras de dama</a>
    <a class="nav-link liststyle" href="#">Sudaderas</a>
    <a class="nav-link liststyle" href="#">Acceder</a>
    <a class="nav-link liststyle" href="#">Contáctanos</a>
    <a class="nav-link liststyle" href="/aboutUs.html">Conócenos</a>
    `;

    let ventana = window.innerWidth;
    ventana<768? navstyle.innerHTML = listStyle:navstyle.innerHTML = buttonstyle;
    window.addEventListener('resize', () => {  
        ventana = window.innerWidth;
        ventana<768? navstyle.innerHTML = listStyle:navstyle.innerHTML = buttonstyle;
    });
}


changeDropdown();

let mostrarCarrito= true;
function ocultarCarrito(){
    if(mostrarCarrito){
    document.getElementById("carrito-compras").innerHTML =''
    mostrarCarrito=false}
    else{
        document.getElementById("carrito-compras").innerHTML ='<a class="nav-link" href="#" id="carrito-compras"><button class="btn "><img src="assets/images/cart2.svg" alt="carro-de-la-compra"></button></a>'
        mostrarCarrito=true;
    }
}