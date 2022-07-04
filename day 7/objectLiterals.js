const person = {
  fname: "hermit",
  lname: "killer",
  age: 22,
  hobbies: ["gaming", "swimming"],
  address: {
    city: "bhubaneswar",
    zip: 751024,
    state: "Odisha",
  },
  getBirthYear: function () {
    return 2022 - this.age;
  },
};

let val;

val = person;
//{fname: 'hermit'}

//Get specific value
//val = person.fname;
//hermit;

val = person.address.city;
//bhubaneswar
val = person.hobbies[1];
//swimming
val = person.getBirthYear();
//2000

//Array of Objects
const people = [
  { name: "amit", age: 21 },
  { name: "bhoota", age: 5 },
];
people.forEach((e) => {
  console.log(e);
});
//{name: 'amit', age: 21}
//{name: 'bhoota', age: 5}

console.log(val);
