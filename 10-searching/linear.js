var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

console.log(beasts.indexOf('Godzilla'));

beasts.findIndex(function (item) {
    return item === 'Godzilla';
});

beasts.find(function (item) {
    return item === 'Godzilla';
})

console.log(beasts.includes('Godzilla'));