// we can find multiple character occurrences
var str = "blah blah blah blaah";
// lets try to find all the occurrences of all the
// 'a' characters
var regex = /a+/g;
console.log(str.match(regex));
// returns [ 'a', 'a', 'a', 'aa' ]
// note that the last item is 'aa' as it is found
// continuous
// matching for multiple occurrences
var chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
var chewieRegex = /Aa*/; // Change this line
var result = chewieQuote.match(chewieRegex);
console.log(result);
