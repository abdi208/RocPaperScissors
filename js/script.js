console.log('butts');
//Global Variables
var pChoice;
var cChoice;
var playerWin = ' ';
var playOptions =["rock", "paper", "scissors"]
// DOM references
var buttonDiv = document.querySelector('.buttons');
var resultsText = document.querySelector(".results h2");
var cChoiceText = document.getElementById("cChoice");

//functions

var dislpayResults = function() {
    cChoiceText.textContent = playOptions[cChoice];
    resultsText.textContent = playerWin;
    console.log(cChoice);
}

var checkForWin = function() {
    //Compare computer choice and player choice
    if(pChoice !== cChoice){
        switch(pChoice){
        case 0://player chose rock
            playerWin = cChoice === 1 ? "you lose" : "you won";
            break;
        case 1://player chose paper
            playerWin = cChoice === 2 ? "you lost" : "good job";
            break;
        case 2://player chose scissors
            playerWin = cChoice === 0 ? "you lost" : "good job";
            break;
            
            
        }
    } else {
        playerWin = "tie"; 
        
    }
dislpayResults();
//return true is playersWin
// else computer wins
}

var computerTurn =  function() {
    //Computer will choose rock paper or scissors via math.random
        cChoice = Math.floor(Math.random() * 3);
    //correlate rock paper or scissors
    // use an array for play options 
    checkForWin();

}

//Event Handlers
buttonDiv.addEventListener("click", function(e) {
    //Player will choose rock paper or scissors
        //save the value
    e.stopPropagation();
    pChoice = parseInt(e.target.id);
    console.log(pChoice);

    //Now the computer goes
    computerTurn();
    
    
    
})

//Display the results
    //color the button chosen by the player
    // disable the button
    // display the computer choice
    // add the relevant image
    // display who won