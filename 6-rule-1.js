const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank', 'nemo'];

const large = new Array(1000).fill('nemo');

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        console.log('running...');
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
            break;
        }
    }
}

findNemo(everyone);