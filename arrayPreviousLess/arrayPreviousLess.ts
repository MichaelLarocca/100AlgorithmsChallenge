export function arrayPreviousLess(items: number[]): number[] {

    for(let i = items.length; i > 0 ; i--) {

                console.log(items[i-1]);
                console.log(items[i-2]);

        if(items[i-2] < items[i-1]) {
            items[i-1] = items[i-2];
        } else {
            items[i-1] = -1;
        }
    }
         console.log(items);
    return items;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));