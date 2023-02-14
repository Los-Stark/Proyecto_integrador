function addItem(item) {

    const itemTemplate = `
    <div id="masVendido1"class="col-6 col-md-3 col-sm-4 p-2  ">
    <img class="productsImage img-fluid" src="${item.img}" alt="image">
    <p id="nombreMasVendido1">${item.name}</p>
    <div class="row align-items-center d-flex justify-content-center">
    <div id="precioMasVendido1"class=" col-8 col-md-4 p-2  ">$${item.price}</div>
        </div>
      </div>
    `;

    const itemsContainer = document.getElementById("section");
    itemsContainer.innerHTML += itemTemplate;
  }

    addItem({'name':'Chainsaw man',
    'img':'./assets/images/hoodie/denji-sud-neg.png',
    'price':'300'})
    addItem({'name':'Izuku Midoriya',
    'img':'./assets/images/woman-t-shirt/deku-pld-mar.png',
    'price':'150'})
    addItem({'name':'Luffy',
    'img':'./assets/images/man-t-shirt/luffi-pl-neg.png',
    'price':'150'})
    addItem({'name':'Luffy',
    'img':'./assets/images/hoodie/luffy-sud-gris.png',
    'price':'300'})
    addItem({'name':'Chainsaw man',
    'img':'./assets/images/man-t-shirt/denji-pl-gris.png',
    'price':'150'})
    addItem({'name':'Izuku Midoriya',
    'img':'./assets/images/man-t-shirt/deku-pl-neg.png',
    'price':'150'})
    addItem({'name':'Tanjiro Kamado',
    'img':'./assets/images/woman-t-shirt/tanjiro-pld-mar.png',
    'price':'150'})
    addItem({'name':'Tanjiro Kamado',
    'img':'./assets/images/hoodie/tanjiro-sud-neg.png',
    'price':'300'})