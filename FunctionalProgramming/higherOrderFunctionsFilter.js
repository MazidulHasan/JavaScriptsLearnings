//one function is taking arguments from other function

var animals = [
    {name:'First', species:'rabbit'},
    {name:'Second', species:'dog'},
    {name:'Third', species:'dog'},
    {name:'Fourth', species:'fish'},
    {name:'Fifth', species:'cat'},
    {name:'Sixth', species:'cat'},
]

/*
var dogs = []
for (let i = 0; i < animals.length; i++) {
    if(animals[i].species=='dog'){
        dogs.push(animals[i])
    }
}
console.log(dogs)
*/

// In functional programming we can do like this
// 1st way
var dogs = animals.filter((animal)=>{
    return animal.species == 'dog'
})
// console.log(dogs);

// 2nd way
var isDog = function(animal){
    return animal.species == 'dog'
}
var dogs2 = animals.filter(isDog)
// var otherAnimals = animals.reject(isDog)
console.log(dogs2);
console.log(otherAnimals);