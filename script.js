"use strict";

// TESTING COMIT

// TASKS

// ROLLING DICE (roll click function)

// Listen for click on roll dice button

// When roll dice button is clicked, generate a random number between 1 & 6

// listen for the different cases between 1 & 6 and display the correct dice image

//e.g if roll is 3, use this as the input for switch statement - 3 = dice-3.png

//If anything other than a 1, add dice roll to the score and display the score

// Check if roll is a 1, if it is - switch to the next player

const player1 = {
  score: 0,
  currentScore: 0,
  currentPlayer: true,
};

const player2 = {
  score: 0,
  currentScore: 0,
  currentPlayer: false,
};

const rollBtn = document.querySelector(".btn--roll");

let diceImg = document.querySelector(".dice");

let p1Score = document.querySelector("#score--1");
p1Score.textContent = player1.score;
let p1CurrentScore = document.querySelector("#current--1");

let p2Score = document.querySelector("#score--2");
p2Score.textContent = player2.score;
let p2CurrentScore = document.querySelector("#current--2");

const p1Active = document.querySelector("player--1");
const p2Active = document.querySelector("player--2");

console.log(diceImg);

console.log(player1, player2);

// Random number function - set min, max values as inputs when calling
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

rollBtn.addEventListener("click", function () {
  //   console.log("Roll button clicked");
  let rollNumber = randomIntFromInterval(1, 6);
  console.log(`Roll is ${rollNumber}`);
  let randomDiceImage = "dice-" + rollNumber + ".png";
  diceImg.setAttribute("src", randomDiceImage);

  // Check if player 1 is active (is by default)
  if (player1.currentPlayer === true) {
    // If 1 is rolled, switch player to player 2
    if (rollNumber === 1) {
      player2.currentPlayer = true;
      player1.currentPlayer = false;
    } else {
      // Add roll number to player1 current score
      player1.score = rollNumber + player1.score;
      // Update the website with the player 1 current score
      p1Score.textContent = player1.score;
    }
  } else if (player2.currentPlayer === true) {
    // If 1 is rolled, switch player to player 1
    if (rollNumber === 1) {
      player1.currentPlayer = true;
      player2.currentPlayer = false;
    } else {
      // Add roll number to player1 current score
      player2.score = rollNumber + player2.score;
      // Update the website with the player 1 current score
      p2Score.textContent = player2.score;
    }
  }
});

// HOLDING (hold click)

// Listen for hold button click

// If clicked, add the CURRENT SCORE to the OVERALL SCORE for the current player

// Check if overall score is =>50, if so current player wins, if not switch to the other player

// RESETTING GAME (new game click)

// Reset all variables, scores to 0

// Set player one as the startin player
