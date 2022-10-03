export function alphabeticShift(inputString: string): string {
    
    const alphabet: string[] = ['a','b','c','d', 'e', 'f', 'g', 
    'h', 'i', 'j', 'k', 'l', 'm', 'm', 'o', 'p', 'q', 'r', 's', 
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const arrayAlphabetShift: string[] = [];
    const string = inputString.split('');
    
    for(let i = 0; i < string.length; i++) {
        let letter = alphabet.indexOf(string[i]) + 1;
            console.log(letter);
            console.log(string[i]);
        
        if(letter === 26) {
            letter = 0;
        }

        arrayAlphabetShift.push(alphabet[letter]);
            console.log(alphabet[letter]);
    }
        console.log(arrayAlphabetShift);
    return arrayAlphabetShift.join('');
}

console.log(alphabeticShift('crazy'));