// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
const commentButton = document.querySelector('.send-comment');
const changeHeadingText = () => {
    const title = document.querySelector(".title");
    const newTitle = document.querySelector("#comment-input");
    if(newTitle.value !== ""){
        title.innerText = newTitle.value;
    } else {
        title.innerText = 'Nome Negozio'
    }; 
};

commentButton.addEventListener('click', changeHeadingText);


// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
const pageBackgroundBtn = document.querySelector('.page-background');
const changePageBackground = () => {
    const page = document.querySelector('body');
    if(page.className.includes('body-background')) {
        page.classList.remove('body-background');
    } else {
        page.classList.add('body-background');
    };

    // page.style.backgroundColor = 'darkblue';
    // page.style.color = 'white';
};

pageBackgroundBtn.addEventListener('click', changePageBackground);


// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
const addressButton = document.querySelector('.change-address');
const changeFooterAddress = () => {
    const footerAddress = document.querySelector('.footer-address');
    const newFooterAddress = document.querySelector('#new-footer-address');
    if(newFooterAddress.value !== ""){
        footerAddress.innerText = newFooterAddress.value;
    } else {
        footerAddress.innerText = 'indirizzo del negozio';
    }; 
};

addressButton.addEventListener('click', changeFooterAddress);


// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
const linkBtn = document.querySelector('.amazon-link');
const changeAmazonLinks = () => {
    const productLinks = document.querySelectorAll('.product-link');
    for(const link of productLinks){
        link.classList.add('product-link-green');
    };
};

linkBtn.addEventListener('click', changeAmazonLinks);


// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
const imgVisibilityBtn = document.querySelector('.show-hide-img');
const showHideImg = () => {
    const productImages = document.querySelectorAll('.product-img');
    for(img of productImages){
        if(img.className.includes('hide-product-img')){
            img.classList.remove('hide-product-img');
        } else {
            img.classList.add('hide-product-img');
        };
    };
};

imgVisibilityBtn.addEventListener('click', showHideImg);

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
const priceColorBtn = document.querySelector('.product-price-color');
const changePriceColor = () => {
    const priceColors = ['red', 'blue', 'green', 'orange', 'lightblue', 'rebeccapurple'];
    const colorsIndex = Math.floor(( Math.random() * (priceColors.length - 1)));
    const productPrices = document.querySelectorAll('.product-price');
    for(price of productPrices){
        price.style.removeProperty = 'color';
        price.style.color = priceColors[colorsIndex];
    };
};

priceColorBtn.addEventListener('click', changePriceColor);