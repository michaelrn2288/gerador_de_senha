import './assets/css/style.css'
import { getChosenCharacters, generatePassword } from './modules/generators'

const button = document.querySelector('#btn-generate-password')

button.addEventListener('click', () => {
    const result = document.querySelector('#result')
    const chosenCharacters = getChosenCharacters()
    result.innerText = generatePassword(chosenCharacters)
    result.innerText !== '' && result.setAttribute('class', 'done')
})