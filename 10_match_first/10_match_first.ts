// We can match only the first occurrence using '^'
let str: string = "Twinkle twinkle little star";
let regex: RegExp = /^twinkle/i;
console.log(str.match(regex));
// returns "Twinkle"
