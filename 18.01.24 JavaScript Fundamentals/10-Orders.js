function sum(product, quantity) {

    if (product === 'coffee') {
        console.log((quantity * 1.5).toFixed(2));

    } else if (product === 'water') {
        console.log((quantity * 1.0).toFixed(2));

    } else if (product === 'coke') {
        console.log((quantity * 1.4).toFixed(2));

    } else if (product === 'snacks') {
        console.log((quantity * 2.0).toFixed(2));

    }
    
    
}

sum('water', 5);