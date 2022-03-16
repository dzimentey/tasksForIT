
const firstInput = document.querySelector('.input-text')
const secondInput = document.querySelector('.show-text')

const changeValue = () => {
    secondInput.value = firstInput.value
}

const withDelay = () => {
    setTimeout(changeValue, 1000)
}

firstInput.addEventListener('input', withDelay)


