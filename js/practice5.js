// import { nanoid } from "nanoid";

// const id = nanoid();
// console.log(id);

//? API: https://randomuser.me/api/
//! Отримай випадкового користувача
// Виведи: фото, ім'я, email, країну
// При кожному кліку - новий користувач

// const refs = {
//   btnEl: document.querySelector("#search-btn"),
//   showEl: document.querySelector("#result"),
// };

// const { btnEl, showEl } = refs;

// btnEl.addEventListener("click", async () => {
//   showEl.innerHTML = "";
//   showEl.textContent = "LOADING...";

//   try {
//     const BASE_URL = "https://randomuser.me/api/";
//     const response = await axios.get(BASE_URL);
//     const { data } = response;

//     showEl.innerHTML = "";

//     showEl.insertAdjacentHTML(
//       "beforeend",
//       `<img src="${data.results[0].picture.thumbnail}"/>
//       <p class="title__name">${data.results[0].name.title} ${data.results[0].name.first}</p>
//        <p class="title__email">${data.results[0].email}</p>
//       <p class="title__country">${data.results[0].location.country}</p>`
//     );
//   } catch (error) {
//     console.error(error.message);
//   } finally {
//     console.log("Код виконано! Ми дійшли до finally");
//   }
// });

//? API: https://dog.ceo/api/breeds/image/random
//! Отримай випадкове фото собаки
// Виведи картинку на сторінку
// Додай кнопку "Наступна собака"

// const refs = {
//   btnEl: document.querySelector("#search-btn"),
//   showEl: document.querySelector("#result"),
// };

// const { btnEl, showEl } = refs;

// btnEl.addEventListener("click", async () => {
//   showEl.innerHTML = "";

//   showEl.textContent = "LOADING...";

//   try {
//     const BASE_URL = "https://dog.ceo/api/breeds/image/random";
//     const response = await axios.get(BASE_URL);
//     const { data } = response;

//     showEl.innerHTML = "";

//     showEl.insertAdjacentHTML("beforeend", `<img src="${data.message}"/>`);
//   } catch (error) {
//     showEl.innerHTML = "❌ Не вдалося завантажити песика";
//     console.error(error.message);
//   } finally {
//     console.log("Код виконано! Ми дійшли до finally");
//   }
// });

//? API: https://catfact.ninja/fact
//! Отримай випадковий факт про котів
// Виведи факт на сторінку
// Кнопка "Ще факт"

// const refs = {
//   btnEl: document.querySelector("#js-btn"),
//   showEl: document.querySelector("#js-fact"),
// };

// const { btnEl, showEl } = refs;

// btnEl.addEventListener("click", async () => {
//   showEl.innerHTML = "";
//   showEl.innerHTML = "LOADING...";

//   try {
//     const BASE_URL = "https://catfact.ninja/fact";
//     const response = await axios.get(BASE_URL);
//     const { data } = response;

//     showEl.innerHTML = "";

//     showEl.insertAdjacentHTML("beforeend", `<p>${data.fact}</p>`);
//     btnEl.textContent = "Ще факт...";
//   } catch (error) {
//     showEl.innerHTML = "❌ Не вдалося завантажити факт";
//     console.error(error.message);
//   } finally {
//     console.log("✅ Код виконався до finally");
//   }
// });

//? API: https://rickandmortyapi.com/api/character/2
//! Зроби input для ID персонажа (1-826)
// Виведи: фото, name, status, species, location

// <input type="text" name="" id="js-input" />
// <button id="js-btn">Пошук</button>
// <div id="js-result"></div>

// const refs = {
//   inputEl: document.querySelector("#js-input"),
//   btnEl: document.querySelector("#js-btn"),
//   showEl: document.querySelector("#js-result"),
// };

// const { inputEl, btnEl, showEl } = refs;

// async function showFun() {
//   showEl.innerHTML = "";
//   showEl.innerHTML = "LOADING...";

//   const value = inputEl.value.trim();

