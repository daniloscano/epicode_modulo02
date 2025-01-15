/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(int1, int2){
    if(int1 === int2){
        return (int1 + int2) * 3;
    } else {
        return (int1 + int2);
    };
};

//console.log(crazySum(3,2));

function crazySumIntCheck(int1, int2){
    const firstNotInt = int1.toString().includes('.');
    const secondNotInt = int2.toString().includes('.');
    if(firstNotInt || secondNotInt){
        return 'Entrambi i numeri devono essere due interi';
    } else if(int1 === int2){
        return (int1 + int2) * 3;
    } else {
        return (int1 + int2);
    };
};

console.log(crazySumIntCheck(3,2));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(number){
    if(number > 20 && number <= 100 || number === 400){
        return true;
    } else {
        return false;
    };
};

console.log(boundary(100));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(string){
    return string.split('')
        .reverse()
        .join('');
};

console.log(reverseString('olinaD'));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

const lowerString = 'stringa tutto minuscolo';

function capitalLetter(word){
    let char = '';
    for(let i = 0; i <= word.length -1; i++){
        if(i === 0){
            char += (word[i].toUpperCase());
        } else {
            char += (word[i]);
        };    
    };
    return char;
};

function upperFirst(string){
    const words = string.split(' ');
    let upperString = [];
    for(word of words){
        upperString.push(capitalLetter(word));
    };
    return upperString.join(' ');
};

console.log(upperFirst(lowerString));

// oppure

function upperFirst(string){
    let words = string.split(' ');
    let upperString = [];
    for(word of words){
        let char = word[0].toUpperCase().concat(word.slice(1));
        upperString.push(char);
    };
    return upperString.join(' ');
};

console.log(upperFirst(lowerString));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n){
    const random = [];
    for(let i = 0; i <= n; i++){
        let number = Math.floor(Math.random() * 10);
        random.push(number);
    };
    return random;
};

console.log(giveMeRandom(3));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2){
    return (l1 * l2) / 2;
};

console.log(area(10,10));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(num){
    let diff = num - 19;
    if(diff > 19){
        return diff * 3;
    } else {
        return diff;
    };
};

console.log(crazyDiff(20));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(string){
    let startsWithCode = string.toLowerCase().startsWith('code');
    if(startsWithCode){
        return string;
    } else {
        return 'code'.concat(string);
    };
};

console.log(codify('stringa base'));
console.log(codify('code-stringa base'));


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(num){
    if(typeof(num) !== 'number' || num <= 0){
        return `Immetti un numero intero positivo`;
    } else if(num % 3 === 0 || num % 7 === 0){
        return true;
    } else {
        return false;
    };
};

console.log(check3and7('ciao'));
console.log(check3and7(5));
console.log(check3and7(21));
console.log(check3and7(-1));


/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(string){
    return string.slice(1,string.length-1);
};

console.log(cutString('ciao'));
