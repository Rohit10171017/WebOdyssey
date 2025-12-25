let boxes = document.querySelectorAll(".grid-Box");
let reset = document.querySelector("#reset");
let info = document.querySelector(".info");
let winModal = document.querySelector(".modal");
let winmsg = document.querySelector(".Win-Msg");
let ArrayBox = Array.from(boxes);
let PlayAgain = document.querySelector(".Play-again");
const tingX = new Audio("/Audio/TicTacToe/X.wav");
const ting0 = new Audio("/Audio/TicTacToe/0.wav");
const tingWin = new Audio("/Audio/TicTacToe/Win.wav");
const tingStart = new Audio("/Audio/TicTacToe/Start.mp3");
const tingDraw = new Audio("/Audio/TicTacToe/Draw.mp3");
let turn = "X";
let isGameOver = false;

reset.addEventListener("click", () => {
  boxes.forEach((ele) => {
    ele.textContent = "";
  });
  turn = "X";
  isGameOver = false;
  info.textContent = `Turn for ${turn}`;
});

const resetFun = () => {
  tingStart.play();
  boxes.forEach((ele) => (ele.textContent = ""));
  turn = "X";
  isGameOver = false;
  info.textContent = `Turn for ${turn}`;
  winModal.style.display = "none";
};

const changeTurn = (turn) => {
  if (turn === "X") return "0";
  else return "X";
};

const checkWin = () => {
  const check = ArrayBox.every((ele) => ele.textContent !== "");
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let i;
  for (i = 0; i < win.length; i++) {
    let indexes = win[i];
    let val1 = ArrayBox[indexes[0]].textContent;
    let val2 = ArrayBox[indexes[1]].textContent;
    let val3 = ArrayBox[indexes[2]].textContent;
    if (val1 === "" || val2 === "" || val3 === "") continue;
    if (val1 === val2 && val2 === val3) {
      tingWin.play();
      let winner = ArrayBox[indexes[0]].textContent;
      info.textContent = `${winner} Won`;
      isGameOver = true;
      winmsg.textContent = `Player ${winner} wins!🎉`;
      winModal.style.display = "flex";
      PlayAgain.addEventListener("click", resetFun);
    }
  }
  if (check === true && isGameOver === false) {
    tingDraw.play();
    winmsg.textContent = `It's a Draw 🤝`;
    winModal.style.display = "flex";
    PlayAgain.addEventListener("click", resetFun);
  }
};
boxes.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (ele.textContent !== "") return;
    if (isGameOver) return;
    if (turn === "X") {
      tingX.play();
    } else {
      ting0.play();
    }
    ele.textContent = turn;
    turn = changeTurn(turn);
    info.textContent = `Turn for ${turn}`;
    checkWin();
  });
});
