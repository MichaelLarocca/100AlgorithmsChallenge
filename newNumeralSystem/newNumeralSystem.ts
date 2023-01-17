export function newNumeralSystem(number: string): string[] {
    const letterArray: string[] = [];

    let letterA: string = String.fromCharCode(65);
        console.log(letterA);

    let start: number = 65;

    let current: number = number.charCodeAt(0);
        console.log(current);

    while (String.fromCharCode(start) !== String.fromCharCode(current)) {
        letterArray.push(`${String.fromCharCode(start)} + ${String.fromCharCode(current)}`);
        start += 1;
        current -= 1;
    }
    letterArray.push(`${String.fromCharCode(start)} + ${String.fromCharCode(current)}`);

        console.log(letterArray);
    return letterArray;
}
console.log(newNumeralSystem('G'));