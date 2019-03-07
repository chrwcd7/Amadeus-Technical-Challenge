class MapSolver {

    constructor(fs, readline, filename) {
        this.fs = fs;
        this.readline = readline;
        this.filename = filename;
    }
    
    parseAndTransform() {

        const myMap = new Map();
        const regex = /\${([^}]+)}/;                                                            // Use a regular expression to match the pattern ${key}
        
        const lineReader = this.readline.createInterface({
            input: this.fs.createReadStream(this.filename)
        });
        
        let lineIndex = 1;
        let pair;
        let mapIsPure;                                                                          // Initially we assume the map is pure (meaning no keys are referenced in the values)
        
        lineReader
        .on('line', line => {                                                                   // Read the file line by line and construct the map
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
            
            do {
                mapIsPure = 1;
                for (let [key, value] of myMap.entries()) {                                     // Iterate the map
                    
                    if (regex.test(value)) {                                                    // Test the value for a match
                        mapIsPure = 0;
                        myMap.set(key, value.replace(regex, myMap.get(regex.exec(value)[1])));  // Replace the value of the key
                    }
                }
            } while (mapIsPure == 0);
            
            for (let [key, value] of myMap.entries()) {                                         // Final iteration to print the output map
                
                console.log(key + ': ' + myMap.get(key));
            }
        });
    }
}

module.exports = MapSolver;