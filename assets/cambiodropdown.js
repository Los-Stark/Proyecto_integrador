
const changeDropdown = () => {

    const dropdown = document.getElementById("Dropdowncategories");
    const dropdownCategories = `                        
    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
    aria-expanded="false">
    Categorias
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Playeras Caballero</a></li>
        <li><a class="dropdown-item" href="#">Playeras Dama</a></li>
        <li><a class="dropdown-item" href="#">Sudaderas</a></li>
    </ul>`;
    const buttonsCategories= `
    <a class="nav-link " href="#"><button class="btn">Playeras de Caballero</button></a>
    <a class="nav-link " href="#"><button class="btn">Playeras de dama</button></a>
    <a class="nav-link " href="#"><button class="btn">Sudaderas</button></a>
    </div>`;
    let ventana = window.innerWidth;
    ventana<768? dropdown.innerHTML = buttonsCategories:dropdown.innerHTML = dropdownCategories;
    window.addEventListener('resize', () => {  
        ventana = window.innerWidth;
        ventana<768? dropdown.innerHTML = buttonsCategories:dropdown.innerHTML = dropdownCategories;
    });
}


changeDropdown();