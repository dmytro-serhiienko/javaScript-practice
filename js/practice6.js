//! 1️⃣ Фільтрація чисел
// const numbers = [3, -1, 0, 7, -5, 9];

// const { loadConfigFromFile } = require("vite");

// 👉 Поверни новий масив тільки з додатних чисел, помножених на 2

// const result = numbers.filter((el) => el > 0).map((el) => el * 2);
// console.log("🚀 ~ result:", result);

//! 3️⃣ Середній бал
// const grades = [90, 75, 88, 100, 64];

// const aver = grades.reduce((acc, el) => acc + el / grades.length);
// console.log("🚀 ~ aver:", aver);

//! 4️⃣ Унікальні значення
// const values = ["a", "b", "a", "c", "b"];

// const res = new Set(values);
// console.log("🚀 ~ res:", res);

//! 5️⃣ Аналіз користувачів
// const users = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 18 },
// ];

// const res = users.filter((el) => el.age >= 18);
// console.log("🚀 ~ res:", res);

//! 6️⃣ Підрахунок слів
// const sentence = "js is cool and js is powerful";

// const res = sentence.split(" ").reduce((acc, el) => {
//   acc[el] = (acc[el] || 0) + 1;
//   return acc;
// }, {});

// console.log(res);

//! Рівень 1–2 (розігрів)
// Напиши функцію getInitials(name), яка приймає рядок типу
// "Олександр Репета" → повертає "ОР"
// "Іван Петренко" → "ІП"
// "Максим" → "М"
// " марія олегівна кравець " → "МК" (прибрати зайві пробіли)

// function getInitials(name) {
//   return name.split().map((el) => el[0]);
// }

// console.log(getInitials("Олександр Репета"));

//! Repeat

// ✅ Задача 1 — Зміна тексту
// Умова:
// При кліку на кнопку змінити текст параграфа на "Hello, Dmytro!"

// <p id="text">Old text</p>
// <button id="btn">Change text</button>

// const refs = {
//   btnEl: document.querySelector("#btn"),
//   textEl: document.querySelector("#text"),
// };

// const { btnEl, textEl } = refs;

// btnEl.addEventListener("click", () => {
//   textEl.textContent = "Hello, Dmytro!";
// });

//! ✅ Задача 2 — Зміна кольору
// Умова:
// При кліку на кнопку міняти колір тексту на червоний.

// <p id="colorText">Make me red</p>
// <button id="colorBtn">Change color</button>

// const refs = {
//   btnEl: document.querySelector("#colorBtn"),
//   textEl: document.querySelector("#colorText"),
// };

// const { btnEl, textEl } = refs;

// btnEl.addEventListener("click", () => {
//   textEl.textContent = "БА-БАМ!!!";
//   textEl.style.color = "tomato";
// });

//! ✅ Задача 3 — Toggle клас

// Умова:
// При кліку додавати/прибирати клас active

// <div id="box">Box</div>
// <button id="toggleBtn">Toggle class</button>

// const refs = {
//   boxEl: document.querySelector("#box"),
//   btnEl: document.querySelector("#toggleBtn"),
// };

// const { boxEl, btnEl } = refs;

// btnEl.addEventListener("click", () => {
//   boxEl.classList.toggle("active");
// });

//! ✅ Задача 4 — Лічильник

// 🧠 Умова:
// При кожному кліку на кнопку число повинно збільшуватись на 1.

// const refs = {
//   cifraEl: document.querySelector("#counter"),
//   btnEl: document.querySelector("#increment"),
//   btnDec: document.querySelector("#decrement"),
//   btnRes: document.querySelector("#reset"),
// };

// const { cifraEl, btnEl, btnDec, btnRes } = refs;

// let counter = 0;

// function incrementFun() {
//   counter++;
//   cifraEl.textContent = counter;
// }

// function decrementFun() {
//   if (counter > 0) {
//     counter--;
//     cifraEl.textContent = counter;
//   }
// }

// function resetFun() {
//   counter = 0;
//   cifraEl.textContent = counter;
// }

// btnEl.addEventListener("click", () => {
//   incrementFun();
// });

// btnDec.addEventListener("click", () => {
//   decrementFun();
// });

// btnRes.addEventListener("click", () => {
//   resetFun();
// });

//! Задача 2. Випадковий жарт про Chuck Norris
// API: https://api.chucknorris.io/jokes/random

// Завдання:

// завантажувати новий жарт при натисканні
// додай категорії і вибір категорії через <select>

// const refs = {
//   btnEl: document.querySelector("#new-joke"),
//   textJoke: document.querySelector("#joke"),
// };

// const { btnEl, textJoke } = refs;

// const BASE_URL = "https://api.chucknorris.io/jokes/random";

// async function apiCheck() {
//   try {
//     const response = await axios.get(BASE_URL);
//     const { value } = response.data;

//     if (value) {
//       textJoke.textContent = value;
//     } else {
//       textJoke.textContent = `Сорі, жарти закінчились!`;
//     }
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// btnEl.addEventListener("click", apiCheck);

//! CUSTOM API TEST
const refs = {
  titleEl: document.querySelector("#js-title"),
  difEl: document.querySelector("#js-difficulty"),
  catEl: document.querySelector("#js-category"),
  exEl: document.querySelector("#js-example"),
  explEl: document.querySelector("#js-explanation"),
  btnEl: document.querySelector("#js-btn"),
};

