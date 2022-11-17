export function isLucky(n: number): boolean {

    const numbersString: string[] = n.toString().split('');
        console.log(numbersString);

    const leftNumberArray: number[] = [];
    const rightNumberArray: number[] = [];        

    for(let i = 0; i < numbersString.length / 2; i++) {
        leftNumberArray.push(parseInt(numbersString[i]));
            console.log(leftNumberArray);
    }

    for(let i = numbersString.length / 2; i < numbersString.length; i++) {
        rightNumberArray.push(parseInt(numbersString[i]));
            console.log(rightNumberArray);
    }

    const leftTotal = leftNumberArray.reduce((total, currentValue)=>{return total + currentValue});
        console.log(leftTotal);

    const rightTotal = rightNumberArray.reduce((total, currentValue)=>{return total + currentValue});
        console.log(rightTotal);
    
    const answer: boolean = leftTotal === rightTotal;            
        console.log(answer);
        
    return answer;    
}

console.log(isLucky(1230));
console.log(isLucky(239017));