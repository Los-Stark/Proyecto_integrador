function addItem(item) {

    const itemTemplate = `
    <div id="masVendido1"class="col-6 col-md-3  p-2  descripcion ">
    <img id="imgMasVendido1" class="avatares img-fluid" src="${item.img}" alt="image">
    <p id="nombreMasVendido1">${item.name}</p>
    <div class="row align-items-center d-flex justify-content-center">
    <div id="precioMasVendido1"class=" col-8 col-md-4 bg-primary p-2  descripcion ">${item.price}$</div>
        </div>
      </div>
    `;

    const itemsContainer = document.getElementById("seccion");
    itemsContainer.innerHTML += itemTemplate;
  }

  addItem({'name':'Tayto',
    'img':'https://i.ibb.co/28jHTYH/luffy-pld-mar.jpg',
    'price':'40'})
  
    addItem({'name':'Tayto',
    'img':'https://i.ibb.co/M5NvsKv/luffi-pl-neg.jpg',
    'price':'40'})
    addItem({'name':'Tayto',
    'img':'https://i.ibb.co/JmcQ3Xb/deku-pld-neg.jpg',
    'price':'40'})
    addItem({'name':'Tayto',
    'img':'https://i.ibb.co/5LR2LWs/tanjiro-pld-neg.jpg',
    'price':'40'})
    addItem({'name':'Tayto',
    'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
    'price':'40'})
    addItem({'name':'Tayto',
    'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
    'price':'40'})
    addItem({'name':'Tayto',
    'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
    'price':'40'})
    addItem({'name':'Tayto',
    'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
    'price':'40'})
  