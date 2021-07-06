console.log('Ciao Peppe');


/* Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
*/


var userSurname = prompt('Inserisci il tuo cognome').trim();
var listSurname = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
listSurname.push(userSurname);
console.log(listSurname);
listSurname.sort();
console.log(listSurname);
console.log(listSurname.length);

var isPosition = false;

for (var i = 0; i < listSurname.length; i++) {
    if ()
}
