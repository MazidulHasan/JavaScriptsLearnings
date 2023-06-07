const greeting = function(TypeOfGreetings){
    return function(firstNmae){
        return `${TypeOfGreetings} ${firstNmae}`
    }
}

const hello = greeting("Hello")
const hi = greeting("Hi")

console.log(hello("Fname")); 
console.log(hi("Lname")); 