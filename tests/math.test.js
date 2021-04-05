const {
	sin,
	rounded,
	computeSeries,
	factorial
} = require("../main");

describe("Factorial tests", () => {
	test('Should calculate Factorial of 1 -> 1', () => {
		expect(factorial(1)).toBe(1);
	});

	test('Should calculate Factorial of 2 -> 2', () => {
		expect(factorial(2)).toBe(2);
	});

	test('Should calculate Factorial of 3 -> 6', () => {
		expect(factorial(3)).toBe(6);
	});

	test('Should calculate Factorial of 4 -> 24', () => {
		expect(factorial(4)).toBe(24);
	});

	test('Should calculate Factorial of 5 -> 120', () => {
		expect(factorial(5)).toBe(120);
	});

	test('Should calculate Factorial of 50 -> 3.0414093201713376e+64', () => {
		expect(factorial(50)).toBe(3.0414093201713376e+64);
	});

	test('Should calculate Factorial of NOT A NUMBER -> 1', () => {
		expect(factorial("ooops")).toBe(1);
	});

	test('Should calculate Factorial for negative number -> 1', () => {
		expect(factorial(-3)).toBe(1);
	});
});

describe("Rounded tests", () => {
	test("Should properly round if no sights after .", () => {
		expect(rounded(10)).toBe(10)
	})

	test("Should properly round if > 10 sights after .", () => {
		expect(rounded(10.0000000099111111)).toBe(10.0000000099)
	})

	test("Should properly reject if float can not be parsed", () => {
		expect.assertions(1);
		try {
			rounded("oops")
		} catch (err) {
			expect(err.message).toBe("x.toFixed is not a function")
		}
	})
})

describe("Compute series tests", () => {
	test("Should properly return computed series 1,1,3 -> 0.8414709848078965", () => {
		expect(computeSeries(1, 1, 3)).toBe(0.8414709848078965)
	})

	test("Should properly return computed series 3,3,3 -> 0.1411200080634548", () => {
		expect(computeSeries(3, 3, 3)).toBe(0.1411200080634548)
	})

	test("Should properly return 3.9899924980061545 if no start passed (default val 0)", () => {
		expect(computeSeries(3, 3)).toBe(3.9899924980061545)
	})

	test("Should properly return NaN if no m and start passed (default val 0)", () => {
		expect(computeSeries(3)).toBe(NaN)
	})

	test("Should properly return NaN if no args passed", () => {
		expect(computeSeries()).toBe(NaN)
	})
})

describe("Sin tests", () => {
	test("Should properly calculate sinus 5 -> -0.9589238321", () => {
		expect(sin(5)).toBe(-0.9589238321)
	})

	test("Should properly calculate sinus 12 -> 204.9008225106", () => {
		expect(sin(12)).toBe(204.9008225106)
	})

	test("Should properly calculate sinus 15 -> 31192.0378012414", () => {
		expect(sin(15)).toBe(31192.0378012414)
	})

	test("Should properly calculate sinus 25 -> 2572957340.8759212", () => {
		expect(sin(25)).toBe(2572957340.8759212)
	})
})
