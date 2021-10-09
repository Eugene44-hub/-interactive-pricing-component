const range = document.querySelector('input[type=range]');
const money = document.querySelector('.dollar')
range.addEventListener('input', e => {
if (range.value < 10) {
    console.log(Number(range.value).toPrecision(3))
    dollar.textContent = `$${(range.value).toPrecision(4)}`;
}
} else {
console.log(Number(range.value).toPrecision(4))
dollar.textContent = `$${(range.value).toPrecision(4)}`
}




})
})