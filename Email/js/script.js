// Mail
// Chiedi all’utente la sua email,
let emailUtente = prompt("Inserisci la tua Email");

// Lista dell'email
let listaEmail = ["ciccio@gmail.com", "fix@alice.it", "gianfranco@alice.it", "pippo@gmail.com"];

// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
for ( let i = 0; i < listaEmail.length; i ++ ) {

    // controllo che l'email inserita dall'utente sia all'interno della lista
    // se c'è gli do il benvenuto
    // altrimenti non può accedere

    if ( emailUtente === listaEmail[i] ) {
        alert("Benvenuto!!");

    }else {
        alert("Non puoi accedere, non abbiamo la sua Email!!");
    }

}