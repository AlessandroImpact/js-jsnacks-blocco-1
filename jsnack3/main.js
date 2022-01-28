/*Calcola la somma e la media dei primi 10 numeri. */

//dichiaro variabile somma =0

let somma = 0;
let media = 0;
const limite =10;

// scorro i primi 10 numeri
//ogni numero aggiungo alla variabile somma

for(let i=0 ; i<limite ; i++ ) {

    somma += i;

}




//stampo la somma a video

alert('la somma è : ' + somma);


//calcolo la media facendo somma diviso 10

media = somma / limite ;

alert('la media è : ' + media);

