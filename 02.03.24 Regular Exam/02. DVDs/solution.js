function dvdCollection(movies) {
    const numberDvds = parseInt(movies[0], 10);
    const allCollection = movies.slice(1, numberDvds + 1);
    const allCommands = movies.slice(numberDvds + 1);

    for (const rawCommand of allCommands) {
        const commandComponents = rawCommand.split(' ');
        const command = commandComponents[0];

        if (command === 'Watch'){

            const firstDvd = allCollection.shift();
            console.log(`${firstDvd} DVD watched!`)

        } else if (command === 'Buy'){

            const nameOfDvd = rawCommand.slice(4);
            allCollection.push(nameOfDvd);

        } else if (command === 'Swap'){

            const startIndex = parseInt(commandComponents[1], 10);
            const endIndex = parseInt(commandComponents[2], 10);

            if (isNaN(startIndex) || startIndex < 0 || startIndex > allCollection.length) {
                continue;
            }
            
            if (isNaN(endIndex) || endIndex < 0 || endIndex > allCollection.length) {
                continue;
            }

            const startIndexValue = allCollection[startIndex];
            allCollection[startIndex] = allCollection[endIndex];
            allCollection[endIndex] = startIndexValue;

            console.log("Swapped!");
            
        } else if (command === 'Done'){
            break;
        }    
    }

    if (allCollection.length) {

        console.log(`DVDs left: ${allCollection.join(', ')}`);

    } else {

        console.log("The collection is empty");
    }
}

//dvdCollection(['3', 'The Matrix', 'The Godfather', 'The Shawshank Redemption', 'Watch', 'Done', 'Swap 0 1'])
dvdCollection (['5', 'The Lion King', 'Frozen', 'Moana', 'Toy Story', 'Shrek', 'Buy Coco', 'Swap 2 4', 'Done'])