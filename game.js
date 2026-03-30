// assumptions:
// we have to prompt the users to get their input
// the computers selection will be random.
// we have to compare user and computers choice.
// we need to announce the winner.
// after the winner is announced, we may want to ask the winner to play again or quit from the game.

function rockPaperScissorsGame() {
console.log("Getting Started with the Rock, Paper or Scissors Game");

const userChoicePrompt = prompt("Enter Rock Paper or Scissors")
let userChoice = userChoicePrompt.toLowerCase();

// computer random number(0, 1, or 2)
let randomNo = Math.floor(Math.random()*3) 
let computerChoice;
switch(randomNo) {
case 0:
computerChoice = "rock";
break;

case 1: 
computerChoice = "paper";
break;

case 2: 
computerChoice = "scissors";
break;
}

console.log("User selected", userChoice);
console.log("computer selected", computerChoice);

if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
) {
    console.log("the user win, yah!!");
}else if(userChoice === computerChoice){
    console.log("the game is a tie");
}else if(

      (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")  
){
    console.log("oh Ho... computer wins!!");
}else{
    console.log("pls check the input we did not understand it")
}

const playAgainPrompt = prompt("do you want to play again (yes/no)")
const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

if(playAgain === "yes"){
   rockPaperScissorsGame();
}else{
    console.log("thanks for playing! see you Next Time")
}


}



rockPaperScissorsGame(); 

