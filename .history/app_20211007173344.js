const range = document.querySelector('input[type=range]');
const money = document.querySelector('.dollar')
range.addEventListener('input', e => {
    console.log(range.value)
    money.textContent = `${range}`

})