// 5.WORKING WITH FILE SYSTEM MODULE(CREATING, READING, DELETING, RENAMING) FILES

const fs = require('fs');

// Create a file
fs.writeFile('example.txt', "this is an example", (err) => {
    if(err)
        console.log(err);
    else {
        console.log('File successfully created');
        fs.readFile('example.txt', 'utf8', (err, file) => {
            if(err)
                console.log(err);
            else 
                console.log(file);
        });
    }
});

// -------------------------------------------------------------

// Renaming a file
fs.rename('example.txt', 'example2.txt', (err) => {
    if(err)
        console.log(err);
    else
        console.log('successfully renamed the file');
});

// ---------------------------------------------------------------

// Adding or Appending something at end
fs.appendFile('example2.txt', 'Some data being appended', (err) => {
    if(err) 
        console.log(err);
    else   
        console.log('Successfully appended data to file');
});

// ----------------------------------------------------------------

// Deleting file
fs.unlink('example2.txt', (err) => {
    if(err) 
        console.log(err);
    else 
        console.log('Successfully deleted the file');
});

// -------------------------------------------------------------------