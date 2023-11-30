// client-side JavaScript to handle events in the browser

// the querySelector method returns the first element in the document
//    that matches the specified selector (e.g., h1)
const myHeading = document.querySelector("h1");

// JavaScript can modify an attribute of an HTML element
myHeading.textContent = "Hello, World!";

// the querySelector method can also be used to select an element
//    by its class
const button = document.querySelector("button.demo");

// the addEventListener method attaches an event handler (i.e., function)
//    to the specified element associated with the specified event
button.addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});

// client-side JavaScript code can modify the attributes of HTML element
const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/SE-GitHub-image.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});
