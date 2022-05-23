// Gioco dei dadi

// creo array per salvare numeri estratti random
let numeriUtentiEstratti = [];
let numeriPcEstratti = [];

// creo le variabili che conterranno le somme dei numeri estratti
let sommaUtente = 0;
let sommaPc = 0;

// Generare più  numeri random da 1 a 6, sia per il giocatore sia per il computer.
for ( let i = 0; i < 10; i ++ ) {

    let numeriUtente = Math.floor(Math.random() * 6 + 1);
    // pusho i numeri estratti nell'array
    numeriUtentiEstratti.push(numeriUtente);
    
    let numeriPc = Math.floor(Math.random() * 6 + 1);
    // pusho i numeri estratti nell'array
    numeriPcEstratti.push(numeriPc);

    // sommo i numeri estratti e li salvo nella variabile
    sommaUtente += numeriUtentiEstratti[i];
    sommaPc += numeriPcEstratti[i];
}


console.log(numeriUtentiEstratti);
console.log(numeriPcEstratti);
console.log(sommaUtente);
console.log(sommaPc);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if ( sommaUtente > sommaPc ) {
    alert(`L'utente ha vinto!!! il tuo punteggio è ${sommaUtente}`);

} else {
    alert(`Il PC ha vinto!! il suo punteggio è ${sommaPc}`);
}




