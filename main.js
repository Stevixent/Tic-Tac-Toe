let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
//winning pattern array

let winnningPattern = [
    [0,1,2],
    [0,3,6],
    [2,5,8], 
    [6,7,8], 
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6],
];

//player 'x' plays first
let xTurn = true;
let count = 0;

// This function is executed when a player wins
const winFunction = (letter) => {
    disabledButtons();
}
//Disable all buttons
const disabledButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    //enable popup
    popupRef.classList.remove("hide")
}

//win logic
const winChecker = () => {
    //loop through all win patterns
    for(let i of winnningPattern){
        let[element1, element2, element3] = [ 
            btnRef[i[0]].innerText, 
            btnRef[i[1]].innerText, 
            btnRef[i[2]].innerText,
        ];
        //check if elements are filled
        //if 3 empty elements are the same and would win
        if(element1 != "" && element2 != "" & element3 != ""){
            if(element1 == element2 && element2 == element3){
                // if all 3 buttons have same values then pass the value to winFunction
                winFunction(element1);
            }
        } 
    }
};

//Display X/O on click
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            //display X
            element.innerText = "X";
            element.disabled = true
        } else{
            xTurn = true;
            //display O
            element.innerText = "O";
            element.disabled = true;
        }
        //increment count on each click
        count += 1;
        if (count === 9) {
            //A draw since there are a total of 9 boxed

        }
        //check for win on every click
        winChecker();
    });
})