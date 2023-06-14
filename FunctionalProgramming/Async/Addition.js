async function addition(param1,param2) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(param1+param2)
        }, 2000);
    })
}

module.exports = { addition };