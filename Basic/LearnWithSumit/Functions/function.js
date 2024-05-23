sleep("Task0",12);

function sleep(name,time) {
    let localName = 'new Data'
    console.log(name + ' is sleeping from '+time);
}

sleep("Task1",10);
sleep("Task2",11);


function multiplicatoin(a,b=5) {
    console.log(arguments);
    return a*b;
}

console.log(multiplicatoin(2,8,5,6));