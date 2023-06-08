// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// // console.log(document.title);
// document.title = "Darshan Form";
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// // console.log(document);
// console.log(document.body);

// var headerTitle = document.getElementById("header-title");

// headerTitle.style.borderBottom = "solid 3px #000";

// h2.style.fontWeight = "bold";

// getElementsByClassName

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);

// console.log(items[1]);
// items[1].style.fontWeight = "bold";

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "yellow";
// }

// // getElementsByTagName
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }

// QuerySelector && QuerySelectorALL;

// let header = document.querySelector("#main-header");
// header.style.borderBottom = "Solid 4px grey";

// let input = document.querySelector("input");
// input.value = "Darshan";

// let submit = document.querySelector('input[type = "submit"]');
// submit.value = "SEND";

// let item = document.querySelector(".list-group-item");
// item.style.color = "red";

// let lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.color = "transparent";

// let secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.backgroundColor = "green";

// querySelectorAll

// let titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "Hello";

// let odd = document.querySelectorAll("li:nth-child(odd");
// let even = document.querySelectorAll("li:nth-child(even");

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "grey";
//   even[i].style.backgroundColor = "#f4f4f4";
// }

// TRAVERSING THE DOM

var itemList = document.querySelector("#items");
// parentNode
// console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "grey";
// console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode);

// parentElement
console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "grey";
// console.log(itemList.parentNode.parentNode.parentNode);

// childNodes
// console.log(itemList.childNodes);

// children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "black";
// itemList.children[1].style.color = "white";

// firstChild
// console.log(itemList.firstChild);

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

// lastChild
// console.log(itemList.lastChild);

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

// nextSibling
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "red";

// createElement
//  create a div
let newDiv = document.createElement("div");

// Add a class
newDiv.className = "Hello";

// Add a ID
newDiv.id = "hello1";

// Add a attribute
newDiv.setAttribute("title", "Hello Div");

// create text node
let newDivText = document.createTextNode("Hello World");

// add text to div
newDiv.appendChild(newDivText);

// add it to DOM
let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");

console.log(newDiv);

newDiv.style.fontSize = "35px";
container.insertBefore(newDiv, h1);
