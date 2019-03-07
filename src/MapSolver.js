class MapSolver {

    constructor(map) {
        this.map = map;
    }
    
    transformMap() {
        const regex = /\${([^}]+)}/;                                                            // Use a regular expression to match the pattern ${key}
        let mapIsPure;                                                                          // Initially we assume the map is pure (meaning no keys are referenced in the values)
        
        do {
            mapIsPure = 1;
            for (let [key, value] of this.map.entries()) {                                     // Iterate the map
                
                if (regex.test(value)) {                                                    // Test the value for a match
                    mapIsPure = 0;
                    this.map.set(key, value.replace(regex, this.map.get(regex.exec(value)[1])));  // Replace the value of the key
                }
            }
        } while (mapIsPure == 0);
        
        this.printOutputMap();
    };
    
    printOutputMap() {
        console.log('\nOutput map');
        for (let [key, value] of this.map.entries()) {                                         // Final iteration to print the output map
            
            console.log(key + ': ' + this.map.get(key));
        }
    }
};

module.exports = MapSolver;