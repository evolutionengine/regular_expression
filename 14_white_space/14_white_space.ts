// We can also check for white space
let name1: string = "James Bond";
// we can ckeck using /\s/ which would stand
// for [ \r\t\f\n\v]
let regex: RegExp = /\s/g;
console.log(regex.test(name1));
// we can count the number of white space
let spaces: number = name1.match(regex).length;
console.log("White spaces are: " + spaces);
// returns true
let newName: string = "JamesBond";
console.log(regex.test(newName));
// returns false

// For checking no white space use /\S/
let noSpaceRegex: RegExp = /\S/g;
console.log(noSpaceRegex.test(newName));
// returns true
