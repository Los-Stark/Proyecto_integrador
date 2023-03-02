/**
 * 
 * @param {*} item Cada objeto que se puede colocar para vender y su formato
 */
function addItem(item) {

    const itemTemplate = `
    <div id="CardProduct"class="col-6 col-md-3 col-sm-4 p-2 mx-2 my-1">
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
  'img':'./assets/images/hoodie/deku-sud-gris.png',
  'price':'300'})
  addItem({'name':'Izuku Midoriya',
  'img':'./assets/images/hoodie/deku-sud-neg.png',
  'price':'300'})
  addItem({'name':'Denji',
  'img':'./assets/images/hoodie/denji-sud-gris.png',
  'price':'300'})
  addItem({'name':'Denji',
  'img':'./assets/images/hoodie/denji-sud-neg.png',
  'price':'300'})
  addItem({'name':'Eren',
  'img':'./assets/images/hoodie/eren-sud-neg.png',
  'price':'300'})
  addItem({'name':'Eren',
  'img':'./assets/images/hoodie/eren-sud-gris.png',
  'price':'300'})
  addItem({'name':'Monkey D. Luffy',
  'img':'./assets/images/hoodie/luffy-sud-gris.png',
  'price':'300'})
  addItem({'name':'Monkey D. Luffy',
  'img':'./assets/images/hoodie/luffy-sud-neg.png',
  'price':'300',})
  addItem({'name':'Tanjiro Kamado',
  'img':'./assets/images/hoodie/tanjiro-sud-neg.png',
  'price':'300'})
  addItem({'name':'Tanjiro Kamado',
  'img':'./assets/images/hoodie/tanjiro-sud-gris.png',
  'price':'300'})