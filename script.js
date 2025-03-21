console.log("Rock, Paper, Scissors")

function getComputerChoice () {
   const randomNum = Math.floor(Math.random() * 3);

   switch (randomNum) {
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissors";
   }
}

function getHumanChoice () {
    let userInput;
    
    while (true) {
        userInput = prompt("Enter\n1 for Rock\n2 for Paper\n3 for Scissors:");

        if (userInput === "1") return userInput = "rock";
        if (userInput === "2") return userInput =  "paper";
        if (userInput === "3") return userInput =  "scissors";

        alert("Invalid choice! Please enter 1, 2, or 3.");
        
    }
}

let humanScore = 0;
let computerScore = 0;


function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!"
    }

    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats Rock!"
    }

    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You Win! Rock beats Scissors!"
    }

    if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You Win! Paper beats Rock!"
    }

    if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You Lose! Scissors beats Paper!"
    }

    if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors!"
    }

    if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You Win! Scissors beats Paper!"
    }
    
}

function playGame () {

    for(let round = 0; round < 5; round++ ) {
        


        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(computerSelection)


        console.log(playRound(humanSelection, computerSelection))

        console.log("Your Score:", humanScore)
        console.log("Computer Score:", computerScore)

    }

    if (humanScore > computerScore) {

        return "Game Over! You Win!"
    }

    else if (humanScore === computerScore) {
        return "Game Over! It's a Tie!"
    }

    else {
        return "Game Over! You Lose!"
    }

    
}


console.log(playGame())




/*


console.log(getComputerChoice())
console.log(getHumanChoice())
*/