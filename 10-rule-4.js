const printAllNumbersThenAllPairSums = numbers => {

    console.log('these are the numbers: ');
    numbers.forEach(number => console.log(number));

    console.log('and these are their sums: ');
    numbers.forEach(firstNumber => {
        numbers.forEach(secondNumber => {
            console.log(firstNumber + secondNumber);
        });
    });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);
// O (n + n^2)
// O (n^2)

// Ex.
// O (x^2+3x+100+x/2)
// O (x^2) -> Drop Non-Dominants term