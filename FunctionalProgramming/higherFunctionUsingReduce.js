var orders = [
    {amount:250},
    {amount:400},
    {amount:300},
    {amount:100},
]
// var totalAmount = 0;
// for (let index = 0; index < orders.length; index++) {
//     totalAmount +=orders[index].amount;
// }
// console.log(totalAmount);

// This can be done in other way

var totalAmount = orders.reduce((sum, order)=>{
    console.log("Explain",sum,order);
    return sum+order.amount
},0)
