let re;
//Literal Characters
re = /hello/i;

//Metacharacters symblos

re = /^h/i; //Must Start with h;
re = /d$/i; //Must End with d;
re = /^hello$/i; //Must start and end with hello;
re = /h.llo/i; //Matches any ONE character
re = /he*o/i; //Matches any character 0 or more times
re = /gre?a?y/i; //grey,gry, gray all will matches as e and y are optional
re = /gre?a?y\?/i; //grey? , gry? and gray?

//String to match
let str = "Hello world";

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
