// Till now we have seen how to match characters we want
// but, we can also match characters we do not want to match
let str: string = "4029 Violet Richmond Street";
// suppose we want to match everything except digits & the word
// "Violet"
let regex: RegExp = /[^0-9violet]/gi;
// The '^' denotes 'not' or 'negated'
console.log(str.match(regex));
