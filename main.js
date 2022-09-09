//Variáveis
const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
   //console.log(e.key) descobrir a tecla
    if(e.key == "Enter") {
        handleResetClick()
    }
})

//função callback
function handleTryClick(event) {
    event.preventDefault() //não faça o padrão desse evento

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screenTwo.querySelector("h2").innerText = `Got it right in ${xAttempts} tries!`
    }
    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
}

function toggleScreen() {
    screenOne.classList.toggle("hide")
    screenTwo.classList.toggle("hide")
}