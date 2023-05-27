let talk = function(){
    console.log(this.sound);
}

let dog = {
    speak: talk,
    sound: "Woof"
}

dog.speak()

dog.speak = talk.bind(dog)
let dogSpeak = dog.speak
dogSpeak()