// static array
const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage

// access / lookup
console.log(strings[2]); // O(1)

// push O(1)
strings.push('e');
console.log(strings);

// pop --> Removing the last item
strings.pop(); // O(1)
strings.pop(); // O(1)
console.log(strings);

// unshift / insert --> Add x in the beginning
strings.unshift('x'); // O(n) --> loop for update index
console.log(strings);

// splice / insert
strings.splice(2, 0, 'alien'); // O(n/2) --> O(n)
console.log(strings);

/**
 * C++
int a[20];
int b[5] {1,2,3,4,5}
*/
// dynamic array
const strings2 = ['a', 'b', 'c', 'd'];

// Loop over this item -> copy them -> 
// -> and move it to a different location
// -> with now doubles the space ==> o(n)

strings2.push('z'); // O(n)