//   if (!value || /\D/.test(value)) {
//     alert("❗️ Пустий рядок або ти ввів не число!");
//   }

//   try {
//     const BASE_URL = `https://rickandmortyapi.com/api/character/${value}`;
//     const response = await axios.get(BASE_URL);
//     const { data } = response;

//     showEl.innerHTML = "";

//     showEl.insertAdjacentHTML(
//       "beforeend",
//       `<img src="${data.image}"/>
//       <p>${data.name}</p>
//       <p>${data.status}</p>
//       <p>${data.species}</p>
//       <p>${data.location.name}</p>`
//     );
//   } catch (error) {
//     showEl.innerHTML = "❌ не вдалося виконати код";
//     console.error(error.message);
//   } finally {
//     console.log("✅ Код виканався до кінця");
//     inputEl.value = "";
//   }
// }

// function enterFun(event) {
//   if (event.key === "Enter") {
//     showFun();
//   }
// }

// btnEl.addEventListener("click", showFun);

// inputEl.addEventListener("keydown", enterFun);

//? localStorage
// Збережи своє ім'я в localStorage
// Потім отримай його і виведи в консоль

// localStorage.setItem("name", "Dima");

// const show = localStorage.getItem("name");
// console.log("🚀 ~ show:", show);

//? Збережи число 42 в localStorage
// Отримай його назад
// ВАЖЛИВО: localStorage зберігає все як рядки!
// Перетвори назад на число

// localStorage.setItem("cifra", 44);

// const change = localStorage.getItem("cifra");
// console.log("🚀 ~ change:", change);

// const showCif = Number(change);
// console.log("🚀 ~ showCif:", showCif);

//? Збережи щось в localStorage
// Потім видали це
// Перевір що воно видалилось

// localStorage.setItem("key", "Bob");

// localStorage.clear();
// localStorage.removeItem("key");

//? Перевір чи є в localStorage ключ "username"
// Якщо є - виведи значення
// Якщо немає - виведи "Не знайдено"

// const lookStorage = localStorage.getItem("username");

// if (lookStorage) {
//   console.log(lookStorage);
// } else {
//   console.log("Не знайдено");
// }

//? При кліку збільшуй лічильник
// Зберігай в localStorage
// При перезавантаженні сторінки - лічильник НЕ скидається

// <button id="counter-btn">Клікни мене</button>
// <div id="count-display"></div>

// const refs = {
//   btnEL: document.querySelector("#counter-btn"),
//   showEl: document.querySelector("#count-display"),
// };

// const { btnEL, showEl } = refs;

// let count = Number(localStorage.getItem("click")) || 0;
// showEl.textContent = count;

// btnEL.addEventListener("click", () => {
//   count += 1;
//   showEl.textContent = count;

//   localStorage.setItem("click", count);
// });

//? + збільшує на 1
// - зменшує на 1
// Зберігай в localStorage
// При перезавантаженні - відновлюй значення

// const refs = {
//   btnMin: document.querySelector("#minus-btn"),
//   btnMax: document.querySelector("#plus-btn"),
//   showEl: document.querySelector("#counter"),
// };

// const { btnMin, btnMax, showEl } = refs;

// let count = Number(localStorage.getItem("show")) || 0;
// showEl.textContent = count;

// function minus() {
//   count -= 1;
//   showEl.textContent = count;
//   localStorage.setItem("show", count);
// }

// function plus() {
//   count += 1;
//   showEl.textContent = count;

//   localStorage.setItem("show", count);
// }

// btnMin.addEventListener("click", minus);

// btnMax.addEventListener("click", plus);

// const refs = {
//   btnPlus: document.querySelector("#increment"),
//   btnReset: document.querySelector("#reset"),
//   showEl: document.querySelector("#display"),
// };

// const { btnPlus, btnReset, showEl } = refs;

// +1 збільшує
// Скинути - ставить 0 та очищає localStorage
// Зберігай значення

