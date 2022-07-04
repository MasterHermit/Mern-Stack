const fname = "pruthwiraj";
const lname = "senapati";
let val;

val = fname + lname;

//concatenation
val = fname + " " + lname;

//appending
val = "brad";
val += "traversy";
//bradtraversy

val = "my name is " + fname + " and i am a starboy";
//my name is pruthwiraj and i am a starboy

//Escapimg
val = "that's awesome";
//that's awesome

//length
val = fname.length; //10

//Concat()
val = fname.concat(" ", lname);
//pruthwiraj senapati

//Change Case
val = fname.toUpperCase();
val = fname.toLowerCase();
//pruthwiraj
val = fname.toLocaleLowerCase();

//index
val = fname[2]; //u
val = fname.indexOf("t"); //3
val = fname.lastIndexOf("i"); //6

//charAt
val = fname.charAt(2); //u
//if nothing present in that index it will, give nothing
val = fname.charAt(fname.length - 1); //j

//SubString
val = fname.substring(0, 5); //pruth
//gives values from 0-4 index

//slice
val = fname.slice(0, 4); //prut
val = fname.slice(-3); //raj

const str = "hello my name is Master Hermit i am here to fuck you";
val = str.split(" ");
/* 
0: "hello"
1: "my"
2: "name"
3: "is"
4: "Master"
5: "Hermit"
6: "i"
7: "am"
8: "here"
9: "to"
10: "fuck"
11: "you"
length: 12
 */
val = str.replace("Master", "Vikram");
//hello my name is Vikram Hermit i am here to fuck you
val = str.includes("fook");
//false
//it checks that value is present inside the string or not

console.log(val);
