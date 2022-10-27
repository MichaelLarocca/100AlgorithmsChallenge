export function convertString(s: string, t: string): boolean {

    let stringCompare = ``;
    const arrayS = s.split('');
            console.log(arrayS);
    const arrayT = t.split('');
            console.log(arrayT);

    for(let s = 0; s < arrayS.length; s++) {
            console.log(arrayS[s]);

        for(let t = 0; t < arrayT.length; t++) {
            console.log(arrayT[t]);

            if(arrayS[s] === arrayT[t]) {
                stringCompare += arrayS[s];
            }
        }    
    }
        console.log(stringCompare);
    return stringCompare === t;   
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
