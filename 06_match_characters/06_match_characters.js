// Till now we have been matching whole words or strings or wildcards
// What if we want to match select characters in word, e.g we want
// 'bun', 'bin' but not 'ban' , it can be done using character class
// denoted by []
var str1 = "bun";
var str2 = "bin";
var str3 = "ban";
// note that the regex uses character class with [] notation
var regex = /b[ui]n/gi;
console.log("str1 matches: " + str1.match(regex)); // returns bun
console.log("str2 matches: " + str2.match(regex)); // returns bin
console.log("str3 matches: " + str3.match(regex)); // returns null
console.log();
// We can also match a range of characters, but typing such a long regex
// is tiring, we can use shorthand for range
var str4 = "cat";
var str5 = "bat";
var str6 = "mat";
var str7 = "rat";
// we want to match everything except "rat"
var regex2 = /[a-m]at/gi;
console.log("str4 matches: " + str4.match(regex2));
console.log("str5 matches: " + str5.match(regex2));
console.log("str6 matches: " + str6.match(regex2));
console.log("str7 matches: " + str7.match(regex2)); // returns null
// we can also match numbers
var nameStr = "James Bond 007";
var regex3 = /[a-z0-9]/gi;
console.log("nameStr matches: " + nameStr.match(regex3));
