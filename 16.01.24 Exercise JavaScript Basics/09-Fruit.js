function solve(typeOfFruit, weight, pricePerKilogram) {
    'use strict'

    const pricePerGram = pricePerKilogram / 1000;
    const totalPrice = weight * pricePerGram;
    const weightKilos = (weight / 1000);

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightKilos.toFixed(2)} kilograms ${typeOfFruit}.`);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);
