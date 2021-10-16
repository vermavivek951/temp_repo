// Modules

// CommonJS , every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

/*
const secret = "SUPER SECRET";
const node = 'node';
const javascript = 'javascript';

const sayHi = (name) => {
    console.log(`Hello there! ${name}`);
}
*/

const names = require('./4-names');
const sayHi = require('./5-utils');
const data  = require('./6-alternative-flavor');

require('./7-mind-grenade');

sayHi('NodeJS');
sayHi(names.node);
sayHi(names.javascript);