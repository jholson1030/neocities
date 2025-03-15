

const choices = ["rock", "paper", "scissors"];
var playerScore = 0;
var computerScore = 0;

// Set the RPS buttons to display of none until the game starts
document.getElementById('rock').style.display = 'none';
document.getElementById('paper').style.display = 'none';
document.getElementById('scissors').style.display = 'none';

// The comp buttons will only show what the computer chooses
document.getElementById('comp-choice').style.display = 'none';

// Update the DOM with computer selection
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// This will end the game

function endGame() {
    document.getElementById('rock').style.display = 'none';
    document.getElementById('paper').style.display = 'none';
    document.getElementById('scissors').style.display = 'none';
    document.getElementById('comp-choice').style.display = 'none';
    document.querySelector('.start-game').style.display = 'flex';
    playerScore = 0;
    computerScore = 0;
}

// This will check to see if there is a winner

function checkWinner() {
    // Make so that the game stops at 5 points
    if (playerScore == 5) {
        endGame();
        document.querySelector('.result').textContent = "Congrats! You're the winner!!! <;^)"; 
    } else if (computerScore == 5) {
        endGame();
        document.querySelector('.result').textContent = "Wow, you're a loser.. :(((";
    } 
}



// Turn these into functions with possible outcomes (2 each)

// May have to refactor this...

document.getElementById('rock').addEventListener('click', function () {
    const computerSelection = getComputerChoice();
    document.getElementById('comp-choice').style.display = 'block';
    document.getElementById('comp-choice').innerHTML = `The computer picked: ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }`;
    if (computerSelection == 'paper') {
        computerScore++;
        document.querySelector('.result').textContent = "You lose, paper covers rock.";
        document.getElementById('computer-score').innerHTML = `Computer's score is: ${computerScore}`;
        checkWinner();
    } else if (computerSelection == 'scissors') {
        playerScore++;
        document.querySelector('.result').textContent = "You win, rock crushes scissors.";
        document.getElementById('player-score').innerHTML = `Your score is: ${playerScore}`;
        checkWinner();
    } else document.querySelector('.result').textContent = "It's a tie, go again.";
});

document.getElementById('paper').addEventListener('click', function () {
    const computerSelection = getComputerChoice();
    document.getElementById('comp-choice').style.display = 'block';
    document.getElementById('comp-choice').innerHTML = `The computer picked: ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }`;
    if (computerSelection == 'rock') {
        playerScore++;
        document.querySelector('.result').textContent = "You win, paper covers rock.";
        document.getElementById('player-score').innerHTML = `Your score is: ${playerScore}`;
        checkWinner();
    } else if (computerSelection == 'scissors') {
        computerScore++;
        document.querySelector('.result').textContent = "You lose, scissors cuts paper.";
        document.getElementById('computer-score').innerHTML = `Computer's score is: ${computerScore}`;
        checkWinner();
    } else document.querySelector('.result').textContent = "It's a tie, go again.";
});

document.getElementById('scissors').addEventListener('click', function () {
    const computerSelection = getComputerChoice();
    document.getElementById('comp-choice').style.display = 'block';
    document.getElementById('comp-choice').innerHTML = `The computer picked: ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }`;
    if (computerSelection == 'rock') {
        computerScore++;
        document.querySelector('.result').textContent = "You lose, paper covers rock.";
        document.getElementById('computer-score').innerHTML = `Your score is: ${computerScore}`;
        checkWinner();
    } else if (computerSelection == 'paper') {
        playerScore++;
        document.querySelector('.result').textContent = "You win, scissors cuts paper.";
        document.getElementById('player-score').innerHTML = `Computer's score is: ${playerScore}`;
        checkWinner();
    } else document.querySelector('.result').textContent = "It's a tie, go again.";
});


function game() {
    // When the user clicks the start button it goes away
    document.querySelector('.start-game').style.display = 'none';
    // The scoreboard appears
    document.querySelector('.score-board').style.display = 'flex';
    // And the RPS buttons display
    document.getElementById('rock').style.display = 'block';
    document.getElementById('paper').style.display = 'block';
    document.getElementById('scissors').style.display = 'block';
    // Will clear the result from a previous game
    document.querySelector('.result').textContent = "";
    // Will clear the score from the previous game
    document.getElementById('player-score').innerHTML = `Your score is: ${computerScore}`;
    document.getElementById('computer-score').innerHTML = `Computer's score is: ${computerScore}`;
}
