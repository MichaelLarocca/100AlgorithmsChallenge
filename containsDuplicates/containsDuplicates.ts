export function containsDuplicates(a: number[]): boolean {

    const uniqueNumbers: number[] = [...new Set(a)];
            console.log(uniqueNumbers);

    return a.length !== uniqueNumbers.length ? true : false;       
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));