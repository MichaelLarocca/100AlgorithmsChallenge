export function makeArrayConsecutive2(statues: number[]): number {
    
    const numbers: number[] = [];  
    let counter: number = 0;

    const sortedNumbers = statues.sort((a,b)=>a-b);
        console.log(sortedNumbers);

    for(let i = sortedNumbers[0]; i < sortedNumbers[sortedNumbers.length-1]; i++) {
        numbers.push(i);
    } 
        console.log(sortedNumbers)
        console.log(numbers)

    numbers.forEach(num => {
        sortedNumbers.includes(num) ? counter += 1 : counter;
    })    
            console.log(counter);
        return counter;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));