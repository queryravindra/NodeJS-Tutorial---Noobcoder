// 6.WORKING WITH FILE SYSTEM MODULE(part2). Creating and Deleting Folders

const fs = require('fs');

// create folder

fs.mkdir('tutorial', (err) => {
    if(err)
        console.log(err);
    else {
        fs.writeFile('./tutorial/example.txt', '12345', (err) => {
            if(err)
                console.log(err);
            else
                console.log('Succesfully created file');
        })
    }  
});

// ------------------------------------------------------------------

// (rmdir)remove folder which is empty(if it has file first remove it i.e.,unlink)
fs.unlink('./tutorial/example.txt', (err) => {
    if(err)
        console.log(err);
    else {
        fs.rmdir('tutorial', (err) => {
            if(err)
                console.log(err);
            else
                console.log('Deleted folder');
        });
    }
});

// -----------------------------------------------------------------

// when there is multiple files in folder
fs.readdir('example', (err, files) => {
    if(err)
        console.log(err);
    else {
        console.log(files);  // [ 'a.txt', 'b.txt' ]
        for(let file of files) {
            fs.unlink('./example/' + file, (err) => {
                if(err)
                    console.log(err);
                else
                    console.log('Successfully deleted file');
            })
        }
    }
});