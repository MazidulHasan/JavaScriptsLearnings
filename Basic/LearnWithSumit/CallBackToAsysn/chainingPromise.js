function fetchData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve([1,2,3,4,5]);
        }, 2000);
    });
}

function processData(arrayData) {
    return new Promise((resolve,reject)=>{
        console.log('waiting for porcessing data');
        setTimeout(() => {
            for (let data = 0; data < arrayData.length; data++) {
                arrayData[data] = arrayData[data]*2;
            }
            resolve(arrayData);
        }, 1000);
    });
}

function successMessage(array) {
    for (let data = 0; data < array.length; data++) {
        console.log(array[data]);
    }
}

function error(error) {
    console.log(error);
}

// fetchData()
//     .then(processData)
//     .then(successMessage)
//     .catch(error)


// or we can write in this way also

fetchData()
    .then((data)=>{
        return processData(data)
    })
    .then((array)=>{
        return successMessage(array)
    })
    .catch((error)=>{
        error(error)
    })