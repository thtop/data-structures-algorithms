let counter = 0;

function inception() {
    //console.log(counter);
    //debugger;
    if (counter > 3) {
        return 'done!';
    }
    counter++;
    return inception();
}

console.log(inception()); //undefined
//inception(inception(inception(inception())))

/**
 * 1. Indentify the base case
 * 2. Indentify the recursive case 
 * 3. Get closer and close and returrn
 *    when needed. Usually you have 2 return 
 */