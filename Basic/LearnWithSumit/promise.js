const status = true;
console.log('task 1');
const promise = new Promise(function(resolve,reject) {
    setTimeout(() => {
        if (status) {
            resolve('Task 2')
        }
        else{
            reject('failed')
        }
    }, 2000);
})

promise
    .then((value)=>{
        console.log(value);
    })
    .catch((err)=>{
        console.log(err);
    })
console.log('task 3');