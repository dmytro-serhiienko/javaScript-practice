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

// const refs = {
//   formEl: document.querySelector("#js-form"),
//   inputEl: document.querySelector("#js-input"),
//   btnEl: document.querySelector("#js-submit"),
//   listEl: document.querySelector("#js-list"),
// };

// const { formEl, inputEl, btnEl, listEl } = refs;

// async function showTodo(event) {
//   event.preventDefault();

//   const value = inputEl.value.trim();
//   if (!value) {
//     alert("Empty input");
//     return;
//   }

//   try {
//     const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

//     const response = await axios.post(BASE_URL, { title: value });
//     const { data } = response;
//     const { title } = data;

//     listEl.insertAdjacentHTML("beforeend", `<li>${title}</li>`);
//   } catch (error) {
//     console.error(error.message);
//   } finally {
//     inputEl.value = "";
//     console.log("Code Done!");
//   }
// }

// formEl.addEventListener("submit", showTodo);

// listEl.addEventListener("click", (event) => {
//   const liItem = event.target.closest("li").remove();
// });

//?

// У Vite ми не використовуємо process.env, а використовуємо import.meta.env
// const apiKey = import.meta.env.VITE_API_KEY;
// const baseUrl = import.meta.env.VITE_BASE_URL;

// export const makeRequest = async () => {
//   try {
//     const response = await axios.get(`${baseUrl}/endpoint`, {
//       headers: {
//         // Перевір в документації АПІ, як саме передавати ключ.
//         // Найчастіше це 'Authorization': `Bearer ${apiKey}` або 'x-api-key': apiKey
//         Authorization: `Bearer ${apiKey}`,
//       },
//     });
//     console.log("Дані:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Помилка:", error.response?.data || error.message);
//   }
// };

// makeRequest();

// ? API
/* <div class="advice-card">
  <h1>Порада дня</h1>
  <p id="advice-text">Натисніть кнопку, щоб отримати пораду...</p>
  <button id="get-advice">Хочу пораду!</button>
</div>; */

// const refs = {
//   btnEl: document.querySelector("#get-advice"),
//   showEl: document.querySelector("#advice-text"),
// };

// const { btnEl, showEl } = refs;

// async function showAdvice() {
//   try {
//     const BASE_URL = "https://api.adviceslip.com/advice";
//     const response = await axios.get(BASE_URL);
//     const { data } = response;

//     showEl.textContent = data.slip.advice;
//   } catch (error) {
//     showEl.textContent = "Сталась помилка❗️";
//     console.error(error.message);
//   } finally {
//     console.log("Код дійшов до finally");
//   }
// }

// btnEl.addEventListener("click", showAdvice);

//? 2. Пошук персонажів "Рік та Морті" (Середній рівень)
//! Робота з масивами даних та динамічним пошуком.
// API: https://rickandmortyapi.com/api/character

// Завдання:
// При завантаженні сторінки вивести перші 20 персонажів (картки з фото та іменами).
// Додати input для пошуку. При введенні імені список має фільтруватися (робіть запит ?name=...).
// Додати індикатор завантаження (Spinner), поки дані очікуються.
// Відображати статус персонажа (Живий/Мертвий) різними кольорами.

// const refs = {
//   inputEl: document.querySelector("#search-input"),
//   divLoader: document.querySelector("#loader"),
//   divShow: document.querySelector("#characters-grid"),
// };

// const { inputEl, divLoader, divShow } = refs;

// async function showMe() {
//   divShow.innerHTML = "";
//   divLoader.style.display = "block";
//   const valueInput = inputEl.value.trim();

//   if (!valueInput) {
//     alert("Insert ID❗️");
//     return;
//   }

//   try {
//     const BASE_URL = `https://rickandmortyapi.com/api/character/${valueInput}`;
//     const response = await axios.get(BASE_URL);
//     const { data } = response;

//     const markup = `<img src ="${data.image}"/>
//       <p>${data.name}</p>
//       <p>${data.species}</p>`;

//     divShow.insertAdjacentHTML("beforeend", markup);
//   } catch (error) {
//     console.error(error.message);
//   } finally {
//     divLoader.style.display = "none";

//     console.log("Код дійшов до finally");
//     inputEl.value = "";
//   }
// }

// inputEl.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     showMe();
//   }
// });

//? 1. Об'єкти та методи (Рівень: Basic)
//! Задача: "Калькулятор зарплати" Створіть об'єкт department, який містить:

// Властивість staff (масив об'єктів, де кожен об'єкт — це працівник з полями name та salary).
// Метод getTotalSalary(), який повертає суму всіх зарплат.
// Метод addEmployee(name, salary), який додає нового працівника в масив.
// Бонус: Додайте метод getAverageSalary(), який розраховує середню зарплату в департаменті.

// const department = {
//   staff: [
//     { name: "Dimitro", salary: 3000 },
//     { name: "Hordiy", salary: 2000 },
//     { name: "Lana", salary: 1000 },
//   ],

//   getTotalSalary() {
//     return this.staff.reduce((acc, el) => {
//       return acc + el.salary;
//     }, 0);
//   },

