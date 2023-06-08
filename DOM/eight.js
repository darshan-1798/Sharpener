let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

// Form submit event
form.addEventListener("submit", addItem);

// Delete event
itemList.addEventListener("click", removeItem);

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

  //   create edit button

  let editBtn = document.createElement("button");

  //   Add classes to del button
  delbtn.className = "btn btn-danger btn-sm float-right delete";

  //   Add class to edit button
  editBtn.className = "btn btn-sm float-right edit";

  // Append text node
  delbtn.appendChild(document.createTextNode("X"));
  editBtn.appendChild(document.createTextNode("Edit"));

  //   Append delbutton to li
  li.appendChild(delbtn);
  li.appendChild(editBtn);

  //  Append li to list
  //   itemList.appendChild(li);
  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
