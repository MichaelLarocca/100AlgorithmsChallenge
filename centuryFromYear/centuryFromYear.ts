export function centuryFromYear(year: number): number {

            console.log(Math.ceil(year/100));

    let century = (Math.ceil(year/100));

    return century;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));