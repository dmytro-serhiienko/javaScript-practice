//! 👉 При кліку на кнопку змінити текст на "Hello World"

const { createElement } = require("react");

// const refs12 = {
//   textEL: document.querySelector("#text111"),
//   btnElem: document.querySelector("#btn111"),
// };

// const { textEL, btnElem } = refs12;

// btnElem.addEventListener("click", () => {
//   console.log("Pushed");
//   textEL.textContent = "BAM";
// });

//! 👉 Додай кожен елемент масиву в <li> всередину списку
// <ul id="list"></ul>;

const arr = ["Apple", "Banana", "Kiwi"];
const ListEl = document.querySelector("#list");

arr.forEach((fruit) => {
  const newLi = document.createElement("li");

  newLi.textContent = fruit;

  ListEl.appendChild(newLi);
});
