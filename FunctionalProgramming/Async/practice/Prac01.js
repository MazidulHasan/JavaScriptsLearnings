const myPromise = new Promise((resolve,reject) => {
    let success = false;
    if (success) {
        resolve("The data is success");
    }else{
        reject("The data failed");
    }
})

myPromise
    .then((message)=>{
        console.log(message);
    })
    .catch((message)=>{
        console.log(message);
    })