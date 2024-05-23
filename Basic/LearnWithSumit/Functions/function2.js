//if we send premetive value as an argument then it will not change value 
let val1 = 8;
function change_name(value) {
    value = 10;
    return value;
}

console.log(change_name(val1)); 
console.log(val1);


// if we send object as an argument then the value inside it will change

let obj1 = {
    one:1,
    two:2
}

function chageData(objectT){
    objectT.one = 25
    return objectT.one;
}

console.log("Changed as: "+chageData(obj1));
console.log("Old Data also changed as: "+obj1.one);

// so object will send its referece as an argument
