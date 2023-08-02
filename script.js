let shoppingBasket = [];
let prices = [];
let amounts = [];

function renderAllMenus() {
    loadShoppingBasket();
    renderBurger();
    renderSalads();
    renderSideDishes();
    renderSauces();
    renderDrinks();
    renderDessert();
}

//render all menus//

function renderBurger() {
    let burgerArea = document.getElementById('burger-area');
    burgerArea.innerHTML = '';
    burgerArea.innerHTML += renderBurgerHeader();

    for (let i = 0; i < burger.length; i++) {
        const burgerElement = burger[i];
        burgerArea.innerHTML += renderBurgerDivs(i);

        replaceBurgerDotts(i);
    }
}


function renderSalads() {
    let saladsArea = document.getElementById('salads-area');
    saladsArea.innerHTML = '';
    saladsArea.innerHTML += renderSaladsHeader();

    for (let i = 0; i < salads.length; i++) {
        const saladsElement = salads[i];
        saladsArea.innerHTML += renderSaladsDivs(i);

        replaceSaladDotts(i);
    }
}


function renderSideDishes() {
    let sideDishesArea = document.getElementById('side-dishes-area');
    sideDishesArea.innerHTML = '';
    sideDishesArea.innerHTML += renderSideDishesHeader();

    for (let i = 0; i < sideDishes.length; i++) {
        const sideDishesElement = sideDishes[i];
        sideDishesArea.innerHTML += renderSideDishesDivs(i);

        replaceSideDishesDotts(i);
    }
}


function renderSauces() {
    let saucesArea = document.getElementById('sauces-area');
    saucesArea.innerHTML = '';
    saucesArea.innerHTML += renderSaucesHeader();

    for (let i = 0; i < sauces.length; i++) {
        const saucesElement = sauces[i];
        saucesArea.innerHTML += renderSaucesDivs(i);

        replaceSaucesDotts(i);
    }
}


function renderDrinks() {
    let drinksArea = document.getElementById('drinks-area');
    drinksArea.innerHTML = '';
    drinksArea.innerHTML += renderDrinksHeader();

    for (let i = 0; i < drinks.length; i++) {
        const drinksElement = drinks[i];
        drinksArea.innerHTML += renderDrinksDivs(i);

        replaceDrinksDotts(i);
    }
}


function renderDessert() {
    let dessertArea = document.getElementById('dessert-area');
    dessertArea.innerHTML = '';
    dessertArea.innerHTML += renderDessertHeader();

    for (let i = 0; i < dessert.length; i++) {
        const dessertElement = dessert[i];
        dessertArea.innerHTML += renderDessertDivs(i);

        replaceDessertDotts(i);
    }
}


//replace dotts with commas at all menu prices//

function replaceBurgerDotts(i) {
    let newPrice = document.getElementById(`burger-price${i}`).innerHTML.replaceAll(".", ",");
    document.getElementById(`burger-price${i}`).innerHTML = newPrice;
}


function replaceSaladDotts(i) {
    let newPrice = document.getElementById(`salads-price${i}`).innerHTML.replaceAll(".", ",");
    document.getElementById(`salads-price${i}`).innerHTML = newPrice;
}


function replaceSideDishesDotts(i) {
    let newPrice = document.getElementById(`side-dishes-price${i}`).innerHTML.replaceAll(".", ",");
    document.getElementById(`side-dishes-price${i}`).innerHTML = newPrice;
}


function replaceSaucesDotts(i) {
    let newPrice = document.getElementById(`sauces-price${i}`).innerHTML.replaceAll(".", ",");
    document.getElementById(`sauces-price${i}`).innerHTML = newPrice;
}


function replaceDrinksDotts(i) {
    let newPrice = document.getElementById(`drinks-price${i}`).innerHTML.replaceAll(".", ",");
    document.getElementById(`drinks-price${i}`).innerHTML = newPrice;
}


function replaceDessertDotts(i) {
    let newPrice = document.getElementById(`dessert-price${i}`).innerHTML.replaceAll(".", ",");
    document.getElementById(`dessert-price${i}`).innerHTML = newPrice;
}


//render shopping basket and responsive shopping basket when add a menu to shopping basket//
function renderShoppingBasket() {
    let shoppingArea = document.getElementById('shopping-area');
    let responsiveShoppingArea = document.getElementById('shopping-area-responsive');
    shoppingArea.innerHTML = '';
    responsiveShoppingArea.innerHTML = '';
    let sum = 0;

    for (let i = 0; i < shoppingBasket.length; i++) {
        shoppingArea.innerHTML += renderPriceArea(i);
        responsiveShoppingArea.innerHTML += renderResponsiveShoppingBasket(i);
        sum += amounts[i] * prices[i];
    }
    document.getElementById('sum-area').innerHTML = renderFinalSum(sum);
    document.getElementById('sum-area-responsive').innerHTML = renderFinalSumResponsive(sum);
    changeButtonColor(sum);
    showPriceResponsiveButton(sum);
}


