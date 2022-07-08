//create Element

const li = document.createElement("li");
li.className = "collection-item";

li.setAttribute("title", "New Item");

li.appendChild(document.createTextNode("hello"));

const a = document.createElement("a");
a.className = "delete-item secondary-content";
a.setAttribute("href", "#");
a.innerHTML = `<i class="fa fa-remove"></i>`;

li.appendChild(a);

console.log(li);         
console.log(a);
const ul = document.querySelector("ul.collection");
console.log(ul);
ul.append(li);
