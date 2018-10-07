// By default all regular expressions in JS are greedy,
// means they will match all the characters in regex.
// we can find only the first occurrence using lazy find
var str = "Tintin";
var regex = /t[a-z]*?i/i;
// returns "Ti"
console.log(str.match(regex));
