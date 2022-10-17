export function chunkyMonkey(arr: any[], size: number): any[][] {
    const returnArray: any[] = [];

    const arrayOne: any[] = arr.slice(0, size);
    const arrayTwo: any[] = arr.slice(size);

            console.log(arrayOne);
            console.log(arrayTwo);

    returnArray.push(arrayOne); 
    returnArray.push(arrayTwo);       
    
            console.log(returnArray);
    return returnArray;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));