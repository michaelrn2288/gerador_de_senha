import { arrayCharacters } from './char-groups'

const checkboxOptions = {
    numbers: document.querySelector('#numbers'),
    lettersLCase: document.querySelector('#letters-lower-case'),
    lettersUCase: document.querySelector('#letters-upper-case'),
    symbols: document.querySelector('#symbols')
}

export function getChosenCharacters() {
    let chosenCharacters = []
    for (let i = 0; i < 4; i++) {
        if (Object.values(checkboxOptions)[i].checked) {
            chosenCharacters = [...chosenCharacters, ...arrayCharacters[i]]
        }
    }
    return chosenCharacters
}

export function generatePassword(chosenCharacters) {
    const passwordLength = Number(document.querySelector('#password-length').value)
    let password = []
    for (let i = 0; i < passwordLength; i++) {
        password[i] = chosenCharacters[getRandomInt(0, chosenCharacters.length - 1)]
    }
    return password.join('')
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}