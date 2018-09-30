// we can extract multiple occurrences using regular expression
var str = "black holes, in the Black sky are so wonderfully bLACk";
// declaring the regex with additional flag "g"
// you can use multiple flags "ig" to ignore case and extract
// multiple occurrences
var regex = /black/gi;
var answer = str.match(regex);
console.log(answer);
// returns [ 'black', 'Black', 'bLACk' ]
