var isFlipped = false;
var firstCard;
var secondCard;

const cards = document.querySelectorAll(".card");
console.log(cards);
cards.forEach((card)=>{card.addEventListener("click", flip)})

function flip(){
    this.classList.add("flip")
    if(!isFlipped){
        isFlipped = true
        firstCard = this
        console.log(firstCard.dataset.image);
    }else{
        secondCard = this
        console.log(secondCard.dataset.image);
        checkResult()
    }
}

function checkResult(){
    if (firstCard.dataset.image === secondCard.dataset.image) {
        success()
    } else {
        fail()
    }
}

function success(){
    firstCard.removeEventListener("click",flip);
    firstCard.removeEventListener("click",flip);
    reset();
}

function fail(){
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 1000);
}

function reset(){
    isFlipped = false;
    firstCard = null;
    secondCard = null;
}