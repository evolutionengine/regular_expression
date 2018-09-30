// We can ignore cases using regex flag 'i'
let str: string = "The deep bLue sea and the lively corals";
// lets catch all cases of 'blue'
let regex: RegExp = /blue/i;
// test() only returns true or false
console.log("Is blue present: " + regex.test(str));
// returns 'true'
