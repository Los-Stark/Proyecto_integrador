function addItem(item) {

    const itemTemplate = `
    <div id="masVendido1"class="col-6 col-md-3 col-sm-4 p-2 mx-2 my-1">
    <img class="productsImage img-fluid" src="${item.img}" alt="image">
    <p id="nombreMasVendido1">${item.name}</p>
    <div class="row align-items-center d-flex justify-content-center">
    <div id="precioMasVendido1"class=" col-8 col-md-4 p-2  ">$${item.price}</div>
    <button class="add-to-cart">Agregar al carrito</button>
        </div>
      </div>
    `;

    const itemsContainer = document.getElementById("section");
    itemsContainer.innerHTML += itemTemplate;
  }

  addItem({'name':'Izuku Midoriya',
  'img':'./assets/images/hoodie/deku-sud-gris.png',
  'price':'300'})
  addItem({'name':'Izuku Midoriya',
  'img':'./assets/images/hoodie/deku-sud-neg.png',
  'price':'300'})
  addItem({'name':'Izuku Midoriya',
  'img':'./assets/images/hoodie/denji-sud-gris.png',
  'price':'300'})
  addItem({'name':'Izuku Midoriya',
  'img':'./assets/images/hoodie/denji-sud-neg.png',
  'price':'300'})
  addItem({'name':'Izuku Midoriya',
  'img':'./assets/images/hoodie/eren-sud-neg.png',
  'price':'300'})
  addItem({'name':'Izuku Midoriya',
  'img':'./assets/images/hoodie/eren-sud-gris.png',
  'price':'300'})
  addItem({'name':'Izuku Midoriya',
  'img':'./assets/images/hoodie/luffy-sud-gris.png',
  'price':'300'})
  addItem({'name':'Izuku Midoriya',
  'img':'./assets/images/hoodie/luffy-sud-neg.png',
  'price':'300'})
  addItem({'name':'Izuku Midoriya',
  'img':'./assets/images/hoodie/tanjiro-sud-neg.png',
  'price':'300'})
  addItem({'name':'Izuku Midoriya',
  'img':'./assets/images/hoodie/tanjiro-sud-gris.png',
  'price':'300'})