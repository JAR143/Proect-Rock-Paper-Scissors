// random choice from computer
function getComputerChoice () {
    let compChoice = Math.floor(Math.random() * 3 + 1);

    if(compChoice == 1) {
        console.log("Computer chose: Rock");
        return compChoice;
    } else if (compChoice == 2) {
        console.log("Computer chose: Paper");
        return compChoice;
    } else {
        console.log("Computer chose: Scissor");
        return compChoice;
    }
    
}


// get choice from player
function getHumanChoice () {
    let choice = prompt("Rock\nPaper\nScissor");
    console.log("Player chose: " + choice);
    return choice
}

