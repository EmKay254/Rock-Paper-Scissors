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

// Game logic
function playGame() {
    
    var humanChoice = getHumanChoice();
    while (!humanChoice) {
        alert("Invalid choice. Please choose between Rock, Paper, or Scissors.");
        humanChoice = getHumanChoice();
    }

    var computerChoice = getComputerChoice();
    var round;
    var result = playRound(humanChoice, computerChoice);
    var humanScore = 0;
    var computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    
        if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Scissors" && computerChoice === "Paper" || humanChoice === "Paper" && computerChoice === "Rock") {
        
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            return "human";
        } else if (humanChoice === computerChoice) {
            
            console.log(`You both picked ${humanChoice}. It's a tie.`);
            return "tie";
        } else {
            
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            return "computer";
        }
    }

    for (round = 0; round < 5; round++) {
        // Compares the human choice and that of the computer and returns the winner
                
        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        } else {
            // No update as it's a tie
        }  
    }

    console.log("----------------------");
    console.log(`Round: ${round}`);
    console.log("----------------------");
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    console.log("----------------------");
}

