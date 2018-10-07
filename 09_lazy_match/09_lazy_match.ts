// By default all regular expressions in JS are greedy,
// means they will match all the characters in regex.
// we can find only the first occurrence using lazy find
let str: string = "Tintin";
// note the "?" for lazy match
let regex: RegExp = /t[a-z]*?i/i;
// returns "Ti"
console.log(str.match(regex));
