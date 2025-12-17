let boxes = document.querySelectorAll(".grid-Box");
let reset = document.querySelector("#reset");
let info = document.querySelector(".info");
let turn = "X";

reset.addEventListener('click',()=>{
    boxes.forEach((ele =>{
        ele.textContent = "";
    }))
    turn = 'X';
    info.textContent = `Turn for ${turn}`
})

const changeTurn = (turn) =>{
       if(turn === "X") return "0";
    else return "X";
}
boxes.forEach((ele) =>
{
    ele.addEventListener('click',()=>{
        if(ele.textContent !== "") return;
        ele.textContent = turn;
        turn = changeTurn(turn);
        info.textContent = `Turn for ${turn}`;
    })
})