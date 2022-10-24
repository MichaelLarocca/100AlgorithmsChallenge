export function celsiusToFahrenheit(celsius: number): number {

    const fahrenheit: number = (celsius * 9 / 5) + 32;
            console.log(fahrenheit);

    return fahrenheit;        
}

console.log(celsiusToFahrenheit(-30));
console.log(celsiusToFahrenheit(-10));
console.log(celsiusToFahrenheit(0));