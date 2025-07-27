
const myButton = document.getElementById("randomBtn");
const myLabel = document.getElementById("display");
const max = 10;
const min = 1;

let randomNum = 0;

myButton.onclick = function () {
    randomNum = Math.floor((Math.random()*6)+1);
    myLabel.textContent = randomNum;
}
