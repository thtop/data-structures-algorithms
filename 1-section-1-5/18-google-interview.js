//https://www.youtube.com/watch?v=XKu_SEDAykw
//const arr = [1, 2, 3, 9];
const arr = [1, 2, 4, 4];
const sum = 8;

// Naive
function hasPairWithSum(arr, sum) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === sum) {
                return true;
            }
        }
    }
    return false;
}
console.log(hasPairWithSum(arr, sum));

// Better
function hasPairWithSum2(arr, sum) {
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (mySet.has(arr[i])) {
            return true;
        }
        mySet.add(sum - arr[i]);
    }
    return false;
}
console.log(hasPairWithSum2(arr, sum));