//   addEmployee(name, salary) {
//     this.staff.push({ name, salary });
//   },

//   getAverageSalary() {
//     return (
//       this.staff.reduce((acc, el) => {
//         return acc + el.salary;
//       }, 0) / this.staff.length
//     );
//   },
// };

// department.addEmployee("Dmytro", 2000);
// console.log(department.getTotalSalary());
// console.log(department.getAverageSalary());

//? 2. Масиви та методи перебору (Рівень: Intermediate)
//! Задача: "Фільтрація та трансформація каталогу" У вас є масив товарів:
// Виконайте наступні дії (бажано через chain-ерінг методів):
// Відфільтруйте товари, ціна яких більша за 100.
// Створіть новий масив рядків у форматі: "Товар: [name], Ціна зі знижкою 10%: [price * 0.9]".
// Знайдіть загальну вартість усіх товарів після знижки за допомогою reduce.

// const products = [
//   { id: 1, name: "Laptop", price: 1000, category: "electronics" },
//   { id: 2, name: "T-shirt", price: 20, category: "clothing" },
//   { id: 3, name: "Phone", price: 500, category: "electronics" },
// ];

// const summary = products
//   .filter((el) => el.price > 100)
//   .map((el) => {
//     const disc10 = el.price * 0.9;
//     return `Товар: ${el.name}, Ціна зі знижкою 10%: ${disc10}`;
//   })
//   .reduce((acc, el) => {
//     return acc + el.price;
//   }, 0);
// console.log("🚀 ~ summary:", summary);

//? 3. Деструктуризація та Rest/Spread (Рівень: Intermediate)
//! Задача: "Обробка профілю користувача" Напишіть функцію displayUserProfile(user), яка приймає об'єкт:
// Усередині функції:
// Використовуйте глибоку деструктуризацію, щоб дістати firstName, lastName та email.
// Використовуйте деструктуризацію масиву, щоб дістати першу роль у змінну mainRole, а решту — у масив otherRoles.
// Поверніть новий об'єкт, який копіює всі дані user, але змінює lastLogin на поточну дату і додає поле active: true (використовуйте Spread).

// const user = {
//   id: 101,
//   info: {
//     firstName: "Ivan",
//     lastName: "Petrenko",
//     email: "ivan@example.com",
//   },
//   roles: ["admin", "editor", "user"],
//   lastLogin: "2024-05-12",
// };

// function displayUserProfile(user) {
//   const {
//     info: { firstName, lastName, email },
//   } = user;

//   const {
//     roles: [mainRole, ...otherRoles],
//   } = user;

//   console.log(firstName);
//   console.log(lastName);
//   console.log(email);

//   console.log(mainRole);
//   console.log(otherRoles);
// }

// displayUserProfile(user);

//? Базова деструктуризація об'єкта
//! У тебе є об'єкт користувача. Витягни властивості firstName та age в окремі змінні.

// const user = {
//   firstName: "Олексій",
//   lastName: "Петренко",
//   age: 28,
//   city: "Львів",
// };

// const { firstName, age } = user;

// console.log(firstName);
// console.log(age);

//? Завдання 2: Перейменування та значення за замовчуванням
//! Є об'єкт з налаштуваннями сайту. Тобі потрібно:

// Витягнути theme у змінну з назвою currentTheme.
// Витягнути fontSize, але якщо його немає в об'єкті, встановити значення за замовчуванням "16px".

// const settings = {
//   theme: "dark",
//   language: "ua",
// };

// const { theme: currentTheme } = settings;
// console.log(currentTheme);

// const { fontSize = "16px" } = settings;
// console.log(fontSize);

// console.log(settings);

//? Завдання 3: Деструктуризація масивів та Rest-оператор
//! У тебе є масив кольорів.Запиши перший колір у змінну primary, другий — у secondary, а всі інші кольори збери в масив otherColors.

// const colors = ["red", "blue", "green", "yellow", "orange"];

// const [first, secondary, ...rest] = colors;

// console.log(first);
// console.log(secondary);
// console.log(rest);

// Завдання 1: Генератор випадкових порад (Simple GET)
// API: https://api.adviceslip.com/advice
// Мета: При натисканні на кнопку отримати пораду та відобразити її в тексті.

// <div id="advice-card">
//   <p id="advice-text">Тут буде твоя порада...</p>
//   <button id="get-advice">Отримати пораду</button>
// </div>;

// const refs = {
//   btnEl: document.querySelector("#get-advice"),
//   textEl: document.querySelector("#advice-text"),
// };

// const { btnEl, textEl } = refs;

// async function showAdvice() {
//   try {
//     const BASE_URL = "https://api.adviceslip.com/advice";
//     const response = await axios.get(BASE_URL);

//     const { data } = response;

//     textEl.textContent = data.slip.advice;
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// btnEl.addEventListener("click", showAdvice);

//? Завдання 2: Список користувачів (Arrays & Rendering)
//! API: https://jsonplaceholder.typicode.com/users
// Мета: Завантажити список користувачів та вивести їхні імена та email у вигляді карток.

