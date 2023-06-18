export default function secondFunction(val1,val2){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(param1+param2)
        }, 2000)
    });
}