// let count = Number(localStorage.getItem("show")) || 0;
// showEl.textContent = count;

// function plusFun() {
//   count += 1;
//   showEl.textContent = count;

//   localStorage.setItem("show", count);
// }

// function resetFun() {
//   count = 0;
//   showEl.textContent = count;

//   localStorage.clear("show", count);
// }

// btnPlus.addEventListener("click", plusFun);

// btnReset.addEventListener("click", resetFun);

//? Одна кнопка додає 5
// Друга додає 10
// Зберігай рахунок

// const refs = {
//   btnAdd5: document.querySelector("#add5"),
//   btnAdd10: document.querySelector("#add10"),
//   showEl: document.querySelector("#score"),
// };

// const { btnAdd5, btnAdd10, showEl } = refs;

// let count = 0;
// showEl.textContent = localStorage.getItem("show") || 0;

// function plusBtn5() {
//   count += 5;
//   localStorage.setItem("show", count);
// }

// function plusBtn10() {
//   count += 10;
//   localStorage.setItem("show", count);
// }

// btnAdd5.addEventListener("click", plusBtn5);

// btnAdd10.addEventListener("click", plusBtn10);

// <input id="text-input" placeholder="Натисни Enter...">
// <div id="enter-count">Разів натиснуто Enter: 0</div>

//? При натисканні Enter в input:
// - Збільшуй лічильник
// - Зберігай в localStorage
// - Виводь "Разів натиснуто Enter: X"

// const refs = {
//   inputEl: document.querySelector("#text-input"),
//   showEl: document.querySelector("#enter-count"),
// };

// const { inputEl, showEl } = refs;

// let count = 0;
// showEl.textContent = localStorage.getItem("show") || 0;

// function inputReaction(event) {
//   if (event.key === "Enter") {
//     ++count;
//     showEl.textContent = localStorage.getItem("show");
//     localStorage.setItem("show", count);
//   }
// }

// inputEl.addEventListener("keydown", inputReaction);

//? API: https://dog.ceo/api/breeds/image/random
//! При кліку:
// - Отримай фото собаки з API
// - Створи <img> через createElement
// - Додай в gallery
// - Можна додавати багато собак, не очищай попередні

// const refs = {
//   btnEl: document.querySelector("#load-dog"),
//   showEl: document.querySelector("#dogs-gallery"),
// };

// const { btnEl, showEl } = refs;

// btnEl.addEventListener("click", async () => {
//   showEl.innerHTML = "";

//   const BASE_URL = "https://dog.ceo/api/breeds/image/random";
//   const response = await axios.get(BASE_URL);
//   const { data } = response;

//   const newImgEl = document.createElement("img");
//   newImgEl.src = `${data.message}`;
//   showEl.append(newImgEl);
// });

//? API: https://randomuser.me/api/
//! При кліку створюй картку користувача:
// - <div class="user-card">
//   - <img> з фото
//   - <h3> з іменем
//   - <p> з email
// Використовуй createElement, appendChild

// const refs = {
//   btnEl: document.querySelector("#add-user"),
//   showEl: document.querySelector("#users-container"),
// };

// const { btnEl, showEl } = refs;

// const BASE_URL = "https://randomuser.me/api/";

// btnEl.addEventListener("click", async () => {
//   showEl.innerHTML = "";
//   showEl.innerHTML = "LOADING...";

// * var 1
// try {
//   const response = await axios.get(BASE_URL);
//   const { data } = response;

//   showEl.innerHTML = "";

//   const newDiv = document.createElement("div");
//   showEl.appendChild(newDiv);

//   const newImg = document.createElement("img");
//   newImg.src = `${data.results[0].picture.thumbnail}`;
//   newDiv.appendChild(newImg);

//   const newH3 = document.createElement("h3");
//   newH3.textContent = `${data.results[0].name.first}`;
//   newDiv.appendChild(newH3);

