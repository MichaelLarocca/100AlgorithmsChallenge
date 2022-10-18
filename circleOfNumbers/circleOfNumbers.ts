export function circleOfNumbers(n: number, firstNumber: number): number {

    let counter: number = firstNumber;

    let distance: number = n / 2;
            console.log(distance);
    
    for(let i = 0; i < distance; i ++) {

        if(counter === n) {
            counter = 0;
        }
        
        counter += 1;
    }        

        console.log(counter);
    return counter;        
}

console.log(circleOfNumbers(10, 2));