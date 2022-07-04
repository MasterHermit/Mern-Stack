const numbers = [10, 12, 13, 14, 16];
const numbers2 = new Array(11, 13, 15, 17, 19);
const mixed = ["hello", 100, true, undefined, null, { a: 2, b: 2 }, new Date()];

let val;

//get array length
val = numbers.length;

//check if array
val = Array.isArray(numbers);
//true;

//indexing
val = numbers[3]; //14
val = numbers[0]; //10
numbers[4] = 45;
val = numbers.indexOf(14); //3

//MUTATING ARRAY
numbers.push(100); //add to end
numbers.unshift(200); //add to front

numbers.pop(); //remove from end
numbers.shift(); //remove from front

//Splice Values
//numbers.splice(1, 3); //we have to give strt index and end index

numbers.reverse(); //rteverse the array

val = numbers.concat(numbers2);
//(10) [45, 14, 13, 12, 10, 11, 13, 15, 17, 19]
val = numbers + numbers2;
//45,14,13,12,1011,13,15,17,19

val = numbers.sort();
//[10, 12, 13, 14, 45]

//Using the compare function
val = numbers.sort((x, y) => {
  return x - y;
});
//(5) [10, 12, 13, 14, 45]

val = numbers.sort((x, y) => {
  return y - x;
});
//[45, 14, 13, 12, 10]

//FIND FUNCTION
function findNo(num) {
  return num < 20;
}
val = numbers.find(findNo);
//it will return the frst no below 20
//14 as array is sorted in revrse

console.log(val);
console.log(numbers);
