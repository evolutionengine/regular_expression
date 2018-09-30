// Sometimes its possible you don't know the
// exact string to match, in this case we can
// use a wildcard "."
var str = "The pun in the run was nun";
// suppose we want to match all strings that end with 'un'
var regex = /.un/gi;
var result = str.match(regex);
console.log(result);
