'use strict';
/*
** In a real program, I'd have a nice logging module that
** could turn logging of features on and off,
** format the output for consumption by downstream processes
** and so forth;
*/

var logger = {
    log: function() {
        //console.log.apply(console, arguments);
    }
};

module.exports = logger;
