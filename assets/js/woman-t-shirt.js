function addItem(item) {

    const itemTemplate = `
    <div id="masVendido1"class="col-6 col-md-3 col-sm-4 p-2  ">
    <img class="productsImage img-fluid" src="${item.img}" alt="image">
    <p id="playeras-de-dama">${item.name}</p>

    <div class="row align-items-center d-flex justify-content-center">
    <div id="precioMasVendido1"class=" col-8 col-md-4 p-2  ">$${item.price}</div>
        </div>
      </div>
    `;

    const itemsContainer = document.getElementById("section");
    itemsContainer.innerHTML += itemTemplate;
  }

    addItem({'name':'Izuku Midoriya',
    'img':'./assets/images/woman-t-shirt/deku-pld-mar.png',
    'price':'150'})
    addItem({'name':'Izuku Midoriya',
    'img':'./assets/images/woman-t-shirt/deku-pld-neg.png',
    'price':'150'})
    addItem({'name':'Izuku Midoriya',
    'img':'./assets/images/woman-t-shirt/denji-pld-neg.png',
    'price':'150'})
    addItem({'name':'Izuku Midoriya',
    'img':'./assets/images/woman-t-shirt/denji-pld-mar.png',
    'price':'150'})
    addItem({'name':'Izuku Midoriya',
    'img':'./assets/images/woman-t-shirt/eren-pld-mar.png',
    'price':'150'})
    addItem({'name':'Izuku Midoriya',
    'img':'./assets/images/woman-t-shirt/eren-pld-neg.png',
    'price':'150'})
    addItem({'name':'Izuku Midoriya',
    'img':'./assets/images/woman-t-shirt/luffy-pld-neg.png',
    'price':'150'})
    addItem({'name':'Izuku Midoriya',
    'img':'./assets/images/woman-t-shirt/luffy-pld-mar.png',
    'price':'150'})
    addItem({'name':'Izuku Midoriya',
    'img':'./assets/images/woman-t-shirt/tanjiro-pld-neg.png',
    'price':'150'})
    addItem({'name':'Izuku Midoriya',
    'img':'./assets/images/woman-t-shirt/tanjiro-pld-mar.png',
    'price':'150'})
  