// random choice from computer
function getComputerChoice () {
    let compChoice = Math.floor(Math.random() * 3 + 1);

    if(compChoice == 1) {
        return "Rock";
    } else if (compChoice == 2) {
        return "Paper";
    } else {
        return "Scissor";
    }
    
}


// get choice from player
function getHumanChoice () {
    let choice = prompt("Rock\nPaper\nScissor");
    return choice
}

let humanScore = 0;
let computerScore =0;

function playRound (humanChoice, computerChoice) {
    
    if (
        humanSelection == "Rock" && computerSelection == "Rock" ||
        humanSelection == "Paper" && computerSelection == "Paper" ||
        humanSelection == "Scissor" && computerSelection == "Scissor"
    ) {
        console.log("It's a tie!");
    } else if (
        humanSelection == "Rock" && computerSelection == "Scissor" ||
        humanSelection == "Paper" && computerSelection == "Rock" ||
        humanSelection == "Scissor" && computerSelection == "Paper" 
    ) {
        console.log(`Yeayy! you win ${humanSelection} beats ${computerSelection}`);
        console.log("Player: " + ++humanScore);
    } else {
        console.log(`You lose. ${computerSelection} beats ${humanSelection}`);
        console.log("Computer: " + ++computerScore);
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
