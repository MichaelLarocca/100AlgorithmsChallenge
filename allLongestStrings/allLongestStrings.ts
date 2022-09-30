
export function allLongestStrings(inputArray: string[]): string[] {

    let longestString: number = 0;
    
    const arrayOfLongestStrings: string[] = [];

    for(let i = 0; i < inputArray.length; i++) {
                console.log(inputArray[i].length);
        
        if(inputArray[i].length > longestString) {
            
            longestString = inputArray[i].length;
                    console.log(longestString);

        }
    }

    inputArray.forEach(str => {

        if(str.length === longestString) {
            arrayOfLongestStrings.push(str);
                    console.log(arrayOfLongestStrings);
        }

    })

    return arrayOfLongestStrings;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));