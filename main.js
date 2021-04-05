const rounded = (x) => {
	return parseFloat(x.toFixed(10));
}

const factorial = (x) => {
	let n = 1;
	for(let i = 2; i <= x; i++) {
		n *= i;
	}
	return n;
}

const computeSeries = (x, n, start) => {
	const iterations = 20;
	let multiplier = 1;
	let i = start;
	while(i < start + iterations) {
		multiplier *= -1;
		const next_term = (x**i) / factorial(i);
		n += multiplier * next_term
		i += 2
	}
	return n
}


const sin = (x) => {
	console.log(`Calculate sin for: ${x}`);
	return rounded(computeSeries(x, x, 3));
}

console.log(sin(Math.PI / 6)); // 0.5

module.exports = {
	sin,
	rounded,
	computeSeries,
	factorial
}
