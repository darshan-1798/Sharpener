// localStorage
localStorage.setItem("name", "Bob");

localStorage.removeItem("name");

// console.log(localStorage.getItem("name"));

// sessionStorage
sessionStorage.setItem("name", "John");
console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem("name");

// cookie
document.cookie = "name=Kyle; expires=" + new Date(9999, 0, 1).toUTCString();

document.cookie =
  "lastname=Smith; expires=" + new Date(9999, 0, 1).toUTCString();

console.log(document.cookie);
