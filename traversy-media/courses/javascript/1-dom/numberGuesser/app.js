// Game Values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI elements
const game = document.getElementById("game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.getElementById("guess-btn"),
  guessInput = document.getElementById("guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// Play Again event listener
game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  } else {
    //check if won
    if (guess === winningNum) {
      // Game Over - Won

      gameOver(true, `${winningNum} is correct! YOU WIN!`);
    } else {
      guessesLeft--;

      if (guessesLeft === 0) {
        // Game Over - Lost

        gameOver(
          false,
          `Game Over, you lost. The correct number was ${winningNum}!`
        );
      } else {
        // Game Continues - answer wrong

        // Change border color
        guessInput.style.borderColor = "red";

        // Clear input
        guessInput.value = "";
        // Tell  user its the wrong number
        setMessage(
          `${guess} is not correct. ${guessesLeft} guesses left`,
          "red"
        );
      }
    }
  }
});

// Game over
function gameOver(won, msg) {
  // Disable input
  guessInput.disabled = won;
  // Change border color
  guessInput.style.borderColor = won ? "green" : "red";
  message.style.color = won ? "green" : "red";
  setMessage(msg);

  // Play Again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

// Get Winning Numb
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
