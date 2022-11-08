export function houseNumbersSum(inputArray: number[]): number {
    
    let total: number = 0;
    let flag: boolean = false;

    for(let i = 0; i < inputArray.length; i++) {

        if(inputArray[i] === 0) {
            flag = true;
        }

        if(flag === false) {
            total +=  inputArray[i];
        }
    }
        console.log(total);
    return total;
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));