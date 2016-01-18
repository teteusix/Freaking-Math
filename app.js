var score_val = 0;


// GENERATE A DYNAMIC ID FOR MODULE
function newScore() {
	return window.score_val += 1;
}

function nextTurn() {
	var valueSum1 = 1+Math.floor(Math.random()*9), // Generate a random number between 1 and 9
		valueSum2 = 1+Math.floor(Math.random()*9), // Generate a random number between 1 and 9
		sum1 = document.getElementById('sum1'),
		sum2 = document.getElementById('sum2'),
		moduleId = newScore(),
		valueResultRandom = 1+Math.floor(Math.random()*18), // Generate a random number between 1 and 18
		resultRandom = document.getElementById('resultrandom'),
		trueResult = valueSum1 + valueSum2,
		right = document.getElementById('right'),
		wrong = document.getElementById('wrong'),
		r_value = [trueResult, valueResultRandom],
		r_randomBtV = Math.floor(2*Math.random()); // Randon between trueResult and randomresult
		window.viewResult = r_value[r_randomBtV];
	
	// verify true result
	if (window.viewResult == trueResult) {		
		console.log('O botão certo');
		right.addEventListener("click", nextTurn, true);
	} else {
		console.log('O botão errado');
		wrong.addEventListener("click", nextTurn, true);
	};
	sum1.innerHTML = valueSum1;
	sum2.innerHTML = valueSum2;
	resultRandom.innerHTML = "Resultado: <strong>" + window.viewResult + "</strong><br/>Aleatorio: <strong>" + valueResultRandom + "</strong><br/>Real: <strong>" + trueResult + "</strong>";
	
	// get value score after insert new score
	document.getElementById('score').getAttribute('value');
	document.getElementById('score').setAttribute('value', score_val);
}

