// SET INITIAL VALUE
var score_val = 0;


// GENERATE A DYNAMIC ID FOR MODULE
function newScore() {
	return window.score_val += 1;
}

// FIRST TURN
function firstTurn() {
	nextTurn();

	//$('.contentplay').fadeOut();
	$('.contentplay').css('display', 'none');
	$('.main').fadeIn(1000);
}

// NEW TURN
function nextTurn() {
	var valueSum1 = 1+Math.floor(Math.random()*9), // Generate a random number between 1 and 9
		valueSum2 = 1+Math.floor(Math.random()*9), // Generate a random number between 1 and 9
		sum1 = document.getElementById('sum1'),
		sum2 = document.getElementById('sum2'),
		moduleId = newScore(),
		resultRandom = 1+Math.floor(Math.random()*18), // Generate a random number between 1 and 18
		viewresultRandom = document.getElementById('resultrandom'),
		trueResult = valueSum1 + valueSum2,
		right = document.getElementById('right'),
		wrong = document.getElementById('wrong'),
		r_value = [trueResult, resultRandom],
		r_randomBtV = Math.floor(2*Math.random()); // Randon between trueResult and randomresult
		viewResult = r_value[r_randomBtV];
	
	sum1.innerHTML = valueSum1;
	sum2.innerHTML = valueSum2;
	viewresultRandom.innerHTML = viewResult;

	// verify true result
	if (viewResult == trueResult) {	
		console.log('O botão certo');
		right.setAttribute('onclick','nextTurn()');
		wrong.setAttribute('onclick','endGame()');
	} else if (viewResult != trueResult){
		console.log('O botão errado');
		wrong.setAttribute('onclick','nextTurn()');
		right.setAttribute('onclick','endGame()');
	};
	
	// get value score after insert new score
	document.getElementById('score').getAttribute('value');
	document.getElementById('score').setAttribute('value', score_val);
}


function endGame() {
	$('.sum,.buttons').css('display', 'none');
	$('#endGame').fadeIn(1000);
}