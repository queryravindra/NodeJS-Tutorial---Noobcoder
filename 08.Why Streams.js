// 8.Why You Should Use Streams
// (suppose there is a large file of 2.73GB i.e.,largefile.txt)

const fs = require('fs');

fs.readFile('./largefile.txt', (err, file) => {
    if(err) {
        console.log(err);
    } else {
        console.log(file);
    }
});

// ----------------------------------------------------------------

const readStream = fs.createReadStream('./largefile.txt');
readStream.on('data', (chunk) => {
    // we are not reading the entire file, we are reading it by chunks
    console.log(chunk);
});
