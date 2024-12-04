/*
*   Ricardo Hernandez
*   SD230
*   Rock Paper Scissors
*   10/16/2024
*/

let selectedOption = null;

function selectOption(option) {
    let gametext = document.getElementById("gametitle");
    if (gametext.innerText != "Rochambeau") {
        gametext.innerText = "Rochambeau";
    }
    
    if (selectedOption) {   // Option already selected Remove the selected class from it
        document.getElementById(selectedOption).classList.remove('selected');
    }
    if (selectedOption == option) {
        resetSelection();
    }
    else {
        selectedOption = option;    // Set the new selected option
        document.getElementById(selectedOption).classList.add('selected');
    }
}

function resetSelection() {
    if (selectedOption) {   // Reset the selected option
        document.getElementById(selectedOption).classList.remove('selected');
        selectedOption = null;
    }
}

function playButton() {
    let gametext = document.getElementById("gametitle");

    if (selectedOption == null) {   // Play cannot start No selection
        alert("You gotta pick an option to play!")
        return;
    }
    if (selectedOption == 'rock') {
        playRPS(0);
    }
    if (selectedOption == 'paper') {
        playRPS(1);
    }
    if (selectedOption == 'scissors') {
        playRPS(2);
    }
    
}

function playRPS(playerChoice) {
    //let playerChoice = parseInt(playerChoice));
    let gametext = document.getElementById("gametitle");

    if (playerChoice < 0 || playerChoice > 2 || isNaN(playerChoice)) {
        alert("Invalid choice! Please pick 0 for Rock, 1 for Paper, or 2 for Scissors.");
    } 
    else {
        let cpuChoice = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
        
        if (playerChoice == cpuChoice) {
            displayDraw();
        } else if (playerChoice == 0) {
            if (cpuChoice == 1) {
                displayLoss();
            } else {
                displayWin();
            }
        } else if (playerChoice == 1) {
            if (cpuChoice == 0) {
                displayWin();
            } else {
                displayLoss();
            }
        } else if (playerChoice == 2) {
            if (cpuChoice == 1) {
                displayWin();
            } else {
                displayLoss();
            }
        }
    }


    function displayWin() {
        gametext.innerText = "You won!";
    }

    function displayLoss() {
        gametext.innerText = "You Lost!";
    }

    function displayDraw() {
        gametext.innerText = "It was a draw...";
    }

    resetSelection();
}