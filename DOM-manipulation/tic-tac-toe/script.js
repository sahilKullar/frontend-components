const BOARD_WIDTH = 3;
const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let currentPlayer = 1;
let numMovesDone = 0;

const gameHeading = document.getElementById("game-heading");
const gameSquares = document.querySelectorAll(".game-square");
const restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", restartGame);

gameSquares.forEach((gameSquare) => {
  gameSquare.addEventListener("click", () => {
    makeMove(gameSquare);
  });
});

function makeMove(gameSquare) {
  gameSquare.textContent = currentPlayer === 1 ? "X" : "O";
  gameSquare.disabled = true;
  numMovesDone++;

  if (didPlayerWin()) {
    gameHeading.textContent = `Player ${currentPlayer} Won!`;
    endGame();
  } else if (numMovesDone >= BOARD_WIDTH * BOARD_WIDTH) {
    gameHeading.textContent = `Tie Game!`;
    endGame();
  } else {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    setCurrentPlayerHeading();
  }
}

function didPlayerWin() {
  const relevantText = currentPlayer === 1 ? "X" : "O";
  return WIN_CONDITIONS.some((condition) => {
    return condition.every((gameSquarePosition) => {
      return gameSquares[gameSquarePosition].textContent === relevantText;
    });
  });
}

function endGame() {
  restartButton.style.display = "block";
  gameSquares.forEach((gameSquare) => {
    gameSquare.disabled = true;
  });
}

function restartGame() {
  currentPlayer = 1;
  numMovesDone = 0;
  setCurrentPlayerHeading();
  gameSquares.forEach((gameSquare) => {
    gameSquare.textContent = "";
    gameSquare.disabled = false;
  });
  restartButton.style.display = "none";
}

function setCurrentPlayerHeading() {
  gameHeading.textContent = `Player ${currentPlayer}'s Turn`;
}
