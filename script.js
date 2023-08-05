const startButton = document.getElementById("start-button");
const guessText = document.getElementById("guess-text");
const guessNumber = document.getElementById("guess-number");
const higherButton = document.getElementById("higher-button");
const lowerButton = document.getElementById("lower-button");
const correctButton = document.getElementById("correct-button");
const restartButton = document.getElementById("restart-button");

let minGuess = 1;
let maxGuess = 100;
let currentGuess;

startButton.addEventListener("click", startGame);
higherButton.addEventListener("click", guessHigher);
lowerButton.addEventListener("click", guessLower);
correctButton.addEventListener("click", guessCorrect);
restartButton.addEventListener("click", restartGame);

function startGame() {
  startButton.classList.add("hidden");
  guessText.classList.remove("hidden");
  guessNumber.classList.remove("hidden");
  higherButton.classList.remove("hidden");
  lowerButton.classList.remove("hidden");
  correctButton.classList.remove("hidden");
  guessNumber.textContent = getRandomGuess(minGuess, maxGuess);
  restartButton.classList.add("hidden");
}

function getRandomGuess(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessHigher() {
  minGuess =  1;
  currentGuess = getRandomGuess(minGuess, maxGuess);
  guessNumber.textContent = currentGuess;
}

function guessLower() {
  maxGuess = 100;
  currentGuess = getRandomGuess(minGuess, maxGuess);
  guessNumber.textContent = currentGuess;
}

function guessCorrect() {
  guessText.textContent = `I guessed it! Your number is ${currentGuess}.`;
  higherButton.classList.add("hidden");
  lowerButton.classList.add("hidden");
  correctButton.classList.add("hidden");
  restartButton.classList.remove("hidden");
}

function restartGame() {
  minGuess = 1;
  maxGuess = 100;
  currentGuess = getRandomGuess(minGuess, maxGuess);
  guessText.textContent = "Is your number:";
  guessNumber.textContent = currentGuess;
  restartButton.classList.add("hidden");
  higherButton.classList.remove("hidden");
  lowerButton.classList.remove("hidden");
  correctButton.classList.remove("hidden");
}
