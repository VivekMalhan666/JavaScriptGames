document.addEventListener('DOMContentLoaded', () => {
//card  options
const cardArray = [
    {
        name  : 'fries',
        img : 'images/fries.png'
    },
    {
        name  : 'fries',
        img : 'images/fries.png'
    },
    {
        name  : 'cheesburger',
        img : 'images/cheeseburger.png'
    },
    {
        name  : 'cheesburger',
        img : 'images/cheeseburger.png'
    },
    {
        name  : 'ice-cream',
        img : 'images/ice-cream.png'
    },
    {
        name  : 'ice-cream',
        img : 'images/ice-cream.png'
    },
    {
        name  : 'hotdog',
        img : 'images/hotdog.png'
    },
    {
        name  : 'hotdog',
        img : 'images/hotdog.png'
    },
    {
        name  : 'milkshake',
        img : 'images/milkshake.png'
    },
    {
        name  : 'milkshake',
        img : 'images/milkshake.png'
    },
    {
        name  : 'pizza',
        img : 'images/pizza.png'
    },
    {
        name  : 'pizza',
        img : 'images/pizza.png'
    },
]
cardArray.sort(() => 0.5 - Math.random())
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
const reset = document.querySelector('#reset')
reset.disabled = true
cardsChosen = []
cardsChosenId =[]
cardsWon = []

//create the board
function createBoard(){
    for (let i = 0 ; i <cardArray.length; i++ ){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipcard)
        grid.appendChild(card)
    }
}

//Check your card
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const OptionOneId = cardsChosenId[0]
    const OptionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]){
        alert('Match found by you')
        cards[OptionOneId].setAttribute('src' ,'images/white.png')
        cards[OptionTwoId].setAttribute('src' ,'images/white.png')
        cardsWon.push(cardsChosen)
        cards[OptionOneId].removeEventListener('click',flipcard)
        cards[OptionTwoId].removeEventListener('click',flipcard)
    }else{
        cards[OptionOneId].setAttribute('src' ,'images/blank.png')
        cards[OptionTwoId].setAttribute('src' ,'images/blank.png')
        alert('Wrong Match')
    }
    cardsChosen=[]
    cardsChosenId=[]
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations You have Won'
        reset.disabled = false
        reset.addEventListener('click',resetGame)
    }
}

//Flip your card
function flipcard(){
    var CardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[CardId].name)
    cardsChosenId.push(CardId)
    this.setAttribute('src', cardArray[CardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}

//Reset game
function resetGame(){
    location.reload()
}
createBoard()

})