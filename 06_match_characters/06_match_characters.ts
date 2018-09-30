// Till now we have been matching whole words or strings or wildcards
// What if we want to match select characters in word, e.g we want
// 'bun', 'bin' but not 'ban' , it can be done using character class
// denoted by []
let str1: string = "bun";
let str2: string = "bin";
let str3: string = "ban";
// note that the regex uses character class with [] notation
let regex: RegExp = /b[ui]n/gi;
console.log("str1 matches: " + str1.match(regex)); // returns bun
console.log("str2 matches: " + str2.match(regex)); // returns bin
console.log("str3 matches: " + str3.match(regex)); // returns null
console.log();
// We can also match a range of characters, but typing such a long regex
// is tiring, we can use shorthand for range
let str4: string = "cat";
let str5: string = "bat";
let str6: string = "mat";
let str7: string = "rat";
// we want to match everything except "rat"
let regex2: RegExp = /[a-m]at/gi;
console.log("str4 matches: " + str4.match(regex2));
console.log("str5 matches: " + str5.match(regex2));
console.log("str6 matches: " + str6.match(regex2));
console.log("str7 matches: " + str7.match(regex2)); // returns null

// we can also match numbers
let nameStr: string = "James Bond 007";
let regex3: RegExp = /[a-z0-9]/gi;
console.log("nameStr matches: " + nameStr.match(regex3));
