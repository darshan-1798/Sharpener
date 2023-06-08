let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);

// Delete event
itemList.addEventListener("click", removeItem);

// Filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  let newItem = document.getElementById("item").value;

  // Create new li element
  let li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  //   Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //   create del button element
  let delbtn = document.createElement("button");

  //   Add classes to del button
  delbtn.className = "btn btn-danger btn-sm float-right delete";

  // Append text node
  delbtn.appendChild(document.createTextNode("X"));

  //   Append delbutton to li
  li.appendChild(delbtn);

  //  Append li to list
  itemList.appendChild(li);
}

// remove item

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// filterItems
function filterItems(e) {
  // convert to lowercase
  var text = e.target.value.toLowerCase();
  //   get lis
  var items = itemList.getElementsByTagName("li");
  //   convert to an array
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
