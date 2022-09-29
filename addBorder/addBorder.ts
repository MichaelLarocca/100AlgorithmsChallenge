export function addBorder(picture: string[]): any {
    let borderStars: string = ``;
    let stringArray: string[] = [];
  
    for(let i = 0; i < picture[0].length + 2; i++) {
      borderStars += '*';
    }
  
    stringArray.push(borderStars);
  
    for(let i = 0; i < picture.length; i++) {
      stringArray.push(`*${picture[i]}*`);
    }
  
    stringArray.push(borderStars);
        console.log(borderStars.length);
        console.log(stringArray); 
    return stringArray;
}

console.log(addBorder(["abc", "ded"]));