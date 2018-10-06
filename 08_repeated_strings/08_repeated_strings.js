// we can find multiple character occurrences
var str = "blah blah blah blaah";
// lets try to find all the occurrences of all the
// 'a' characters
var regex = /a+/g;
console.log(str.match(regex));
