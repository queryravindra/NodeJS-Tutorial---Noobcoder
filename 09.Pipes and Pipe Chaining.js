// 9.PIPES AND PIPE CHAINING

const fs = require('fs');

const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt');

readStream.pipe(writeStream);

// --------------------------------------------------------

// Pipe Chaining (create zip)
const fs = require('fs');
const zlib = require('zlib');
const gZip = zlib.createGzip();

const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt.gz');

readStream.pipe(gZip).pipe(writeStream);

// ------------------------------------------------------------

// create unzip
const fs = require('fs');
const zlib = require('zlib');
const gunZip = zlib.createGunzip();

const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');

readStream.pipe(gunZip).pipe(writeStream);