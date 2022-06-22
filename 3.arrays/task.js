function compareArrays(arr1, arr2) {
	let result;
	if (!arr1 || !arr2) return (result = false);
	result = arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i]);
	return result;
}

function advancedFilter(arr) {
	let resultArr = arr
		.filter((num) => num > 0)
		.filter((num) => num % 3 === 0)
		.map((num) => num * 10);

	return resultArr;
}
