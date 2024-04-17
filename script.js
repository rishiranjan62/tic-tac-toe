let boxes = document.querySelectorAll(".box");
let btnReset = document.querySelector("#btn-reset");
let btnNewgame = document.querySelector("#btn-newgame");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let gameContainer = document.querySelector(".container");
let title = document.querySelector(".name");
let turn = true;
const winningCombination=[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
];
for (const box of boxes) {
    box.addEventListener("click",()=>{
            if(turn){
                turn = false;
                box.innerText="X";
            }else{
                turn= true;
                box.innerText="O";
            }
            box.disabled=true;
            checkWinner();
    });
}

btnReset.addEventListener("click",()=>{
    reset();
});
const checkWinner=()=>{
    for (let combination of winningCombination) {
        let pos1=boxes[combination[0]].innerText;
        let pos2=boxes[combination[1]].innerText;
        let pos3=boxes[combination[2]].innerText;
        if(pos1 !="" && pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos1===pos3){
                showWinner(pos1);
            }
        }
    }
}
const reset=()=>{
    enableBoxes ();
    msgContainer.classList.add("hide");
    turn=true;
}
const enableBoxes =()=>{
    for (let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
    }
const disableBoxes =()=>{
for (let box of boxes) {
    box.disabled=true;
}
}

const showWinner=(winner)=>{
msg.innerText=`Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
btnReset.classList.add("hide");
gameContainer.classList.add("hide");
title.classList.add("hide");
}

btnNewgame.addEventListener ("click",()=>{
    reset();
    btnReset.classList.remove("hide");
    gameContainer.classList.remove("hide");
    title.classList.remove("hide");
});