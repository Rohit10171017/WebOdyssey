let boxes = document.querySelectorAll(".grid-Box");
let reset = document.querySelector("#reset");
let info = document.querySelector(".info");
let winModal = document.querySelector(".modal");
let winmsg = document.querySelector(".Win-Msg");
let ArrayBox = Array.from(boxes);
const tingX = new Audio("/Audio/TicTacToe/X.wav");
const ting0 = new Audio("/Audio/TicTacToe/0.wav");
const tingWin = new Audio("/Audio/TicTacToe/Win.wav");
let turn = "X";
let isGameOver = false;

reset.addEventListener('click',()=>{
    boxes.forEach((ele =>{
        ele.textContent = "";
    }))
    turn = 'X';
    isGameOver = false;
    info.textContent = `Turn for ${turn}`
})

const changeTurn = (turn) =>{
       if(turn === "X") return "0";
    else return "X";
}

const checkWin = () =>
{
    const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    for(let i=0 ; i<win.length ; i++)
    {
        let indexes = win[i];
        let val1 = ArrayBox[indexes[0]].textContent ;
        let val2 = ArrayBox[indexes[1]].textContent;
        let val3 = ArrayBox[indexes[2]].textContent;
        if(val1 === '' || val2 === '' || val3 === '') continue;
        if(val1 === val2 && val2 === val3)
        {
            tingWin.play();
            let winner = ArrayBox[indexes[0]].textContent;
            info.textContent =`${winner} Won`;
            isGameOver = true;
            winmsg.textContent = `Player ${winner} wins!🎉`;
            winModal.style.display = "flex";
        } 
    }
}
boxes.forEach((ele) =>
{
    ele.addEventListener('click',()=>{
        if(ele.textContent !== "") return;
        if(isGameOver) return;
        if(turn === "X")
        {
            tingX.play();
        }
        else{
            ting0.play();
        }
        ele.textContent = turn;
        turn = changeTurn(turn);
        info.textContent = `Turn for ${turn}`;
        checkWin();
    })
})