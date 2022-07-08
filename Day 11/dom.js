//Selectors
const taskTitle = document.getElementById("task-title");
//document.getElementById()

console.log(taskTitle);

//get things from the element
console.log(taskTitle.className);

//change styling
taskTitle.style.backgroundColor = "red";

//change content
//taskTitle.textContent = "Task Contenet";
//taskTitle.innerText = "Inner-Text";
//taskTitle.innerHTML = "<span style='color:yellow'>Inner-HTml</span>";

//querry selector
console.log(document.querySelector("#task-title"));

document.querySelector("li").style.backgroundColor = "cyan";

//nested selctor
document.querySelector("ul li").style.backgroundColor = "blue";

document.querySelector("li:last-child").style.color = "red";

document.querySelector("li:nth-child(3)").style.color = "green";

let lis = document.getElementsByTagName("li");
console.log(lis);
lis = Array.from(lis);
lis.forEach((li) => {
  li.style.backgroundColor = "gray";
});

const items = document.querySelectorAll("li.collection-item");
console.log(items);

items.forEach((item, index) => {
  item.textContent = `${index}.item`;
});

//for loop0 work for both without Array.from() method
