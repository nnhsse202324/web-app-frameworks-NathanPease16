const HEADER_SMALL = "75px";
const HEADER_BIG = "150px";
const LIST_ITEM_SMALL = "18px";
const LIST_ITEM_BIG = "36px";

let isBigger = false;

const button = document.querySelector("button");

button.addEventListener("click", () => {
  const h1 = document.querySelector("h1");
  const listItems = document.querySelectorAll("li");

  let headerSize;
  let listItemSize;

  if (isBigger) {
    button.textContent = "Bigger";
    headerSize = HEADER_SMALL;
    listItemSize = LIST_ITEM_SMALL;
  } else {
    button.textContent = "Smaller";
    headerSize = HEADER_BIG;
    listItemSize = LIST_ITEM_BIG;
  }
  isBigger = !isBigger;

  h1.attributeStyleMap.set("font-size", headerSize);

  for (const listItem of listItems) {
    listItem.attributeStyleMap.set("font-size", listItemSize);
  }
});
