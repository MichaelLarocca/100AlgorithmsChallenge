import { setEmitFlags } from "typescript";

export function alphabetSubsequence(s: string): boolean {
    
    let flag: boolean = false;

    const alphabet: string[] = ['a','b','c','d', 'e', 'f', 'g', 
    'h', 'i', 'j', 'k', 'l', 'm', 'm', 'o', 'p', 'q', 'r', 's', 
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const arrayLetters: string[] = s.split('');
        console.log(arrayLetters);
        console.log(alphabet.indexOf(arrayLetters[0]));
        
    for(let i = 0; i < arrayLetters.length -1; i++) {
        console.log(alphabet.indexOf(arrayLetters[i]));
        if(alphabet.indexOf(arrayLetters[i]) < alphabet.indexOf(arrayLetters[i+1])) {
            flag = true;
        } else if(alphabet.indexOf(arrayLetters[i]) === alphabet.indexOf(arrayLetters[i+1])) {
            flag = false;
            break;
        } else {
            flag = false;
            break;           
        }
    }
    return flag;
}
    
console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
