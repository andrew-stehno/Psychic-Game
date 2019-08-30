// variables:
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
    //Is the user key actually a letter
    if (alphabet.indexOf(userGuess.toLowerCase()) > -1) {

        // conditionals:
        if (computerGuess === userGuess.toLowerCase()) {
            wins++;
            guessesLeft = 10;
            guessesSoFar = [];
            computerGuess = alphabet[Math.floor((Math.random() * alphabet.length))];
        }
        else {
            guessesLeft--
            function guessFunc() {
                guessesSoFar.push(userGuess);    
                document.getElementById("current-guesses").innerHTML = guessesSoFar;
        }   guessFunc();
        }

        if (guessesLeft === 0) {
            losses++
//          alert("You Lose!");      Does this count as refreshing the screen?
            guessesLeft = 10;
            guessesSoFar = [];
        }

        //manipulate the DOM:
        function updateDom() {
            var wins_1 = document.querySelector("#wins");
            wins_1.innerHTML = wins;

            var losses_1 = document.querySelector("#losses");
            losses_1.innerHTML = losses;

            var guess_left = document.querySelector("#guesses-left");
            guess_left.innerHTML = guessesLeft;

            var yourGuesses = document.querySelector("#current-guesses");
            yourGuesses.innerHTML = guessesSoFar;
        }
        updateDom(); 
     /*       
    else {
        alert("Input not valid, please enter a letter.");
    } */

    }
}