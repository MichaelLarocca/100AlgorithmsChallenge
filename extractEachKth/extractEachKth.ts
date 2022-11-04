export function extractEachKth(inputArray: number[], k: number): number[] {
                console.log(3 % k);
                console.log(6 % k);
                console.log(9 % k);

        let arrayReturn: number[] = [];

        for(let i = 0; i < inputArray.length; i ++) {
                console.log(inputArray[i] % k);

            if(inputArray[i] % k !== 0) {
                arrayReturn.push(inputArray[i]);
            }
        }
                console.log(arrayReturn);
        return arrayReturn;    
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));