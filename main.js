const http = require("http");
const url = require('url');

const host = 'localhost';
const port = 8000;

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

const computeSeries = (x, n, start = 0) => {
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


const sinA = (x) => {
	console.log(`Calculate sin for: ${x}`);
	return rounded(computeSeries(x, x, 3));
}

console.log(sinA(Math.PI / 6)); // 0.5

const requestListener = function (req, res) {
	const queryObject = url.parse(req.url,true).query;
	if (!queryObject.n) {
		res.writeHead(403, { 'Content-Type': 'text/plain' })
		res.end('You should pass N to calculate sin');

		return;
	}

	res.writeHead(403, { 'Content-Type': 'text/plain' })
	res.end(`${sin(+queryObject.n)}`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});

module.exports = {
	sinA,
	rounded,
	computeSeries,
	factorial
}
