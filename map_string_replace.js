if (process.argv.length < 3) {                                                          // Check if an input file is provided
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}

const fs = require('fs');
const readline = require('readline');
const filename = process.argv[2];

const myMap = new Map();
const regex = /\${([^}]+)}/;                                                            // Use a regular expression to match the pattern ${key}

const lineReader = readline.createInterface({
    input: fs.createReadStream(filename)
});

let lineIndex = 1;
let pair;

lineReader
    .on('line', line => {                                                               // Read the file line by line and construct the map
        pair = line.split(' ');
        if (!pair[0]) {
            throw new Error("Input map is of incorrect format: Key is not provided on line " + lineIndex);
        }
        if (!pair[1]) {
            throw new Error("Input map is of incorrect format: Value is not provided on line " + lineIndex);
        }
        myMap.set(pair[0], pair[1]);
        lineIndex++;
    })
    .on('close', () => {
        console.log('\nOutput map');

        for (let [key, value] of myMap.entries()) {                                     // Iterate the map
        
            if (regex.test(value)) {                                                    // Test the value for a match
                myMap.set(key, value.replace(regex, myMap.get(regex.exec(value)[1])));  // Replace the value of the key
            }
            
            console.log(key + ': ' + myMap.get(key));
        }
    });