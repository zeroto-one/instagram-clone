// This script dynamically load the pages inside other pages.

// Header
fetch("./header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("header").innerHTML = data;
  });

if (window.location.pathname.split("/").pop() === "index.html") {
  // model
  fetch("./loginRegister.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector(".model").innerHTML = data;
    });
}

// Remove search bar and menu items form the navbar if the current page is index.html
let body = document.querySelector("body");
 body.onload = function () {
  if (window.location.pathname.split("/").pop() === "index.html") {
     let nav = document.querySelector(".nav-wrapper");
     nav.children[1].remove();
     nav.children[1].remove();
     nav.style.justifyContent = "center";
   }
 };
