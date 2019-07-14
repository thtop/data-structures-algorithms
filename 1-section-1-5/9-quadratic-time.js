// Log all pairs of Array
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
        console.log('== == == == ==');
    }
}

logAllPairsOfArray(boxes); // O(n^2)

// ES6
const logAllPairsOfArrayES6 = (boxes) => {
    boxes.forEach(firstBox => {
        boxes.forEach(secondBox => {
            console.log(firstBox, secondBox);
        });
        console.log('-- -- -- --');
    });
}
logAllPairsOfArrayES6(boxes);

// O(n2) -> Quadratic Time

console.log('*******')

function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(box1 => {
        boxes2.forEach(box2 => console.log(box1, box2));
    });
}
compressBoxesTwice([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// O(a * b)