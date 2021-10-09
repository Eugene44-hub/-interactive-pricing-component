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

circle.addEventListener('click', e => {
    if (circle.style.left === '0%') {
        circle.style.left = '60%'
    } else {
        circle.style.left = '0%'
    }
})

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "pink";
    }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes