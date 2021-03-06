var p1Button = document.querySelector( "#p1" );
var p2Button = document.querySelector( "#p2" );
var resetButton = document.querySelector( "#reset" );

var p1Score = 0;
var p2Score = 0;

var p1Display = document.querySelector( "#p1Display" );
var p2Display = document.querySelector( "#p2Display" );

var gameOver = false;
var winningScore = 5;
var winningScoreInput = document.querySelector( "input[ type = 'number' ]" ); /*Only accept number inputs.*/
var winningScoreDisplay = document.querySelector( "#winningScoreDisplay" );

winningScoreDisplay.textContent = winningScore;

winningScoreInput.addEventListener( "change", function() {
	winningScore = Number( winningScoreInput.value );
	winningScoreDisplay.textContent = winningScore;
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove( "green" );
	p2Display.classList.remove( "green" );
	gameOver = false;
}

p1Button.addEventListener( "click", function() {
	if ( !gameOver ) {
		p1Score++;
		p1Display.textContent = p1Score;
		if ( p1Score === winningScore ) {
			p1Display.classList.add( "green" );
			gameOver = true;
		}
	}
});

p2Button.addEventListener( "click", function() {
	if ( !gameOver ) {
		p2Score++;
		p2Display.textContent = p2Score;
		if ( p2Score === winningScore ) {
			p2Display.classList.add( "green" );
			gameOver = true;
		}
	}
});

resetButton.addEventListener( "click", function() {
	reset();
});