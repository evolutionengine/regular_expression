// Initial string 
var stringToMatch = "Its a beautiful sunny day today!";
// Regex string to match
// Here we are matching for the word "beautiful" in stringToMatch
// 
// Regex are case sensitive, for now it will work only on "beautiful"
// it will not work for "Beautiful", "beAutiful", "beauTiful"
var regexToMatch = /beautiful/;
// test() returns if the regex is present or not
console.log('Is the regex present: ' + regexToMatch.test(stringToMatch));
