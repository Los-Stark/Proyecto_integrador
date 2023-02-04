
const changeDropdown = () => {

    const navstyle = document.getElementById("navbarScroll");
    const buttonstyle = `                        
<<<<<<< HEAD
    <a class="nav-link active" href="#"><button class="btn">Inicio</button></a>
=======
    <a class="nav-link active" href="/index.html"><button class="btn">Inicio</button></a>
>>>>>>> 5a8403e02040cc9d4a3de9202eecf430bd6fbe8b
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
<<<<<<< HEAD
    <a class="nav-link " href="#"><button class="btn">Conócenos</button></a>
    `;
    const listStyle= `
    <a class="nav-link liststyle" href="#">Inicio</a>
=======
    <a class="nav-link " href="/aboutUs.html"><button class="btn">Conócenos</button></a>
    `;
    const listStyle= `
    <a class="nav-link liststyle" href="/index.html">Inicio</a>
>>>>>>> 5a8403e02040cc9d4a3de9202eecf430bd6fbe8b
    <a class="nav-link liststyle" href="#">Playeras de Caballero</a>
    <a class="nav-link liststyle" href="#">Playeras de dama</a>
    <a class="nav-link liststyle" href="#">Sudaderas</a>
    <a class="nav-link liststyle" href="#">Acceder</a>
    <a class="nav-link liststyle" href="#">Contáctanos</a>
<<<<<<< HEAD
    <a class="nav-link liststyle" href="#">Conócenos</a>
=======
    <a class="nav-link liststyle" href="/aboutUs.html">Conócenos</a>
>>>>>>> 5a8403e02040cc9d4a3de9202eecf430bd6fbe8b
    `;

    let ventana = window.innerWidth;
    ventana<768? navstyle.innerHTML = listStyle:navstyle.innerHTML = buttonstyle;
    window.addEventListener('resize', () => {  
        ventana = window.innerWidth;
        ventana<768? navstyle.innerHTML = listStyle:navstyle.innerHTML = buttonstyle;
    });
}


<<<<<<< HEAD
changeDropdown();
=======
changeDropdown();



/* bloque para ocultar el carrito al apretar el boton en version celular y mostrar al presionar de nuevo
se uso el metodo settimeout */
let mostrarCarrito= true;
function ocultarCarrito(){
    if(mostrarCarrito){
    document.getElementById("carrito-compras").innerHTML =''
    mostrarCarrito=false}
 
    else{
        setTimeout(carrito,350)
    }

    };

    
    function carrito(){
        document.getElementById("carrito-compras").innerHTML ='<a class="nav-link" href="#" id="carrito-compras"><button class="btn "><img src="assets/images/cart2.svg" alt="carro-de-la-compra"></button></a>'
        mostrarCarrito=true;
     }
    

     function orientacionCambiada()
     {
        let rotacion = window.orientation;
        console.log(rotacion)
        
        if (rotacion=90){
        document.getElementById("carrito-compras").innerHTML ='<a class="nav-link" href="#" id="carrito-compras"><button class="btn "><img src="assets/images/cart2.svg" alt="carro-de-la-compra"></button></a>'}
     }
     
     window.addEventListener("orientationchange", orientacionCambiada);
>>>>>>> 5a8403e02040cc9d4a3de9202eecf430bd6fbe8b
