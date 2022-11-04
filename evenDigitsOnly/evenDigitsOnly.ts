export function evenDigitsOnly(n: number): boolean {
            console.log(n);

    let stringNumbers: any[] = n.toString().split('');
            console.log(stringNumbers)
            
    for(let i = 0; i < stringNumbers.length; i++) {
        console.log(stringNumbers[i]);

        if(stringNumbers[i] % 2 !== 0) {
                console.log(stringNumbers[i] % 2 !== 0);
                console.log(stringNumbers[i]);
            return false;
        }
    }  
    return true;      
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));