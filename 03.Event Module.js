// THE EVENTS MODULE AND EVENTEMITTER CLASS
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', () => {
    console.log('tutorial event has occured');
});

eventEmitter.emit('tutorial');  // tutorial event has occured

// ----------------------------------------------

eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 2);  // 3


class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let ravindra = new Person('Ravindra');

ravindra.on('name', () => {
    console.log('my name is ' + ravindra.name);  
});

ravindra.emit('name');  // my name is Ravindra

// --------------------------------------------------------

// multiple persons

let ravindra = new Person('Ravindra');
let phanindra = new Person('Phanindra');

ravindra.on('name', () => {
    console.log('my name is ' + ravindra.name);  
});

phanindra.on('name', () => {
    console.log('my name is ' + phanindra.name);  
});

// executed synchronously
// they get executed inorder that they emitted so they execute synchronously
ravindra.emit('name');  // my name is Ravindra
phanindra.emit('name');  // my name is Phanindra