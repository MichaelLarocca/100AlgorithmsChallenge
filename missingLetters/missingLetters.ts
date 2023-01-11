export function missingLetters(str: string) {
    const alphabet: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const strSplit: string[] = str.split('');

    for(let i = 0; i < strSplit.length; i++) {
        if(strSplit[i] !== alphabet[i]) {
                console.log(strSplit[i]);
                console.log(alphabet[i]);            
            return alphabet[i];
        }
    }    
     return undefined;       
}
console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));