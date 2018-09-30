// We can ignore cases using regex flag 'i'
var str = "The deep bLue sea and the lively corals";
// lets catch all cases of 'blue'
var regex = /blue/i;
// test() only returns true or false
console.log("Is blue present: " + regex.test(str));
