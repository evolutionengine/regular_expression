// we can match the last word in a string using '$'
let str: string = "Mary had a little lamb";
let regex: RegExp = /Mary$/i;
console.log(regex.test(str));
// return false
let newStr: string = "Mary had a little lamb named mary";
console.log(regex.test(newStr));
// return true
