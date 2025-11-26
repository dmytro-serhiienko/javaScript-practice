// ! Делегування подій простий список

// 	•	Повісити одну подію click на <ul>, щоб при кліку на будь-який <li> виводити його текст у консоль.
// 	•	Не додавати click на кожен <li> окремо.

// const item1 = document.querySelector("#todo-list");
// console.log("🚀 ~ item1:", item1);

// item1.addEventListener("click", (event) => {
//   console.log(event.target.textContent);
// });

// ! Делегування подій додавання нового елемента

// •	При кліку на кнопку додавати новий <li> з текстом із input.
// •	При кліку на будь-який <li> (новий чи старий) видаляти його.
// •	Використати делегування подій на <ul>.

// const item1 = document.querySelector("#btn");

// const item2 = document.querySelector("#list");

// const item3 = document.querySelector("#new-item");

// item1.addEventListener("click", () => {
//   const newLi = document.createElement("li");
//   newLi.textContent = item3.value;
//   item2.append(newLi);

//   item3.value = "";
// });

// item2.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     event.target.remove();
//   }
// });

// ! Поширення подій (bubble phase)

// •	Повісити click на #outer і #inner.
// •	При кліку на внутрішній <div> спостерігати, як спрацьовують обидві події (спливання).
// •	Додати console.log("Outer clicked") і console.log("Inner clicked").

// const item1 = document.querySelector("#outer");
// const item2 = document.querySelector("#inner");

// item1.addEventListener("click", (event) => {
//   console.log("Outer clicked");
// });

// item2.addEventListener("click", () => {
//   console.log("Inner clicked");
// });

// ! Bubble + делегування

// •	Повісити одну подію click на #container, щоб при кліку
// на будь-яку кнопку змінювати колір #box відповідно до data-color.

// •	Пояснити, чому делегування працює і з новими кнопками, які додадуться пізніше.

// const item1 = document.querySelector("#container");

// const item2 = document.querySelectorAll("#color-btn");

// const item3 = document.querySelector("#box");

// item1.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     item3.style.background = event.target.dataset.color;
//   }
// });

// ! Задача
// •	При кліку на кнопку X — видаляти лише свою картку
// •	Використати один click на #cards
// •	Використати closest(".card") для пошуку потрібного елемента

// const item1 = document.querySelector("#cards");

// const item2 = document.querySelectorAll(".card");

// item1.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     const currentCard = event.target.closest(".card");
//     currentCard.remove();
//   }
// });

// ! Задача
// •	Навішати один обробник на <ul>
// •	Реагувати лише на кліки по <a>
// •	Виводити текст меню (event.target.textContent)

// const item1 = document.querySelector("#nav");

// item1.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (event.target.tagName === "A") {
//     event.target.classList.add("active");
//     console.log(event.target.textContent);
//   }
// });

// event.preventDefault() — не переходити по посиланню
// 	•	Змінювати активний елемент (наприклад, додати active клас)

// ! Задача

// 	•	Делегування на таблицю
// 	•	При кліку на будь-яку комірку показати:
// 	•	текст у ній
// 	•	координати: rowIndex та cellIndex

// (Через event.target.closest("td"))

// const item1 = document.querySelector("#product-table");

// item1.addEventListener("click", (event) => {
//   if (event.target.tagName === "TD") {
//     console.log(event.target.textContent);
//   }
// });

//! Динамічні кнопки в таблиці

// •	При кліку на кнопку Edit виводити ім’я користувача (текст з першої клітинки рядка)
// •	Додаючи нового користувача (через кнопку Add User), делегування все ще повинно працювати

// const item1 = document.querySelector("#user-table");

// item1.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     const row = event.target.closest("tr");
//     const nameCell = row.querySelector("td");
//     console.log(nameCell.textContent);
//   }
// });

//! Деструктуризація

// const user = { name: "Dmytro", age: 30, city: "Kyiv" };

// // Завдання:
// // Використовуючи деструктуризацію, виведи змінні name та city

// const { name, city } = user;

// console.log(name); // "Dmytro"
// console.log(city); // "Kyiv"

// !
// const numbers = [10, 20, 30, 40];

// // Завдання:
// // Використовуючи деструктуризацію, отримати перші два числа в змінні a та b

// const [a, b] = numbers;

// console.log(a);
// console.log(b);

// !

// const product = { id: 1, title: "Laptop", price: 2500 };

// // Завдання:
// // Використовуючи деструктуризацію, отримати змінну productName замість title

// const { title: productName } = product;

// console.log(productName);

// !

// const settings = { theme: "dark" };

// // Завдання:
// // Використовуючи деструктуризацію, отримати змінні
// // theme та fontSize (дефолтне значення 16)

// const { theme, fontSize = 16 } = settings;

// console.log(theme);
// console.log(fontSize);

// !

// const data = { user: { name: "Anna", address: { city: "Lviv", zip: 79000 } } };

// // Завдання:
// // Використовуючи деструктуризацію, отримати змінну city

// const {
//   user: {
//     address: { city },
//   },
// } = data;

// console.log(city);

// !

// const colors = ["red", "green", "blue", "yellow", "purple"];

// // Завдання:
// // Отримати перший та третій кольори в змінні firstColor та thirdColor

// const [firstColor, , thirdColor, ,] = colors;
// console.log(firstColor);
// console.log(thirdColor);

// !

// const employee = {
//   name: "Oleg",
//   position: "Developer",
//   contact: { email: "oleg@mail.com", phone: "123456789" },
// };

// // Завдання:
// // Отримати email та phone через деструктуризацію

// const {
//   contact: { email, phone },
// } = employee;

// console.log(email);
// console.log(phone);

// !

// const scores = [10, 20, 30, 40, 50];

// // Завдання:
// // Отримати перше число в змінну first, а решту в масив rest

// const [first, ...rest] = scores;

// console.log(first);
// console.log(rest);

// ! модальне

const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
];

// Завдання:
// 	1.	Створи список <li> з картинками (<img>) у галереї .gallery з даного масиву.
// 	2.	При кліку на картинку відкривається модальне вікно (.modal) з великим зображенням (original).
// 	3.	Модальне вікно можна закрити:
// 	•	натисканням на ×
// 	•	натисканням на фон модального вікна
// 	4.	Під час відкритого модального вікна змінюй src і alt для <img> всередині модалки на відповідні значення.

// Додатково (опційно, якщо хочеш ускладнити):
// 	•	Додай анімацію відкриття/закриття модального вікна через CSS.
// 	•	Додай клавішу Escape, щоб закривати модалку через клавіатуру.

const gall = document.querySelector(".gallery");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal img");
const closeBtn = document.querySelector(".close");

const myGallery = images
  .map(
    (el) => `
    <li class="item-img">
      <img src="${el.preview}" data-source="${el.original}" alt="${el.description}">
    </li>
  `
  )
  .join("");

gall.insertAdjacentHTML("beforeend", myGallery);

gall.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    modal.classList.remove("hidden");
    modalImage.src = event.target.dataset.source;
    modalImage.alt = event.target.alt;
  }
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalImage.src = "";
});
