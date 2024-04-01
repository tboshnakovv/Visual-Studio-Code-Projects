function shop(products) {
    const numberOfProducts = parseInt(products[0], 10);
    const allProducts = products.slice(1, numberOfProducts +1);
    const allComands = products.slice(numberOfProducts + 1);

    for (const rawCommand of allComands) {
        const comandComponents = rawCommand.split(' ');
        const command = comandComponents[0];

        if(command === 'Sell') {
            const firstProduct = allProducts.shift();
            console.log(`${firstProduct} product sold!`);
        }else if (command === 'Add') {
            const nameOfProduct = rawCommand.slice(4);
            allProducts.push(nameOfProduct);
        }else if (command === 'Swap') {
            const startIndex = parseInt(comandComponents[1], 10);
            const endIndex = parseInt(comandComponents[2], 10);

            if(isNaN(startIndex) || startIndex < 0 || startIndex > allProducts.length){
                continue;
            }

            if(isNaN(endIndex) || endIndex < 0 || endIndex > allProducts.length) {
                continue;
            }

            const startIndexValue = allProducts[startIndex];
            allProducts[startIndex] = allProducts[endIndex];
            allProducts[endIndex] = startIndexValue;

            console.log("Swapped!");
        }else if (command === 'End') {
            break;
        }
    }

    if (allProducts.length) {
        console.log(`Products left: ${allProducts.join(', ')}`);
    } else {
        console.log("The shop is empty");
    }

}

//shop(['3', 'Apple', 'Banana', 'Orange', 'Sell', 'End', 'Swap 0 1'])

//shop(['5', 'Milk', 'Eggs', 'Bread', 'Cheese', 'Butter', 'Add Yogurt', 'Swap 1 4', 'End']) 

shop(['3', 'Shampoo', 'Soap', 'Toothpaste', 'Sell', 'Sell', 'Sell', 'End'])