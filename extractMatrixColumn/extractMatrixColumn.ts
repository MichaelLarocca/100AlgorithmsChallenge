export function extractMatrixColumn(matrix: number[][], column: number): number[] {
        console.log(matrix[0][column]);
        console.log(matrix[1][column]);
        console.log(matrix[2][column]);

    const returnArray: number[] = [];
    
    for(let i = 0; i < matrix.length; i++) {
            console.log(matrix[i][column]);
        returnArray.push(matrix[i][column]);
    }
        console.log(returnArray);
    return returnArray;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));