const { titleEl, difEl, catEl, exEl, explEl, btnEl } = refs;

const BASE_URL =
  "https://api.mockfly.dev/mocks/e3e41127-b283-47d4-9b7a-34a42621b4b3/hacks";

let currentIndex = 0;
let hacksData = [];

async function showMe() {
  try {
    if (hacksData.length === 0) {
      const response = await axios.get(BASE_URL);
      hacksData = response.data;
    }

    const el = hacksData[currentIndex];

    titleEl.textContent = el.title;
    difEl.textContent = el.difficulty;
    catEl.textContent = el.category;
    exEl.textContent = el.code;
    explEl.textContent = el.explanation;

    currentIndex += 1;

    if (currentIndex >= hacksData.length) {
      currentIndex = 0;
    }
  } catch (error) {
    console.error("Помилка:", error.message);
  }
}

btnEl.addEventListener("click", showMe);

// !Початковий рівень (основи)

//? Напиши функцію, яка приймає число і повертає "парне" або "непарне".
// function numbers(num) {
//   return num.filter((el) => el % 2 === 0);
// }
// console.log(numbers([1, 2, 3, 4, 5]));

//? Напиши функцію, яка приймає рядок і повертає його в зворотному порядку
// function reverseFun(text) {
//   return text.split("").reverse().join("");
// }
// console.log(text("word"));

//? Напиши функцію, яка приймає масив чисел і повертає суму всіх елементів.
// function calc(numb) {
//   return numb.reduce((acc, el) => {
//     return acc + el;
//   }, 0);
// }
// console.log(calc([2, 4, 6]));

//? Напиши функцію, яка приймає масив і повертає новий масив, в якому всі елементи помножені на 2.
// function calc(numb) {
//   return numb.map((el) => el * 2);
// }
// console.log(calc([2, 4, 6]));

//? Напиши функцію, яка приймає рядок і повертає true, якщо це паліндром (читається однаково зліва направо і справа наліво), інакше false.
// Ігноруй регістр і пробіли.
// Приклади: "А роза упала на лапу Азора", "radar", "hello"

// function pali(word) {
//   const wordOr = word.toLowerCase();

//   const reversed = word.split("").reverse().join("").trim().toLowerCase();

//   if (wordOr === reversed) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// pali("hello");
// pali("alla");

//? Напиши функцію, яка приймає масив рядків і повертає об'єкт, де ключ — це довжина рядка, а значення — масив рядків такої довжини.
// Приклад: ["one", "two", "three", "four", "tree"]
// → { 3: ["one", "two"], 4: ["four"], 5: ["three", "tree"] }

// const words = ["one", "two", "three", "four", "tree"];

// function groupByLength(arr) {
//   return arr.reduce((acc, word) => {
//     const len = word.length;

//     if (!acc[len]) {
//       acc[len] = [];
//     }

//     acc[len].push(word);

//     return acc;
//   }, {});
// }

// const result = groupByLength(words);
// console.log(result);

// 2. Средняя: "Фильтр и поиск в списке дел (ToDo)"
// Суть: Работа с массивами объектов.

// Что повторишь: Методы массивов (filter, map, find), стрелочные функции.

// Задание:
// Напиши функцию, которая возвращает только невыполненные задачи.

// const tasks = [
//   { id: 1, title: "Купить молоко", completed: true },
//   { id: 2, title: "Выучить JS", completed: false },
//   { id: 3, title: "Написать код", completed: false },
// ];

// function checker(tasks) {
//   return tasks.filter((el) => el.completed === true);
// }
// console.log(checker(tasks));

//! Згадати з нуля
// Є масив:
// 👉 Поверни новий масив, де всі числа помножені на 2

//! 1
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = arr.map((num) => num * 2);
// console.log("🚀 ~ result:", result);

//! 2
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = arr.filter((num) => num % 2 === 0);
// console.log("🚀 ~ result:", result);

//! 3
// const users = [
//   { name: "Ivan", age: 20 },
//   { name: "Oleg", age: 17 },
//   { name: "Anna", age: 25 },
// ];
// const checker = users.filter((age) => age.age >= 18);
// console.log("🚀 ~ checker:", checker);

//! 4
// 👉 Поверни масив довжин кожного слова
// const arr = ["apple", "banana", "kiwi"];
// const res = arr.reduce((acc, el) => {
//   acc.push(el.length);
//   return acc;
// }, []);
// console.log("🚀 ~ res:", res);

//! 5
// 👉 Отримай масив тільки з користувачами 18+
// const users = [
//   { name: "Ivan", age: 20 },
//   { name: "Oleg", age: 17 },
//   { name: "Anna", age: 25 },
// ];
// const newuser = users.filter((el) => el.age >= 18);
// console.log("🚀 ~ newuser:", newuser);

//! 6
// яка перевертає рядок
// "hello" → "olleh"
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("Hello"));

//! 7
// 👉 Напиши функцію:
// яка перевіряє чи слово паліндром
// "madam" → true

// function isPalindrome(str) {
//   const palin = str.split("").reverse().join("").toLowerCase();
//   if (str.toLowerCase() === palin.toLowerCase()) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isPalindrome("Hello");
// isPalindrome("Anna");
