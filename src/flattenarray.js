
/*
** flattenarray: flatten nested arrays
** arr: Array: input array, possibly with sub-arrays
** returns: Array: the flattened input array
*/
function flattenarray(arr) {
    if(!Array.isArray(arr)) {
        throw TypeError("flattenarray argument must be an array");
    }

    var flat = flattenOneLevel(arr);
    return flat;
}

/*
** flattenOneLevel: takes a nested array and merges it into its parent array
*/
function flattenOneLevel(arr) {
    //console.log("flattenOneLevel", JSON.stringify(arr));

    // concatinate each element into the flattened array
    var flat = arr.reduce(function(workingResult, currentElement) {
        //console.log("reducing", JSON.stringify(currentElement));
        if(Array.isArray(currentElement)) {
            // step donw another level
            return workingResult.concat(flattenOneLevel(currentElement));
        }
        else {
            return workingResult.concat(currentElement);
        }
    }, []);
    //console.log("flattenOneLevel returns", JSON.stringify(flat));
    return flat;
}


module.exports = flattenarray;
