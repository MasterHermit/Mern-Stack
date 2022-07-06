//FUNCTION DECLARATIONS
function greet(fname = "Master", lname = "hermit") {
  return "Hello " + fname + " " + lname;
}
console.log(greet()); //default value will be printed
console.log(greet("pruthwiraj", "senapati"));
// Hello Master hermit
// Hello pruthwiraj senapati

//FUNCTION EXPRESSION
const square = function (x = 4) {
  return x * x;
};
console.log(square()); //16
console.log(square(8)); //64

// IMMEDIATELY INNOVAKBLE FUNCTION EXPRESSION - IIFEs

(function (name = "master") {
  console.log("Hello " + name);
})("hermit");
//Hello hermit

//when an fumction put inside a object it's called a method
//PROPERTY METHODS

const todo = {
  add: function () {
    console.log("Add todo..");
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};
todo.delete = function () {
  console.log("Delete todo");
};
todo.add();
todo.edit(22);
todo.delete();

// Add todo..
// Edit todo 22
// Delete todo
