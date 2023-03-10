/*
    JAVASCRIPT Snack 2
*/

const squadre = [
    {
        nome: 'Roma',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        nome: 'Lazio',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        nome: 'Inter',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        nome: 'Milan',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        nome: 'Juventus',
        'punti fatti': 0,
        'falli subiti': 0
    }
];
const containerDom = document.getElementById('container');

console.log(squadre);
let arrayConNomeEFalli = [];

squadre.forEach(element => {
    element['punti fatti'] = Math.floor(Math.random() * 50) + 1;
    element['falli subiti'] = Math.floor(Math.random() * 20) + 1;

    const {nome, 'falli subiti':falli} = element;
    console.log(nome, falli);
    arrayConNomeEFalli.push({nome, falli}); 

    containerDom.innerHTML += ` La squadra ${nome} ha subito ${falli} falli! <br />`;
});

console.log(arrayConNomeEFalli);