//increase the choosen meal in shopping basket by click on plus icon//
function increaseMenuAmount(i) {
    amounts[i]++;
    saveShoppingBasket();
    renderShoppingBasket();
}


//decrease the choosen meal in shopping basket by click on minus icon//
function decreaseMenuAmount(i) {
    if (amounts[i] > 1) {
        amounts[i]--;
        saveShoppingBasket();
        renderShoppingBasket();
    } else {
        shoppingBasket.splice(i, 1);
        prices.splice(i, 1);
        amounts.splice(i, 1);
        saveShoppingBasket();
        loadShoppingBasket();
        renderShoppingBasket();
        showEmptyShoppingBasket();
    }
}


//check if the final sum is more than 15,00€(exclusive 2€ delivery costs)//
function checkFinalSum(finalSum1) {
    if (finalSum1 < 17) {
        lowSum = document.getElementById('text-low-final-sum');
        lowSumRes = document.getElementById('text-low-final-sum-responsive');
        lowSum.innerHTML = '';
        lowSumRes.innerHTML = '';
        lowSum.innerHTML += renderTextLowFinalSum();
        lowSumRes.innerHTML += renderTextLowFinalSumResponsive();
        document.getElementById('button-responsive').classList.remove('bg-button');
    } else {
        lowSum = document.getElementById('text-low-final-sum');
        lowSumRes = document.getElementById('text-low-final-sum-responsive');
        lowSum.innerHTML = '';
        lowSumRes.innerHTML = '';
    }
}


//change color of order button if endsum is enough//
function changeButtonColor(sum) {
    finalSum = sum + 2;
    if (finalSum > 17) {
        document.getElementById('order-button').classList.add('bg-button');
        document.getElementById('button-responsive').classList.add('bg-button');
        document.getElementById('basket-button-responsive').classList.add('bg-button');
    }
}


//show the responsive shopping basket by onclick on the big responsive order button//
function showResponsiveShoppingBasket() {
    document.getElementById('responsive-shopping-basket').classList.add('d-flex');
    document.getElementById('full-side').classList.add('overflow');
}


//close responsive shopping basket//
function closeResponsiveShoppingBasket() {
    document.getElementById('responsive-shopping-basket').classList.remove('d-flex');
    document.getElementById('full-side').classList.remove('overflow');
}


//show price on the big responsive button//
function showPriceResponsiveButton(sum) {
    let finalSum = sum.toFixed(2).replaceAll(".", ",");
    let button = document.getElementById('responsive-button-price');
    button.innerHTML = '';
    button.innerHTML += `
        <span>(${finalSum}€)</span>
    `;
}


//add meals to shopping basket by onclick and check before, if the meal is already in shopping basket, if yes, increase array amounts[menuIndex]//
function addBurgerToBasket(i) {
    let name = burger[i]['name'];
    let price = burger[i]['price'];
    let burgerName = burger[i]['name'];
    let menuIndex = getBurgerIndex(burgerName);

    if (menuIndex == -1) {
        shoppingBasket.push(name);
        prices.push(price);
        amounts.push(1);
    } else {
        amounts[menuIndex]++;
    }
    saveShoppingBasket();
    renderShoppingBasket();
}


function addSaladsToBasket(i) {
    let name = salads[i]['name'];
    let price = salads[i]['price'];
    let saladName = salads[i]['name'];
    let menuIndex = getSaladIndex(saladName);

    if (menuIndex == -1) {
        shoppingBasket.push(name);
        prices.push(price);
        amounts.push(1);
    } else {
        amounts[menuIndex]++;
    }
    saveShoppingBasket();
    renderShoppingBasket();
}


function addSideDishesToBasket(i) {
    let name = sideDishes[i]['name'];
    let price = sideDishes[i]['price'];
    let sideDishName = sideDishes[i]['name'];
    let menuIndex = getSideDishIndex(sideDishName);

    if (menuIndex == -1) {
        shoppingBasket.push(name);
        prices.push(price);
        amounts.push(1);
    } else {
        amounts[menuIndex]++;
    }
    saveShoppingBasket();
    renderShoppingBasket();
}


function addSaucesToBasket(i) {
    let name = sauces[i]['name'];
    let price = sauces[i]['price'];
    let sauceName = sauces[i]['name'];
    let menuIndex = getSauceIndex(sauceName);

    if (menuIndex == -1) {
        shoppingBasket.push(name);
        prices.push(price);
        amounts.push(1);
    } else {
        amounts[menuIndex]++;
    }
    saveShoppingBasket();
    renderShoppingBasket();
}


