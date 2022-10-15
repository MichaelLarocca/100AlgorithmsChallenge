export function characterParity(symbol: string): string {
    
    let result: string = "";
    const input: number = parseInt(symbol);

            console.log(input);

    result = input % 2 === 0 ? "even" : "odd";   
            
    if(isNaN(input)) {

            console.log(isNaN(input));

        result = "not a digit";
    }

    return result;
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))