// const refs = {
//   btnEl: document.querySelector("#load-users"),
//   listEl: document.querySelector("#user-list"),
// };

// const { btnEl, listEl } = refs;

// async function showUsers() {
//   try {
//     const BASE_URL = "https://jsonplaceholder.typicode.com/users";
//     const response = await axios.get(BASE_URL);
//     const { data } = response;

//     const markup = data
//       .map((el) => {
//         return `<p>${el.name}</p><p>${el.email}</p>`;
//       })
//       .join("");

//     listEl.innerHTML = markup;
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// btnEl.addEventListener("click", showUsers);

//? Завдання 3: Пошук персонажів (Query Params & Filters)
//! API: https://rickandmortyapi.com/api/character/?name=
// Мета: Користувач вводить ім'я в input, а ви отримуєте та показуєте фото та статус персонажа.

// const refs = {
//   inputEl: document.querySelector("#search-input"),
//   showEl: document.querySelector("#characters-container"),
// };

// const { inputEl, showEl } = refs;

//? Твоя задача:
// Зчитувати значення з input при введенні (подія input або change).
// Додавати це значення до URL: `.../character/?name=${searchValue}`.
// Обробити випадок, якщо персонажа не знайдено (API поверне помилку 404).
// Деструктуризувати image, name та status з масиву results.
// Вивести картку з картинкою <img>.

// async function showRick() {
//   const value = inputEl.value.trim();

//   if (!value) return;

//   try {
//     const BASE_URL = `https://rickandmortyapi.com/api/character/?name=${value}`;
//     const response = await axios.get(BASE_URL);
//     const { name, image } = response.data.results[0];

//     showEl.insertAdjacentHTML(
//       "beforeend",
//       `<img src="${image}"/>
//       <p>${name}</p>`
//     );
//   } catch (error) {
//     alert("Немає такого ID❗️");
//     console.error(error.message);
//   }
// }

// inputEl.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     showRick();
//   }
// });

//? Завдання 4: Живий пошук з рендером списку
//! Тут ми вчимося очищувати контейнер і перебирати масив результатів через .map().

// <input type="text" id="search-input" placeholder="Введіть ім'я (напр. Rick, Morty)...">
// <div id="characters-container" style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px;">
//   </div>

// Твоя задача (JS):
// При події input зчитуй значення.
// Якщо інпут порожній — очищуй контейнер.
// Роби запит: https://rickandmortyapi.com/api/character/?name=${value}.
// В результаті (response.data.results) приходить масив. Використовуй .map(), щоб створити розмітку для кожного персонажа.
// Замінюй вміст characters-container на новий результат.

// const refs = {
//   inputEl: document.querySelector("#search-input"),
//   showElDiv: document.querySelector("#characters-container"),
// };

// const { inputEl, showElDiv } = refs;

// async function showList() {
//   const value = inputEl.value.trim();

//   if (!value) {
//     inputEl.value = "";
//     return;
//   }

//   try {
//     const BASE_URL = `https://rickandmortyapi.com/api/character/?name=${value}`;
//     const response = await axios.get(BASE_URL);
//     const { data } = response;

//     const markup = data.results
//       .map((el) => {
//         return `<img src="${el.image}"/><p>${el.name}</p>`;
//       })
//       .join("");

//     showElDiv.innerHTML = markup;
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// inputEl.addEventListener("input", () => {
//   showList();
// });

//! 🟢 Задача 1: Отримання користувача (axios + try/catch)
//? Мета: навчитися робити GET-запит і обробляти помилки.

// Умова:
// 	•	По кліку на кнопку зроби запит до API
// 	•	Отримай користувача за ID
// 	•	Виведи імʼя та email
// 	•	Якщо користувача не знайдено — виведи повідомлення про помилку

//   <input type="number" id="user-id" placeholder="User ID">
// <button id="load-user">Load user</button>

// <p id="user-name"></p>
// <p id="user-email"></p>

// const refs = {
//   inputEl: document.querySelector("#user-id"),
//   btnEl: document.querySelector("#load-user"),
//   textName: document.querySelector("#user-name"),
//   textMail: document.querySelector("#user-email"),
// };

// const { inputEl, btnEl, textName, textMail } = refs;

// async function showUser() {
//   const userId = inputEl.value.trim();

//   if (!userId) return;

//   try {
//     const BASE_URL = `https://jsonplaceholder.typicode.com/users/${userId}`;
//     const response = await axios.get(BASE_URL);
//     const { data } = response;

//     textName.textContent = data.name;
//     textMail.textContent = data.email;
//   } catch (error) {
//     console.error(error.message);
//   } finally {
//     inputEl.value = "";
//   }
// }

// btnEl.addEventListener("click", showUser);

//? 🟢 Задача 2: Пошук персонажа (DOM + axios)
//! Мета: робота з input + динамічний вивід

// Умова:
// 	•	Користувач вводить імʼя персонажа
// 	•	Робиш запит з query-параметром
// 	•	Виводиш імʼя та картинку
// 	•	Якщо результатів немає — повідомлення

