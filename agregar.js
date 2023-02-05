
//document.getElementById("buttonAdd").addEventListener("click", () => addArticle());

function addArticle() {
    let fd = new FormData();
    fd.append("image", document.getElementById("image").files[0]);
    fd.append("name", document.getElementById("name").value);
    fd.append("price", document.getElementById("price").value);
    fetch('https://ibb.co/album/4RjHWX/embeds', {
        method: 'POST',
        body: fd
    })
        .then(response => response.json())
        .then(data => {
            if(data.result == "Ok")
            document.getElementById("img").setAttribute("src", document.getElementById("image").files[0].name);
    })
        .catch(error => {
        console.error("Error:", error);
    });
} 


const getUsers = (item) => {
    const url = `https://ibb.co/album/4RjHWX/embeds`;
    


    fetch(url)
        .then( response=> response.json())
        .then( data => {

            if(data.result == "Ok")
            document.getElementById('list-products').innerHTML += 
              `
              <div id="masVendido1"
                class="col-6 col-md-3  p-2  descripcion ">
                <img id="imgMasVendido1" class="avatares img-fluid" src=" ${item.img} " alt="Imagen Producto">
                <p id="nombreMasVendido1">${item.name}</p>
                <div class="row align-items-center d-flex justify-content-center">
                <Button
                class="align-items-left col-4 col-md-2 p-2  descripcion "
                >
                -
                </Button>
                <Button
                class="align-items-left col-4 col-md-2 p-2  descripcion "
                >
                +
                </Button>
                <div id="precioMasVendido1"
                class=" col-8 col-md-4 bg-primary p-2  descripcion ">
                $${item.precio}
                </div>
                </div>
                </div>
              `

        })
        .catch( error => console.log(error));
};



/* function addItem(item){
    const itemHTML = `<div id="masVendido1"
    class="col-6 col-md-3  p-2  descripcion ">
    <img id="imgMasVendido1" class="avatares img-fluid" src=" ${item.img} " alt="Imagen Producto">
    <p id="nombreMasVendido1">${item.name}</p>
    <div class="row align-items-center d-flex justify-content-center">
        <Button
            class="align-items-left col-4 col-md-2 p-2  descripcion "
          >
            -
        </Button>
        <Button
            class="align-items-left col-4 col-md-2 p-2  descripcion "
           >
            +
        </Button>
        <div id="precioMasVendido1"
            class=" col-8 col-md-4 bg-primary p-2  descripcion ">
            $${item.precio}
        </div>
    </div>
</div>`
        
    const itemsContainer = document.getElementById("list-products");
    itemsContainer.innerHTML += itemHTML;
} */

 

        /* addItem({name:'agregar nombre',
        img:'https://i.ibb.co/RY4v098/imagen-fabio.jpg',
        precio:300});

        addItem({name:'juice',
        img:'/assets/pexels-lisa-fotios-1921336.jpg',
        precio:300});

        addItem({name:'juice',
        img:'/assets/pexels-lisa-fotios-1921336.jpg',
        precio:300});

        addItem({name:'juice',
        img:'/assets/pexels-lisa-fotios-1921336.jpg',
        precio:300});

        addItem({name:'juice',
        img:'/assets/pexels-lisa-fotios-1921336.jpg',
        precio:300});

        addItem({name:'juice',
        img:'/assets/pexels-lisa-fotios-1921336.jpg',
        precio:300});

        addItem({name:'juice',
        img:'/assets/pexels-lisa-fotios-1921336.jpg',
        precio:300});

        addItem({name:'juice',
        img:'/assets/pexels-lisa-fotios-1921336.jpg',
        precio:300}); */

        

