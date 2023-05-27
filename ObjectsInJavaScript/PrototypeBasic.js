function talk(params) {
    console.log(this.sound);
}

let animal = {
    talk : talk
}

let cat = {
    sound: "meeow"
}

let dog = {
    sound: "woof"
}

let bigDog = {
    howl: function () {
        console.log(this.sound.toUpperCase());
    }
}

Object.setPrototypeOf(cat, animal)
Object.setPrototypeOf(dog, animal)

cat.talk()
dog.talk()

Object.setPrototypeOf(bigDog, dog)
bigDog.howl()