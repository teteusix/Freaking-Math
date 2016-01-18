var valueSum1 = 1+Math.floor(Math.random()*9), // Generate a random number between 1 and 9
	valueSum2 = 1+Math.floor(Math.random()*9), // Generate a random number between 1 and 9
	sum1 = document.getElementById('sum1'),
	sum2 = document.getElementById('sum2'),
	valueResultrandom = 1+Math.floor(Math.random()*18), // Generate a random number between 1 and 18
	resultrandom = document.getElementById('resultrandom'),
	trueResult = valueSum1 + valueSum2;

// Test
sum1.innerHTML = valueSum1;
sum2.innerHTML = valueSum2;
resultrandom.innerHTML = valueResultrandom + " = " + trueResult;

