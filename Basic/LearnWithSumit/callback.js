// a callback is a function passed as an argument to another function


function display(param1) {
    console.log(param1);
}

function calculator(num1,num2) {
    let sum = num1+num2;
    return sum;
}

function calculator_withDisplay(num1,num2) {
    let sum = num1+num2;
    display(sum)
}

function calculator_withDisplay_callback(num1,num2, callback) {
    let sum = num1+num2;
    if(callback) callback(sum);
}

//here we need two functions to call
let result = calculator(5,5); 
display(result);

//here the display function is fixed
calculator_withDisplay(4,4);

//now we can send any function for callback
calculator_withDisplay(4,4,display);