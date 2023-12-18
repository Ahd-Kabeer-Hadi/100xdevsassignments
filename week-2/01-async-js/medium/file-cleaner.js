const { log } = require('console');
const fs = require('fs');

function cleanFiles(fileName) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) throw err;
        const newData = data.split(' ').filter(line => line !== '').join(' ');
        fs.writeFile(fileName, newData, 'utf8', (err) => {
            if (err) throw err;
           return log('The file has been saved!');
        })

    })

}
console.log(cleanFiles('./file.txt'));