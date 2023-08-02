//render all menus//

function renderBurgerHeader() {
    return /*html*/`
        <div style="width:97%;">
            <h2>Burger</h2>
            <span class="burger-info">
            Unsere Produkte : The Food Temple steht für großartige Burger mit hochwertigem Fleisch aus Deutschland.
            Und wenn du´s ohne Fleisch lieber magst? Dann wirst du bei unserer einzigartigen Auswahl an vegetarischen und veganen Burgern hin und Veg sein!
            Schmeck doch mal rein und tätige mal wieder eine geschmackvolle Bestellung. ;-)
            </span>
        </div>
    `;
}


function renderBurgerDivs(i) {
    const burgerElement = burger[i];
    return /*html*/`
        <div class="dish-box" onclick="addBurgerToBasket(${i})">
            <h3>${burgerElement['name']}</h3>
            <span class="dish-span">${burgerElement['description']}</span>
            <span class="dish-span-price" id="burger-price${i}">${burgerElement['price'].toFixed(2)}€</span>
            <img src="img/plus-icon2.png">
        </div>
    `;
}


function renderSaladsHeader() {
    return /*html*/`
        <img class="menu-img" src="./img/salad-ga0273f8a1_1920.jpg">
        <h2>Salate</h2>
        <span class="burger-info">
            Jeder Salat wird frisch zubereitet und mit hauseigenem Dressing verfeinert.
        </span>
    `;
}


function renderSaladsDivs(i) {
    const saladsElement = salads[i];
    return /*html*/ `
         <div class="dish-box" onclick="addSaladsToBasket(${i})">
            <h3>${saladsElement['name']}</h3>
            <span class="dish-span">${saladsElement['description']}</span>
            <span class="dish-span-price" id="salads-price${i}">${saladsElement['price'].toFixed(2)}€</span>
            <img src="img/plus-icon2.png">
        </div>
    `;
}


function renderSideDishesHeader() {
    return /*html*/ `
        <img class="menu-img-beilagen" src="./img/onion-rings-gfb11ca241_1920.jpg">
        <h2>Beilagen</h2>
    `;
}


function renderSideDishesDivs(i) {
    const sideDishesElement = sideDishes[i];
    return /*html*/ `
         <div class="dish-box" onclick="addSideDishesToBasket(${i})">
            <h3>${sideDishesElement['name']}</h3>
            <span class="dish-span">${sideDishesElement['description']}</span>
            <span class="dish-span-price" id="side-dishes-price${i}">${sideDishesElement['price'].toFixed(2)}€</span>
            <img src="img/plus-icon2.png">
        </div>
    `;
}


function renderSaucesHeader() {
    return /*html*/ `
        <img class="menu-img-saucen" src="./img/saucen.jpg">
        <h2>Saucen</h2>
        <span class="burger-info">
            Malias hausgemachte Saucen nach eigener Rezeptur.
        </span>
    `;
}


function renderSaucesDivs(i) {
    const saucesElement = sauces[i];
    return /*html*/ `
         <div class="dish-box" onclick="addSaucesToBasket(${i})">
            <h3>${saucesElement['name']}</h3>
            <span class="dish-span">${saucesElement['description']}</span>
            <span class="dish-span-price" id="sauces-price${i}">${saucesElement['price'].toFixed(2)}€</span>
            <img src="img/plus-icon2.png">
        </div>
    `;
}



function renderDrinksHeader() {
    return /*html*/ `
        <img class="menu-img-drinks" src="./img/drinks.jpg">
        <h2>Getränke</h2>
    `;
}


function renderDrinksDivs(i) {
    const drinksElement = drinks[i];
    return /*html*/`
        <div class="dish-box" onclick="addDrinksToBasket(${i})">
            <h3>${drinksElement['name']}</h3>
            <span class="dish-span">${drinksElement['description']}</span>
            <span class="dish-span-price" id="drinks-price${i}">${drinksElement['price'].toFixed(2)}€</span>
            <img src="img/plus-icon2.png">
        </div>
    `;
}


function renderDessertHeader() {
    return /*html*/`
        <img class="menu-img-saucen" src="./img/dessert.jpg">
        <h2>Dessert</h2>
    `;
}


function renderDessertDivs(i) {
    const dessertElement = dessert[i];
    return /*html*/`
        <div class="dish-box" onclick="addDessertToBasket(${i})">
            <h3>${dessertElement['name']}</h3>
            <span class="dish-span">${dessertElement['description']}</span>
            <span class="dish-span-price" id="dessert-price${i}">${dessertElement['price'].toFixed(2)}€</span>
            <img src="img/plus-icon2.png">
        </div>
    `;
}


//render the menus in shopping basket//

function renderPriceArea(i) {
    return /*html*/ `
        <div style="width:100%;" id="menu${i}">
            <div class="new-shopping-area">
                <div class="amount-meal">
                    <span class="amount-basket">${amounts[i]}</span>
                    <span class="meal-basket">${shoppingBasket[i]}</span>
                </div>
                <div>
                    <span class="price-basket">${(amounts[i] * prices[i]).toFixed(2).replaceAll(".", ",")}€</span>
                </div>
            </div>
            <div class="div-plus-minus-img">
                <img onclick="decreaseMenuAmount(${i})" class="minus-img" src="img/minus-icon.png">
                <img onclick="increaseMenuAmount(${i})" class="plus-img" src="img/plus-icon-basket.png">
            </div>
            <div class="div-line-basket"><hr class="line-basket"></div>
        </div>
    `;
}


