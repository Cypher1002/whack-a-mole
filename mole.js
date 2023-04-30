const squares = document.querySelectorAll('.square')
const mole =document.querySelector('.mole')
const timeLeft =document.querySelector('#time-left')
const score =  document.querySelector('#score')

let result =0
let hitPosition
let currentTime =10
let timerId = null
function randomSquare(){
    squares.forEach(square=>{
        square.classList.remove('mole')
    })
    console.log(result)
    let randomPosition = squares[Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole')
    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown',()=> { console.log(result)
        if(square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition =null
        }
    })
})

function moveMole(){
    timerId = setInterval(randomSquare,500)
}

moveMole()

function countdown(){
currentTime--
timeLeft.textContent = currentTime

if(currentTime== 0){
    clearInterval(countdownTimerId)
    clearInterval(timerId)
    alert('game over!!!')
}
}
let countdownTimerId = setInterval(countdown,1000)

