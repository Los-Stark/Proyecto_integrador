/**
 * 
 * @param {*} item Cada objeto que se puede colocar para vender y su formato
 */
function addItem(item) {

    const itemTemplate = `
    <div id="CardProduct"class="col-6 col-md-3 col-sm-4 p-2  mx-1 my-1">
    <img class="productsImage img-fluid" src="${item.img}" alt="image">
    <p id="CardName">${item.name}</p>
    <div class="row align-items-center d-flex justify-content-center">
    <div id="CardPrice"class=" col-8 col-md-4 p-2  ">$${item.price}</div>
    <div class="size">
                        <p>
                            <label class="col-sm-3"> <input name="typeSize" type="radio" value="1">Ch
                                </label>
                            <label class="col-sm-3"> <input name="typeSize" type="radio" value="2">M
                                </label>
                            <label class="col-sm-3"> <input name="typeSize" type="radio" value="3">G</label>
                        </p>
                    </div>
    <button class="add-to-cart">Agregar al carrito</button>
        </div>
      </div>
    `;

    const itemsContainer = document.getElementById("section");
    itemsContainer.innerHTML += itemTemplate;
  }

    addItem({'name':'Izuku Midoriya',
    'img':'./assets/images/woman-t-shirt/deku-pld-mar.png',
    'price':150})
    addItem({'name':'Monkey D. Luffy',
    'img':'./assets/images/man-t-shirt/luffi-pl-neg.png',
    'price':150})
    addItem({'name':'Chainsaw man',
    'img':'./assets/images/man-t-shirt/denji-pl-gris.png',
    'price':150})
    addItem({'name':'Izuku Midoriya',
    'img':'./assets/images/man-t-shirt/deku-pl-neg.png',
    'price':150})
    addItem({'name':'Tanjiro Kamado',
    'img':'./assets/images/woman-t-shirt/tanjiro-pld-mar.png',
    'price':150})
  