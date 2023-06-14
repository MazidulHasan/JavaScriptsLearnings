const Mult = require('../Async/Multiplicatin.js') 
const { addition } = require('../Async/Addition.js');

// import Mult from '../Async/Multiplication.js';
// import { addition } from '../Async/Addition.js';

(async () => {
    const mult = new Mult();

    let localNumber = 2;

    let additionResult = await addition(localNumber,2);

    const result = mult.multWithTen(additionResult)

    console.log(result);
})();