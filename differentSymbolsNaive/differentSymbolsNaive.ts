export function differentSymbolsNaive(s: string): number {
    
    let arrayUniqueSymbols: [] = [...new Set(s)];
            console.log(arrayUniqueSymbols);
            console.log(typeof arrayUniqueSymbols.length);
    
    return arrayUniqueSymbols.length;        
}

console.log(differentSymbolsNaive('cabca'));
