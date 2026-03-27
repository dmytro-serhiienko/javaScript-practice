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

// hello2
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i <= str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("hello")); // Має вивести 2
console.log(countVowels("Apple")); // Має вивести 2
