export function incorrectPasscodeAttempts(passcode: string, attempts: string[]): boolean {
    
    let attemptsNumber: number = 0;
    let passcodeFailed: boolean = false;

    for(let i = 0; i < attempts.length; i++) {
        console.log(attempts[i]);

        if(passcode === attempts[i]) {
            attemptsNumber = 0;
        }

        if(attemptsNumber !== 10) {
            attemptsNumber += 1;
        }

        if(attemptsNumber === 10) {
            passcodeFailed = true;
        }
    }
        console.log(passcodeFailed);
    return passcodeFailed;
}

console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));