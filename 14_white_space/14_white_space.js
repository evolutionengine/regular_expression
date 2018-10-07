// We can also check for white space
var name1 = "James Bond";
// we can ckeck using /\s/ which would stand
// for [ \r\t\f\n\v]
var regex = /\s/g;
console.log(regex.test(name1));
// we can count the number of white space
var spaces = name1.match(regex).length;
console.log("White spaces are: " + spaces);
// returns true
var newName = "JamesBond";
console.log(regex.test(newName));
// returns false
// For checking no white space use /\S/
var noSpaceRegex = /\S/g;
console.log(noSpaceRegex.test(newName));
// returns true
