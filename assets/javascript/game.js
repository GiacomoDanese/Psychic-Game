var lettersArray = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var losses = 0;

var guessesLeft = 9;

var guessesSoFar = [];

var userGuess = null;

var letterToBeGuessed = lettersArray[Math.floor(Math.random() * lettersArray.length)];

// console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

document.onkeyup = function(event) {
	var userGuess = event.key;


	if (guessesLeft !== 0) {
		if ((userGuess !== letterToBeGuessed) && (guessesLeft > 0)) {
			guessesSoFar.push(userGuess);
			guessesLeft--;
			document.getElementById("left").innerHTML ="<h4>" + guessesLeft + "</h4>";
			document.getElementById("soFar").innerHTML ="<h4>" + guessesSoFar + "</h4>";
		}
		else if (userGuess == letterToBeGuessed){
			wins++;
			guessesLeft = 10;
			guessesSoFar = [];
			document.getElementById("wins").innerHTML ="<h4>" + wins + "</h4>";
			document.getElementById("left").innerHTML ="<h4>" + guessesLeft + "</h4>";
			document.getElementById("soFar").innerHTML ="<h4>" + guessesSoFar + "</h4>";
		}
	}

		else {
			losses++;
			guessesLeft = 10;
			guessesSoFar = [];

			document.getElementById("losses").innerHTML ="<h4>" + losses + "</h4>";
		}
	}


	// if (guessesSoFar.indexOf(userGuess) < 0 && lettersArray.indexOf(userGuess) >= 0) {
	// 	guessesSoFar[guessesSoFar.length] = userGuess;
	// 	guessesLeft--;
	// }

	// if (letterToBeGuessed == userGuess) {
	// 	wins++;
	// 	console.log("You won!");
	// 	guessesLeft = 9;
	// 	guessesSoFar = [];

	// }
