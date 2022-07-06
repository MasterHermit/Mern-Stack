let re;

re = /\w/; //word character -alphanumeric or _
// ['H', index: 0, input: 'Hello world', groups: undefined]
// Hello world matches \w

re = /\w+/; //one or more
// ['Hello', index: 0, input: 'Hello world', groups: undefined]
// Hello world matches \w+

re = /\W/; //Non-word Character
re = /\d/; //will match any digit
re = /\d+/; //will match any digit
// ['34', index: 7, input: 'Hello w34er56', groups: undefined]
// Hello w34er56 matches \d+
re = /\D/; //will match any non digit
// ['H', index: 0, input: 'Hello w34er56', groups: undefined]
// Hello w34er56 matches \D

re = /\s/; //match white space char
re = /\S/; //matches any non white charactrer;

re = /hell\b/i; //it will look for exact word hell ;
// null
// Hello w34er56 not matches hell\b

//Assertions
re = /x(?=y)/; //Match x only if followed by y
re = /x(?!y)/; //Match x only if not followed by y

//String to match
let str = "Hello w34er56";

//Log result
const result = re.exec(str);
console.log(result);
//Hello world matches hello

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} not matches ${re.source}`);
  }
}

reTest(re, str);
