/* 
Snack 1 Blocco 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

// chiedo all'utente il primo numero 
const num1 = prompt('inserire i primo numero');

// chiedo all'utente il secondo numero
const num2 = prompt('inserire i primo numero');

// verifico quale dei due è maggiore
if (num1 > num2) {
   console.log(num1, 'maggiore di', num2);
} else  if (num1 == num2) {
   console.log('uguali');
} else {
   console.log(num2, 'maggiore di', num1);
}