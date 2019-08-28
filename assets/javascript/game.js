
/* 
    app randomly picks letter, user to guess which letter.
-"what letter I'm thinking of"
-wins
-losses                     -game to start over without refresh
-guesses left
-guesses so far
*/

//More copmuter SCeincy way
//1. CHoosing a random number between two charCodes which represent the alphabet

//Generate an array of all letters in the alphabet
    //More copmuter sciency way -- we can generate an array of all letters with a functoin
    //easier we can also write it by hand
// variables go here:

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var randomNumber = Math.floor((Math.random() * alphabet.length)); 
console.log("Random number " + randomNumber)
var computerGuess = alphabet[randomNumber]

// game start code here:
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log("User guess " + userGuess);
    //Is th user key actually a letter
    if (alphabet.indexOf(userGuess.toLowerCase()) > -1) {
        
    
        if (computerGuess === userGuess.toLowerCase()) {
            wins++;
            console.log(wins);
            guessesLeft = 10;
            console.log(guessesLeft);
            guessesSoFar = [];
            computerGuess = alphabet[Math.floor((Math.random() * alphabet.length))];
        } 
        else {
            guessesLeft--
            guessesSoFar = [userGuess];
            console.log(guessesSoFar);
        }

        if (guessesLeft === 0) {
            alert("You Lose!");
        }

        //After all this stuff we want to update all these values in the DOM :)
        function updateDom() {
            var wins_1 = document.createElement("h5");
            wins_1.innerHTML = "Wins: " + wins;
            document.getElementById("wins").appendChild(wins_1);
            
            var losses_1 = document.createElement("h5");
            losses_1.innerHTML = "Losses: " + losses;
            document.getElementById("losses").appendChild(losses_1);

            var guess_left = document.createElement("h5");
            guess_left.innerHTML = "Guesses Left: " + guessesLeft; 
            document.getElementById("guesses-left").appendChild(guess_left);

            var yourGuesses = document.createElement("h5");
            yourGuesses.innerHTML = "Guesses So Far " + guessesSoFar.push(userGuess);
            document.getElementById("current-guesses").appendChild(yourGuesses);
        }
        updateDom(); 
            
      /*  else {
        alert("Input not valid, please enter a letter.")
        }
        */
    }
    //if so proceed
        //is valid letter equal to computer guess
        //if yes user wins (increase wins) -- restart game
        //if no (decrement guesssleft)
        //check to is guess left = 0 
        //if yes increment losses
        //if no do nothing 

    //We will need to update DOM some where

    //if not send failure to user
}