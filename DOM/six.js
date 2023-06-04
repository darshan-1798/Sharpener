// querySelector

let secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.backgroundColor = "green";

let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style.color = "transparent";

// querySelectorAll

let odd = document.querySelectorAll("li:nth-child(odd");
let even = document.querySelectorAll("li:nth-child(even");

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
  even[0].style.color = "green";
}
