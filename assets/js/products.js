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
    'img':'./assets/images/sweatshirt/denji-sud-neg.png',
    'price':'300'})
    addItem({'name':'Izuku Midoriya',
    'img':'./assets/images/women-t-shirts/deku-pld-mar.png',
    'price':'150'})
    addItem({'name':'Luffy',
    'img':'./assets/images/men-t-shirts/luffi-pl-neg.png',
    'price':'150'})
    addItem({'name':'Luffy',
    'img':'./assets/images/sweatshirt/luffy-sud-gris.png',
    'price':'300'})
    addItem({'name':'Chainsaw man',
    'img':'./assets/images/men-t-shirts/denji-pl-gris.png',
    'price':'150'})
    addItem({'name':'Izuku Midoriya',
    'img':'./assets/images/men-t-shirts/deku-pl-neg.png',
    'price':'150'})
    addItem({'name':'Tanjiro Kamado',
    'img':'./assets/images/women-t-shirts/tanjiro-pld-mar.png',
    'price':'150'})
    addItem({'name':'Tanjiro Kamado',
    'img':'./assets/images/sweatshirt/tanjiro-sud-neg.png',
    'price':'300'})