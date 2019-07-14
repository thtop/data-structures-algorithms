// Reference type (object)
/**
 * - Primitive => defined by the progtamming language 
 *   (The person who wrote JavaScript and ECMAScript)
 * 
 * - Reference type => non primitive type not defind by 
 *   progtamming languages.
 *   They're created by the programmer.
 */

var object1 = {
    value: 10
};
var object2 = object1;
var object3 = {
    value: 10
};

console.log(object1 === object2); // true
console.log(object1 === object3); // false

object1.value = 15;
console.log(object2.value) // 15
console.log(object3.value) // 10

// Context
/**
 * context vs scope
 */

// scope
function b() {
    let a = 4;
}
//console.log(a); // Error: a is not defined

// context => where we are with in the object?
// on browser
/*
console.log(this);
console.log(this === window); // true
this.alert('Hello');
window.alert('Hi!');

function a() {
    console.log(this); // Window
}
window.a();

const object4 = {
    a: function () {
        console.log(this);
    }
}
object4.a(); // {a: f}
*/

// Instantiation
class Player {
    constructor(name, type) {
        console.log('Player: ', this); // Wizard {}
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log('Wizard: ', this);
        // Wizard { name: 'Shelly', type: 'Healer' }
        // Wizard { name: 'Shawn', type: 'Dark Magic' }
    }
    play() {
        console.log(`WEEEEEEE I'm a ${this.type}`);
    }
}

// const player = new Player('Commander Lexa', 'Leader');
// player.introduce();

const wizard1 = new Wizard('Shelly', 'Healer');
wizard1.introduce();
wizard1.play();
const wizard2 = new Wizard('Shawn', 'Dark Magic');
wizard2.introduce();
wizard2.play();

// Classscical Inheritance
// var Player2 = function (name, type) {
//     this.name = name;
//     this.type = type;
// }
// Player2.proptotype.introduce2 = function () {
//     console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
// }

// const wizard21 = new Wizard('Shelly', 'Healer');
// wizard21.play = function () {
//     console.log(`WEEEEEEE I'm a ${this.type}`);
// }

// const wizard22 = new Wizard('Shawn', 'Dark Magic');
// wizard22.play = function () {
//     console.log(`WEEEEEEE I'm a ${this.type}`);
// }