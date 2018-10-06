// we can find multiple character occurrences
let str: string = "blah blah blah blaah";
// lets try to find all the occurrences of all the
// 'a' characters
let regex: RegExp = /a+/g;
console.log(str.match(regex));
// returns [ 'a', 'a', 'a', 'aa' ]
// note that the last item is 'aa' as it is found
// continuous
