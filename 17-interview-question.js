// Given 2 arrays, create a function that let's a use know (true/false) whether these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
//should return false
//------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];

// 2 parameters - array - no size limit
// return trur or false

// O(n^2)

/*

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(containsCommonItem(array1, array2)); 
// O(n^2) ==> O(a * b)
// O(1) - Space Complexity

*/

//***************************** */

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

/**
 * array1 ==> obj {
 *  a: true,
 *  b: true,
 *  c: true,
 *  x: true
 * }
 *  */

// array2[index] === boj.properties

function containsCommonItem2(arr1, arr2) {
  // mapArrayToObject(arr1)
  // loop through first array and create object
  // where properties === items in the array
  //
  // can we assume always 2 params?
  // if () {...}
  let map = {}; // O(a) - Space Complexity
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  //console.log(map);
  //
  // loop through second array and check
  // if item in second array exists on created object.
  // compareArrayToObject(arr2)
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}
//console.log(containsCommonItem2(array1, array2));
// O(a + b) Time Complexity
// O(a) - Space Complexity

/**
 * This solution although faster in terms of Time complexity is more happy in terms of Space complexity
 */

//***************************** */
// JavaScript
// Readable
function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}
console.log(containsCommonItem3(array1, array2));
