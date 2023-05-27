let dog = {
    sound: 'woof',
    talk : function() {
        console.log(this.sound);
    }
}

dog.talk();

let talkFunction = dog.talk
// talkFunction() this will give an undefined error

let boundFunction = talkFunction.bind(dog)
boundFunction()