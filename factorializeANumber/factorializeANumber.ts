export function factorializeANumber(num: number): number {

    let arrayTotal: number[] = [];

    for(let i = 0; i < num; i++) {
        arrayTotal.push(i+1);
    }
        console.log(arrayTotal);

    let sum: number = arrayTotal.reduce((total, currentValue) => {
        return total * currentValue;
    }, 1)   

        console.log(sum);
    return sum;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));