// Esercizio Bonus: la coda dell’array

// Creare un array con un numero a piacere di elementi.
const numeri = [ 1, 5, 10, 6, 8, 11, 58, 7, 9, 4, 2, 55, 69, 78 ];

// Stampo a schermo i numeri creati
const numeriDaStampare = document.getElementById("array-numeri");
numeriDaStampare.innerHTML = `I Numeri della lista sono i seguenti: ${numeri}`;

const ultimiNumeriDaStampare = document.getElementById("ultimi-numeri");

// Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell’array.
for ( let i = 0; i <= numeri.length; i ++ ) {
    
    //  uso slice per estrarre gli ultimi 5 numeri dell'array
    let ultimiNumeri = numeri.slice(-5);
    ultimiNumeriDaStampare.innerHTML = `Gli ultimi 5 numeri sono i seguenti: ${ultimiNumeri}`;
}


// Extra Bonus
// Creiamo un array chiedendo all’utente quanti elementi dovrà contenere e generando tanti numeri interi casuali quanti sono gli elementi da inserire.
// Attenzione #3: quali controlli dobbiamo fare sull’input dell’utente?
// Super Extra Bonus: chiedere all’utente anche quanti elementi vanno estratti dal fondo dell’array.