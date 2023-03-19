const cardArray = [
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const cardChosen = []
const cardsChosenIds = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click', fipCard)
        gridDisplay.appendChild(card)
        console.log(card);
    }
}
createBoard()


function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    if (cardChosen[0]==cardChosen[1]) {
        alert('You found a match')
        cards[cardChosen[0]].setAttribute('src','images/white.png')
        cards[cardChosen[1]].setAttribute('src','images/white.png')
    } 
}

function fipCard() {
    const cardId = this.getAttribute('data-id')
    console.log(cardArray);
    cardChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src',cardArray[cardId].img)
    if (cardChosen.length === 2) {
        setTimeout(checkMatch,500)
    }
}