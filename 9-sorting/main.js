// const letters = ['a', 'd', 'z', 'e', 'r', 'b'];
// console.log(letters.sort());

const basket = [2, 65, 34, 2, 1, 7, 8];
console.log(basket.sort());

const sortNumber = basket.sort(function (a, b) {
    return a - b;
});
console.log('sortNumber', sortNumber);




console.log('2'.charCodeAt(0)); // 54
console.log('65'.charCodeAt(0)); // 54
console.log('34'.charCodeAt(0)); // 54
console.log('7'.charCodeAt(0)); // 54

const thai = ['ไก่', 'นก', 'แตงโม', 'มะขาม', 'ขวด', 'กระรอก'];
console.log('thai: ', thai.sort());

const result = thai.sort(function (a, b) {
    return a.localeCompare(b);
});
console.log('result: ', result)