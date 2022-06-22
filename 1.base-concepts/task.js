function solveEquation(a, b, c) {
	let arr = [];
	const d = b ** 2 - 4 * a * c;
	const overZero = () => {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));

		return arr;
	};

	const equalToZero = () => {
		arr.push(-(b / (2 * a)));
		return arr;
	};

	if (d < 0) return arr;
	if (d === 0) return equalToZero();
	if (d > 0) return overZero();
}
