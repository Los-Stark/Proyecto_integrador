/**
 * 
 * @param {*} item Cada objeto que se puede colocar para vender y su formato
 */
cont =1;
function addItem(item) {

    const itemTemplate = `
    <div id="CardProduct"class="col-6 col-md-3 col-sm-4 p-2  mx-1 my-1">
    <img class="productsImage img-fluid" src="${item.img}" alt="image">
    <p id="CardName">${item.name}</p>
    <div class="row align-items-center d-flex justify-content-center">
    <div id="CardPrice"class=" col-8 col-md-4 p-2  ">$${item.price}</div>
    <div class="size">
                        <p>
                        <input class ="clothesSizes clothesSizesCH" id="clothesSizesCH${cont}" name="typeSize${cont}" type="radio" value="CH">
                        <label for="clothesSizesCH${cont}" class="col-sm-3">  CH  </label>
                        <input class ="clothesSizes clothesSizesM" id="clothesSizesM${cont}" name="typeSize${cont}" type="radio" value="M" checked>
                        <label for="clothesSizesM${cont}" class="col-sm-3">  M  </label>
                        <input class ="clothesSizes clothesSizesG" id="clothesSizesG${cont}" name="typeSize${cont}" type="radio" value="G">
                        <label for="clothesSizesG${cont}" class="col-sm-3">  G  </label>
                        </p>
                    </div>
    <button class="add-to-cart">Agregar al carrito</button>
        </div>
      </div>
    `;

    const itemsContainer = document.getElementById("section");
    itemsContainer.innerHTML += itemTemplate;
    cont++;
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
  