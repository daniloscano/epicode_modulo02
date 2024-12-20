/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
NUMBER => rappresenta tutti i numeri, sia interi e decimali (i numeri decimali vengono scritti utilizzanto il punto . per
    dividere la parte decimale)
    let int = 8;
    let decimal = 8.8;
STRING => rapresenta una sequenza di caratteri (o banalmente frasi o parole)
    let string = 'hello world;
    per utilizzare nella stringa i caratteri di apice ' e doppio apice ", possiamo utilizzare i caratteri di escape,
    quindi scrivere apici preceduti dal backslash \
    let string = 'l\'automobile';
BOOLEAN => rappresenta soltanto due valore, true e false
    let boolTrue = true;
    let boolFalse = false;
NULL => rappresenta una variabile vuota, senza alcun valore
    let nullValue = null; non ho asseganto alcun valore ma ho comunque dichiarato la variabile come vuota
UNDEFINED => rappresenta una variabile a cui non è assegnato un valore specifico, che vine creata senza valore al suo interno
    let undefValue = undefined;
    la variabile non è vuota, ma ha un valore non definito che può essere modificato in qualsiasi tipo di JS
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* 
In JavaScript un oggetto è un insieme di valori definiti da coppie chiave-valore, utilizzato per strutturare
dati complessi, che comprendono diverse proprietà e valori di ogni tipo
    let object = {
        name: 'first_name',
        surname: 'last_name',
        age: 30,
        isMarried: false,
    };
*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*
let sommaNumeri = 12 + 20;
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = 'danilo';

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4-x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = 'john';
let name2 = 'John';
console.log('uguaglianza:',name1 === name2); // risultato => false

console.log('uguaglianza con .toLowerCase',name1 === name2.toLowerCase()); // true
