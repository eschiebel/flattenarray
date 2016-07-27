'use strict';
var logger = require('./logger');

//*****************
//  This implementation is a totally hand-crafted solution.
//  See flattenarray.js for one that uses Array.reduce
//      to flatten each array element array it comes across.
//*****************
const MODULENAME = 'flattenarray';

/*
** flattenarray: flatten nested arrays
** arr: Array: input array, possibly with sub-arrays
** returns: Array: the flattened input array
*/
function flattenarray(arr) {
    if(!Array.isArray(arr)) {
        throw TypeError("flattenarray argument must be an array");
    }

    var flat = flattenEachLevel(arr);
    return flat;
}

/*
** flattenOneLevel: takes a nested array and merges it into its parent array
*/
function flattenEachLevel(arr) {
    const FNAME = "flattenEachLevel";
    logger.log(MODULENAME, FNAME, JSON.stringify(arr));

    // concatinate each element into the flattened array
    var flat = [];
    var i, currentElement;
    for(i =0; i < arr.length; ++i) {
        currentElement = arr[i];

        logger.log(MODULENAME, FNAME, "reducing", JSON.stringify(currentElement));
        if(Array.isArray(currentElement)) {
            // step donw another level
            flat = flat.concat(flattenEachLevel(currentElement));
        }
        else {
            flat = flat.concat(currentElement);
        }
    }
    logger.log(MODULENAME, FNAME, "returns", JSON.stringify(flat));
    return flat;
}


module.exports = flattenarray;
