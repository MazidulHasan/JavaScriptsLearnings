const car = {
    name:"Honda",
    model: 200,
    weight:"900KG",
    color:"Red",
    start: function(){
        console.log('Car start');
    },
    drive: function() {
        console.log('Car is driving');
    }
}

console.log(car.weight);
console.log(car['model']);
car.start();