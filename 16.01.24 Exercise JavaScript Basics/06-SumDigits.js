function solve(number) {
    'use strict'

    const numberAsString = number.toString();
    let totalSum = 0;

    for (const char of numberAsString) {
        const charAsNumber = parseInt(char, 10)
        totalSum += charAsNumber
    }

    console.log(totalSum)
}

solve(97561);