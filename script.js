/*
* This program is a game of Rock Paper Scissors between human and computer
* and plays a maximum of five rounds each round producing a winner and after the fifth round the overall winner is announced
*/

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round;

    // Plays the game a maximum of five rounds 
    for (round = 1; round <= 5; round++) {
        let humanChoice = getHumanChoice();
        while (!humanChoice) {
            alert("Invalid choice. Please choose between Rock, Paper, or Scissors.");
            humanChoice = getHumanChoice();
        }

        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        
        // Increment player scores
        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        } else {
            // No update as it's a tie
        }

        // Displays the round winner
        console.log(`Round: ${round}`);
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);

        // This line of code would be repetition since a similar result is returned in the play round function

        //console.log(humanScore > computerScore ? `You win this round! ${humanChoice} beats ${computerChoice}` : humanScore < computerScore ? `You lose this round! ${computerChoice} beats ${humanChoice}` : `It's a tie! You both chose ${humanChoice}`);
        console.log("---------------------------------");
    }

    // Displays the final round results
    console.log("Final Round Scores");
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    console.log(humanScore > computerScore ? `You won the game! You scored ${humanScore} and the computer scored ${computerScore}` : humanScore < computerScore ? `You lost the game! The computer scored ${computerScore} and you scored ${humanScore}` : `It's a tie! You both scored ${humanScore}`);
    console.log("---------------------------------");

}

// Gets the computer choice
function getComputerChoice() {
    // Generates a random number between 1 and 3 and rounds it off so as to get a whole number
    var computerChoice = Math.floor(Math.random() * 3) + 1; 

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

// Compute a round and returns a winner
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
 
// Run the game
playGame();
