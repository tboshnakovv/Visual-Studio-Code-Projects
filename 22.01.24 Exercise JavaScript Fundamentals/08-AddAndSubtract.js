function solve(firtstNumber, secondNumber, thirdNumber) {
    'use strict';

    // function sum(first, second) {
    //     return first + second
    // }

    const sum = (first, second) => first + second
    const substract = (first, second) => first - second

    const result = substract(sum(firtstNumber, secondNumber), thirdNumber)

    console.log(result)
}

solve(23,6,10);