// Lets try extracting the matching regex
let str2: string = "The one who flew over the cuckoo's nest";
// lets try and extract 'nest'
let regex2: RegExp = /nest/i;
let answer: RegExpMatchArray = str2.match(regex2);
// match() returns a array, we only want the first value
console.log(answer[0]);

// lets try for a value which does not exist
let regex3: RegExp = /diamond/i;
let answer2: RegExpMatchArray = str2.match(regex3);
console.log(answer2);
// returns null
