let re;
re = /hello/;

console.log(re);
//  /hello/
console.log(re.source);
// hello

//exec() - return an array if reslut found else null
let res = re.exec("hello world");
console.log(res);
// ['hello', index: 0, input: 'hello world', groups: undefined]

//test() - returns true or false
res = re.test("Hello");
console.log(res);
// to remove this use i to make case insensitive

// i -to make case insensitive
re = /hello/i;
res = re.test("Hello");
console.log(res);
//true

// g-it searches full pragraph
// re=/hello/g;

//match() - return array or null
const str = "Hello there";
const result = str.match(re);
console.log(result);
//['Hello', index: 0, input: 'Hello there', groups: undefined]

//search() - returns ind4ex of first found else null
const str2 = "Hello there";
res = str2.search(re);
console.log(res);
//0

//replace() - return new string with some or all matches of a pattern
const str3 = "Hello there";
res = str3.replace(re, "gandimara");
console.log(res);
//gandimara there
