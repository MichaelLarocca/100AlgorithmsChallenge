
export function adjacentElementsProduct(inputArray: number[]): number {
    
    let largest: number = 0;

    for(let i = 0; i < inputArray.length - 1; i++) {
                    console.log(inputArray[i]);

        if(inputArray[i] * inputArray[i+1] > largest) {
            
            largest = inputArray[i] * inputArray[i+1];
                    console.log(largest)
        }
    } 

    return largest;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));