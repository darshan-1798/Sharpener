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
  let description = document.getElementById("description").value;

  // Create new li element
  let li = document.createElement("li");
  // Add class
  li.className = "list-group-item";

  let newText = document.createTextNode(newItem);
  let descriptionNode = document.createTextNode(" " + description);
  //   Add text node with input value
  li.appendChild(newText);
  li.appendChild(descriptionNode);

  //   create del button element
  let delbtn = document.createElement("button");

  // create edit button element
  let editBtn = document.createElement("button");

  //   Add classes to del button and edit button
  delbtn.className = "btn btn-danger btn-sm float-right delete";

  editBtn.className = "btn btn-sm float-right edit";

  // Append text node
  delbtn.appendChild(document.createTextNode("X"));
  editBtn.appendChild(document.createTextNode("Edit"));

  //   Append delbutton to li
  li.appendChild(delbtn);
  li.appendChild(editBtn);

  //  Append li to list
  itemList.appendChild(li);
  // itemList.appendChild(li);
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
    let description = item.childNodes[1].textContent;
    if (
      itemName.toLocaleLowerCase().indexOf(text) != -1 ||
      description.toLowerCase().indexOf(text) != -1
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
