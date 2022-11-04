export function fancyRide(l: number, fares: number[]): string {

    let ride: string[] = [ "UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
    let bestRide: string = ``;

    for(let i = fares.length -1; i >= 0; i--) {
            console.log(i);
            console.log(fares[i] * l - 20);

        if(fares[i] * l - 20 <= 0) {
                console.log(ride[i]);
                
            bestRide = ride[i];
            break;
        }
    }
    return bestRide;
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));