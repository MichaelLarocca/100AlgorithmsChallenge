export function compareIntegers(a: string, b: string): string {

    const numOne: number = parseInt(a);
            console.log(typeof numOne);
    const numTwo: number = parseInt(b);
            console.log(typeof numTwo);
     
    if(numOne < numTwo) {
        return `less`;
    } else if(numOne > numTwo) {
        return `greater`;
    } else {
        return `equal`
    }      

}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));