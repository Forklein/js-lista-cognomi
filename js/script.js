console.log('Ciao Peppe');


/* Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
*/


var userSurname = prompt('Inserisci il tuo cognome:').trim();
var listSurname = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

var result = document.getElementById('result');
var index = document.getElementById('index');

listSurname.push(userSurname);
listSurname.sort();

var position = '';
var isinlist = false;

for (var i = 0; i < listSurname.length; i++) {
    if (userSurname === listSurname[i]) {
        isinlist = true;
        position = i;
    }
}

if (isinlist) {
    result.innerHTML = '<li>' + listSurname + '</li>';
    index.innerHTML = 'Il cognome inserito è in posizione ' + ++position;
}