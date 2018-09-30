// Lets try extracting the matching regex
var str2 = "The one who flew over the cuckoo's nest";
// lets try and extract 'nest'
var regex2 = /nest/i;
var answer = str2.match(regex2);
// match() returns a array, we only want the first value
console.log(answer[0]);
// lets try for a value which does not exist
var regex3 = /diamond/i;
var answer2 = str2.match(regex3);
console.log(answer2);
// returns null
