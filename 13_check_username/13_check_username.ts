// A simple regex for username validation
/*
Sample Conditions - 
1) should start with a string atleast 2 characters wide
2) can be in any case
3) digits can only be present at the end including '0'
*/

let username: string = "BlossomMoon1276000";
let regex: RegExp = /^[a-z]{2,}\d*$/i;
console.log(regex.test(username));
// returns true
