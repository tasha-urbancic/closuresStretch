// wrapLog.js

// Create a function called wrapLog() that takes
// in a function (callback) and a string (name)
// and returns a function that does the same thing
// as callback but also logs the name, input parameters,
//  and return value of the callback function:

var wrapLog = function (callback, name) {

  return function(...args) {

    // using spread and rest parameters from ECMAScript 2015 (6th Edition, ECMA-262)
    var result = callback(...args);
    // var result = callback.apply(null, args);
    var output = name + '(' + args.join(', ') + ') => ' + result;
    console.log(output);
    return result;
  }

};

var area = function (x, y) {
  return x * y;
};

// const area = (x, y) => x*y; //Fat arow, could use rest here for variable number of input parameters

var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24