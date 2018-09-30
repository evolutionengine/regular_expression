// we can extract multiple occurrences using regular expression
let str: string = "black holes, in the Black sky are so wonderfully bLACk";
// declaring the regex with additional flag "g"
// you can use multiple flags "ig" to ignore case and extract
// multiple occurrences
let regex: RegExp = /black/gi;
let answer: RegExpMatchArray = str.match(regex);
console.log(answer);
// returns [ 'black', 'Black', 'bLACk' ]
