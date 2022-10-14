export function candies(n: number, m: number): number {

    const candiesToDistribute = Math.floor(m/n) * n;
            console.log(candiesToDistribute);
            
    return candiesToDistribute;
}

console.log(candies(3, 10));