//   const newEmail = document.createElement("p");
//   newEmail.textContent = `${data.results[0].email}`;
//   newDiv.appendChild(newEmail);
// } catch (error) {
//   showEl.innerHTML = "Щось пішло не так ❌ ";
//   console.error(error.message);
// } finally {
//   console.log("Код дійшов до кінця ✅");
// }

// * var 2

// try {
//   const response = await axios.get(BASE_URL);
//   const user = response.data.results[0];

//   showEl.innerHTML = "";

//   showEl.insertAdjacentHTML(
//     "beforeend",
//     `<div>
//     <img src="${user.picture.thumbnail}"/>
//     <h3>${user.name.first}</h3>
//     <p>${user.email}</p>
//     </div>`
//   );
// } catch (error) {
//   console.error(error.message);
// } finally {
//   console.log("Код дійшов до кінця ✅");
// }
// });

//? Згрупуй по category:
// {
//   Electronics: [{phone}, {laptop}],
//   Clothing: [{shirt}, {jeans}]
// }

// const products = [
//   { name: "Phone", category: "Electronics" },
//   { name: "Shirt", category: "Clothing" },
//   { name: "Laptop", category: "Electronics" },
//   { name: "Jeans", category: "Clothing" },
// ];

// const res = products.reduce((acc, el) => {
//   const category = el.category;

//   if (!acc[category]) {
//     acc[category] = [];
//   }
//   acc[category].push(el);
//   return acc;
// }, {});
// console.log("🚀 ~ res:", res);

//! При кліку переключай видимість тексту
//! Змінюй текст кнопки: "Показати" ↔ "Сховати"

// const refs = {
//   btnEl: document.querySelector("#toggle-btn"),
//   showEl: document.querySelector("#text"),
// };

// const { btnEl, showEl } = refs;

// btnEl.addEventListener("click", () => {
//   if (btnEl.textContent === "Показати") {
//     btnEl.textContent = "Сховати";
//     showEl.style.display = "block";
//   } else {
//     btnEl.textContent = "Показати";
//     showEl.style.display = "none";
//   }
// });

//? При кліку:
// API: https://randomuser.me/api/
//! - Показуй "Завантаження..." в user-card
// - Отримай користувача
// - Створи картку з фото, іменем, email
// - Додай try/catch для помилок

// const refs = {
//   btnEl: document.querySelector("#load-user"),
//   showEl: document.querySelector("#user-card"),
// };

// const { btnEl, showEl } = refs;

// const BASE_URL = "https://randomuser.me/api/";

// async function showUser() {
//   try {
//     showEl.innerHTML = "";
//     showEl.innerHTML = "LOADING...";

//     const response = await axios.get(BASE_URL);
//     const { data } = response;

//     const markup = `
//     <img src="${data.results[0].picture.thumbnail}"/>
//     <p>${data.results[0].name.first}</p>
//     <p>${data.results[0].email}</p>`;

//     showEl.innerHTML = markup;
//   } catch (error) {
//     console.error(error.message);
//   } finally {
//     console.log("Код виконано!");
//   }
// }

// btnEl.addEventListener("click", showUser);

//? Дія: При кліку на кнопку "Додати друга" отримай нового користувача.
//! API: https://randomuser.me/api/
// Розмітка: Кожен користувач — це окремий елемент <li> всередині списку <ul>.
// Додавання: Використовуй метод insertAdjacentHTML, щоб новий користувач з'являвся на початку списку.
// Фішка: В кожній картці має бути кнопка "Видалити" (просто <button type="button">Delete</button>).
// Логіка видалення: При кліку на кнопку "Видалити", картка саме цього користувача має зникнути зі сторінки.

// const refs = {
//   btnEl: document.querySelector("#add-friend"),
//   listEl: document.querySelector("#friend-list"),
// };

// const { btnEl, listEl } = refs;

// const BASE_URL = "https://randomuser.me/api/";

// async function showUser() {
//   try {
//     const response = await axios.get(BASE_URL);
//     const { data } = response;