function addDrinksToBasket(i) {
    let name = drinks[i]['name'];
    let price = drinks[i]['price'];
    let drinkName = drinks[i]['name'];
    let menuIndex = getDrinkIndex(drinkName);

    if (menuIndex == -1) {
        shoppingBasket.push(name);
        prices.push(price);
        amounts.push(1);
    } else {
        amounts[menuIndex]++;
    }
    saveShoppingBasket();
    renderShoppingBasket();
}


function addDessertToBasket(i) {
    let name = dessert[i]['name'];
    let price = dessert[i]['price'];
    let dessertName = dessert[i]['name'];
    let menuIndex = getDessertIndex(dessertName);

    if (menuIndex == -1) {
        shoppingBasket.push(name);
        prices.push(price);
        amounts.push(1);
    } else {
        amounts[menuIndex]++;
    }
    saveShoppingBasket();
    renderShoppingBasket();
}


//check if the menu is already in shopping basket or not//
function getBurgerIndex(burgerName) {
    return shoppingBasket.indexOf(burgerName);
}


function getSaladIndex(saladName) {
    return shoppingBasket.indexOf(saladName);
}


function getSideDishIndex(sideDishName) {
    return shoppingBasket.indexOf(sideDishName);
}


function getSauceIndex(sauceName) {
    return shoppingBasket.indexOf(sauceName);
}


function getDrinkIndex(drinkName) {
    return shoppingBasket.indexOf(drinkName);
}


function getDessertIndex(dessertName) {
    return shoppingBasket.indexOf(dessertName);
}


//save menus in shopping basket (save in local storage)//
function saveShoppingBasket() {
    let menusAsText = JSON.stringify(shoppingBasket);
    localStorage.setItem('menus', menusAsText);

    let pricesAsText = JSON.stringify(prices);
    localStorage.setItem('prices', pricesAsText);

    let amountsAsText = JSON.stringify(amounts);
    localStorage.setItem('amounts', amountsAsText);
}


//load shopping basket / load arrays from local storage//
function loadShoppingBasket() {
    let menusAsText = localStorage.getItem('menus');
    let pricesAsText = localStorage.getItem('prices');
    let amountsAsText = localStorage.getItem('amounts');

    if (menusAsText && pricesAsText && amountsAsText) {
        shoppingBasket = JSON.parse(menusAsText);
        prices = JSON.parse(pricesAsText);
        amounts = JSON.parse(amountsAsText);
        renderShoppingBasket();
        showEmptyShoppingBasket();
    }
}


//show empty shopping basket//
function showEmptyShoppingBasket() {
    if (amounts.length == 0) {
        let shoppingArea = document.getElementById('shopping-area');
        let responsiveShoppingArea = document.getElementById('shopping-area-responsive');
        shoppingArea.innerHTML = '';
        responsiveShoppingArea.innerHTML = '';
        shoppingArea.innerHTML += renderEmptyShoppingBasket();
        responsiveShoppingArea.innerHTML += renderEmptyShoppingBasketResponsive();
        document.getElementById('sum-area').innerHTML = '';
        document.getElementById('sum-area-responsive').innerHTML = '';
        document.getElementById('text-low-final-sum').innerHTML = '';
        document.getElementById('text-low-final-sum-responsive').innerHTML = '';
    }
}


//get note as alert because its a test website//
function alertTestWebsite() {
    alert("Dies ist lediglich eine Test-Website. Aus diesem Grund sind nicht alle Funktionen vorhanden.");
}


//get note as alert: order sum is not enough or alertTestWebsite()//
function alertOrderButton(sum) {
    let finalSum = sum + 2;
    if (finalSum < 17) {
        alert("Der Mindestbestellwert von 15,00€ wurde noch nicht erreicht.")
    } else {
        alertTestWebsite();
    }
}


//fill the heart icon in header area//
function fillHeartIcon() {
    let heart = document.getElementById('heart-icon');
    heart.src = '';
    heart.src = 'img/heart-filled.png';
}


//open info tab by click on info icon//
function openInfoTab() {
    document.getElementById('overlay').classList.add('d-flex');
    document.getElementById('info-tab').classList.add('d-flex');
    document.getElementById('full-side').classList.add('overflow');
}


//close info tab by click on x mark//
function closeInfoTab() {
    document.getElementById('overlay').classList.remove('d-flex');
    document.getElementById('info-tab').classList.remove('d-flex');
    document.getElementById('full-side').classList.remove('overflow');
}