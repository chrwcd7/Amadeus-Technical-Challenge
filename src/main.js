if (process.argv.length < 3) {                                                              // Check if an input file is provided
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}

const fs = require('fs');
const readline = require('readline');
const filename = process.argv[2];

const MapSolver = require('./MapSolver');

const solver = new MapSolver(fs, readline, filename);
solver.parseAndTransform();
