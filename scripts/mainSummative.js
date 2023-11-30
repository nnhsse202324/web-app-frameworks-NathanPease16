"use strict";

const darkButton = document.querySelector("#dark");
const lightButton = document.querySelector("#light");

const html = document.querySelector("html");
const lis = document.querySelectorAll("li");

darkButton.addEventListener("click", () => {
  html.attributeStyleMap.set("background-color", "#294529");
  for (const li of lis) {
    li.attributeStyleMap.set("color", "#888888");
  }
});

lightButton.addEventListener("click", () => {
  html.attributeStyleMap.set("background-color", "#00ff00");
  for (const li of lis) {
    li.attributeStyleMap.set("color", "#ffffff");
  }
});