// const refs = {
//   inputEl: document.querySelector("#search"),
//   btnEl: document.querySelector("#search-btn"),
//   showDiv: document.querySelector("#result"),
// };

// const { inputEl, btnEl, showDiv } = refs;

// async function searchPerson() {
//   const valueName = inputEl.value.trim();

//   if (!valueName) return;

//   try {
//     const BASE_URL = `https://rickandmortyapi.com/api/character/?name=${valueName}`;
//     const response = await axios.get(BASE_URL);
//     const { name, image } = response.data.results[0];

//     const markup = `<img src="${image}"/><p>${name}</p>`;

//     showDiv.innerHTML = markup;
//   } catch (error) {
//     console.error(error.message);
//   } finally {
//     inputEl.value = "";
//   }
// }

// btnEl.addEventListener("click", searchPerson);

//? 🟢 Задача 3: Ланцюжковий запит (axios)
//! Мета: другий запит на основі першого
// Умова:
// 	•	Отримай пост по ID
// 	•	Із відповіді візьми userId
// 	•	Зроби другий запит за користувачем
// 	•	Виведи заголовок поста та імʼя автора

// API:
// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/users/1

// const refs = {
//   inputEl: document.querySelector("#post-id"),
//   btnEl: document.querySelector("#load-post"),
//   titleEL: document.querySelector("#post-title"),
//   authornameEl: document.querySelector("#author-name"),
// };

// const { inputEl, btnEl, titleEL, authornameEl } = refs;

// async function showById(params) {
//   const valueOfId = inputEl.value.trim();

//   if (!valueOfId) return;

//   try {
//     const POSTS_URL = `https://jsonplaceholder.typicode.com/posts/${valueOfId}`;
//     const response = await axios.get(POSTS_URL);
//     const { data } = response;

//     const idUser = data.userId;

//     titleEL.textContent = data.title;

//     const USER_URL = `https://jsonplaceholder.typicode.com/users/${idUser}`;
//     const response2 = await axios.get(USER_URL);
//     const { name } = response2.data;

//     authornameEl.textContent = name;
//   } catch (error) {
//     console.error(error.message);
//   } finally {
//     inputEl.value = "";
//   }
// }

// btnEl.addEventListener("click", showById);

//? 🟢 Задача 4: try / catch + finally
//! Мета: навчитися ловити помилки
// Умова:
// 	•	Показуй Loading... перед запитом
// 	•	При успіху — показуй дані
// 	•	При помилці — текст помилки
// 	•	В finally ховай loader

//     API (навмисно зламаний ID):
// https://jsonplaceholder.typicode.com/posts/9999

// const refs = {
//   btnEl: document.querySelector("#btn"),
//   statusEl: document.querySelector("#status"),
//   showEL: document.querySelector("#showdiv"),
// };

// const { btnEl, statusEl, showEL } = refs;

// async function showRes() {
//   try {
//     statusEl.textContent = "LOADING...";

//     const BASE_URL = "https://jsonplaceholder.typicode.com/posts/9";
//     const response = await axios.get(BASE_URL);
//     const answer = response.data;

//     if (!answer || answer.length === 0) {
//       statusEl.textContent = "Помилка❗️Даних немає";
//     }

//     const { id, title } = answer;

//     const markup = `<p>${id}</p><p>${title}</p>`;

//     statusEl.textContent = "";

//     showEL.innerHTML = markup;
//   } catch (error) {
//     statusEl.textContent = `Сталась помилка: ${error.message}`;
//   } finally {
//   }
// }

// btnEl.addEventListener("click", showRes);

//? 🟢 Задача 5: Список + render (DOM)
//! Мета: рендер масиву в DOM

// Умова:
// 	•	Отримай список
// 	•	Перебери масив
// 	•	Виведи кожен елемент у < li >

//     <button id="load">Load list</button>
// <ul id="list"></ul>

// const refs = {
//   btnEl: document.querySelector("#load"),
//   listEl: document.querySelector("#list"),
// };

// const { btnEl, listEl } = refs;

// async function showPlease() {
//   try {
//     const BASE_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";
//     const response = await axios.get(BASE_URL);

//     const answer = response.data;
//     if (!answer || answer.length === 0) {
//       listEl.textContent = "Сталась помилка❗️";
//       return;
//     }

//     const markup = answer
//       .map(({ id, title }) => {
//         return `<li>${id}. ${title}</li>`;
//       })
//       .join("");

//     listEl.innerHTML = markup;
//   } catch (error) {
//     console.error(error.message);
//   } finally {
//   }
// }

// btnEl.addEventListener("click", showPlease);

//? 🟢 Задача 6: Ланцюжок + Loader + 404
//! Умова:
// 	1.	Введи ID поста (1 100)
// 	2.	Показуй Loading... під час запиту
// 	3.	Зроби GET-запит на пост:
// https://jsonplaceholder.typicode.com/posts/{id}

// 4.	Потім за userId з поста зроби другий запит:
// https://jsonplaceholder.typicode.com/users/{userId}
//   5.	Виведи:
// 	•	Заголовок поста
// 	•	Текст поста
// 	•	Імʼя автора
// 	6.	Якщо поста не існує → повідомлення про помилку
// 	7.	Loader ховай завжди після запиту

