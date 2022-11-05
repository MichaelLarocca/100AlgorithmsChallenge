export function firstDigit(inputString: string): string {

    let returnNumberAsString: string = ``; 

    const arraySplitString = inputString.split('');
            console.log(arraySplitString);

    for(let i = 0; i < arraySplitString.length; i++) {

        if(
            arraySplitString[i] === '0' ||
            arraySplitString[i] === '1' ||
            arraySplitString[i] === '2' ||
            arraySplitString[i] === '3' ||
            arraySplitString[i] === '4' ||
            arraySplitString[i] === '5' ||
            arraySplitString[i] === '6' ||
            arraySplitString[i] === '7' ||
            arraySplitString[i] === '8' ||
            arraySplitString[i] === '9'
            ) {
                returnNumberAsString = arraySplitString[i];
            }
    }
        console.log(returnNumberAsString);
    return returnNumberAsString;    
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
