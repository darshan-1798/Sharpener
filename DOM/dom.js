// console.dir(document);

console.log(document.domain);
console.log(document.URL);
// console.log(document.title);
document.title = "Darshan Form";
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
// console.log(document);
console.log(document.body);

var headerTitle = document.getElementById("header-title");

headerTitle.style.borderBottom = "solid 3px #000";

// h2.style.fontWeight = "bold";

var items = document.getElementsByClassName("list-group-item");
console.log(items);

console.log(items[1]);
items[1].style.fontWeight = "bold";

for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "yellow";
}

var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);

for (let i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "#f4f4f4";
}
