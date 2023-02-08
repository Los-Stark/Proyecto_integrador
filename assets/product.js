function addItem(item) {

    const itemTemplate = `
    <div id="masVendido1"class="col-6 col-md-3 col-sm-4 p-2  descripcion ">
    <img class="avatares img-fluid" src="${item.img}" alt="image">
    <p id="nombreMasVendido1">${item.name}</p>
    <div class="row align-items-center d-flex justify-content-center">
    <div id="precioMasVendido1"class=" col-8 col-md-4 bg-primary p-2  descripcion ">${item.price}$</div>
        </div>
      </div>
    `;

    const itemsContainer = document.getElementById("seccion");
    itemsContainer.innerHTML += itemTemplate;
  }

    addItem({'name':'El proximo rey',
    'img':'https://i.ibb.co/28jHTYH/luffy-pld-mar.jpg',
    'price':'40'})
  
    addItem({'name':'El proximo rey',
    'img':'https://i.ibb.co/M5NvsKv/luffi-pl-neg.jpg',
    'price':'40'})
    addItem({'name':'Se tambien un heroe',
    'img':'https://i.ibb.co/JmcQ3Xb/deku-pld-neg.jpg',
    'price':'40'})
    addItem({'name':'anime dfgdfghdfgg',
    'img':'https://i.ibb.co/5LR2LWs/tanjiro-pld-neg.jpg',
    'price':'40'})
    addItem({'name':'Tayto',
    'img':'https://i.ibb.co/5LR2LWs/tanjiro-pld-neg.jpg',
    'price':'40'})
    addItem({'name':'Tayto',
    'img':'https://i.ibb.co/5LR2LWs/tanjiro-pld-neg.jpg',
    'price':'40'})
    addItem({'name':'Tayto',
    'img':'https://i.ibb.co/5LR2LWs/tanjiro-pld-neg.jpg',
    'price':'40'})
    addItem({'name':'Tayto',
    'img':'https://i.ibb.co/5LR2LWs/tanjiro-pld-neg.jpg',
    'price':'40'})
  