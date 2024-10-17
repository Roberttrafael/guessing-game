import * as variables from "./variables.js"
import { toggleScreen } from "./toggle-screen.js"

let randomNumber = Math.round(Math.random() * 10)
let xTentativas = 1
console.log(randomNumber)

export function handleBtnTry() {
    event.preventDefault()

    if (inputNumber.value == randomNumber) {
        toggleScreen()

        variables.screen2.querySelector('h2').innerText = `Acertou em ${xTentativas} tentativas!`

    } if (inputNumber.value != randomNumber) {
        xTentativas++
    }
}

export function handleBtnReset() {
    toggleScreen()

    inputNumber.value = ''
    xTentativas = 1
    randomNumber = Math.round(Math.random() * 10)

}