//render the responsive shopping basket//

function renderResponsiveShoppingBasket(i) {
    return /*html*/ `
        <div style="width:100%;" id="menu${i}">
            <div class="new-shopping-area-responsive">
                <div class="amount-meal">
                    <span class="amount-basket">${amounts[i]}</span>
                    <span class="meal-basket">${shoppingBasket[i]}</span>
                </div>
                <div>
                    <span class="price-basket">${(amounts[i] * prices[i]).toFixed(2).replaceAll(".", ",")}€</span>
                </div>
            </div>
            <div class="div-plus-minus-img">
                <img onclick="decreaseMenuAmount(${i})" class="minus-img" src="img/minus-icon.png">
                <img onclick="increaseMenuAmount(${i})" class="plus-img1" src="img/plus-icon-basket.png">
            </div>
            <div class="div-line-basket"><hr class="line-basket"></div>
        </div>
    `;
}


//render the final sum in shopping basket and responsive shopping basket//

function renderFinalSum(sum) {
    let finalSum1 = sum + 2;
    let finalSum = (sum + 2).toFixed(2).replaceAll(".", ",");
    sum = sum.toFixed(2).replaceAll(".", ",");
    checkFinalSum(finalSum1);

    return /*html*/ `
        <div class="sum-area-one">
            <div class="final-sum-headlines">
                <span class="margin-span">Zwischensumme</span>
                <span class="margin-span">Lieferkosten</span>
                <span class="margin-span"><b>Gesamt</b></span>
            </div>
            <div class="final-sum">
                <span class="margin-span">${sum}€</span>
                <span class="margin-span">2,00€</span>
                <span class="margin-span"><b>${finalSum}€</b></span>
            </div>
        </div>
        <div class="button-div">
            <button onclick="alertOrderButton(${sum})" class="order-button" id="order-button">Bestellen</button>
        </div>
    `;
}


function renderFinalSumResponsive(sum) {
    let finalSum1 = sum + 2;
    let finalSum = (sum + 2).toFixed(2).replaceAll(".", ",");
    sum = sum.toFixed(2).replaceAll(".", ",");
    checkFinalSum(finalSum1);

    return /*html*/ `
        <div class="sum-area-one">
            <div class="final-sum-headlines-responsive">
                <span class="margin-span">Zwischensumme</span>
                <span class="margin-span">Lieferkosten</span>
                <span class="margin-span"><b>Gesamt</b></span>
            </div>
            <div class="final-sum-responsive">
                <span class="margin-span">${sum}€</span>
                <span class="margin-span">2,00€</span>
                <span class="margin-span"><b>${finalSum}€</b></span>
            </div>
        </div>
        <div class="button-div">
            <button onclick="alertOrderButton(${sum})" class="basket-butoon-responsive" id="basket-button-responsive">Bestellen</button>
        </div>
    `;
}


//show text if the final sum is to low//

function renderTextLowFinalSum() {
    return /*html*/ `
        <div class="min-value-sum">
            <span>Benötigter Betrag, um den<br> Mindestbestellwert zu erreichen</span>
            <span>15,00€</span>
        </div>
        <div class="min-value-info-text">
            <span>
                Leider kannst du deine Bestellung noch nicht aufgeben. Malia's Burger Grill liefert erst ab einem Bestellwert von 15,00€ (exklusive Lieferkosten).
            </span>
        </div>
    `;
}


function renderTextLowFinalSumResponsive() {
    return /*html*/ `
        <div class="min-value-sum-responsive">
            <span>Benötigter Betrag, um den<br> Mindestbestellwert zu erreichen</span>
            <span>15,00€</span>
        </div>
        <div class="min-value-info-text-responsive">
            <span>
                Leider kannst du deine Bestellung noch nicht aufgeben. Malia's Burger Grill liefert erst ab einem Bestellwert von 15,00€ (exklusive Lieferkosten).
            </span>
        </div>
    `;
}


//show the empty shopping basket with text and image//

function renderEmptyShoppingBasket() {
    return /*html*/ `
        <img class="shopping-basket-img" src="./img/shopping-basket.svg">
        <span class="fill-basket">Fülle deinen Warenkorb</span>
        <span class="fill-basket-text">
            Füge deine Lieblingsgerichte zum Warenkorb<br> hinzu und bestelle dein Essen
        </span>
    `;
}


function renderEmptyShoppingBasketResponsive() {
    return /*html*/ `
        <div class="empty-basket">
            <img class="shopping-basket-img-res" src="./img/shopping-basket.svg">
            <span class="fill-basket">Fülle deinen Warenkorb</span>
            <span class="fill-basket-text">
                Füge deine Lieblingsgerichte zum Warenkorb<br> hinzu und bestelle dein Essen
            </span>
        </div>
    `;
}