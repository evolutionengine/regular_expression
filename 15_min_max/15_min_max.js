// We can specify minimum & maximum length
var A4 = "Yaaay";
var A2 = "Yaay";
// we specify that 'a' should occur minimum 3 times
// and maximum 5 times
var a4Regex = /a{3,5}y/;
console.log(a4Regex.test(A4));
// returns true
console.log(a4Regex.test(A2));
// returns false
var A100 = "Y" + "a".repeat(100) + "y";
var minA3Regex = /ya{3,}y/i;
console.log(minA3Regex.test(A100));
// returns true
// we can also check for fixed length
var a2Regex = /ya{2}y/i;
console.log(a2Regex.test(A2));
// returns true
