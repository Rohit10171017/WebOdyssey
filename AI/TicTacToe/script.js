const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let board = Array(9).fill("");
let gameActive = true;

const HUMAN = "X";
const AI = "O";

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

// ==========================
// Player Click
// ==========================
cells.forEach(cell => {
  cell.addEventListener("click", () => {
    const index = cell.dataset.index;

    if (board[index] || !gameActive) return;

    makeMove(index, HUMAN);
    if (checkGameEnd(HUMAN)) return;

    setTimeout(computerMove, 500);
  });
});

// ==========================
// Make Move
// ==========================
function makeMove(index, player) {
  board[index] = player;
  cells[index].textContent = player;
}

// ==========================
// Computer AI
// ==========================
function computerMove() {
  let move =
    findWinningMove(AI) ??
    findWinningMove(HUMAN) ??
    getRandomMove();

  makeMove(move, AI);
  checkGameEnd(AI);
}

// ==========================
// AI Helpers
// ==========================
function findWinningMove(player) {
  for (let pattern of winPatterns) {
    const [a,b,c] = pattern;
    const values = [board[a], board[b], board[c]];

    if (values.filter(v => v === player).length === 2 &&
        values.includes("")) {
      return pattern[values.indexOf("")];
    }
  }
  return null;
}

function getRandomMove() {
  const empty = board
    .map((v,i) => v === "" ? i : null)
    .filter(v => v !== null);

  return empty[Math.floor(Math.random() * empty.length)];
}

// ==========================
// Win / Draw Check
// ==========================
function checkGameEnd(player) {
  if (isWinner(player)) {
    statusText.textContent = player === HUMAN ? "You Win 🎉" : "Computer Wins 🤖";
    gameActive = false;
    return true;
  }

  if (!board.includes("")) {
    statusText.textContent = "Draw 😐";
    gameActive = false;
    return true;
  }

  return false;
}

function isWinner(player) {
  return winPatterns.some(pattern =>
    pattern.every(i => board[i] === player)
  );
}

// ==========================
// Reset
// ==========================
function resetGame() {
  board.fill("");
  cells.forEach(c => c.textContent = "");
  gameActive = true;
  statusText.textContent = "Your turn (X)";
}
