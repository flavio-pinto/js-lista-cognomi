/**
 * Chiedi all’utente il cognome
 * inseriscilo in un array con altri cognomi
 * stampa la lista ordinata alfabeticamente
 * Scrivi anche la posizione della lista in cui il nuovo utente si trova
 */

// Array con i cognomi che già abbiamo
var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// Richiesta Cognome
var mioCognome = prompt('Inserisci il tuo cognome (ricorda di inserire l\'iniziale maiuscola!)');

// Push del nuovo cognome nell'array
cognomi.push(mioCognome);

// Metto i cognomi in ordine alfabetico
cognomi.sort();

// variabile collegata alla lista
var listaCognomi = document.getElementById('lista-cognomi');
// contatore
var contatore = 0;

// funzione 
while (contatore < cognomi.length) {
    // valore elemento corrente
    var cognomeArray = cognomi[contatore];

    // contenuto corrente della lista
    var contenutoAttualeLista = listaCognomi.innerHTML;

    // creazione nuovo elemento
    var nuovoCognome = '<li>' + cognomeArray + '</li>';

    // aggiunta nuovo elemento alla lista
    listaCognomi.innerHTML = contenutoAttualeLista + nuovoCognome;

    // 
    contatore++;
}

// Rilevamento della posizione del nuovo utente all'interno dell'array
var posizioneCognome = cognomi.indexOf(mioCognome);

document.getElementById('pos-cognome').innerHTML = 'La posizione del tuo cognome all\'interno dell\'\array è: ' + posizioneCognome;