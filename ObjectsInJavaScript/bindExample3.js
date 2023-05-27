let talk = function(){
    console.log(this.sound);
}

let dog = {
    woof : talk,
    sound : "vuvu"
}

let chuwawa = {
    ghueghue : dog.woof,
    sound : "wwwwwwwof"
}

chuwawa.ghueghue()