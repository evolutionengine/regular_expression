/*
-----------------------------------
Match All Alphabets & Numbers
-----------------------------------
*/
// Its very common to check for alphabets and numbers
// it can be done using a shorthand /\w/
// It is equal to [A-Za-z0-9_]
var str = "20_49 Polar Express";
var regex = /\w/g;
console.log(regex.test(str));
// returns true
/*
-----------------------------------
Match Not All Alphabets & Numbers
-----------------------------------
*/
// It can be reversed to not find all alphabets & numbers
// using capital '/\W/'
var geek = "Programming!";
var newRegex = /\W/g;
console.log(geek.match(newRegex));
// returns "!"
/*
-----------------------------------
Match All Numbers
-----------------------------------
*/
// This is equal to [0-9]
var price = "Your Kalari Coofee is for $3.99";
var numRegex = /\d/g;
console.log(price.match(numRegex));
// returns 3, 9, 9
/*
-----------------------------------
Match Not All Numbers
-----------------------------------
*/
// This is equal to [^0-9]
var noNumRegex = /\D/g;
console.log(price.match(noNumRegex));
