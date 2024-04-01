function solve(firstOperand, secondOperand, operation) {

    let result = 0;

    switch(operation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        case '%':
            result = firstOperand % secondOperand;
            break;
        case '**':
            result = firstOperand ** secondOperand;
            break;
        default:
            console.log('Error!');
            break;  
            
        console.log(result)
    }

    console.log(result);
}

solve(5,6, '+');

