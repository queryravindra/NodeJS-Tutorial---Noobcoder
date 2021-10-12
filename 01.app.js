// 2.WORKING WITH MODULES

// single thing
const sum = require('./02.module');

console.log(sum);  // [Function: sum]
console.log(sum(1, 1));  // 2

// --------------------------------------

// multiple things
const something = require('./02.module');

console.log(something);
/**
 * output:
 * 
 *  {
 *     sum: [Function: sum],
 *     PI: 3.14,
 *     SomeMathObject: [class SomeMathObject]
 *   }
 * 
 */

 console.log(something.sum(1, 1));  // 2
 console.log(something.PI);  // 3.14
 console.log(new something.SomeMathObject());
/**
 * output:
 * 
 * object created
 * SomeMathObject {}
 * 
 */