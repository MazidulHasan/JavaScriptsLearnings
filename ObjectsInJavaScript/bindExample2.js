function talk() {
    console.log(this.sound);
}

let dog = {
    sound: 'Talking like a dog, woolf!'
}

let cat = {
    ear: "Small",
    sound: 'Talking like a cat, muuuue!'
}
let talkikeADog = talk.bind(dog)
let talkikeACat = talk.bind(cat)

talkikeADog()
talkikeACat()