/*
-----------------------------------
Match All Alphabets & Numbers
-----------------------------------
*/
// Its very common to check for alphabets and numbers
// it can be done using a shorthand /\w/
// It is equal to [A-Za-z0-9_]
let str: string = "20_49 Polar Express";
let regex: RegExp = /\w/g;
console.log(regex.test(str));
// returns true

/*
-----------------------------------
Match Not All Alphabets & Numbers
-----------------------------------
*/
// It can be reversed to not find all alphabets & numbers
// using capital '/\W/'
let geek: string = "Programming!";
let newRegex: RegExp = /\W/g;
console.log(geek.match(newRegex));
// returns "!"

/*
-----------------------------------
Match All Numbers
-----------------------------------
*/
// This is equal to [0-9]
let price: string = "Your Kalari Coofee is for $3.99";
let numRegex: RegExp = /\d/g;
console.log(price.match(numRegex));
// returns 3, 9, 9

/*
-----------------------------------
Match Not All Numbers
-----------------------------------
*/
// This is equal to [^0-9]
let noNumRegex: RegExp = /\D/g;
console.log(price.match(noNumRegex));