//     listEl.insertAdjacentHTML(
//       "beforeend",
//       `<li>
//             <img src = "${data.results[0].picture.medium}"/>
//             <p>${data.results[0].name.first}</p>
//             <p>${data.results[0].email}</p>
//             <button type="button">Видалити</button>
//           </li>`
//     );
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// btnEl.addEventListener("click", showUser);

// listEl.addEventListener("click", (event) => {
//   const liElement = event.target.closest("li");

//   if (event.target.nodeName === "BUTTON") {
//     liElement.remove();
//   }
// });

//? Задача 1: "Статистика друзів" (Data Manipulation)
//! Кожного разу, коли ти додаєш нового друга через API, тобі потрібно оновлювати лічильники на сторінці.

// Умови:
// Створи зверху над списком блок зі статистикою: Всього друзів: 0 | Чоловіків: 0 | Жінок: 0.
// При кожному успішному запиті до randomuser.me аналізуй поле gender (стать), яке приходить в об'єкті користувача.
// Оновлюй відповідні цифри в інтерфейсі.

// const refs = {
//   totalFriendsEl: document.querySelector("#total-count"),
//   maleCountEl: document.querySelector("#male-count"),
//   femaleCountEl: document.querySelector("#female-count"),
//   btnEl: document.querySelector("#add-friend"),
//   listEl: document.querySelector("#friend-list"),
// };

// const { totalFriendsEl, maleCountEl, femaleCountEl, btnEl, listEl } = refs;

// const BASE_URL = "https://randomuser.me/api/";

// let countMale = 0;
// let countFemale = 0;
// let countTotal = 0;

// btnEl.addEventListener("click", async () => {
//   try {
//     const response = await axios.get(BASE_URL);
//     const { data } = response;

//     countTotal += 1;
//     totalFriendsEl.textContent = countTotal;

//     if (data.results[0].gender === "male") {
//       countMale += 1;
//       maleCountEl.textContent = countMale;
//     } else if (data.results[0].gender === "female") {
//       countFemale += 1;
//       femaleCountEl.textContent = countFemale;
//     } else if (data.results[0].gender) {
//       countTotal += 1;
//       totalFriendsEl.textContent = countTotal;
//     }
//   } catch (error) {
//     console.error(error.message);
//   }
// });

//? Задача: "Менеджер завдань (To-Do) з пріоритетами"
//! Тут ми поєднаємо роботу з DOM, обробку форм та зміну статусів елементів.

// Умови:
// Форма: Створи input для тексту завдання та select для вибору пріоритету (Low, Medium, High).

// Додавання: При сабміті форми додавай нове завдання в список. Картка має містити:
// Текст завдання.

// Позначку пріоритету (колір тексту або фону має залежати від вибраного пріоритету).
// Кнопку "Done" (виконано).
// Статус: При кліку на "Done" текст завдання має стати закресленим (клас у CSS text-decoration: line-through), а кнопка "Done" має зникнути або стати неактивною.
// Валідація: Не дозволяй додавати порожні завдання.

// !?

// const BASE_URL = "https://jsonplaceholder.typicode.com/users";
// const params = { params: { id: 3 } };

// async function fetchData() {
//   try {
//     const response = await axios.get(BASE_URL, params);
//     const { data } = response;
//     console.log(data);
//   } catch (error) {
//     console.error("Помилка запиту:", error.message);
//   }
// }

// fetchData();

// ? Генератор випадкових порад (Простий рівень)
//! Мета: Навчитися робити базовий fetch та оновлювати текст у DOM.

// API: Advice Slip API (Ендпоінт: https://api.adviceslip.com/advice)

// Завдання:
// Створи сторінку з кнопкою "Отримати пораду" та порожнім параграфом.
// При натисканні на кнопку зроби асинхронний запит до API.
// Виведи текст поради в параграф.
// Використовуй try...catch для обробки помилок (наприклад, якщо немає інтернету) і виводь повідомлення "Помилка завантаження" у той самий параграф.

