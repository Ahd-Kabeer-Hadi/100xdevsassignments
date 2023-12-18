const fs = require('fs');

function readFile(filename, isLoop = false) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    })
    
   if(isLoop){
    let expensiveArray = [];
    for (let i = 0; i <= 100; i++) {
        expensiveArray.push(i);
        console.log(expensiveArray);
    }
   }

    
}

readFile('./file.txt',true)

function writeIntoFile(filename, data) {
    fs.writeFile(filename, data, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File written successfully');

        readFile(filename);
    })
}

setTimeout(() => {
    writeIntoFile('./file.txt', 'hello from file.txt')  
},6000)
