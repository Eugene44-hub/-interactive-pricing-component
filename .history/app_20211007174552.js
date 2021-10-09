const range = document.querySelector('input[type=range]');
const money = document.querySelector('.dollar')
range.addEventListener('input', e => {
    if (range.value < 10) {

    }

    // money.textContent = `$${(range.value).toPrecision(2)}`

})