// we can match the last word in a string using '$'
var str = "Mary had a little lamb";
var regex = /Mary$/i;
console.log(regex.test(str));
// return false
var newStr = "Mary had a little lamb named mary";
console.log(regex.test(newStr));
// return true
