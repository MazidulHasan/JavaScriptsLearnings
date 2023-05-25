var namE = "Frist"
function printName() {
    console.log('Hello : '+ namE);
}
namE = "Updated"
printName()

if (Math.random() > 0.5) {
    var x = 1;
  } else {
    var x = 2;
  }
  console.log(x);


function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  
  console.log(add5(4));
  console.log(add10(8));
  