function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); // O(1)

    var middleIndex = Math.floor(items.length / 2); // n/2
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) { // + 100
        console.log('hi');
    }
}

//printFirstItemThenFirstHalfThenSayHi100Times([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// O (1 + n/2 + 100)
// O (n/2 + 101)
// O (n/2 + 1)
// O (n + 1)
// O (n)


function compressBoxesTwice(boxes) {
    boxes.forEach(box => console.log(box));

    boxes.forEach(box => console.log(box));
}

compressBoxesTwice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// O(2n) -> Drop the Constants 
// O(n)