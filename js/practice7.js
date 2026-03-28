//! 👉 При кліку на кнопку змінити текст на "Hello World"

// const { createElement } = require("react");

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

// const arr = ["Apple", "Banana", "Kiwi"];
// const ListEl = document.querySelector("#list");

// arr.forEach((fruit) => {
//   const newLi = document.createElement("li");

//   newLi.textContent = fruit;

//   ListEl.appendChild(newLi);
// });

// // hello2
// function countVowels(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;

//   for (let i = 0; i <= str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels("hello"));
// console.log(countVowels("Apple"));

//! 1. Рівень: Основи (Події та стилі)
// Завдання: "Перемикач темної теми"
// Умова: Створи сторінку з заголовком <h1> та кнопкою.
// Алгоритм:
// При натисканні на кнопку змінюй колір фону сторінки (body) на чорний, а колір тексту — на білий.
// Текст на самій кнопці має змінитись із "Увімкнути темну тему" на "Увімкнути світлу тему".
// При повторному натисканні все має повернутися до початкового стану.
// Що тренуємо: querySelector, addEventListener, style або classList.toggle.

const buttonChange = document.querySelector("#jsss-btn");
const pageMain = document.querySelector(".pageSun");

buttonChange.addEventListener("click", () => {
  pageMain.classList.toggle("night");

  if (pageMain.classList.contains("night")) {
    buttonChange.textContent = "Зараз Темна";
  } else {
    buttonChange.textContent = "Зараз Світла";
  }

  console.log("Pushed");
});
