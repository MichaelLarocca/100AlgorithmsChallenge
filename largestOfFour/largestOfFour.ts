export function largestOfFour(nums: number[][]): number[] {

    const largestNumbers: number[] = [];

    nums.forEach(array => {
                console.log(Math.max(...array));
        largestNumbers.push(Math.max(...array));
    })
    return largestNumbers;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) );
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));