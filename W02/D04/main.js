// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2] // il totale del carrello è inferiore a 100
//const prices = [34, 5, 2, 9, 52];
const shippingCost = 50

// creare array con tutti gli utenti
const userArray = [];
userArray.push(marco);
userArray.push(paul);
userArray.push(amy);

console.log(userArray);

// cicla l'array e controlla se l'utente è ambassador; se true aggiungi l'utente nell'array ambassadorsArray
const ambassadorsArray = [];
for(user of userArray) {
  let isAmbassador = user.isAmbassador;
  if(isAmbassador){
    console.log(`${user.name} ${user.lastName} è un ambassador`);
    ambassadorsArray.push(user);
  } else {
    console.log(`${user.name} ${user.lastName} NON è un ambassador`);
  };
};

console.log(ambassadorsArray);

// algoritmo per il calcolo del totale carrello
let totalPrice = 0;
for(price of prices) {
  totalPrice += price;
};

function shoppingCart() {
  let totalShoppingCart = 0;
  for(user of userArray) {
    if(totalPrice > 100) {
      const discountedShippingCost = 0;
      totalShoppingCart = totalPrice + discountedShippingCost;
      console.log(`Congratulazioni! ${user.name} ${user.lastName} il totale degli articoli è superiore a 100, per cui hai ottenuto la spedizione gratuita`);
      console.log(`Il totale del tuo carrello è di ${totalShoppingCart}`);
    } else if (user.isAmbassador) {
      discountedTotalPrice = totalPrice * 0.7;
      totalShoppingCart = discountedTotalPrice + shippingCost;
      console.log(`${user.name} ${user.lastName}, poichè sei un utente Ambassador puoi usufruire di uno sconto del 30% sul totale degli articoli!`);
      console.log(`Il totale del tuo carrello è di ${totalShoppingCart}`);
    } else {
      totalShoppingCart = totalPrice + shippingCost;
      console.log(`${user.name} ${user.lastName}, non sei un utente Ambassador per cui il totale degli articoli è di ${totalPrice}`);
      console.log(`Il totale del tuo carrello è di ${totalShoppingCart}`);
    };
  };
};

shoppingCart();