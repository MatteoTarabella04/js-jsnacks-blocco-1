/* 
Snack 4 (sia con for che con while):
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

// inizializzo l'array con la lista dei nomi
const partyList = [
   'pippo',
   'pluto',
   'paperino',
   'topolino',
];

// chiedo all'utente di inserire il suo nome
const hostName = prompt('Inserisci qui il tuo nome');

// dichiaro una variabile settata su false che mi servirà per effettuare il controllo
let check = false;

// ciclo for per controllo partecipanti
for (let i = 0; i < partyList.length; i++) {
   const host = partyList[i];
   
   if (host == hostName) {
      check = true;
   }
}

// ciclo while per controllo partecipanti
let y = 0;

while (y < partyList.length) {
   const hostW = partyList[y];

   if (hostW == hostName) {
      check = true;
   }
   
   y ++
}

// verifico se l'utente è in lista o meno
if (check == true) {
   
   alert('Lieti di ospitarti alla nostra festa');
   
} else {
   
   alert('Ci dispiace, non sei in lista');

}