// const refs = {
//   inputEl: document.querySelector("#post-id"),
//   btnEl: document.querySelector("#load-post"),
//   pStatusEl: document.querySelector("#status"),
//   showDiv: document.querySelector("#post-card"),
// };

// const { inputEl, btnEl, pStatusEl, showDiv } = refs;

// async function pleaseShow() {
//   showDiv.innerHTML = "";

//   const idOfPost = inputEl.value.trim();

//   if (!idOfPost) {
//     pStatusEl.textContent = "Помилка❗️Даних";
//     return;
//   }

//   try {
//     pStatusEl.textContent = "LOADING...";

//     const POST_URL = `https://jsonplaceholder.typicode.com/posts/${idOfPost}`;
//     const responsePost = await axios.get(POST_URL);
//     const { id, title, body } = responsePost.data;

//     const USER_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
//     const response2 = await axios.get(USER_URL);
//     const { name } = response2.data;

//     pStatusEl.textContent = "";

//     showDiv.insertAdjacentHTML(
//       "beforeend",
//       `<p>${title}</p>, <p>${body}</p>, <p>${name}</p>`,
//     );
//   } catch (error) {
//     pStatusEl.textContent = `Сталась помилка: ${error.message}`;
//   } finally {
//     inputEl.value = "";
//   }
// }

// btnEl.addEventListener("click", pleaseShow);

// inputEl.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     pleaseShow();
//   }
// });

//! 🟢 Задача 7: Пошук персонажів Rick & Morty
//? Умова:
// 	1.	Введи імʼя персонажа у поле input
// 	2.	По кліку на кнопку або Enter зроби GET-запит:

// https://rickandmortyapi.com/api/character/?name={імʼя}

// 3.	Виведи усіх персонажів, що збіглися, у вигляді картки:
// •	картинка (image)
// •	імʼя (name)
// •	статус (status)
// •	вид (species)
// 4.	Якщо результатів немає → “Персонажів не знайдено”

// const refs = {
//   inputEl: document.querySelector("#search"),
//   btnEl: document.querySelector("#search-btn"),
//   showDiv: document.querySelector("#results"),
//   statusPEl: document.querySelector("#status"),
// };

// const { inputEl, btnEl, showDiv, statusPEl } = refs;

// async function showHero() {
//   showDiv.innerHTML = "";
//   const inputName = inputEl.value.trim();

//   if (!inputName) {
//     statusPEl.textContent = "Введть імя персонажа";
//     return;
//   }

//   statusPEl.textContent = "LOADING...";

//   try {
//     const BASE_URL = `https://rickandmortyapi.com/api/character/?name=${inputName}`;
//     const response = await axios.get(BASE_URL);
//     const answer = response.data.results;

//     if (!answer || answer.length === 0) {
//       statusPEl.textContent = "Сталась помилка, персонажів не знайдено❗️";
//       return;
//     }

//     const markup = answer
//       .map(({ image, name, status, species }) => {
//         return `<img src="${image}"/>
//        <p>${name}</p>
//         <p>${status}</p>
//         <p>${species}</p>`;
//       })
//       .join("");

//     statusPEl.textContent = "";

//     showDiv.innerHTML = markup;
//   } catch (error) {
//     statusPEl.textContent = `Сталась помилка ${error.message}`;
//   } finally {
//     inputEl.value = "";
//   }
// }

// btnEl.addEventListener("click", showHero);

// inputEl.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     showHero();
//   }
// });

//?

// 📌 Умова
// 	1.	Користувач вводить ID поста (1–100)
// 	2.	По кліку на кнопку:
// 	•	показати Loading...
// 	•	зробити перший запит → отримати пост
// 	•	зробити другий запит → отримати коментарі до цього поста
// 	3.	Вивести:
// 	•	📌 заголовок поста
// 	•	📝 текст поста
// 	•	💬 список коментарів (email + body)
// 	4.	Якщо поста або коментарів немає → показати помилку
// 	5.	Loading... ховати завжди

// 🟢 1. Лічильник

// Що треба зробити:
// 	•	Є кнопки + і −
// 	•	Є число на сторінці
// 	•	При кліку:
// 	•	+ → збільшує на 1
// 	•	− → зменшує на 1
// 	•	Значення зберігати в localStorage

// Потрібно: querySelector, addEventListener, localStorage

//?

// const refs = {
//   btnPlus: document.querySelector("#plus"),
//   btnMinus: document.querySelector("#minus"),
//   resultEl: document.querySelector("#result"),
// };

// const { btnPlus, btnMinus, resultEl } = refs;

// let count = 0;

// function calcFun(event) {
//   if (event.currentTarget === btnPlus) {
//     count += 1;
//     resultEl.textContent = count;
//   } else if (event.currentTarget === btnMinus) {
//     count -= 1;
//     resultEl.textContent = count;
//   }
// }

// btnPlus.addEventListener("click", calcFun);
// btnMinus.addEventListener("click", calcFun);

// ? remember all

// Є рядок "javascript"
// ➡ зроби першу букву великою

