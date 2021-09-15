// mapRanges Class
class mapRanges {
    #myMap = []
    #defaultValue = 0
    
    // This function pushes new kvalue range and value into the interval map
    // kvalues (type Array ex: [1,6])
    // value (type varchar)
    insert(kvalues, value) {
        this.#myMap.push({kvalues, value})
    }
    
    // this is just a helper function to get the current interval map
    getMap() {
        return this.#myMap
    }

    // In case you want to change the default value
    // value (type varchar)
    setDefault(value) {
        this.#defaultValue = value
    }
    
    /* The lookup or retrieval method takes a single K value 
       and returns the V value that corresponds to the interval 
       that K falls into or a default value (which needs to be 
       defined when the interval_map is instantiated) when no such 
       interval exists.*/
    // lookup (type float)
    at(lookup) {
        let range = this.#myMap[i]

        /* Loop through the interval map in reverse and return the value if found.
           No need to complete the loop once range found since the ranges override 
           preceeding ranges */
        for(var i = this.#myMap.length-1; i >= 0; i--){
            let range = this.#myMap[i]
            if(range.kvalues[0] <= lookup && range.kvalues[1] > lookup){
                console.log(range.value)
                return range.value
            }
        }
        console.log(this.#defaultValue)
        return this.#defaultValue // default value
    }
}

module.exports = mapRanges;
