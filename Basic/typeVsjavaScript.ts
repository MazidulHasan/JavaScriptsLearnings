// Javascript does not mind to change the type of variable
// like when i assign a value to "x" with a string "test"
// and then if i later update the value of "x" with 3 (which is a number)
// it will not be possible in typeScirpt. As it is very strict with type
// we can just update the value of x with string only

var name1 = "Name1";
var name2:string = "Name1";
var name3:number = 2;


type Customer = {firstName: string, lastName: string, active:boolean}


// here we can not add any value for customer type, as TS strick data type and object
var firstCustomer: Customer = {
    firstName:"John",
    lastName:"Smith",
    active:true
}