// const word = "javascript";

// const firstLetter = word.slice(0, 1).toUpperCase();
// const otherLetters = word.slice(1);

// const concWord = firstLetter.concat(otherLetters);
// console.log("🚀 ~ concWord:", concWord);

//?  перевір, чи всі числа парні

// const numbers = [2, 4, 6, 8];

// const checker = numbers.every((el) => el % 2 === 0);
// console.log("🚀 ~ checker:", checker);

// ? знайди найдовше слово

// const words = ["cat", "dog", "elephant"];

// const checker = words.reduce((acc, el) => {
//   return el.length > acc.length ? el : acc;
// }, "");
// console.log("🚀 ~ checker:", checker);

// ? прибери дублікати

// const numbers = [1, 2, 2, 3, 4, 4, 5];

// const nuevo = new Set(numbers);
// console.log("🚀 ~ nuevo:", nuevo);

//? 🟢 1. Пошук користувача

// API:
// https://jsonplaceholder.typicode.com/users

// 	•	GET /users?username=...
// 	•	якщо знайшов → name, email
// 	•	якщо ні → "User not found"

// const refs = {
//   inputEl: document.querySelector("#js-input"),
//   btnEl: document.querySelector("#js-btn"),
//   showEL: document.querySelector("#js-show"),
//   statusEl: document.querySelector("#js-status"),
// };

// const { inputEl, btnEl, showEL, statusEl } = refs;

// async function showUser() {
//   showEL.innerHTML = "";

//   const userID = inputEl.value.trim();

//   if (!userID) {
//     alert("введіть ID❗️");
//     return;
//   }

//   statusEl.textContent = "LOADING...";

//   try {
//     const BASE_URL = `https://jsonplaceholder.typicode.com/users/${userID}`;
//     const response = await axios.get(BASE_URL);

//     if (!response || response.length === 0) {
//       throw new Error(`Сталась помилка, масив пустий`);
//     }

//     const {
//       name,
//       email,
//       address: { city },
//       company: { name: companyName },
//     } = response.data;

//     const markup = `
// <p>Name: ${name}</p>
// <p>Email: ${email}</p>
// <p>City: ${city}</p>
// <p>Company name: ${companyName}</p>`;

//     statusEl.innerHTML = "";
//     showEL.insertAdjacentHTML("beforeend", markup);
//   } catch ({ message }) {
//     statusEl.textContent = `Сталась помилка: ${message}`;
//     statusEl.style.color = "red";
//   } finally {
//     inputEl.value = "";
//   }
// }

// btnEl.addEventListener("click", showUser);

// ? ЗАДАЧА: Пагінація користувачів (JS + DOM)

// 📋 Умова задачі
// 	1.	Отримати користувачів з API
// 	2.	Виводити по 3 користувачі на сторінку
// 	3.	Реалізувати пагінацію:
// 	•	кнопка Previous
// 	•	кнопка Next
// 	4.	Дані виводити в DOM
// 	5.	Заборонити перехід за межі списку

// const refs = {
//   usersDiv: document.querySelector("#users"),
//   btnPrev: document.querySelector("#prev"),
//   btnNext: document.querySelector("#next"),
//   spanInfo: document.querySelector("#page-info"),
//   loaderEl: document.querySelector("#js-loader"),
// };

// const { usersDiv, btnNext, btnPrev, spanInfo, loaderEl } = refs;

// let idCount = 1;

// async function showUser() {
//   usersDiv.innerHTML = "";

//   loaderEl.classList.remove("hidden");

//   try {
//     const BASE_URL = `https://jsonplaceholder.typicode.com/users/${idCount}`;
//     const response = await axios.get(BASE_URL);
//     const { data } = response;

//     const markup = `<p>${data.name}</p>`;

//     usersDiv.insertAdjacentHTML("beforeend", markup);
//   } catch ({ message }) {
//     console.log(message);
//   } finally {
//     loaderEl.classList.add("hidden");
//   }
// }

// btnNext.addEventListener("click", () => {
//   idCount += 1;
//   btnPrev.removeAttribute("disabled");
//   showUser();
// });

// btnPrev.addEventListener("click", () => {
//   idCount -= 1;
//   showUser();
// });

//? 📋 Умова
// 	1.	На сторінці є кнопка Load users
// 	2.	При кліку:
// 	•	завантажити користувачів
// 	•	показати тільки імена
// 	3.	Дані рендерити в DOM
// 	4.	При повторному кліку не дублювати список

// import { refs } from "./refs";
// const { btnEl, listEl, loaderEl } = refs;

// async function showUser() {
//   try {
//     listEl.innerHTML = "";

//     const BASE_URL = "https://jsonplaceholder.typicode.com/users";
//     const response = await axios.get(BASE_URL);

//     if (!response.data || response.data.length === 0) {
//       throw new Error("Масив повернувся путий");
//     }

//     const markup = response.data
//       .map((el) => {
//         return `<li>${el.name}</li>`;
//       })
//       .join("");

//     listEl.innerHTML = markup;
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// btnEl.addEventListener("click", showUser);

