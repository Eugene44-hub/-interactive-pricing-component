const range = document.querySelector('input[type=range]');
const money = document.querySelector('.dollar')
range.addEventListener('input', e => {
    console.log(Numbue(range.value).toPrecision(2))
    money.textContent = `$${(range.value).toPrecision(2)}`

})