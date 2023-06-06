function Person(saying) {
    this.saying = saying
}

Person.prototype.talk = function(){
    console.log('I say:', this.saying);
}

var crockford = new Person("Ola amigos")
crockford.talk()

//what new does::
//1st create the new object
//2nd sets the prototype
//3rd creat a constructor