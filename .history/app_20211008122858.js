const range = document.querySelector('input[type=range]');
const money = document.querySelector('.dollar')
range.addEventListener('input', e => {
            if (range.value < 10) {
                money.textContent = `$${Number(range.value).toPrecision(3)}`
            } else {
                money.textContent = `$${Number(range.value).toPrecision(4)}`
            }




            // money.textContent =