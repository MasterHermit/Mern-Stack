let x = 10;
var y = 20;
{
  let x = 10;
  const y = 40;
}
document.getElementById("demo").innerText = x; //10
document.getElementById("demo").innerText = y; //20

//Arrow Function

let val = (x, y) => x * y;
console.log(val(10, 2)); //20

//For of loop
let a = "";
const fruits = ["apple", "grapes", "banana", "orange"];
for (let f of fruits) {
  a += f + " ";
}
console.log(a); //apple grapes banana orange

//sets
const fset = new Set();
fset.add("a");
fset.add("b");
fset.add("c");

console.log(fset.size); //3

//maps
const fmap = new Map();
fmap.set("apple", "red");
fmap.set("water melon", "green");
console.log(fmap.size); //2
console.log(fmap.get("apple")); //red


