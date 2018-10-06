// Till now we have seen how to match characters we want
// but, we can also match characters we do not want to match
var str = '4029 Violet Richmond Street';
var regex = /[^0-9violet]/ig;
console.log(str.match(regex));
