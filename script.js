let firstDiv = document.getElementById ('div1');
let secondDiv = document.getElementById ('div2');
let thirdDiv = document.getElementById ('div3');

firstDiv.addEventListener ('click', function () {
    firstDiv.style.display = 'none';
})

secondDiv.addEventListener ('click', function () {
    secondDiv.style.display = 'none';
})

thirdDiv.addEventListener ('click', function () {
    thirdDiv.style.display = 'none';
});

function reset() {
    firstDiv.style.display = 'block';
    secondDiv.style.display = 'block';
    thirdDiv.style.display = 'block';
}
