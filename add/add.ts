export function add(param1, param2): number {
    const total: number = param1 + param2;
    return total;
}

export function add2(...param1: number[]): number {
    const total = param1.reduce((total, currentValue) =>{
    return total + currentValue;
    })
    return total;
}
console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));