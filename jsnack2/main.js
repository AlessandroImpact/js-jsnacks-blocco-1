/* Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente. */

//costante per inserire il numero totale dei valori

const N = parseInt(prompt('fino a quale numero vuoi stampare il cubo?'));

// verifico se è un numero valido ( N>0 )

if ( isNaN(N) ||  N<0) {
    alert('attenzione, non hai inserito un numero valido'); 
} else {         
    
     for (let i=1 ; i<= N ; i++){

        const cubo = Math.pow(i,3);        //se valido eseguo l'algoritmo

        console.log(cubo);              // stampo a video

     }                                           

}
