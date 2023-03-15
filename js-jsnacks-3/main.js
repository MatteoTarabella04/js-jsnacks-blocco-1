/* 
Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

// dichiaro una variabile array per i numeri
const numbers = [];

// avvio uun ciclo che richiede 10 numeri all'utente
/* for (let i = 0; i < 10; i++) {
    const input = Number(prompt('inserisci un numero'));
    numbers.push(input);
}
 */
/* let sum = 0 */

/* for (i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log(sum); */

/*
SNACK 3
Rifare con WHILE LOOP:  Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. 
*/

let y = 0;
let sum = 0;

while (y < 10) {

    const input = Number(prompt('inserisci un numero'));
    
    sum += numbers[y]; 
    numbers.push(input)
    
    
    y ++;
}
console.log(Number(sum));