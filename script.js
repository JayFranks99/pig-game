"use strict";

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

// VARS
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const newBtn = document.querySelector(".btn--new");

let diceImg = document.querySelector(".dice");

let p1Score = document.querySelector("#score--1");
p1Score.textContent = player1.score;
let p1CurrentScore = document.querySelector("#current--1");

let p2Score = document.querySelector("#score--2");
p2Score.textContent = player2.score;
let p2CurrentScore = document.querySelector("#current--2");

let p1Active = document.querySelector(".player--1");
let p2Active = document.querySelector(".player--2");

console.log(player1, player2);

// Random number function - set min, max values as inputs when calling
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Switching player functions

const switchToPlayer2 = function () {
  // Switching active player
  player2.currentPlayer = true;
  player1.currentPlayer = false;
  p2Active.classList.add("player--active");
  p1Active.classList.remove("player--active");
  // Ressetting the score
  player1.score = 0;
  p1Score.textContent = player1.score;
};

const switchToPlayer1 = function () {
  // Switching active player
  player1.currentPlayer = true;
  player2.currentPlayer = false;
  p1Active.classList.add("player--active");
  p2Active.classList.remove("player--active");
  // Ressetting the score
  player2.score = 0;
  p2Score.textContent = player2.score;
};

// End of switching player functions

// ROLL BUTTON FUNCTION
rollBtn.addEventListener("click", function () {
  // Creating random number - setting the dice image
  let rollNumber = randomIntFromInterval(1, 6);
  console.log(`Roll is ${rollNumber}`);
  let randomDiceImage = "dice-" + rollNumber + ".png";
  diceImg.setAttribute("src", randomDiceImage);

  // Check if player 1 is active (is by default)
  if (player1.currentPlayer === true) {
    // If 1 is rolled, switch player 1 to player 2
    if (rollNumber === 1) {
      switchToPlayer2();
    } else {
      // Add roll number to player1 current score
      player1.score = rollNumber + player1.score;
      // Update the website with the player 1 current score
      p1Score.textContent = player1.score;
      console.log(player1.score, player2.score);
    }
  } else if (player2.currentPlayer === true) {
    // If 1 is rolled, switch player 2 to player 1
    if (rollNumber === 1) {
      switchToPlayer1();
    } else {
      // Add roll number to player1 current score
      player2.score = rollNumber + player2.score;
      // Update the website with the player 1 current score
      p2Score.textContent = player2.score;
      console.log(player1.score, player2.score);
    }
  }
});

// HOLD BUTTON FUNCTION
holdBtn.addEventListener("click", function () {
  if (player1.currentPlayer === true) {
    // Setting the current score
    player1.currentScore = player1.score + player1.currentScore;
    p1CurrentScore.textContent = player1.currentScore;
    // Switching active player // Ressetting the score
    switchToPlayer2();
  } else if (player2.currentPlayer === true) {
    // Setting the current score
    player2.currentScore = player2.score + player2.currentScore;
    p2CurrentScore.textContent = player2.currentScore;
    // Switching active player // Ressetting the score
    switchToPlayer1();
  }

  if (player1.currentScore >= 25) {
    p1Active.classList.add("player--winner");
  } else if (player2.currentScore >= 25) {
    p2Active.classList.add("player--winner");
  }
});

// RESETTING GAME (new game click)
newBtn.addEventListener("click", function () {
  player1.score = 0;
  player1.currentScore = 0;
  p1CurrentScore.textContent = player1.currentScore;
  p1Score.textContent = player1.score;
  player1.currentPlayer = true;
  p1Active.classList.add("player--active");
  player2.score = 0;
  player2.currentScore = 0;
  p2CurrentScore.textContent = player2.currentScore;
  p2Score.textContent = player2.score;
  player2.currentPlayer = false;
  p2Active.classList.remove("player--active");
  p1Active.classList.remove("player--winner");
  p2Active.classList.remove("player--winner");
});
