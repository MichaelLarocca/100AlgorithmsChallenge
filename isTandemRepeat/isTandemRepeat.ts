export function isTandemRepeat(inputString: string): boolean {
        console.log(inputString);

    if(inputString.length % 2 === 0) {
        const sliceStringFirstHalf = inputString.slice(0,inputString.length / 2);
                console.log(sliceStringFirstHalf);

        const sliceStringSecondHalf = inputString.slice(inputString.length / 2);   
                console.log(sliceStringSecondHalf);

        if( sliceStringFirstHalf === sliceStringSecondHalf) {
            return true;
        } else {
            return false;
        }     
    } else {
        return false;
    }
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))