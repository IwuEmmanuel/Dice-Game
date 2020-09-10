
// Creates a random number variable from 0 to 6
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

// Creates a path to the image dices 1-6
var randomDice1Source = "dice" + randomNumber1 + ".png";
var randomDice2Source = "dice" + randomNumber2 + ".png";

// targets and changes the dice randomly
document.querySelectorAll("img")[0].setAttribute("src", randomDice1Source);
document.querySelectorAll("img")[1].setAttribute("src", randomDice2Source);

// Checks wins or a draw and changes the text in h1.
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "✔Player 1 Wins!!!";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!!!✔";
}
else {
  document.querySelector("h1").innerHTML = "✖Draw"
}
