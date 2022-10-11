export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    
    let maxAdjacentDifference: number = 0;

    for(let i = 0; i < inputArray.length -1; i++) {
                console.log(inputArray[i] - inputArray[i+1]);
        if(inputArray[i] - inputArray[i+1] > maxAdjacentDifference) {
            maxAdjacentDifference = inputArray[i] - inputArray[i+1];
        }        
    }
                console.log(maxAdjacentDifference);
    return maxAdjacentDifference;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));