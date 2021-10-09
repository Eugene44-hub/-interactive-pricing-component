const range = document.querySelector('input[type=range]');
const money = document.querySelector('.dollar')
range.addEventListener('input', e => {
    console.log(Number(range.value).toPrecision)
        // money.textContent = `$${(range.value).toPrecision(2)}`

})