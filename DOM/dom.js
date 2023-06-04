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

var headerTitle = document.getElementById("header-title");

headerTitle.style.borderBottom = "solid 3px #000";

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

let header = document.querySelector("#main-header");
header.style.borderBottom = "Solid 4px grey";

let input = document.querySelector("input");
input.value = "Darshan";

let submit = document.querySelector('input[type = "submit"]');
submit.value = "SEND";

let item = document.querySelector(".list-group-item");
item.style.color = "red";

let lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "blue";

let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style.color = "transparent";

let secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.backgroundColor = "green";

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
