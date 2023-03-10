/*
    JAVASCRIPT Snack 1
*/
/*
scorro tutte le bici
trovo la bici che pesa meno 
e poi stampo l'indice di quella bici nel dom
*/
const bici = [
    {
        nome: 'city bike',
        peso: 9
    },
    {
        nome: 'mountain bike',
        peso: 30
    },
    {
        nome: 'bmx',
        peso: 7
    },
    {
        nome: 'cross bike',
        peso: 15
    }
];
console.log(bici);

let pesoBiciLeggera = bici[0].peso;
let nomeBiciLeggera;


bici.forEach(element => {
    const {nome, peso} = element;
    if (peso < pesoBiciLeggera) {
        pesoBiciLeggera = peso;
        nomeBiciLeggera = nome;
    }
});
console.log(nomeBiciLeggera);

const containerDom = document.getElementById('container');
containerDom.innerHTML = `La bici piu leggera nella lista è la: ${nomeBiciLeggera}`;