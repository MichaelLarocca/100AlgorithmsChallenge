
export function addTwoDigits(n: any): number {

    const numberToString = n.toString();
            console.log(typeof numberToString)

    const numberArray = numberToString.split('');
            console.log(numberArray)

    const numberOne = parseInt(numberArray[0]);
            console.log(typeof numberOne)

    const numberTwo = parseInt(numberArray[1]);    
            console.log(typeof numberTwo)

    const total = numberOne + numberTwo; 
            console.log(total); 

    return total;
}

console.log(addTwoDigits(29));