export function isCaseInsensitivePalindrome(inputString: string): boolean {
    
            console.log(inputString.split("").reverse().join("").toLowerCase()); 

    return inputString.toLowerCase() === inputString.split("").reverse().join("").toLowerCase();
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));