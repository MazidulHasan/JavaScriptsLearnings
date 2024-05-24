// By default async function return promise
//we can write await only inside a async function

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

async function course() {
    try {
        await enrollemnt();
        await progress();
        const message = await getCertificate();
        console.log(message);   
    } catch (error) {
        console.log(error);
    }
}

course();