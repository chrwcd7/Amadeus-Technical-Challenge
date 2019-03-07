describe("MapChallenge", () => {
    const fs = require("fs");
    const readline = require("readline");
    const filePath = require("path");

    const MapParser = require("../../src/MapParser");
    const MapSolver = require("../../src/MapSolver");
    const fileName = filePath.join(__dirname, "..", "..", "testcases", "testmap1.txt");

    let parser;
    let map;
    let solver;

    beforeEach(() => {
        parser = new MapParser(fs, readline, fileName);
    });

    it("should be able to parse the input", done => {
        map = parser.parseInput()
            .then(() => {
                expect(map).toBeDefined();
                done();
            });
    });

    it("should print the output map", done => {
        parser.parseInput()
            .then(map => {
                solver = new MapSolver(map);
                spyOn(solver, "printOutputMap");
                solver.transformMap();
                
                expect(solver.printOutputMap).toHaveBeenCalled();
                done();
            })
    });

})