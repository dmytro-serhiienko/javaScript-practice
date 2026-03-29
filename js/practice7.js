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

//! 2. Рівень: Середній (Робота зі списками та формами)
// Завдання: "Динамічний список справ (To-Do)"

// У React ти б просто оновив масив об'єктів у useState, а React сам би відрендерив список. Тут нам доведеться бути "руками" браузера.

// Зловити подію: Повісити клік на кнопку "Додати".

// Отримати дані: Прочитати те, що користувач надрукував у input.

// Створити елемент: Використати магічну команду document.createElement('li').

// Наповнити елемент: Записати текст із інпуту всередину нового li.

// Додати в дерево: Сказати списку ul: "Прийми цього нового сина до себе" (метод appendChild).

// Очистити поле: Зробити input порожнім, щоб можна було писати наступну справу.

const refs123 = {
  inputEl: document.querySelector("#js-innput"),
  btnEl: document.querySelector("#js-bttn"),
  divEl: document.querySelector("#js-divv"),
};

const { inputEl, btnEl, divEl } = refs123;

btnEl.addEventListener("click", () => {
  const INVALUES = inputEl.value.trim();

  if (INVALUES) {
    const newLii = document.createElement("li");
    newLii.textContent = INVALUES;
    divEl.append(newLii);
  }

  inputEl.value = "";

  inputEl.console.log("Pushed");
});
