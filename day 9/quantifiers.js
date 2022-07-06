let re;
//Brackets [] - Character sets
re = /gr[ae]y/i; //must be an a or e gray or grey but not gry
re = /[gf]ray/i; //must start with g or f
re = /[^GF]ray/i; //must start with without g or f anything else
re = /[A-Z]ray/; //must start with any capital letter from A-Z
re = /[A-Za-z]ray/; // any alphabetic character
re = /[0-9]ray/; //any digit that satrt with

//Braces - {} -Quantifiers
re = /Hel{2}o/i; //l must be excatly 2 times
re = /Hel{2,4}o/i; //l must between 2 to 4 times
re = /Hel{2,}o/i; //l must be atleat 2 times

//Parenthesis () -Groupiing
re = /([0-9]x){3}/; //3x3x3x
re = /([0-9]x){3}$/; //that ends with 3x3x3x

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
