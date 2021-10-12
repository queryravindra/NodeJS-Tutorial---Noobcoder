// 13.Installing packages using NPM(Node package Manager)

/***
 * 1.npm install lodash
 * ----blabla-----
 * 2.npm uninstall lodash
 */

const _ = require('lodash');

let example = _.fill([1, 2, 3, 4, 5], "banana", 1, 4);
console.log(example);  // [ 1, 'banana', 'banana', 'banana', 5 ]

// 14.Semantic Versioning

/**
 * MAJOR.MINOR.PATCH
 * 
 * ^ --> MAJOR.X.X
 * ~ --> MAJOR.MINOR.X
 */