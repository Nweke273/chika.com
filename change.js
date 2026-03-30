let redBtn = document.getElementById("redColo");
let blueBtn = document.getElementById("blueColo");
let greenBtn = document.getElementById("greenColo");
let randBtn = document.getElementById("randomColor");


let colors = ['red', 'blue', 'yellow', 'brown', 'pink', 
    'gold', 'silver', 'darkblue', 'skyblue'];

function changeColor(){
    let color = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[color]
};


randBtn.addEventListener("click", changeColor);
redBtn.addEventListener("click", redColor);
blueBtn.addEventListener("click", blueColor);
greenBtn.addEventListener("click", greenColor);

function redColor() {
    document.body.style.backgroundColor = "red"
}

function blueColor() {
    document.body.style.backgroundColor = "blue"
}
function greenColor() {
    document.body.style.backgroundColor = "green"
}


