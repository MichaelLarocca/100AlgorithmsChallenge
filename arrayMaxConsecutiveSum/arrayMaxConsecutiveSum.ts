export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    const arrayOfSums: number[] = [];

    for(let i = 0; i < inputArray.length -1; i++) {
            console.log(inputArray[i] + inputArray[i+1]);

        arrayOfSums.push(inputArray[i] + inputArray[i+1]);
    }
        console.log(Math.max(...arrayOfSums))
        
    return Math.max(...arrayOfSums);
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));