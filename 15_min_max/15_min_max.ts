// We can specify minimum & maximum length
let A4: string = "Yaaay";
let A2: string = "Yaay";
// we specify that 'a' should occur minimum 3 times
// and maximum 5 times
let a4Regex: RegExp = /a{3,5}y/;
console.log(a4Regex.test(A4));
// returns true
console.log(a4Regex.test(A2));
// returns false

let A100 = "Y" + "a".repeat(100) + "y";
let minA3Regex: RegExp = /ya{3,}y/i;
console.log(minA3Regex.test(A100));
// returns true

// we can also check for fixed length
let a2Regex: RegExp = /ya{2}y/i;
console.log(a2Regex.test(A2));
// returns true
