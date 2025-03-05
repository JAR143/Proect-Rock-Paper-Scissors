function getComputerChoice () { 
    if (Math.floor(Math.random() * 3) === 1) {
        return "Rock";
    } else if (Math.floor(Math.random() * 3) === 2) {
        return "Paper";
    } else {
        return "Scissor";
    }
}
console.log(getComputerChoice());

function getHumanChoice () {
    let choice = prompt("Choose\n  Rock\n  Paper\n  Scissor");
    
    if (choice == "Rock") {
        return "Rock";
    } else if (choice == "Paper") {
        return "Paper";
    } else {
        return "Scissor";
    }
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

}