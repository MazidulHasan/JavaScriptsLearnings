const squars = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitposition
let currentTime = 10
let timerId = null

function randomSquare() {
    //removing if any mole exists
    squars.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squars[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')

    hitposition = randomSquare.id
}

squars.forEach(square =>{
    square.addEventListener('mousedown', ()=>{
        if (square.id == hitposition) {
            result++
            score.textContent = result
            hitposition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare,500)
}

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0 ) {
        clearInterval(countdownTimerId)
        clearInterval(timerId)
        alert("Game Over, your score is : "+ result)
    }
}

let countdownTimerId = setInterval(countDown,1000)

moveMole()