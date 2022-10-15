export function checkPalindrome(inputString: string): boolean {
    
    let string: string = inputString.toLocaleLowerCase();
    let stringReverse: string = inputString.toLocaleLowerCase().split('').reverse().join('');

        console.log(string);
        console.log(stringReverse);

    return string === stringReverse;   
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
