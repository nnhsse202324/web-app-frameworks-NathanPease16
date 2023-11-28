const button = document.querySelector("button");

button.addEventListener("click", () => {
  const h1 = document.querySelector("h1");
  h1.attributeStyleMap.set("font-size", "150px");

  const listItems = document.querySelectorAll("li");
  for (const listItem of listItems) {
    listItem.attributeStyleMap.set("font-size", "36px");
  }
});
