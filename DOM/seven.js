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

let newLi = document.createElement("li");
newLi.className = "list-group-item";

let newLiText = document.createTextNode("hello World");

newLi.appendChild(newLiText);

let container2 = document.querySelector("div .list-group");

let li = document.querySelector("div li");

console.log(container2);

console.log(newLi);

container2.insertBefore(newLi, li);
