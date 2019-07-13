function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(box => console.log(box));

    boxes2.forEach(box => console.log(box));
}

const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const boxes2 = [1, 2, 3, 4, 5];
compressBoxesTwice(boxes, boxes2);

// O(a + b)