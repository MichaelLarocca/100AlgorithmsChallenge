export function chessBoardCellColor(cell1: string, cell2: string): boolean {

    const alphabet = ["A","B","C","D","E","F","G","H"];
    let coordinateOneSquareColor: string = "";
    let coordinateTwoSquareColor: string = "";


    const coordinateOneInput = cell1.split('');
        console.log(typeof coordinateOneInput[1]);
        
    const coordinateOneLetter = coordinateOneInput[0];
        console.log(coordinateOneLetter);    

    const coordinateOneColor =  parseInt(coordinateOneInput[1]) % 2 === 0 ? 'even' : 'odd';
        console.log(coordinateOneColor);


    const coordinateTwoInput= cell2.split('');
        console.log(coordinateTwoInput[1]);

    const coordinateTwoLetter = coordinateTwoInput[0];
        console.log(coordinateTwoLetter);  
        
    const coordinateTwoColor = parseInt(coordinateTwoInput[1]) % 2 === 0 ? 'even' : 'odd';
        console.log(coordinateTwoColor); 
        
    console.log(alphabet.indexOf(coordinateOneLetter)); 
    console.log(alphabet.indexOf(coordinateTwoLetter) % 2 === 0);

    console.log(coordinateOneColor)
    
    if(alphabet.indexOf(coordinateOneLetter) % 2 === 0 && coordinateOneColor === "even") {
        coordinateOneSquareColor = 'white';
    } else {
        coordinateOneSquareColor = 'black';
    }

    if(alphabet.indexOf(coordinateTwoLetter) % 2 === 0 && coordinateTwoColor === "even") {
        coordinateTwoSquareColor = 'white';
    } else {
        coordinateTwoSquareColor = 'black';
    }

        console.log(coordinateOneSquareColor);
        console.log(coordinateTwoSquareColor);
    
        return coordinateOneSquareColor === coordinateTwoSquareColor;
}

console.log(chessBoardCellColor('A1', 'C1'));
console.log(chessBoardCellColor('A1', 'H3'));
