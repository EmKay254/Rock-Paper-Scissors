// Get the computer choice
function getComputerChoice() {
    var computerChoice = Math.floor(Math.random() * 3) + 1; // Generates a random number between 1 and 3

    // Assigns the random number to either Rock, Paper or Scissors
    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log("This is a test");