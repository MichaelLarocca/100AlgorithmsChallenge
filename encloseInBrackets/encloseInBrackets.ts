export function encloseInBrackets(inputString: string): string {

        const stringInBrackets: string = `(${inputString})`; 
                console.log(stringInBrackets);

        return stringInBrackets;
    }

console.log(encloseInBrackets('abacaba'));