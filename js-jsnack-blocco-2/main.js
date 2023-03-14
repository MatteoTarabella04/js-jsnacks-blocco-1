/* 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// chiedo all'utente la prima parola
const word1 = prompt('inserire la priam parola');

// chiedo all'utente la seconda parola
const word2 = prompt('inserire la seconda parola');

// verifico la lunghezza di entrambe
if (word1.length < word2.length) {
   console.log(word1, word2);
   
} else if (word1.length > word2.length) {
   console.log(word2, word1);
} else {
   console.log('Le parole hanno lunghezza uguale');
}