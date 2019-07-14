// Find 1st, Find Nth...
const array = ['hi', 'my', 'teddy'];
array[0]; // O(1)
array[array.length - 1] // O(1)


// Comparing date
const array2 = [{
        tweet: 'hi',
        date: 2012,
    },
    {
        tweet: 'my',
        date: 2014,
    },
    {
        tweet: 'teddy',
        date: 2018,
    }
]; // O(n^2)

// .length -> depends on the language that you're  working on
// How .length works in that language
// JavaScript => O(1) - Constant time
'helsdldldldldlldisfsdgsgd'.length