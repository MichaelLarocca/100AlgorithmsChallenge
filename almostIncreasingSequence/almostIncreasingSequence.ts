export function almostIncreasingSequence(sequence: number[]): boolean {
	let numberToRemove: number = 0;
	const arraySequence: number[] = [];
	let flagIncreasingSequence: boolean = true;

	for (let i = 0; i < sequence.length; i++) {
		console.log(sequence[i]);

		if (sequence[i + 1] < sequence[i]) {
			numberToRemove = sequence[i];
			break;
		}
	}

	for (let i = 0; i < sequence.length; i++) {
		if (sequence[i] !== numberToRemove) {
			arraySequence.push(sequence[i]);
		}
	}

	for (let i = 0; i < arraySequence.length; i++) {
		console.log(arraySequence[i]);
		if (arraySequence[i + 1] < arraySequence[i]) {
			flagIncreasingSequence = false;
			break;
		}
	}

	console.log(numberToRemove);
	console.log(arraySequence);
	console.log(flagIncreasingSequence);

	return flagIncreasingSequence;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
