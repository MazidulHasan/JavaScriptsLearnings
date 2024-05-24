const paymentSuccess = true;
const marks = 90;

function enrollemnt() {
    console.log('Course enrollment in progress');
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (paymentSuccess) {
                resolve();
            }
            else{
                reject('Payment is not successfull');
            }
        }, 2000);
    })
    return promise;
}

function progress() {
    console.log('Course progress in progress');
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (marks>80) {
                resolve();
            }
            else{
                reject('Marks is less than 80. Not eligible');
            }
        }, 3000);
    })
    
    return promise;
}

function getCertificate() {
    console.log('Preparing Certificate ');
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve ("Congrats got the certificate!!");
        }, 1000);
    })
    return promise;
}

// part1
// enrollemnt()
//     .then(progress)
//     .then(getCertificate)
//     .then((value)=>{
//         console.log(value);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// Part2
enrollemnt()
    .then(()=>{
        return progress()
    })
    .then(()=>{
        return getCertificate()
    })
    .then((value)=>{
        return console.log(value);
    })
    .catch((err)=>{
        console.log(err);
    })