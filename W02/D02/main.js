//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const firstNumber = 9;
const secondNumber = 9;

if(firstNumber > secondNumber) {
  console.log('Il primo numero è maggiore del secondo');
} else if (firstNumber < secondNumber) {
  console.log('Il secondo numero è maggiore del primo');
} else {
  console.log('I due numeri sono uguali');
};

// esercizio extra con tre numeri invece di due
/*
const firstNumber = 3;
const secondNumber = 3;
const thirdNumber = 3;

if(firstNumber > secondNumber && firstNumber > thirdNumber) {
  console.log('Il primo numero è maggiore degli altri');
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
  console.log('Il secondo numero è maggiore degli altri');
} else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
  console.log('Il terzo numero è maggiore degli altri');
} else {
  console.log('Tutti i numeri sono uguali');
};
*/
/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

const numberToCheck = 20;

if(numberToCheck < 5) {
  console.log('Tiny');
} else if (numberToCheck >= 5 && numberToCheck < 10) {
  console.log('Small');
} else if (numberToCheck >= 10 && numberToCheck < 15) {
  console.log('Medium');
} else if (numberToCheck >= 15 && numberToCheck < 20) {
  console.log('Large');
} else {
  console.log('Huge');
};

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/
/*
for(let i = 0; i <= 10; i++) {
  if(i === 3 || i === 8){
    continue;
  } else {
    console.log(i);
  };
};
*/
// esercizio extra = stampa una tabellina 

const tabellina = 7;
console.log(`Stampo la tabellina del ${tabellina}`);
for(let i = 0; i <= 10; i++) {
  if(i === 3 || i === 8) {
    continue;
  } else {
    console.log(`${tabellina} x ${i} = ${tabellina * i}`);
  };
};

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for(let i = 0; i <= 15; i++) {
  if(i === 0) {
    console.log(`Il numero 0 non è divisibile`);
  } else if(i % 2 === 0) {
    console.log(`Il numero ${i} è PARI`);
  } else {
    console.log(`Il numero ${i} è DISPARI`);
  };
};

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const numberOne = 12;
const numberTwo = 3;
const checkValue = 8;

if(numberOne === checkValue || numberTwo === checkValue) {
  console.log(`Uno dei due numeri è ${checkValue}`);
} else if (numberOne + numberTwo === checkValue) {
  console.log(`La somma dei due numeri è ${checkValue}`);
} else if (numberOne - numberTwo === checkValue) {
  console.log(`La differenza dei due numeri è ${checkValue}`);
} else {
  console.log(`Nessuno dei due numeri, la loro somma o la loro differenza da come risultato ${checkValue}`);
};

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

function shoppingCart() {
  let totalShoppingCart = 0;
  let shippingCost = 10;
  let article;
  do {
    article = parseInt(prompt('Inserisci il prezzo del tuo articolo. Inserisci 0 per controllare il tuo ordine'));
    totalShoppingCart += article;
    console.log(`L'importo parziale del tuo carrello è di: ${totalShoppingCart}`);
  } while (article !== 0); 
  console.log(`Il totale del tuo carrello è di: ${totalShoppingCart}`);
  if(totalShoppingCart > 50) {
    console.log(`Il totale del tuo carrello è maggiore di 50`);
    console.log(`Per questo motivo hai la spedizione gratuita`);
    shippingCost = 0;
    let checkoutTotal = totalShoppingCart + shippingCost;
    console.log(`L'importo del checkout è di: ${checkoutTotal}`);
  } else {
    console.log(`Il totale del tuo carrello è inferiore a 50`);
    console.log(`Per questo motivo aggiungiamo al totale il costo di spedizione di: ${shippingCost}`);
    let checkoutTotal = totalShoppingCart + shippingCost;
    console.log(`L'importo del checkout è di: ${checkoutTotal}`);
  };
};

shoppingCart();

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

function shoppingCartBlackFriday() {
  let totalShoppingCart = 0;
  let shippingCost = 10;
  let article;
  do {
    article = parseInt(prompt('Inserisci il prezzo del tuo articolo. Inserisci 0 per controllare il tuo ordine'));
    totalShoppingCart += article;
    console.log(`L'importo del tuo carrello è di: ${totalShoppingCart}`);
  } while (article !== 0); 
  console.log(`Il totale del tuo carrello è di: ${totalShoppingCart}`);
  console.log(`Oggi è il Black Friday, per cui ottieni uno sconto del 20% su tutti gli articoli`);
  let discountedTotalShoppingCart = totalShoppingCart * 0.8;
  console.log(`Il nuovo totale è di: ${discountedTotalShoppingCart}`);
  if(discountedTotalShoppingCart > 50) {
    console.log(`Il totale del tuo carrello è maggiore di 50`);
    console.log(`Per questo motivo hai la spedizione gratuita`);
    let shippingCost = 0;
    let checkoutTotal = discountedTotalShoppingCart + shippingCost;
    console.log(`L'importo del checkout è di: ${checkoutTotal}`);
  } else {
    console.log(`Il totale del tuo carrello è inferiore a 50`);
    console.log(`Per questo motivo aggiungiamo al totale il costo di spedizione di: ${shippingCost}`);
    let checkoutTotal = discountedTotalShoppingCart + shippingCost;
    console.log(`L'importo del checkout è di: ${checkoutTotal}`);
  };
};

shoppingCartBlackFriday();

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale = true;
let gender = (isMale) ? console.log(`gender è male`) : console.log(`gender è female`);


/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. 
  Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". 
  Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for(let i = 1; i <= 100; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log(`Il numero ${i} è multiplo sia di 3 che di 5: 'FizzBuzz'`);
  } else if (i % 3 === 0) {
    console.log(`Il numero ${i} è multiplo  di 3: 'Fizz'`);
  } else if (i % 5 === 0) {
    console.log(`Il numero ${i} è multiplo  di 5: 'Buzz'`);
  } else {
    console.log(`Il numero è ${i}`);
  };
};