//? 🧪 ЗАДАЧА: Показати список постів

// 📌 Мета
// 	•	Попрактикувати axios + async/await
// 	•	Рендер у DOM
// 	•	Використовувати map + join("")
// 	•	Обробка помилок через throw/catch
// 	•	Loader (опційно)

// import { refs } from "./refs";
// const { btnEl, listEl, loaderEl, morebtnEl } = refs;

// let limitParams = 5;
// let pageParams = 1;

// async function showPost() {
//   loaderEl.classList.remove("hidden");

//   try {
//     const BASE_URL = `https://jsonplaceholder.typicode.com/posts?_limit=${limitParams}&_page=${pageParams}`;
//     const response = await axios.get(BASE_URL);

//     if (response.data.length === 0) {
//       throw new Error("Ой ой ой, масив то пустий");
//     }

//     const markup = response.data
//       .map(({ title }) => {
//         return `<li>${title}</li>`;
//       })
//       .join("");

//     if (response.data.length < 1) {
//       morebtnEl.style.display = "none";
//     }

//     listEl.insertAdjacentHTML("beforeend", markup);
//   } catch (error) {
//     console.error(error.message);
//   } finally {
//     loaderEl.classList.add("hidden");
//   }
// }

// btnEl.addEventListener("click", () => {
//   showPost();
//   pageParams += 1;
//   morebtnEl.removeAttribute("hidden");

//   btnEl.disabled = true;
// });

// morebtnEl.addEventListener("click", () => {
//   pageParams += 1;
//   showPost();
// });

//? 🧪 Нова задача: Користувачі + Load More + email
//! 📌 Умова
// 	1.	Використовуємо API: https://jsonplaceholder.typicode.com/users
// 	2.	Показуємо по 3 користувачі за раз
// 	3.	Для кожного користувача в списку <li> виводимо name + email
// 	4.	Кнопка Load More завантажує наступні 3 користувачі
// 	5.	Коли постів більше нема → кнопка ховається або з’являється повідомлення All users loaded
// 	6.	Використовуємо loader, щоб показати завантаження

// import { refs } from "./refs";

// const { btnEl, listEl, loaderEl } = refs;

// let limitParams = 3;
// let pageParams = 1;

// async function showUsers() {
//   loaderEl.classList.remove("hidden");

//   try {
//     const BASE_URL = `https://jsonplaceholder.typicode.com/users?_limit=${limitParams}&_page=${pageParams}`;
//     const response = await axios.get(BASE_URL);

//     if (!response.data.length) {
//       btnEl.style.display = "none";
//       throw new Error("Йой, масив пустий");
//     }

//     const markup = response.data
//       .map(({ name, email }) => {
//         return `<li>Name: ${name}, Email: ${email}</li>`;
//       })
//       .join("");

//     listEl.insertAdjacentHTML("beforeend", markup);

//     btnEl.removeAttribute("hidden");
//   } catch (error) {
//     console.log(error.message);
//   } finally {
//     loaderEl.classList.add("hidden");
//   }
// }

// showUsers();

// btnEl.addEventListener("click", () => {
//   pageParams++;
//   showUsers();
// });

//? 🧠 Задача: Пошук користувачів + debounce
//! 📌 Умова

// 	•	input для введення імені
// 	•	список для результатів
// 	•	loader

// Треба:
// 	1.	Робити запит до API по імені
// 	2.	Запит виконується не одразу, а через 500ms після того як користувач перестав писати
// 	3.	Якщо результатів немає — показати повідомлення
// 	4.	Якщо поле пусте — очистити список і НЕ робити запит

// API:
// https://jsonplaceholder.typicode.com/users?name_like=Le

// import { refs } from "./refs";
// const { inputEl, listEl, loaderEl } = refs;

// async function showUser() {
//   const valueFromInput = inputEl.value.trim();

//   if (/\d/.test(valueFromInput)) {
//     alert("Введіть імя юзера");
//   }

//   try {
//     const BASE_URL = `https://jsonplaceholder.typicode.com/users?name_like=${valueFromInput}`;
//     const response = await axios.get(BASE_URL);

//     if (!response.data.length) {
//       throw new Error("Пустий масив");
//     }

//     const markup = response.data
//       .map(({ name, email }) => {
//         return `<li>${name}, ${email}</li>`;
//       })
//       .join("");

//     listEl.insertAdjacentHTML("beforeend", markup);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// inputEl.addEventListener("input", showUser);

//? Є:
//! 	•	input — для пошуку
// 	•	ul — список постів
// 	•	кнопка Знайти
// 	•	кнопка Завантажити ще
// 	•	loader

// ⚙️ ЛОГІКА (дуже важливо)

// 1️⃣ Пошук
// 	•	користувач вводить текст
// 	•	натискає Знайти
// 	•	робиться запит:

//   	•	список очищається
// 	•	кнопка Завантажити ще зʼявляється

// 2️⃣ Завантажити ще
// 	•	кожен клік:
//   	•	нові пости додаються в список
// 	•	якщо API повернув менше ніж 3 елементи:
// 👉 кнопку сховати

