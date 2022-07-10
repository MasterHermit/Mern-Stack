function person(name, dob) {
  this.name = name;
  this.dob = new Date(dob);
  this.calAge = function () {
    const diff = Date.now() - this.dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}
const amit = new person("amit", "11-4-2001");
const marie = new person("marie", "11-28-2001");
console.log(amit.calAge());
