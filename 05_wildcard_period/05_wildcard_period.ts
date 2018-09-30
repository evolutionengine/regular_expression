// Sometimes its possible you don't know the
// exact string to match, in this case we can
// use a wildcard "."
let str: string = "The pun in the run was nun";
// suppose we want to match all strings that end with 'un'
let regex: RegExp = /.un/gi;
// this matches all words ending in 'un'
let result = str.match(regex);
console.log(result);
