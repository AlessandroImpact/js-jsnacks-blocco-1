/* Calcola la somma e la media dei primi 10 numeri. */

let somma = 0;

let i=0;



while ( i < 10  ) {

    let numero = ParseInt(prompt(' Inserisci un numero'));

    if (isNaN(numero)) {

        alert('numero non valido, inserisco 0')

        numero = 0;      //se utente inserisce un NaN inserisco lo 0
    }

    somma += somma;

    i++;


}

/*stampo la somma */

alert('la somma vale : ' + somma);

