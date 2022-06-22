const result = promiseFunction();

result
	.then((json) => JSON.stringify(json))
	.then((res) =>
		console.log(
			`Промис ${typeof res === 'string' ? '' : 'НЕ'} работает ${
				typeof res === 'string' ? res : ''
			}`
		)
	);
