
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Generates a random number with range 1-6

randomImageSource = "images/dice" + randomNumber1 + ".png"; //Concactenates img path with randomNumber, creating a random path each time

 var img1 = document.querySelectorAll("img")[0] //Select img1

img1.setAttribute("src", randomImageSource); //Change source path

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImageSource2);

var h1 = document.querySelector("h1"); //Selected h1

if (randomNumber1 === randomNumber2){
    h1.innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2){
    h1.innerHTML = "🏆Player 1 Wins!";
} else {
    h1.innerHTML = "Player 2 Wins🏆"
}