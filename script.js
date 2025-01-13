// Get the computer choice
function getComputerChoice() {
    var computerChoice = Math.floor(Math.random() * 3) + 1; // Generates a random number between 1 and 3 and rounds it off so as to get a whole number

    // Assigns the random number to either Rock, Paper or Scissors
    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Get the human choice and validates it based on Rock, Paper or Scissors selections
function getHumanChoice() {
    var humanChoice = prompt("Rock Paper Scissors?: ").toLowerCase(); //Converts the users input into lowercase

    if (humanChoice === "rock") {
        return "Rock";
    } else if (humanChoice === "paper") {
        return "Paper";
    } else if (humanChoice === "scissors") {
        return "Scissors";
    } else {
        return null;
    }
}

// Variables to track the scores of the user and that of the computer
var humanScore = 0;
var computerScore = 0;

// Compares the human choice and that of the computer and returns the winner
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Scissors" && computerChoice === "Paper" || humanChoice === "Paper" && computerChoice === "Rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return human;
    } else if (humanChoice === computerChoice) {
        console.log(`You both picked ${humanChoice}. It's a tie.`);
        return tie;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return computer;
    }
}

if (playRound() === human) {
    return humanScore++;
} else if (playRound() === computer) {
    return computerScore++;
} else {
    return computerScore++;
    return humanScore++;
}