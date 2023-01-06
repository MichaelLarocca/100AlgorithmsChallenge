export function largestNumber(n: number): number {
    let outPut: string = "";

    for(let i = 0; i < n; i++) {
        outPut += "9";
    }
        console.log(outPut);
    return parseInt(outPut);
}

console.log(largestNumber(2));