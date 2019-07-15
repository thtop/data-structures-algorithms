// Create a function that reverses
// a string:
// 'Hi My name is Thamonwan' should be:
// 'nawnomahT si eman yM iH'

function revers(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Hmm that is not good';
  }

  const backwards = [];
  const totoalItem = str.length - 1;
  for (let i = totoalItem; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
}
console.log('**** V1 ****');
console.log(revers('Hi My name is Thamonwan'));

function revers2(str) {
  return str
    .split('')
    .reverse()
    .join('');
}
console.log('**** V2 ****');
console.log(revers2('Hi My name is Thamonwan'));

const revers3 = str =>
  str
    .split('')
    .reverse()
    .join('');
console.log('**** V3 ****');
console.log(revers3('Hi My name is Thamonwan'));

const revers4 = str => [...str].reverse().join('');
console.log('**** V4 ****');
console.log(revers4('Hi My name is Thamonwan'));
