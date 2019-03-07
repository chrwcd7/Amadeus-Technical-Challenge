class MapParser {
    
    constructor(fs, readline, filename) {
        this.fs = fs;
        this.readline = readline;
        this.filename = filename;
    }
    
    async parseInput() {
        return new Promise((resolve, reject) => {

            const myMap = new Map();
            
            const lineReader = this.readline.createInterface({      // Using a readable stream for reading data one line at a time
                input: this.fs.createReadStream(this.filename)
            });
            
            let lineIndex = 1;
            let pair;
            
            lineReader
                .on('line', line => {                               // Read the file line by line and construct the map
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
                    resolve(myMap);
                });
        })
    }
}

module.exports = MapParser;