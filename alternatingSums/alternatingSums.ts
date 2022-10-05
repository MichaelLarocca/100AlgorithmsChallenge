export function alternatingSums(a: number[]): number[] {

    const arrayAlternatingSums: number[] = [];
    const teamOne: number[] = [];
    const teamTwo: number[] = [];

    for(let i = 0; i < a.length; i = i + 2) {
            console.log(a[i]);
        teamOne.push(a[i]);
    }
    for(let i = 1; i < a.length; i = i + 2) {
            console.log(a[i]);
        teamTwo.push(a[i]);
    }    

    arrayAlternatingSums.push(
        teamOne.reduce((total, currentValue) => {
            return total + currentValue;
        })
    );
    arrayAlternatingSums.push(
        teamTwo.reduce((total, currentValue) => {
            return total + currentValue;
        })
    );
        console.log(arrayAlternatingSums)
    return arrayAlternatingSums;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))