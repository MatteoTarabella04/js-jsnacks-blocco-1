/* 
Snack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

const numList = [];

// ciclo FOR
/* for (let i = 0; i < 6; i ++){
   const userNum = Number(prompt('Inserisci un numero'))

   if (isNaN(userNum)) {
      alert('Il valore inserito non è di tipo numerico');
      
      
   } else if (userNum %2 > 0) {
      numList.push(userNum);
   }
}
console.log(numList); */

// cilco WHILE 
let j = 0;

while (j < 6) {
   const userNumW = Number(prompt('Inserisci un numero'))

   if (isNaN(userNumW)) {
      alert('Il valore inserito non è di tipo numerico');
      
      
   } else if (userNumW %2 > 0) {
      numList.push(userNumW);
   }

   j ++
}
console.log(numList);