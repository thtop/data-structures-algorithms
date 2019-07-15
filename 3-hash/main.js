let user = {
  age: 54,
  name: 'Kvlie',
  magic: true,
  scream: function() {
    console.log('ahhhhhh!');
  }
};

console.log(user.age); // O(1)
user.spell = 'abra kadabra'; // O(1)
console.log(user);
console.log(user.scream()); // O(1)

// O(n/k) => O(n)