// const refs = {
//   btnEl: document.querySelector("#js-btn"),
//   showEl: document.querySelector("#js-show"),
// };

// const { btnEl, showEl } = refs;

// const BASE_URL = "https://api.adviceslip.com/advice";

// async function showAdvice() {
//   try {
//     const response = await axios.get(BASE_URL);
//     const { data } = response;

//     showEl.textContent = `${data.slip.advice}`;
//   } catch (error) {
//     showEl.textContent = `Помилка ❗️`;
//     console.error(error.message);
//   } finally {
//     console.log("Code is done ✅");
//   }
// }

// btnEl.addEventListener("click", showAdvice);

//? 2. Пошук профілів GitHub (Середній рівень)
//! Мета: Робота з введенням даних від користувача (input) та детальним відображенням даних.

// API: GitHub Users API (https://api.github.com/users/{username})

// Завдання:
// Створи поле введення для логіна та кнопку "Пошук".
// При натисканні отримуй дані про користувача.
// Виведи на сторінку: аватар (<img>), ім'я, кількість репозиторіїв та біографію.
// Важливо: Оброби специфічну помилку 404. Якщо користувача не знайдено, виведи повідомлення: "Користувача з таким іменем не існує".

// const refs = {
//   btnEl: document.querySelector("#js-btn"),
//   inputEl: document.querySelector("#js-input"),
//   showEl: document.querySelector("#js-show"),
// };

// const { btnEl, inputEl, showEl } = refs;

// async function showUser() {
//   const userName = inputEl.value.trim();

//   if (userName === "") {
//     alert("Error!!!");
//   }

//   try {
//     const BASE_URL = `https://api.github.com/users/${userName}`;
//     const response = await axios.get(BASE_URL);
//     const { data } = response;

//     const markup = `<img src="${data.avatar_url}"/><p>Name: ${data.name}</p><p>Repo: ${data.public_repos}</p><p>Bio: ${data.bio}</p>`;

//     showEl.insertAdjacentHTML("beforeend", markup);
//   } catch (error) {
//     console.error(error.message);
//   } finally {
//     console.log("Код виконався ✅");
//   }
// }

// btnEl.addEventListener("click", showUser);

//? 3. Список справ із "фейковим" сервером (Просунутий рівень)
//! Мета: Робота з методами POST та імітація реального додатку.

// API: JSONPlaceholder

// Завдання:
// Створи форму для додавання нового завдання (текстове поле).
// При сабміті форми відправляй POST запит на https://jsonplaceholder.typicode.com/posts з текстом завдання.
// Дочекайся відповіді від сервера (він поверне об'єкт із ID).
// Після успішної відповіді додай новий елемент у список <ul> на сторінці.
// Реалізуй механізм "завантаження": поки чекаєш відповідь від API, кнопка має ставати неактивною (disabled), а текст на ній змінюватися на "Збереження...".

const refs = {
  formEl: document.querySelector("#js-form"),
  inputEl: document.querySelector("#js-input"),
  btnEl: document.querySelector("#js-submit"),
  listEl: document.querySelector("#js-list"),
};

const { formEl, inputEl, btnEl, listEl } = refs;

async function showTodo(event) {
  event.preventDefault();

  const value = inputEl.value.trim();

  const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

  try {
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Code Done!");
  }
}

//? 4. Конвертер валют з обробкою тайм-ауту (Складний рівень)
//! Мета: Робота з декількома API одночасно або складними структурами даних.

// API: ExchangeRate-API (потрібна безкоштовна реєстрація) або аналогічні.

// Завдання:
// Користувач вводить суму в USD і вибирає валюту (EUR, UAH, GBP).
// Використовуй async/await для отримання курсу.
// Додай штучну затримку (за допомогою setTimeout всередині Promise), щоб перевірити роботу індикатора завантаження.
// Використовуй finally, щоб прибрати спінер або розблокувати інтерфейс незалежно від того, чи був запит успішним чи ні.
