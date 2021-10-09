const range = document.querySelector('input[type=range]');
const money = document.querySelector('.dollar');
const circle = document.querySelector('#circle')
range.addEventListener('input', e => {
    if (range.value < 10) {
        console.log(Number(range.value).toPrecision(3))
        money.textContent = `$${Number(range.value).toPrecision(3)}`;
    } else {
        console.log(Number(range.value).toPrecision(4))
        money.textContent = `$${Number(range.value).toPrecision(4)}`
    }
})

circle.addEventListener('click',)