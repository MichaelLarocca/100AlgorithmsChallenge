export function palindromeRearranging(inputString: string): boolean {
    let result: boolean = true;
        console.log(inputString);

    const arrayInputString: string[] = inputString.split('');
        console.log(arrayInputString);

    const counts: object = {};

    // Count unique elements in the array
    for (var i = 0; i < arrayInputString.length; i++) {
        counts[arrayInputString[i]] = 1 + (counts[arrayInputString[i]] || 0);
    }
            console.log(counts);

        // Check if each unique element has an even total
        Object.keys(counts).forEach(function(key) {
                console.log(counts[key]);

            // If a unique element has an odd total, return false
            if(counts[key] % 2 !== 0) {
                result = false;
            }
        });
        
    return result;
}

console.log(palindromeRearranging('aabb'));