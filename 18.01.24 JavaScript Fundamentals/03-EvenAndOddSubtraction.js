function solve(input) {

    let evenSum = 0;
    let oddSum = 0;

    for(let i = 0; i < input.length; i++) {
        
        let currentNumber = input[i];

        if(currentNumber % 2 == 0) {

            evenSum += currentNumber;
        }
        else if(currentNumber % 2 != 0) {
            oddSum += currentNumber;
        }
    }

    console.log(evenSum - oddSum);
}

solve([1,2,3,4,5,6]);