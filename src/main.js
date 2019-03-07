if (process.argv.length < 3) {                                        // Check if an input file is provided
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}

const fs = require('fs');
const readline = require('readline');
const filename = process.argv[2];

const MapParser = require('./MapParser');
const MapSolver = require('./MapSolver');

let map;
(async () => {
    map = await new MapParser(fs, readline, filename).parseInput();     // Wait for parseInput() to return the input map
    
    const solver = new MapSolver(map);
    solver.transformMap();
})();