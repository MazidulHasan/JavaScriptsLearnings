var animals = [
    { name: 'Fluffykins',   species: 'rabbit' },
    { name: 'Caro',         species: 'dog' },
    { name: 'Hamilton',     species: 'dog' },
    { name: 'Harold',       species: 'fish' },
    { name: 'Ursula',       species: 'cat' },
    { name: 'Jimmy',        species: 'fish' }
];

// var names = []
// for (let index = 0; index < animals.length; index++) {
//     names.push(animals[index].name)
// }
// console.log(names);

// this code can be converted into higherFunctin using map
var names = animals.map((animal)=>animal.name)
console.log(names);