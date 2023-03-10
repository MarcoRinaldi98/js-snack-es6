/*
    JAVASCRIPT Snack 3
*/

let citta = ['Roma', 'Milano', 'Torino', 'Firenze', 'Napoli', 'Palermo', 'Bologna', 'Bari'];

let cittaComprese = [];

visualizzaCompresi(2, 5, citta);

function visualizzaCompresi(min, max, array) {
    array.forEach((element, i) => {
        if (i >= min && i <= max) {
            cittaComprese.push(element);
        }
    });
}
console.log(cittaComprese);