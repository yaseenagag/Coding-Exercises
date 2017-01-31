function yourGuess() {
    guess = document.getElementById("guess").value;
    guesses = document.getElementById("output");

    if ( isNaN(guess) ) {
      alert("Please select a number!!!")
    }

    document.getElementById('guess').value = ''

    if (guess == numToGuess) {
        guesses.value = guesses.value + "\r" + "You have guessed correctly! ("+guess+")";
    } else if (guess > numToGuess) {
        guesses.value = guesses.value + "\r" + "You guessing too high!("+guess+")";
    } else if (guess < numToGuess) {
        guesses.value = guesses.value + "\r" + "You guessing too low!("+guess+")";
    }
}


function generateNumberToGuess(confirmIt) {
    var guesses = document.getElementById("output");

    if (confirmIt && !confirm('Restart game with new number?')) {
        return;
    }

    guesses.value = '';
    numToGuess = Math.floor(Math.random()*100);
    guesses.value = "New number generated.\n";

    // Don't forget to hide the new number.
    document.getElementById('numberToGuess').value = '';
    document.getElementById('cheatShow').style.display = 'none';
}

function showGuesses(){
    var guesses = document.getElementById('guesses');
    var btn = document.getElementById('showguesses');

    if (guesses.style.display != 'block') {
        guesses.style.display = 'block';
        btn.value = 'Hide My Guesses';
    } else {
        guesses.style.display = 'none';
        btn.value = 'Show My Guesses';
    }
}

window.onload = function(){
    generateNumberToGuess();
}
