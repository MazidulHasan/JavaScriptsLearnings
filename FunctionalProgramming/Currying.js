let dragon = (dragName,size,element) =>
    dragName + ":" + 
    size + ":"+
    element+"."

console.log(dragon("Dragon",'Small',"fire"));


// now making it to a curry function

let dragonCurry = 
    dCName=>
        dcsize=>
            dcelement=>
                dCName + ":" + 
                dcsize + ":"+
                dcelement+"."

let dragonNameObj = dragonCurry("Dragon2")

console.log(dragonNameObj('Tiny')('Ice'));
