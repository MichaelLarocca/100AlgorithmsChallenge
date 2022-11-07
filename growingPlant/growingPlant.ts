export function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {

    let total: number = 0;
    let counter: number = 0;

    do {
        if(total != desiredHeight) {
            total += upSpeed;
        }
        if(total != desiredHeight) {
            total -= downSpeed;
        }
        counter += 1;
            console.log(total);
            console.log(counter);
    }
    while (total < desiredHeight);

    return counter;
}

console.log(growingPlant(100, 10, 910))