// import { refs } from "./refs";
// const { inputEl, btnEl, btnMoreEl, listEl, loaderEl } = refs;

// let limitParam = 3;
// let pageParam = 1;

// async function showPosts() {
//   loaderEl.removeAttribute("hidden");

//   const inputValue = inputEl.value.trim();

//   try {
//     const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
//     const params = {
//       params: {
//         _limit: `${limitParam}`,
//         _page: `${pageParam}`,
//         userId: inputValue,
//       },
//     };
//     const response = await axios.get(BASE_URL, params);

//     if (!response.data.length) {
//       throw new Error("ОЙ, масив пустий!");
//     }

//     const markup = response.data
//       .map(({ title }) => {
//         return `<li>${title}</li>`;
//       })
//       .join("");

//     listEl.insertAdjacentHTML("beforeend", markup);
//   } catch (error) {
//     console.error(error.message);
//   } finally {
//     loaderEl.style.display = "none";

//     inputEl.value = "";
//   }
// }

// btnEl.addEventListener("click", () => {
//   showPosts();
//   pageParam++;

//   btnMoreEl.removeAttribute("hidden");
//   btnEl.disabled = true;
// });

// btnMoreEl.addEventListener("click", () => {
//   pageParam++;
//   showPosts();
// });

//? 🧠 ЗАДАЧА: Пошук коментарів + Load more + reset
//! 📌 Умова

// 1️⃣ Є input — вводиш postId
// 2️⃣ Кнопка Search — робить запит
// 3️⃣ За один раз показуєш 2 коментарі
// 4️⃣ Є кнопка Load more
// 5️⃣ При новому пошуку:
// 	•	очищається список
// 	•	page = 1
// 	•	кнопка Load more знову з’являється
// 6️⃣ Якщо коментарів більше нема → Load more ховається
// 7️⃣ Лоадер показується під час запиту
// https://jsonplaceholder.typicode.com/comments

// import { refs } from "./refs.js";
// const { inputEl, btnSearch, btnLoadMore, loaderEl, listEl } = refs;

// let limitParam = 2;
// let pageParam = 1;

// async function showContent() {
//   const inputValue = inputEl.value.trim();

//   if (!inputValue) {
//     alert("Введи хоть шось!");
//   }

//   loaderEl.hidden = false;

//   try {
//     const BASE_URL = `https://jsonplaceholder.typicode.com/comments?_limit=${limitParam}&_page=${pageParam}`;
//     const params = { params: { postId: inputValue } };
//     const response = await axios.get(BASE_URL, params);

//     if (response.data.length < limitParam) {
//       btnLoadMore.hidden = true; // Даних мало або нема — ховаємо
//     } else {
//       btnLoadMore.hidden = false; // Дані ще можуть бути — показуємо
//     }

//     const markup = response.data
//       .map(({ body }) => {
//         return `<li>${body}</li>`;
//       })
//       .join("");

//     listEl.insertAdjacentHTML("beforeend", markup);
//   } catch (error) {
//     // ?
//     console.error(error.message);
//   } finally {
//     loaderEl.hidden = true;
//   }
// }

// btnSearch.addEventListener("click", () => {
//   showContent();
//   pageParam++;

//   btnSearch.style.display = "none";
// });

// btnLoadMore.addEventListener("click", () => {
//   showContent();
//   pageParam++;
// });

//? 📌 Умова
//! 1️⃣ По кліку Search:
// 	•	взяти значення з input
// 	•	очистити список
// 	•	page = 1
// 	•	завантажити по 3 альбоми
// 	•	показати кнопку Load more

// 2️⃣ По кліку Load more:
// 	•	завантажити наступні 3
// 	•	додати в список (НЕ перезатирати)
// 	•	якщо даних більше нема → сховати кнопку

// 3️⃣ Loader:
// 	•	показується перед запитом
// 	•	ховається після
// https://jsonplaceholder.typicode.com/albums

import { refs } from "./refs.js";
const { inputEl, btnSearch, btnMore, loaderEl, listEl } = refs;

let limitParam = 3;
let pageParam = 1;

async function showContent() {
  const valueFromInput = inputEl.value.trim();

  if (!valueFromInput) {
    alert("Введи хоть щось!");
    return;
  }

  loaderEl.hidden = false;

  try {
    const BASE_URL = `https://jsonplaceholder.typicode.com/albums?_limit=${limitParam}&_page=${pageParam}`;
    const params = {
      params: {
        userId: valueFromInput,
      },
    };

    const response = await axios.get(BASE_URL, params);

    if (!response.data.length) {
      throw new Error("Упс! Помилка!");
    }

    const markup = response.data
      .map(({ title }) => {
        return `<li>${title}</li>`;
      })
      .join("");

    listEl.insertAdjacentHTML("beforeend", markup);
  } catch (error) {
    console.error(error.message);
  } finally {
    loaderEl.hidden = true;
  }
}

btnSearch.addEventListener("click", () => {
  showContent();
  pageParam++;

  btnMore.hidden = false;
  btnSearch.disabled = true;
});

btnMore.addEventListener("click", () => {
  pageParam++;
  showContent();
});
