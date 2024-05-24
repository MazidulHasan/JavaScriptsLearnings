console.log('First task');

function wait_function(callback) {
    console.log('Start waiting for a task');
    setTimeout(() => {
        console.log('Task wait done');
        return callback();
    }, 2000);
}

function doMath(a,b) {
    return a*b;
}

console.log('Before calling the function');

//can not do in this way. Because wait_function will return undefined.
// And the setTimeout will pause its execution for 2 sec
// console.log(wait_function(()=>{
//     doMath(5*5);
// }));

wait_function(()=>{
    console.log(doMath(5,5))
})

console.log('At the end');
