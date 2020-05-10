const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeleft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result=0
let currentTime=timeleft.textContent

function randomSquare() {
    square.forEach(className => {
            className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    //assign hitpostion
    hitposition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseover', () => {
        if(id.id === hitposition){
            result = result + 1
            score.textContent = result
        }
    })
})

function moveMole(){
    let timerId = null
    timerId = setInterval(randomSquare,700)
}

moveMole()

function countDown() {
    currentTime--
    timeleft.textContent =currentTime
    if(currentTime === 0){
        clearInterval(timerId)
        if(!alert('Your Scored '+ result)){window.location.reload();}
    }
}
let timerId = setInterval(countDown,1000)