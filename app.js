var valueSum1 = 1+Math.floor(Math.random()*9), // Generate a random number between 1 and 9
	valueSum2 = 1+Math.floor(Math.random()*9), // Generate a random number between 1 and 9
	sum1 = document.getElementById('sum1'),
	sum2 = document.getElementById('sum2'),
	valueResultRandom = 1+Math.floor(Math.random()*18), // Generate a random number between 1 and 18
	resultRandom = document.getElementById('resultrandom'),
	trueResult = valueSum1 + valueSum2,
	r_value = [trueResult, valueResultRandom],
	r_randomBtV = Math.floor(2*Math.random()); // Randon between trueResult and randomresult
	window.viewResult = r_value[r_randomBtV];

// Test
sum1.innerHTML = valueSum1;
sum2.innerHTML = valueSum2;
resultRandom.innerHTML = "Resultado: " + window.viewResult + " -  Aleatorio: " + valueResultRandom + " -  Real: " + trueResult;

