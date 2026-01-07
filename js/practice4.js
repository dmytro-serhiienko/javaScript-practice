// !

// 1️⃣ Масиви — базові методи

//* 1.1
// Є масив чисел.
// ➡️ Залиши тільки парні числа.
// Методи: filter

// const numbers = [12, 3, 4, 98];

// const filteredNumbers = numbers
//   .filter((el) => el % 2 === 0)
//   .toSorted((a, b) => a - b);
// console.log("🚀 ~ filteredNumbers:", filteredNumbers);

//* 1.2
// Є масив рядків.
// ➡️ Перетвори всі елементи в UPPERCASE.
// Методи: map

// const word = ["world, of, it, inductrys"];

// const upper = word.map((el) => {
//   return el.toUpperCase();
// });
// console.log("🚀 ~ upper:", upper);

//* 1.3
// Є масив чисел.
// ➡️ Порахуй суму всіх елементів.
// Методи: reducev

// const numbers = [12, 3, 4, 98];

// const res = numbers.reduce((acc, el) => {
//   return acc + el;
// }, 0);
// console.log("🚀 ~ res:", res);

// ⸻

//* 2.1
// Є масив об’єктів { id, name }.
// ➡️ Знайди об’єкт з id === 3.
// Методи: find

// const users = [
//   { id: 1, name: "Олександр" },
//   { id: 2, name: "Марія" },
//   { id: 3, name: "Дмитро" },
//   { id: 4, name: "Анна" },
// ];

// const finder = users.find((el) => el.id === 3);
// console.log("🚀 ~ finder:", finder);
// console.log(finder.name);

//* 2.2
// Є масив чисел.
// ➡️ Перевір, чи є хоча б одне число більше 100.
// Методи: some

// const numbers = [12, 3, 4, 98];

// const finder = numbers.some((el) => el > 100);
// console.log("🚀 ~ finder:", finder);

//* 2.3
// Є масив чисел.
// ➡️ Перевір, чи всі числа додатні.
// Методи: every

// const numbers = [12, 3, 4, 98];

// const finder = numbers.every((el) => el > 0);
// console.log("🚀 ~ finder:", finder);

// ⸻

//* 3.1
// Є рядок з пробілами на початку і в кінці.
// ➡️ Прибери зайві пробіли.
// Методи: trim

// const word = " World is perfect ";

// const normalaizer = word.trim();
// console.log("🚀 ~ normalaizer:", normalaizer);

//* 3.2
// Є рядок "js, html, css"
// ➡️ Зроби з нього масив без пробілів.
// Методи: split, map

// const word = "js, html, css";

// const toArray = word.split(",");
// console.log("🚀 ~ toArray:", toArray);

//* 3.3
// Є рядок.
// ➡️ Порахуй кількість символів без пробілів.
// Методи: replace, length

// const word = " World is perfect ";

// const sum = word.trim().length;
// console.log("🚀 ~ sum:", sum);

// ⸻

// 4️⃣ Об’єкти

//* 4.1
// Є об’єкт.
// ➡️ Отримай масив усіх ключів.
// Методи: Object.keys

// const user = {
//   id: 1,
//   name: "Ivan",
//   age: 25,
//   role: "admin",
// };

// const keys = Object.keys(user);
// console.log("🚀 ~ keys:", keys);

//* 4.2
// Є об’єкт з числовими значеннями.
// ➡️ Знайди суму всіх значень.
// Методи: Object.values, reduce

// const salary = {
//   frontend: 2000,
//   backend: 2500,
//   design: 1500,
// };

// const values = Object.values(salary).reduce((acc, el) => {
//   return acc + el;
// }, 0);
// console.log("🚀 ~ values:", values);

// ⸻

// 5️⃣ Комбіновані задачі (⚠️ цікаві)

//* 5.1
// Є масив рядків.
// ➡️ Видали дублікати.
// Методи: filter або Set

// const fruits = ["apple", "banana", "apple", "orange", "banana"];

// const fruitsMod = new Set(fruits);
// console.log("🚀 ~ fruitsMod:", fruitsMod);

//* 5.2
// Є масив користувачів { name, age }.
// ➡️ Залиши тільки користувачів старше 18
// ➡️ Поверни масив імен
// Методи: filter, map

// const users = [
//   { name: "Анна", age: 18 },
//   { name: "Олексій", age: 25 },
//   { name: "Віктор", age: 30 },
//   { name: "Марія", age: 22 },
// ];

// const mod = users.filter((el) => el.age > 18);
// console.log("🚀 ~ mod:", mod);

//* 5.3
// Є масив чисел.
// ➡️ Відсортуй за зростанням
// ➡️ Забери перші 3 найбільші числа
// Методи: sort, slice

// const numbers = [12, 3, 4, 98];

// const mod = numbers.toSorted((a, b) => a - b);
// console.log("🚀 ~ mod:", mod);

// ⸻

// 6️⃣ Рівень harder 🔥

//* 6.1
// Є масив рядків.
// ➡️ Знайди найдовший рядок.
// Методи: reduce

// const fruits = ["apple", "banana", "orange", "kiwi"];

// const mod = fruits.reduce((acc, el) => {
//   if (el.length > acc.length) {
//     return el;
//   }
//   return acc;
// });
// console.log("🚀 ~ mod:", mod);

//* 6.2
// Є рядок.
// ➡️ Поверни об’єкт з кількістю кожної літери.
// Методи: split, reduce

// const fruits = "apple";

// const res = fruits.split("").length;
// console.log("🚀 ~ res:", res);

//* 6.3
// Є масив об’єктів { category, price }
// ➡️ Порахуй загальну суму по кожній категорії
// Результат: { food: 120, tech: 340 }

// const products = [
//   { category: "electronics", price: 500 },
//   { category: "clothing", price: 50 },
//   { category: "electronics", price: 1000 },
//   { category: "clothing", price: 120 },
//   { category: "food", price: 10 },
// ];

// const res = products.reduce((acc, el) => {
//   if (!acc.includes(el.category)) {
//     acc.push(el.category);
//     return acc;
//   } else {
//     return acc;
//   }
// }, []);

// 1️⃣ Об’єкти — база

//* 1.1
// Є об’єкт user з полями name, age, city.
// ➡️ Витягни name і age в окремі змінні через деструктуризацію.

// const user = {
//   name: "Олексій",
//   age: 28,
//   city: "Київ",
// };

// const { name, age, city } = user;
// console.log("🚀 ~ city:", city);
// console.log("🚀 ~ age:", age);
// console.log("🚀 ~ name:", name);

// ⸻

//* 1.2
// Є об’єкт settings з полями theme, lang.
// ➡️ Витягни theme, задай значення за замовчуванням для lang = "en".

// const settings = {
//   theme: "dark",
//   lang: "en",
// };

// const { theme, lang } = settings;
// console.log("🚀 ~ lang:", lang);
// console.log("🚀 ~ theme:", theme);

// ⸻

//* 1.3
// Є об’єкт з полем email.
// ➡️ Витягни email і перейменуй змінну на userEmail.

// const data = {
//   email: "dima@gmail.com",
// };

// const { email: userEmail = "DIMA@gmail.com" } = data;
// console.log("🚀 ~ userMail:", userEmail);

//* ➡️ Завдання: Витягни одним рядком email з об'єкта profile і перейменуй його на userEmail.
// const response = {
//   id: 1,
//   profile: {
//     email: "test@mail.com",
//     nickname: "Tiger",
//   },
// };

// const {
//   profile: { email: userEmail },
// } = response;
// console.log("🚀 ~ userEmail:", userEmail);

//* ➡️ Завдання: Витягни ім'я першого користувача і запиши його в змінну firstName. Підказка: Можна комбінувати деструктуризацію масиву [] та об'єкта {}.
// const users = [
//   { id: 1, name: "Dima" },
//   { id: 2, name: "Sasha" },
// ];

// const [{ id, name: firstName }] = users;
// console.log("🚀 ~ firstName:", firstName);

//* ➡️ Завдання: Створи новий об'єкт updatedUser, який буде копією user, але з новим містом "Lviv". Важливо: Не змінюй оригінальний об'єкт user.
// const user = {
//   name: "Dima",
//   age: 25,
//   city: "Kyiv",
// };

// const updatedUser = { ...user, city: "Lviv" };
// console.log("🚀 ~ updatedUser:", updatedUser);

//* ➡️ Завдання: Витягни brand і model в окремі змінні, а всі інші характеристики збережи в один загальний об'єкт під назвою others.
// const car = {
//   brand: "Tesla",
//   model: "Model 3",
//   year: 2022,
//   color: "red",
//   autopilot: true,
// };

// const { brand, model, ...rest } = car;
// console.log("🚀 ~ brand:", brand);
// console.log("🚀 ~ model:", model);
// console.log("🚀 ~ rest:", rest);

//* ➡️ Завдання: Створи новий масив updatedUsers, де користувач з id: 1 матиме статус "online", а всі інші користувачі залишаться без змін.
// const users = [
//   { id: 1, name: "Dima", status: "offline" },
//   { id: 2, name: "Sasha", status: "offline" },
// ];

// const updatedUsers = users.map((el) => {
//   if (el.id === 1) {
//     return { ...el, status: "online" };
//   }
//   return el;
// });

// console.log("🚀 ~ updatedUsers:", updatedUsers);

//! MODULE 11
//! Напиши код за допомогою fetch(), який:
// Робить GET-запит на https://dummyjson.com/products
// Отримує JSON
// У консолі виводить для кожного продукту:
// Назва: [title] | Ціна: $[price]

// const options = {
//   method: "GET",
// };

// fetch("https://dummyjson.com/products", options)
//   .then((response) => response.json())
//   .then((datas) => {
//     datas.products.forEach((el) => {
//       console.log(`Product: ${el.title} and Price: ${el.price}`);
//     });
//     return datas;
//   })
//   .then((tot) => {
//     console.log(tot.products.length);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//! Завдання 3 (складніше): Отримати продукти і порахувати загальну кількість товарів та середню ціну

// Після отримання /products порахуй:
// Кількість товарів: data.total
// Середню ціну: порахуй сам (сума всіх price / кількість)

//! Завдання 2: Отримати одного користувача і вивести його дані
// Запит: https://dummyjson.com/users/1
// Виведи в консоль: ім'я, прізвище, email, телефон.

// fetch("https://dummyjson.com/users/1")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Error");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(`name: ${data.firstName}`);
//     console.log(`surname: ${data.lastName}`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//! Зроби fetch-запит на цей URL:
// https://dummyjson.com/products/1
// Після отримання даних виведи в консоль наступне (кожне з нового рядка):

// Назва: iPhone 9
// Ціна: $549
// Бренд: Apple
// Опис: An apple mobile which is nothing like apple
// Рейтинг: 4.69 ⭐

// Напиши код за аналогією з попереднім (з перевіркою response.ok, return response.json(), .catch() тощо).
// Коли зробиш — надішли свій варіант, я перевірю і дам наступне завдання (можна буде вибрати: POST-запит, async/await або щось складніше з фільтрацією).
// Вперед, ти вже майже профі у fetch! 💪

// const btn = document.querySelector("#show__btn");
// const list = document.querySelector("#list");
// const inputEl = document.querySelector("#input__info");
// const clearBtn = document.querySelector("#clear__btn");

// btn.addEventListener("click", () => {
//   const option = {
//     method: "GET",
//   };

//   fetch(`https://dummyjson.com/products/${inputEl.value}`, option)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Помилка коду`);
//       }

//       return response.json();
//     })

//     .then((data) => {
//       if (inputEl.value) {
//         const newLi = document.createElement("li");
//         newLi.textContent = `назва: ${data.title}, ціна: ${data.price}`;
//         list.append(newLi);

//         inputEl.value = "";
//       } else {
//         alert(`Не заповнені поля`);
//       }
//     })
//     .catch((error) => {
//       console.log(`Помилка коду: ${error.name}`);
//     });
// });

// ! Створи сторінку, яка дозволяє ввести назву міста і показує поточну погоду в ньому.
// https://api.openweathermap.org/data/2.5/weather?q={місто}&appid=твій_ключ&units=metric&lang=uk
// 96ed17a8fa6f5af5f5d1be44b7b9c60d

// Завдання для script.js:

// Збери елементи: інпут, кнопку, див для погоди.
// При кліку на кнопку:
// Візьми значення з інпуту (обріж пробіли).
// Якщо порожнє — покажи помилку (наприклад, червоний текст "Введіть назву міста!").
// Інакше — зроби fetch-запит з твоїм API-ключем.

// У разі успіху — виведи в #weather:
// Місто (наприклад, "Київ")
// Температуру (наприклад, "+5°C")
// Опис погоди (наприклад, "хмарно")
// Іконку погоди (URL іконки: https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)

// У разі помилки (місто не знайдено, немає інтернету тощо) — виведи червоне повідомлення "Місто не знайдено або помилка запиту".

// const items = {
//   inputEl: document.querySelector("#cityInput"),
//   btnEl: document.querySelector("#getWeather"),
//   divEl: document.querySelector("#weather"),
// };

// const API_KEY = "96ed17a8fa6f5af5f5d1be44b7b9c60d"; // ← твій ключ (краще ховати в .env в реальному проєкті)

// items.btnEl.addEventListener("click", () => {
//   const city = items.inputEl.value.trim();

//   if (!city) {
//     items.divEl.innerHTML = '<p class="error">Введіть назву міста!</p>';
//     return;
//   }

//   // Очищаємо попередній результат
//   items.divEl.innerHTML = "<p>Завантаження...</p>";

//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=uk`;

//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         if (response.status === 404) {
//           throw new Error("Місто не знайдено");
//         }
//         throw new Error(`Помилка: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const iconCode = data.weather[0].icon;
//       const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

//       items.divEl.innerHTML = `
//         <h2>${data.name}</h2>
//         <img src="${iconUrl}" alt="Погода">
//         <p><strong>Температура:</strong> ${Math.round(data.main.temp)}°C</p>
//         <p><strong>Опис:</strong> ${data.weather[0].description}</p>
//         <p><strong>Відчувається як:</strong> ${Math.round(
//           data.main.feels_like
//         )}°C</p>
//         <p><strong>Вологість:</strong> ${data.main.humidity}%</p>
//       `;
//     })
//     .catch((error) => {
//       items.divEl.innerHTML = `<p class="error">${error.message}</p>`;
//       console.error(error);
//     });
// });

// ! AXIOS

//! Задача 1: Простий GET-запит (найлегша)
// Підключи Axios через CDN і зроби запит до тестового API, яке повертає випадкового користувача.
// Що зробити:

// Виведи в консоль ім’я, прізвище та email цього користувача.

// axios
//   .get("https://randomuser.me/api/")
//   .then((response) => {
//     const user = response.data.results[0];

//     const firstName = user.name.first;
//     const lastName = user.name.last;
//     const email = user.email;

//     console.log(`Name: ${firstName}`);
//     console.log(`Surname: ${lastName}`);
//     console.log(`Email: ${email}`);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

//! Задача 2 (дуже проста версія)
// Ми робимо запит до цього API:
// https://jsonplaceholder.typicode.com/users
// Якщо ти відкриєш це посилання в браузері — побачиш просто список з 10 людей (кожна має id, name, email тощо).
// Твоє завдання зараз — найпростіше можливе:
// Зробити запит через Axios і вивести в консоль повний список користувачів (весь масив).

// axios
//   .get("https://jsonplaceholder.typicode.com/users1")
//   .then((response) => {
//     const user = response.data;

//     console.log(`1: ${user[0].name}`);
//     console.log(`2: ${user[1].name}`);
//     console.log(`3: ${user[2].name}`);
//     console.log(`4: ${user[3].name}`);
//     console.log(`5: ${user[4].name}`);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

//! Задача 4: Отримай і виведи один жарт (англійською)
// Ми будемо використовувати безкоштовне API, яке повертає випадковий жарт.
// Посилання на API:
// https://official-joke-api.appspot.com/random_joke

// Твоє завдання (просте):
// Напиши код через Axios, який:

// Зробить запит до цього API
// Виведе в консоль жарт у гарному форматі, наприклад:
// Жарт:
// Why don't scientists trust atoms?

// Відповідь:
// Because they make up everything.

// const elementsHTML = {
//   setup: document.querySelector("#setup"),
//   punchline: document.querySelector("#punchline"),
//   newBtn: document.querySelector("#new-joke"),
// };

// elementsHTML.newBtn.addEventListener("click", () => {
//   axios
//     .get("https://official-joke-api.appspot.com/random_joke")
//     .then((response) => {
//       const joke = response.data;

//       elementsHTML.setup.textContent = joke.setup;
//       elementsHTML.punchline.textContent = joke.punchline;
//     })
//     .catch((error) => {
//       alarme(error.message);
//     });
// });

// !
// const btn = document.querySelector("#js-btn");
// const span = document.querySelector("#js-span");

// btn.addEventListener(
//   "click",
//   () => {
// Ініціалізація налаштувань (опціонально, можна зробити один раз)
//   Notiflix.Loading.init({
//     className: "notiflix-loading",
//     zindex: 4000,
//     backgroundColor: "rgba(0,0,0,0.8)",
//     rtl: false,
//     fontFamily: "Quicksand",
//     cssAnimation: true,
//     cssAnimationDuration: 400,
//     clickToClose: false,
//     customSvgUrl: null,
//     customSvgCode: null,
//     svgSize: "80px",
//     svgColor: "#32c682",
//     messageID: "NotiflixLoadingMessage",
//     messageFontSize: "15px",
//     messageMaxLength: 34,
//     messageColor: "#dcdcdc",
//   });

// Показати лоадер
//   Notiflix.Loading.standard("Завантаження...");

// Приховати лоадер через 3 секунди і показати success
//   setTimeout(() => {
//     Notiflix.Loading.remove();

//     Notiflix.Report.success(
//       "Notiflix Success",
//       '"Do not try to become a person of success but try to become a person of value." <br/><br/>- Albert Einstein',
//       "Okay"
//     );
//   },
//   3000
// );
// });

//! Завдання 1
// Використовуючи Axios і стиль .then().catch(), зроби GET-запит до https://jsonplaceholder.typicode.com/posts
// Виведи в консоль заголовки (title) всіх отриманих постів — по одному на рядок.
// Коли зробиш — пиши “готово” або сразу кидай свій код, якщо хочеш перевірку.
// Наступне завдання дам тільки після того, як ти підтвердиш, що це виконав.

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     response.data.forEach((tit) => {
//       console.log(tit.title);
//     });
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

//! Зроби GET-запит до ендпоінту, який повертає один конкретний пост за його ID.
// URL: https://jsonplaceholder.typicode.com/posts/7 (тобто пост з id = 7)
// У .then() виведи в консоль:

// Заголовок поста (title)
// Текст поста (body)
// ID користувача, який його написав (userId)

// Додай .catch(), щоб при помилці в консоль виводилося повідомлення:
// Помилка запиту: [текст помилки]
// Використовуй той самий стиль .then().catch(), як у попередніх завданнях.

// axios
//   .get("https://jsonplaceholder.typicode.com/posts/7")
//   .then((response) => {
//     console.log(response.data.title);
//     console.log(response.data.body);
//     console.log(response.data.userId);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

//! Завдання 4
// Зроби POST-запит на створення нового поста.
// URL: https://jsonplaceholder.typicode.com/posts
// Дані, які треба відправити (в другому аргументі axios.post):

// У .then() виведи в консоль:
// Повний об’єкт, який повернув сервер (response.data)
// Окремо — ID нового поста (він буде 101)

// Додай .catch() з виводом повідомлення про помилку (використовуй console.error і error.message).

// axios
//   .post("https://jsonplaceholder.typicode.com/posts", {
//     title: "Мій тестовий пост",
//     body: "Це контент, створений через Axios",
//     userId: 42,
//   })
//   .then((response) => {
//     console.log("Повний об’єкт, що повернув сервер:");
//     console.log(response.data);

//     console.log("ID нового поста:", response.data.id);
//   })
//   .catch((error) => {
//     console.error("Помилка запиту:", error.message);
//   });

//! просто галерея

// Перевіряємо, чи завантажена бібліотека SimpleLightbox
// window.addEventListener("load", () => {
//   if (typeof SimpleLightbox === "undefined") {
//     console.error("SimpleLightbox не завантажена!");
//     return;
//   }

//   console.log("SimpleLightbox доступна, ініціалізація...");

//   const lightbox = new SimpleLightbox(".gallery a", {
//     captionsData: "alt",
//     captionDelay: 250,
//   });

//   console.log("SimpleLightbox створено:", lightbox);
// });

//! Завдання 1 (розминка)
// Отримати список усіх користувачів і в консолі вивести тільки їхні імена (поле name).

// const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// axios
//   .get(BASE_URL)
//   .then((response) => {
//     response.data.forEach((el) => {
//       console.log(el.name);
//     });
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

//! Завдання 1 (супер-легке — розминка з ключем)
// Після отримання відповіді виведи в консоль:
// title — заголовок фото
// date — дата
// Перші 200 символів з explanation (пояснення)
// url — посилання на фото чи відео (можеш відкрити в браузері, щоб побачити!)

// Сервер поверне JSON з цими полями.
// Завдання 2 (трохи складніше)
// Отримай фото за конкретну дату, наприклад, за "2024-07-20" (або будь-яку іншу минулу дату).
// Додай ще один параметр: date=2024-07-20
// Виведи ті самі поля, що в завданні 1, плюс:

// media_type (буде "image" або "video")

// Завдання 3 (практика з помилками)
// Навмисно введи неправильний ключ (наприклад, "wrongkey") або неправильну дату (майбутню, типу "2030-01-01").
// В .catch() виведи:

// Статус помилки (error.response.status)
// Повідомлення від сервера (error.response.data.msg або подібне)

// Коли зробиш будь-яке з цих завдань — кидай свій код сюди, перевірю і дам фідбек!
// Це API стабільне, працює роками, і дані завжди цікаві 🚀
// Якщо хочеш ще простіше API з ключем (наприклад, погода або курси валют) — скажи, дам альтернативу. Удачі! 😊

// const BASE_URL = "https://api.nasa.gov/planetary/apod";
// const API_KEY = "VPLdAu1RcTnRoIgSlGYxRgtrfEe8wvnGOgQ8LvIt";

// axios
//   .get(BASE_URL, {
//     params: {
//       api_key: API_KEY,
//     },
//   })
//   .then((response) => {
//     console.log(response.data.title);
//     console.log(response.data.date);
//     console.log(response.data.url);
//   })
//   .catch(() => {
//     expression;
//   });

//! JSONPlaceholder API: https://jsonplaceholder.typicode.com
//! Це безкоштовний фейковий REST API для тестування.
//! Основні ендпоінти:

//* /users - користувачі (10 записів)
//* /posts - пости (100 записів)
//* /comments - коментарі (500 записів)
//* /albums - альбоми (100 записів)
//* /photos - фото (5000 записів)
//* /todos - задачі (200 записів)

//! Завдання 1: Простий GET
// Отримай інформацію про користувача з ID 3 і виведи в консоль його ім'я та email.

// const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// axios.get(BASE_URL).then((response) => {
//   response.data.forEach((el) => {
//     if (el.id === 3) {
//       console.log(el.name);
//       console.log(el.email);
//     }
//   });
// });

//! Завдання 2: GET з параметрами
// Отримай всі пости користувача з ID 2, але тільки перші 3 пости (використай параметр _limit).
// Виведи в консоль заголовок кожного поста.
// Підказка: використай params в конфігурації axios

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// axios
//   .get(BASE_URL, {
//     params: {
//       userId: 2,
//       _limit: 3,
//     },
//   })
//   .then((response) => {
//     console.log(response.data);
//   });

//! Завдання 4: GET з кількома параметрами
// Отримай список TODO-шок (/todos) з такими фільтрами:

// Тільки завершені (completed: true)
// Користувача з ID 1
// Обмеження: 5 записів
// Виведи в консоль тільки title кожної TODO-шки.

// const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

// axios
//   .get(BASE_URL, {
//     params: {
//       completed: true,
//       userId: 1,
//       _limit: 5,
//     },
//   })
//   .then((response) => {
//     console.log(response.data);
//   });

//! Завдання 5: Робота з різними ендпоінтами
// Отримай всі коментарі (/comments) до поста з ID 10.
// Підказка: параметр postId
// Виведи в консоль ім'я автора (name) та email кожного коментаря.

// const BASE_URL = "https://jsonplaceholder.typicode.com/comments";

// axios
//   .get(BASE_URL, {
//     params: {
//       postId: 10,
//     },
//   })
//   .then((response) => {
//     response.data.forEach((el) => {
//       console.log(`Name: ${el.name}, \nEmail: ${el.email}`);
//     });
//   });

//! Завдання 6: Пошук в масиві
// Отримай всі альбоми (/albums) та знайди альбом з id: 7.
// Виведи в консоль весь об'єкт цього альбому.
// Підказка: використай .find() на response.data

// const BASE_URL = "https://jsonplaceholder.typicode.com/albums";

// axios
//   .get(BASE_URL, {
//     params: {
//       id: 7,
//     },
//   })
//   .then((response) => {
//     console.log(response.data[0]);
//   });

//! Завдання 7: POST - Створення TODOСтвори нову задачу (/todos) з такими даними:
// title: "Вивчити Axios"
// completed: false
// userId: 3
// Виведи в консоль створений об'єкт (сервер додасть id).

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// axios
//   .post(BASE_URL, {
//     params: {
//       title: "Вивчити Axios",
//       completed: false,
//       userId: 3,
//     },
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

//! Завдання 8: Ланцюжок запитів (важливе!)

// Спочатку отримай користувача з ID 5
// Потім отримай ВСІ його пости (використай userId з першого запиту)
// Виведи в консоль ім'я користувача та кількість його постів

// Підказка: використай .then() всередині .then()

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// axios.get(BASE_URL).then((response) => {
//   const MyId = response.data.find((el) => el.id === 5);
//   console.log(MyId.title);
//   console.log(MyId.length);
// });

//! Завдання 10: Фільтрація фото
// Отримай всі фотографії (/photos) альбому з ID 3 (параметр albumId).
// Обмеж результат до 8 фото (_limit).
// Виведи в консоль title кожної фотографії.

// const photoId = "https://jsonplaceholder.typicode.com/photos?albumId=3";

// axios
//   .get(photoId, {
//     params: {
//       _limit: 8,
//     },
//   })
//   .then((response) => {
//     response.data.forEach((photo) => {
//       console.log(photo.title);
//     });
//   })
//   .catch((error) => {
//     console.error(`Помилка: ${error.message}`);
//   });

//! Завдання 11: Робота з boolean
// Отримай всі TODO (/todos) користувача з ID 10.
// Відфільтруй і виведи в консоль тільки незавершені задачі (completed: false).
// Виведи кількість незавершених задач.
// Підказка: використай параметри userId та completed

// const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

// axios
//   .get(BASE_URL, {
//     params: {
//       userId: 10,
//       completed: false,
//     },
//   })
//   .then((response) => {
//     console.log(response.data.length);
//   });

//! Завдання 12: PUT - Оновлення даних
// Оновити пост з ID 15 (/posts/15):

// Новий title: "Оновлений заголовок"
// Новий body: "Новий контент поста"
// userId: 2

// Виведи в консоль оновлений об'єкт.
// Підказка: axios.put(url, data)

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts/15";

// axios
//   .put(BASE_URL, {
//     title: "Оновлений заголовок",
//     body: "Новий контент поста",
//     userId: 2,
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

//!   Завдання 13: DELETE запит
// Видали коментар з ID 20 (/comments/20).
// Виведи в консоль статус відповіді (response.status) - має бути 200.
// Підказка: axios.delete(url)

// const BASE_URL = "https://jsonplaceholder.typicode.com/comments/20";

// axios
//   .delete(BASE_URL)
//   .then((response) => {
//     console.log(response.status);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

//! Завдання 14: Множинні параметри
// Отримай коментарі (/comments) з такими фільтрами:

// postId: 5
// _limit: 3

// Виведи тільки email кожного коментаря.

// const BASE_URL = "https://jsonplaceholder.typicode.com/comments";

// axios
//   .get(BASE_URL, {
//     params: {
//       postId: 5,
//       _limit: 3,
//     },
//   })
//   .then((response) => {
//     response.data.forEach((el) => {
//       console.log(el.email);
//     });
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// ! Unsplash

// const API_KEY = "qH4svlCaRk01YNyLWce9JGUJYFi2dwoqbYweNg2MOqA";
// const BASE_URL = "https://api.unsplash.com/photos/random";

// Завдання 26: Випадкове фото
// URL: https://api.unsplash.com/photos/random
// Headers: Authorization: Client-ID ТВІЙ_ACCESS_KEY
// Отримай одне випадкове фото.
// Виведи:

// Ім'я автора (user.name)
// Опис фото (description або alt_description)
// URL фото (urls.regular)

// axios
//   .get(BASE_URL, {
//     headers: { Authorization: `Client-ID ${API_KEY}` },
//   })
//   .then((response) => {
//     console.log(response.data);
//   });

// Common Status Codes	Description
// 200 - OK	Everything worked as expected
// 400 - Bad Request	The request was unacceptable, often due to missing a required parameter
// 401 - Unauthorized	Invalid Access Token
// 403 - Forbidden	Missing permissions to perform request
// 404 - Not Found	The requested resource doesn’t exist
// 500, 503	Something went wrong on our end

//* 1.	Є масив чисел.
// Поверни суму тільки парних чисел.

// const numbers = [1, 2, 3, 4, 5, 6];

// const parni = numbers
//   .filter((el) => {
//     return el % 2 === 0;
//   })
//   .reduce((acc, el) => {
//     return acc + el;
//   }, 0);
// console.log("🚀 ~ parni:", parni);

//* 2.	Є масив рядків.
// Створи новий масив, де кожен рядок у верхньому регістрі, але коротші за 5 символів ігноруй.

// const words = ["world", "of", "javascript"];

// const res = words
//   .filter((el) => {
//     if (el.length >= 5) {
//       return el;
//     }
//   })
//   .map((el) => el.toUpperCase());
// console.log("🚀 ~ res:", res);

// *3.	Рядок: "JavaScript is awesome"
// Поверни кількість слів, які мають більше 5 символів.

// const words = ["world", "of", "javascript"];

// const res = words.filter((el) => el.length >= 5).length;
// console.log("🚀 ~ res:", res);

// * 4.	Є масив чисел.
// Перевір, чи всі числа додатні.

// const num = [8, 7, 23, -4];

// const sum = num.every((el) => el > 0);
// console.log("🚀 ~ sum:", sum);

//* 2️⃣ ЛАНЦЮЖКИ МЕТОДІВ (map / filter / reduce / sort)

// const product = [
//   { name: "Apple", price: 50, category: "fruit" },
//   { name: "Carrot", price: 20, category: "vegetable" },
//   { name: "Banana", price: 30, category: "fruit" },
// ];

// const sum = product.toSorted((a, b) => a.price - b.price);

//* 6.	Є масив чисел.
// ➡️ Залиш тільки унікальні,
// піднеси кожне до квадрату,
// та знайди загальну суму.

// const num = [3, 4, 6];

// const res = num
//   .map((el) => {
//     return el ** 2;
//   })
//   .reduce((acc, el) => {
//     return acc + el;
//   }, 0);
// console.log("🚀 ~ res:", res);

//* 7.	Є масив користувачів:
// ➡️ Отримай рядок імен повнолітніх через кому

// const user = [
//   { name: "Anna", age: 17 },
//   { name: "Ivan", age: 21 },
//   { name: "Olga", age: 30 },
// ];

// const sum = user.filter((el) => {
//   if (el.age > 18) {
//     return el;
//   }
// });
// console.log("🚀 ~ sum:", sum);

//* ➡️ Дістань name і email через деструктуризацію.
// const user = {
//   id: 1,
//   profile: {
//     name: "Dmytro",
//     contacts: {
//       email: "test@mail.com",
//     },
//   },
// };

// const {
//   profile: {
//     name,
//     contacts: { email },
//   },
// } = user;
// console.log("🚀 ~ name:", name);
// console.log("🚀 ~ email:", email);

//* 🟢 1. БАЗА AXIOS
// 	1.	Зроби GET-запит на публічне API.
// ➡️ Виведи response.data в консоль.
// const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// axios.get(BASE_URL).then((response) => {
//   response.data.forEach((el) => {
//     console.log(el.name);
//   });
// });

// 	2.	Зроби GET-запит з параметрами (params).
// ➡️ Передай userId = 1.

// const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// axios
//   .get(BASE_URL, {
//     params: {
//       id: 10,
//     },
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(`Зміст помилки: ${error.message}`);
//   });

//* ➡️ По кліку:
//     •	зроби GET /users
//     •	виведи імена користувачів у <li>

// const btnEl = document.querySelector("#load");
// const listEl = document.querySelector("#users");

// const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// btnEl.addEventListener("click", () => {
//   axios
//     .get(BASE_URL)
//     .then((response) => {
//       listEl.innerHTML = ""; // Очищаємо список перед додаванням

//       response.data.forEach((el) => {
//         const newLi = document.createElement("li");
//         newLi.textContent = el.name;
//         listEl.append(newLi);
//       });
//     })
//     .catch((error) => {
//       console.error(error.message);
//     });
// });

//* 2️⃣ GET з params

// ➡️ По кліку:
// 	•	зроби GET /posts
// 	•	передай userId = 1
// 	•	виведи titles у список

// const items = {
//   btnEl: document.querySelector("#posts"),
//   listEl: document.querySelector("#posts-list"),
//   goodEl: document.querySelector("#good"),
//   badEl: document.querySelector("#minus-status"),
// };

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// items.btnEl.addEventListener("click", () => {
//   items.listEl.innerHTML = "";
//   items.goodEl.textContent = "Завантаження...";

//   axios
//     .get(BASE_URL, {
//       params: {
//         userId: 1,
//       },
//     })
//     .then((response) => {
//       response.data.forEach((el) => {
//         setTimeout(() => {
//           const newLi = document.createElement("li");
//           newLi.textContent = el.title;
//           items.listEl.append(newLi);
//           items.goodEl.textContent = `Все успішно виконано, всі пости опубліковані за id: ${el.id} ✅`;
//           items.goodEl.style.color = "green";
//           items.goodEl.style.backgroundColor = "yellow";
//         }, 1500);
//       });
//     })
//     .catch((error) => {
//       setTimeout(() => {
//         console.error(`Виникла помилка: ${error.message}`);
//         items.goodEl.textContent = "";
//         items.badEl.textContent = `Виникла помилка❗️: ${error.message}`;
//       }, 1500);
//     });
// });

// ?
// const numbers = [1, 2, 6, 12, 1, 12, 2];
// const norm = new Set(numbers);
// console.log("🚀 ~ norm:", norm);

// ?
// const words = ["hello", "hello", "apple", "apple"];
// const newNorm = new Set(words);
// console.log("🚀 ~ newNorm:", newNorm);

//* 4️⃣ Loading state

// <button id="btn">Load</button>
// <p id="status"></p>

// ➡️ При кліку:
//     •	одразу показуй "Loading..."
//     •	після відповіді — "Done"
//     •	при помилці — "Error"

// const btnEl = document.querySelector("#btn");
// const statusEl = document.querySelector("#status");

// const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// btnEl.addEventListener("click", () => {
//   statusEl.innerHTML = "";
//   statusEl.textContent = "Loading...";

//   axios
//     .get(BASE_URL)
//     .then((response) => {
//       setTimeout(() => {
//         statusEl.textContent = "Done ✅";

//         response.data.forEach((el) => {
//           console.log(el.name);
//         });
//       }, 1500);
//     })
//     .catch((error) => {
//       console.error(error.message);
//       statusEl.textContent = "Error ❗️";
//     })
//     .finally((fin) => {
//       console.log(fin);
//     });
// });

//? 5️⃣ Disable button

// ➡️ Поки запит не завершився:
// 	•	кнопка disabled
// 	•	після — знову активна

// const btnEl = document.querySelector("#send");
// btnEl.disabled = true;

// const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// axios
//   .get(BASE_URL)
//   .then((response) => {
//     response.data.forEach((el) => {
//       setTimeout(() => {
//         console.log(el.email);
//       }, 1500);
//     });
//   })
//   .catch((error) => {
//     console.error(error.message);
//   })
//   .finally(() => {
//     setTimeout(() => {
//       btnEl.disabled = false;
//     }, 1550);
//   });

//? 6️⃣ Filter data (без async)

// ➡️ Завантаж /users
// ➡️ Залиш тільки користувачів:
//   •	email закінчується на .org
// ➡️ Виведи результат у консоль

// const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// axios
//   .get(BASE_URL)
//   .then((response) => {
//     const filtered = response.data.filter((el) => el.email.endsWith(".org"));
//     console.log("🚀 ~ filtered:", filtered);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

//? 7️⃣ Map + Axios

// ➡️ Завантаж /posts
// ➡️ Створи масив тільки заголовків (title)

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// axios.get(BASE_URL).then((response) => {
//   const filteredTitle = response.data.map((el) => {
//     return el.title;
//   });
//   console.log("🚀 ~ filteredTitle:", filteredTitle);
// });

//? 8️⃣ Chain then

// ➡️ Зроби запит /users
// ➡️ У наступному .then:
// 	•	порахуй кількість користувачів
// 	•	виведи число в консоль

// const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// axios.get(BASE_URL).then((response) => {
//   const res = response.data.length;
//   console.log("🚀 ~ res:", res);
// });

//🟢 МАСИВИ (БАЗА)
//? 	1.	Є масив чисел.
// ➡️ Знайди максимальне і мінімальне значення.

// const numbers = [12, 3, 9, 87, 3, 45];

// const max = Math.max(...numbers);
// console.log("🚀 ~ max:", max);

// const min = Math.min(...numbers);
// console.log("🚀 ~ min:", min);

// const resMax = numbers.reduce((acc, el) => {
//   if (el > acc) {
//     return el;
//   }
//   return acc;
// }, 0);
// console.log("🚀 ~ resMax:", resMax);

// const resMin = numbers.reduce((acc, el) => {
//   if (el < acc) {
//     return el;
//   }
//   return acc;
// }, 12);
// console.log("🚀 ~ resMin:", resMin);

//? 	2.	Є масив рядків.
// ➡️ Поверни новий масив без порожніх рядків.
// const words = ["word", "", "good"];

// const norm = words.filter((el) => {
//   if (el.length > 0) {
//     return el;
//   }
// });
// console.log("🚀 ~ norm:", norm);

//? 	3.	Є масив чисел.
// ➡️ Переверни масив без reverse().
// const perev = ["apple"];

// const res = perev.join("").split("").toReversed().join("");
// console.log("🚀 ~ res:", res);

//? 	4.	Є масив.
// ➡️ Перевір, чи є в ньому однакові елементи.
// const words = ["word", "apple", "apple", "good"];
// const numbers = [12, 3, 9, 9, 12, 45];

// const resWords = new Set(words);
// console.log("🚀 ~ resWords:", resWords);

// const resNumb = new Set(numbers);
// console.log("🚀 ~ resNumb:", resNumb);

//? 	8.	Є масив чисел.
// ➡️ Залиш додатні → піднеси до квадрату → відсортуй за спаданням.

// const num = [12, -4, 6, 2, 78, 3, -3, 45];

// const res = num
//   .filter((el) => el > 0)
//   .map((el) => el ** 2)
//   .toSorted((a, b) => b - a);
// console.log("🚀 ~ res:", res);

//? 	9.	Є масив обʼєктів { name, age }.
// ➡️ Отримай імена повнолітніх, відсортовані за віком.

// const mas = [
//   { name: "Dima", age: 33 },
//   { name: "Hordii", age: 5 },
//   { name: "Lana", age: 32 },
//   { name: "Onix", age: 10 },
// ];

// const res = mas.filter((el) => el.age > 18).toSorted((a, b) => a.age - b.age);
// console.table(res);

//? 🔵 ОБʼЄКТИ
// 	10.	Є обʼєкт.
// ➡️ Поверни масив його ключів.

// const ajustes = { name: "Lana", age: 32, sex: "Female", humor: true };

// const res = Object.keys(ajustes);
// console.log("🚀 ~ res:", res);

// const val = Object.values(ajustes);
// console.log("🚀 ~ val:", val);

// * Витягнемо деструктуризацію
// const { name, age } = ajustes;
// console.log(name);
// console.log(age);

//? 	11.	Є вкладений обʼєкт.
// ➡️ Дістань значення на 3 рівні вкладеності.

// const ajustes = {
//   name: "Lana",
//   age: 32,
//   sex: "Female",
//   hobby: {
//     humor: true,
//     fisique: { dance: "RnB" },
//   },
// };

// const {
//   hobby: {
//     fisique: { dance },
//   },
// } = ajustes;
// console.log("🚀 ~ dance:", dance);

//? 	12.	Є обʼєкт.
// ➡️ Перевір, чи існує властивість без помилки.

// const ajustes = {
//   name: "Lana",
//   age: 32,
//   sex: "Female",
// };

// const { hobby } = ajustes;
// console.log("🚀 ~ hobby:", hobby);

//? 	14.	Є масив товарів { price, quantity }.
// ➡️ Порахуй загальну вартість.

// const products = [
//   { name: "Jeans", category: "Close", quantity: 2, price: 100 },
//   { name: "Sandals", category: "Close", quantity: 4, price: 50 },
//   { name: "Wallet", category: "Accessory", quantity: 1, price: 50 },
// ];

// const sum = products.reduce((acc, el) => {
//   //   return (acc = acc + el.price * el.quantity);

//   if (!acc.includes(el.category)) {
//     acc.push(el.category);
//     return acc;
//   }
//   return acc;
// }, []);
// console.log("🚀 ~ sum:", sum);

// 🔴 ФУНКЦІЇ
//? 	15.	Напиши функцію, яка:
// ➡️ приймає масив
// ➡️ повертає середнє значення.

// function foo(arr) {
//   return (
//     arr.reduce((acc, el) => {
//       return acc + el;
//     }, 0) / arr.length
//   );
// }

// console.log(foo([2, 6, 3, 5, 9, 1]));

// Напиши функцію, яка приймає цей масив.
// Функція має повернути новий масив, що містить лише імена користувачів, яким виповнилося 18 років.

//? Задача 1: "Отримати та вивести"
// Умова: Напиши функцію getPosts, яка за допомогою axios.get робить запит на URL https://jsonplaceholder.typicode.com/posts.
// У разі успіху виведи в консоль масив назв (title) перших 5 постів.
// Якщо сталася помилка (наприклад, неправильний URL), виведи повідомлення: "Помилка запиту".

// function getPosts() {
//   const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

//   axios
//     .get(BASE_URL, {
//       params: {
//         _limit: 5,
//       },
//     })
//     .then((response) => {
//       response.data.forEach((el) => {
//         console.log(el.title);
//       });
//     })
//     .catch((error) => {
//       console.error(error.message);
//     });
// }

// getPosts();

//? Задача 2: "Створення нового ресурсу"
// Умова: Напиши функцію createUser, яка приймає об'єкт з даними користувача (ім'я та місто).
// Використай axios.post для відправки цих даних на https://jsonplaceholder.typicode.com/users.
// Після успішної відповіді виведи в консоль статус відповіді (201) та ID створеного користувача, який повернув сервер.

// function createUser(name, city) {
//   const BASE_URL = "https://jsonplaceholder.typicode.com/users";

//   const userDima = {
//     name: "Dimitro",
//     username: "SsS",
//     address: {
//       city: "San-Andreas",
//     },
//   };

//   axios
//     .post(BASE_URL, userDima)
//     .then((response) => {
//       console.log(response.data);
//       console.log(response.status);
//     })
//     .catch((error) => {
//       console.log("Помилка при створенні користувача");
//     });
// }

// createUser();

//! Парне чи непарне число
// Напиши функцію isEven(num), яка повертає true, якщо число парне, і false — якщо непарне.

// function isEven(num) {
//   if (num % 2 === 0) {
//     console.log(`Парне число`);
//   } else {
//     console.log(`Odd`);
//   }
// }

// isEven(3);

//! Найбільше число в масиві
// Напиши функцію findMax(arr), яка повертає найбільше число в масиві чисел.

// function findMax(arr) {
//   console.log(Math.max(...arr));
// }

// findMax([1, 2, 3, 4]);

//! Фільтрація масиву
// Напиши функцію filterPositive(arr), яка приймає масив чисел і повертає новий масив тільки з позитивними числами.

// const arr = [-1, 1, -2, 2];

// const newArr = [];

// function filterPositive(arr) {
//   arr.forEach((el) => {
//     if (el > 0) {
//       return newArr.push(el);
//     }
//   });
//   return newArr;
// }

// const result = filterPositive(arr);
// console.log(result);

//! Простий GET-запит
// Виконай GET-запит до https://jsonplaceholder.typicode.com/posts і
// виведи в консоль масив усіх постів (title та body перших 5

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// axios
//   .get(BASE_URL, {
//     params: {
//       _limit: 5,
//     },
//   })
//   .then((response) => {
//     response.data.forEach((el) => {
//       console.log(el.title);
//       console.log(el.body);
//     });
//   })
//   .catch((error) => {
//     console.log(error.name);
//   })
//   .finally(() => {
//     console.log(`Код виконано конкретно!`);
//   });

//! GET одного ресурсу
// Виконай GET-запит до https://jsonplaceholder.typicode.com/posts/1 і виведи об’єкт поста.

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts/1";

// axios.get(BASE_URL).then((response) => {
//   console.log(response.data);
// });

//! GET з параметрами
// Виконай GET-запит до https://jsonplaceholder.typicode.com/posts з параметром
// userId=5. Виведи тільки пости цього користувача.

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// axios
//   .get(BASE_URL, {
//     params: {
//       userId: 5,
//     },
//   })
//   .then((response) => {
//     response.data.forEach((el) => {
//       console.log(el.body);
//     });
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

//! POST-запит
// Створи новий пост за допомогою POST на https://jsonplaceholder.typicode.com/posts з даними:
// { title: 'Мій новий пост', body: 'Це контент', userId: 1 }
// Виведи відповідь сервера (повернеться об’єкт з id: 101).

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// const newPost = { title: "Мій новий пост", body: "Це контент", userId: 1 };

// axios.post(BASE_URL, newPost).then((response) => {
//   console.log(response.status);
//   console.log(response.data);
// });

//! Завдання: Використай .then() щоб завантажити користувачів
// з https://jsonplaceholder.typicode.com/users та відобразити їх імена у вигляді списку.

// const btnEl = document.querySelector("#loadUsers");
// const showEl = document.querySelector("#usersList");

// const newUl = document.createElement("ol");
// showEl.append(newUl);

// const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// btnEl.addEventListener("click", () => {
//   newUl.textContent = "...Loading";

//   axios
//     .get(BASE_URL)
//     .then((response) => {
//       newUl.innerHTML = "";
//       response.data.forEach((el) => {
//         setTimeout(() => {
//           const newLi = document.createElement("li");
//           newLi.textContent = el.name;
//           newUl.append(newLi);
//         }, 1500);
//       });
//       console.log(response.status);
//     })
//     .catch((error) => {
//       console.error(error.message);
//     })
//     .finally(() => {
//       console.log(`Код реалізовано ✅`);
//     });
// });

//! Задача 2: Пошук постів за ID
// HTML:
// Завдання: При натисканні на кнопку, завантаж пост з
// https://jsonplaceholder.typicode.com/posts/{id} та покажи його заголовок і текст.
// Обробляй помилки якщо ID не існує.

// const inputEl = document.querySelector("#postId");
// const btnEl = document.querySelector("#searchPost");
// const resultEl = document.querySelector("#postResult");

// const newOl = document.createElement("ol");
// resultEl.append(newOl);

// btnEl.addEventListener("click", () => {
//   newOl.innerHTML = "";
//   const value = inputEl.value.trim();

//   if (!value) {
//     alert(`Введіть корректний ID`);
//     return;
//   }

//   newOl.innerHTML = "<li>...Loading</li>";

//   const BASE_URL = `https://jsonplaceholder.typicode.com/posts/${value}`;

//   axios
//     .get(BASE_URL)
//     .then((response) => {
//       newOl.innerHTML = "";

//       const newLi = document.createElement("li");
//       newLi.textContent = response.data.title;
//       newOl.append(newLi);

//       inputEl.value = "";
//     })
//     .catch((error) => {
//       newOl.innerHTML = `<li style="color: red;">Пост №${value} не знайдено!</li>`;
//       console.error(`Вийшла помилка: ${error.message}`);
//     })
//     .finally(() => {
//       console.log(`Код виканано ✅`);
//     });
// });

//! Задача 3: Галерея фото з прелоадером

// Завдання: Завантаж перші 10 фото з https://jsonplaceholder.typicode.com/photos?_limit=10. Покажи лоадер під час завантаження. Відобрази фото у вигляді карток з thumbnailUrl.

// {
/* <div id="app">
  <button id="loadPhotos">Завантажити фото</button>
  <div id="loader" style="display:none;">Завантаження...</div>
  <div id="gallery"></div>
</div> */
// }

// const btnEl = document.querySelector("#loadPhotos");
// const loadEl = document.querySelector("#loader");
// const galleryEl = document.querySelector("#gallery");

// btnEl.addEventListener("click", () => {
//   loadEl.style.display = "block";

//   const BASE_URL = "https://jsonplaceholder.typicode.com/photos?_limit=10";

//   axios
//     .get(BASE_URL)
//     .then((response) => {
//       loadEl.style.display = "none";

//       response.data.forEach((el) => {
//         const imgEl = document.createElement("img");
//         imgEl.src = el.thumbnailUrl;
//         imgEl.style.width = "150px";
//         imgEl.style.height = "150px";
//         imgEl.style.border = "1px solid black";
//         galleryEl.append(imgEl);
//       });
//     })
//     .catch((error) => {
//       console.error(error.message);
//     })
//     .finally(() => {
//       console.log(`Code Done`);
//     });

//   galleryEl.innerHTML = "";
// });

// !

//! Завдання: Напиши async функцію, яка завантажує дані з
// https://jsonplaceholder.typicode.com/users/1 та виводить ім'я користувача в #result.

/* <div id="app">
  <button id="btn">Завантажити дані</button>
  <div id="result"></div>
</div>; */

// const btnEl = document.querySelector("#btn");
// const resEl = document.querySelector("#result");

// const BASE_URL = "https://jsonplaceholder.typicode.com/users/1";

// btnEl.addEventListener("click", async () => {
//   try {
//     const response = await axios.get(BASE_URL);
//     const nameFirst = response.data.name;

//     resEl.textContent = `Імя користувача: ${nameFirst}`;
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// ? Задача 2: Очікування відповіді
// Завдання: Створи async функцію, яка отримує пост
// з https://jsonplaceholder.typicode.com/posts/1. Виведи заголовок у #title, а текст у #body.

// <div id="app">
//   <button id="btn">Отримати пост</button>
//   <p id="title"></p>
//   <p id="body"></p>
// </div>;

// const btnEl = document.querySelector("#btn");
// const titleEl = document.querySelector("#title");
// const bodyEl = document.querySelector("#body");

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts/1";

// btnEl.addEventListener("click", async () => {
//   try {
//     const response = await axios.get(BASE_URL);
//     const title = response.data.title;
//     const body = response.data.body;

//     titleEl.textContent = title;
//     bodyEl.textContent = body;
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// ? Завдання: Напиши async функцію, яка робить запит на
// https://jsonplaceholder.typicode.com/invalid.
// Обгорни запит у try-catch і виведи повідомлення про помилку в #message.

//  <div id="app">
//    <button id="btn">Спробувати запит</button>
//    <div id="message"></div>
//  </div>;

// const btnEl = document.querySelector("#btn");
// const showEl = document.querySelector("#message");

// const BASE_URL = "https://jsonplaceholder.typicode.com/invalid";

// btnEl.addEventListener("click", async () => {
//   try {
//     const response = await axios.get(BASE_URL);
//     console.log(response.status);
//   } catch (error) {
//     console.error(error.message);

//     showEl.textContent = `Сталась помилка: ${error.name}`;
//   }
// });

//? Задача 4: Два послідовні запити

// <div id="app">
//   <button id="btn">Завантажити</button>
//   <div id="result"></div>
// </div>

// Завдання: Створи async функцію:

// Завантаж користувача /users/1
// Використай його id щоб завантажити його пости /posts?userId=1
// Виведи ім'я користувача та кількість постів

// const btnEl = document.querySelector("#btn");
// const showEl = document.querySelector("#result");

// const USER_URL = "https://jsonplaceholder.typicode.com/users";
// const POST_URL = "https://jsonplaceholder.typicode.com/posts";

// btnEl.addEventListener("click", async () => {
//   try {
//     const response = await axios.get(USER_URL, {
//       params: {
//         id: 1,
//       },
//     });
//     const nameEl = response.data.name;

//     const postResponse = await axios.get(POST_URL, response);

//     const result = postResponse.title;

//     showEl.textContent = result;
//   } catch (error) {
//     console.error(error.message);
//   }
// });

//? Умова задачі
// Використовуючи API https://jsonplaceholder.typicode.com/todos?_limit=5,
// потрібно завантажити дані та відобразити їх у вигляді списку на сторінці.

// const btnEl = document.querySelector("#js-btn");
// const listEl = document.querySelector("#list");
// const checkEl = document.querySelector("#checkbox");

// const BASE_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";

// btnEl.disabled = true;

// checkEl.addEventListener("change", () => {
//   if (checkEl.checked) {
//     btnEl.disabled = false;
//   } else {
//     btnEl.disabled = true;
//   }
// });

// btnEl.addEventListener("click", async () => {
//   try {
//     listEl.textContent = "...Loading";

//     const response = await axios.get(BASE_URL);

//     listEl.innerHTML = "";

//     response.data.forEach((el) => {
//       const newLi = document.createElement("li");
//       newLi.textContent = el.title;
//       listEl.append(newLi);
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// ?1. Задача: "Привітання із затримкою"
// Умова: Напишіть асинхронну функцію sayHello(), яка чекає 2 секунди, а потім виводить у консоль рядок "Привіт через 2 секунди!".

// Підказка: Використовуйте setTimeout, загорнутий у new Promise, щоб створити затримку.

// async function sayHello() {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Привіт через 2 секунди!");
//       resolve();
//     }, 2000);
//   });
// }

// sayHello();

//! Варіант 1: Базовий (Симуляція завантаження даних)
// Створи функцію fetchUserData(userId), яка повертає Promise.
// Використай setTimeout, щоб затримка тривала 2 секунди.
// Якщо userId позитивний — "повертай" об'єкт {id: userId, name: "Admin", role: "Editor"}.
// Виклич цю функцію за допомогою async/await та виведи результат у консоль.
// Додай обробку помилок (try/catch), якщо userId від'ємний.

// async function fetchUserData(userId) {
//   try {
//     await new Promise((resolve) => {
//       setTimeout(() => {
//         if (userId) {
//           return { id: userId, name: "Admin", role: "Editor" };
//         }
//       }, 2000);
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// ! Технічне завдання
// Використовуючи бібліотеку Axios та синтаксис async/await, реалізуйте функцію manageUsers(), яка виконує наступні кроки:
// Отримання даних: Зробіть GET-запит до ресурсу: https://jsonplaceholder.typicode.com/users.
// Фільтрація: З отриманого масиву виберіть лише тих користувачів, чий id парний (2, 4, 6...).
// Додатковий запит: Візьміть першого користувача з вашого відфільтрованого списку та зробіть ще один запит, щоб отримати його пости за адресою: https://jsonplaceholder.typicode.com/posts?userId=ID_КОРИСТУВАЧА.
// Вивід результату: Виведіть у консоль об'єкт, який містить:
// userName: ім'я обраного користувача.
// postsCount: кількість постів, які ви отримали у кроці №3.
// Обробка помилок: Весь блок коду має бути загорнутий у try...catch. Якщо запит не вдасться (наприклад, помилка в URL), виведіть у консоль повідомлення: "Помилка при завантаженні даних: [текст помилки]".

// const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// async function manageUsers() {
//   try {
//     const response = await axios.get(BASE_URL);
//     const evenUsers = response.data.filter((el) => el.id % 2 === 0);

//     // first user
//     const firstUser = evenUsers[0];

//     const first = await axios.get(
//       `https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`
//     );

//     console.log(firstUser.name);
//     console.log(first.data.length);
//   } catch (error) {
//     console.error(`Помилка при завантаженні даних: ${error.message}`);
//   }
// }

// manageUsers();

//! Ці завдання допоможуть "набити руку" на синтаксисі та базових методах масивів.

//? FizzBuzz: Напиши функцію, яка виводить числа від 1 до 100. Але для кратних трьом виводь "Fizz", для кратних п'яти — "Buzz", а для кратних і трьом, і п'яти одночасно — "FizzBuzz".
// for (let i = 0; i < 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   }
// }

//? Паліндром: Створи функцію, яка перевіряє, чи є рядок паліндромом (читається однаково в обох напрямках, наприклад, "шалаш"), ігноруючи регістр та пробіли.

// function palin(word) {
//   const rev = word.split("").reverse().join("");

//   if (word === rev) {
//     console.log("Паліндром ✅");
//   } else {
//     console.log("Паліндром ❗️");
//   }
// }

// palin("шалаш");

//? Аналізатор масиву: Напиши функцію, яка приймає масив чисел і повертає об'єкт із такими даними: максимальне число, мінімальне, середнє значення та сума всіх елементів.

// function checker(array) {
//   const checkerMax = Math.max(...array);
//   const checkerMin = Math.min(...array);
//   const aver =
//     array.reduce((acc, el) => {
//       return acc + el;
//     }, 0) / array.length;

//   const sum = array.reduce((acc, el) => acc + el);

//   return {
//     max: checkerMax,
//     min: checkerMin,
//     average: aver,
//     total: sum,
//   };
// }

// console.log(checker([1, 2, 3]));

//? 2. Рівень: Робота з DOM (Інтерфейс)
//? Конвертер валют: Створи просту форму з інпутом (сума в гривнях) та випадаючим списком (курс USD, EUR). При натисканні на кнопку результат має з'являтися на екрані без перезавантаження сторінки.

// const fomrEl = document.querySelector("#js-form");
// const inputEl = document.querySelector("#js-input");
// const selectEl = document.querySelector("#js-select");
// const btnEl = document.querySelector("#js-btn");
// const resEl = document.querySelector("#js-result");

// btnEl.addEventListener("click", (event) => {
//   event.preventDefault();

//   const currencyEur = 40;
//   const currencyUsd = 45;

//   const amount = Number(inputEl.value);

//   if (amount <= 0) {
//     alert(`Введіть будь ласка корректну цифру`);
//     return;
//   } else if (selectEl.value === "usd") {
//     resEl.textContent = amount * currencyUsd;
//     return;
//   } else if (selectEl.value === "eur") {
//     resEl.textContent = amount * currencyEur;
//   }

//   inputEl.value = "";
// });

//? Список справ (To-Do List):
// Поле для введення тексту.
// Кнопка "Додати".
// Можливість видалити конкретну справу або відмітити її як виконану (змінити колір тексту).
// Темна тема: Додай на сторінку перемикач (Toggle), який змінює колір фону сайту з білого на темний і навпаки, зберігаючи стан у localStorage (щоб після оновлення сторінки вибір не зникав).

// const items = {
//   themeBtn: document.querySelector("#js-theme"),
//   iconEl: document.querySelector(".icon"),
//   inputEl: document.querySelector("#js-input"),
//   btnEl: document.querySelector("#js-btn"),
//   listEl: document.querySelector("#js-list"),
// };

// items.btnEl.addEventListener("click", () => {
//   if (!items.inputEl.value) {
//     alert("Введіть свою таску!");
//     return;
//   }

//   items.listEl.insertAdjacentHTML(
//     "beforeend",
//     `<li>${items.inputEl.value}<button>X</button></li>`
//   );

//! var 2
// const newLi = document.createElement("li");
// newLi.textContent = items.inputEl.value;
// items.listEl.append(newLi);

//   items.inputEl.value = "";
// });

// items.listEl.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     event.target.closest("li").remove();
//   }
// });

// items.themeBtn.addEventListener("click", (event) => {
//   if (event.target) {
//     document.body.classList.toggle("dark");
//   }
// });

//? 3. Рівень: Робота з API (Асинхронність)
// Це наблизить тебе до реальної розробки, де дані беруться із сервера.

// Генератор випадкових цитат: Використовуй безкоштовне API (наприклад, JSONPlaceholder або Advice Slip API), щоб при натисканні на кнопку отримувати нову цитату та виводити її на екран.

// const resEl = document.querySelector(".result");
// const btnEl = document.querySelector(".btn");

// const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

// btnEl.addEventListener("click", async () => {
//   resEl.innerHTML = "";

//   try {
//     const response = await axios.get(BASE_URL, {
//       params: {
//         _limit: 5,
//       },
//     });

//     response.data.forEach((el) => {
//       const newLi = document.createElement("li");
//       newLi.textContent = el.title;
//       resEl.append(newLi);
//     });
//   } catch (error) {
//     console.error(`Name of error: ${error.message}`);
//   }
// });

//?

// const inputEl = document.querySelector("#js-input");
// const btnEl = document.querySelector("#btn");
// const listEl = document.querySelector("#items");

// додавання видалення таски
// btnEl.addEventListener("click", (event) => {
//   event.preventDefault();

//   if (!inputEl.value) {
//     alert("Введіть таску!");
//   } else {
//     const valueEl = inputEl.value;

//     const newLi = document.createElement("li");
//     newLi.textContent = valueEl;
//     listEl.append(newLi);
//   }

//   inputEl.value = "";
// });

// document.body.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     event.target.closest("li").remove();
//   }
// });

// ?

// <input type="password" name="" id="js-pass" />
//   <input type="checkbox" name="" id="js-check" />
//   <button id="js-btn">Show users name</button>

// const inPass = document.querySelector("#js-pass");
// const inCheck = document.querySelector("#js-check");
// const btnEl = document.querySelector("#js-btn");
// const listEl = document.querySelector("#js-list");

// btnEl.disabled = true;

// inCheck.addEventListener("change", (event) => {
//   if (event.target.checked) {
//     btnEl.disabled = false;
//   } else {
//     btnEl.disabled = true;
//   }
// });

// const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// btnEl.addEventListener("click", async () => {
//   listEl.innerHTML = "";

//   try {
//     if (inPass.value === "Dima123") {
//       const response = await axios.get(BASE_URL);

//       response.data.forEach((el) => {
//         const newLi = document.createElement("li");
//         newLi.textContent = el.name;
//         listEl.append(newLi);

//         console.log(response.status);
//       });
//       inCheck.checked = false;
//       btnEl.disabled = true;
//       inPass.value = "";
//     } else {
//       alert(`Please check your password`);
//     }
//   } catch (error) {
//     console.error(`Problem name: ${error.message}`);
//   }
// });

//? Завдання №1: "Розумний список справ" (To-Do List)

//* Інтерфейс: Поле вводу (input) та кнопка "Додати".
// const items = {
//   inputEl: document.querySelector("#js-input"),
//   btnEl: document.querySelector("#js-btn"),
//   listEl: document.querySelector("#js-list"),
// };

// const { inputEl, btnEl, listEl } = items;

//* Функціонал додавання: При натисканні на кнопку (або клавішу Enter) текст із поля стає новим пунктом списку (li).
//* на клік
// btnEl.addEventListener("click", () => {
//   const nornalaizTask = inputEl.value;

//   if (nornalaizTask.length > 2) {
//     //! li
//     const newLi = document.createElement("li");
//     newLi.textContent = nornalaizTask;
//     newLi.style.display = "flex";

//     listEl.append(newLi);

//     //! btn
//     const btnClose = document.createElement("button");
//     btnClose.textContent = "X";
//     newLi.append(btnClose);
//   } else {
//     alert("Напишіть таску більше 2 символів =)");
//   }

//   inputEl.value = "";
// });

//* на Ентер
// inputEl.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     const nornalaizTask = event.target.value;

//     if (nornalaizTask.length > 2) {
//       // !li
//       const newLi = document.createElement("li");
//       newLi.textContent = nornalaizTask;
//       listEl.append(newLi);

//       //! btn
//       const btnClose = document.createElement("button");
//       btnClose.textContent = "X";
//       newLi.append(btnClose);
//     } else {
//       alert("Напишіть таску більше 2 символів =)");
//     }

//     inputEl.value = "";
//   }
// });

//* Статус виконання: При кліку на текст завдання воно має закреслюватися (використовуй CSS клас, наприклад text-decoration: line-through).
// listEl.addEventListener("click", (event) => {
//   const liElem = event.target.closest("li");

//   if (liElem) {
//     liElem.classList.toggle("done");
//   }
// });

//* Видалення: Біля кожного завдання має бути кнопка "Видалити", яка прибирає саме цей елемент.
// listEl.addEventListener("click", (event) => {
//   const buttonClose = event.target.closest("button");

//   if (buttonClose) {
//     const nasheLi = buttonClose.closest("li");
//     nasheLi.remove();
//   }
// });

//? Завдання №2: "Генератор карток персонажів"
// Умова:
// Джерело даних: Використовуй безкоштовне API: https://randomuser.me/api/.

// Кнопка дії: Створи кнопку "Згенерувати героя".

// const items = {
//   showEl: document.querySelector("#js-result"),
//   btnEl: document.querySelector("#js-button"),
// };

// const { showEl, btnEl } = items;

// Візуалізація: При натисканні на кнопку роби запит до API та виводь на екран картку з:
// const BASE_URL = "https://randomuser.me/api/";

// Фотографією користувача (picture.large).
// Ім'ям та прізвищем.
// Електронною поштою.
// Містом та країною.

// Ініціалізація Notiflix
// Notiflix.Loading.init({
//   backgroundColor: "rgba(0,0,0,0.9)",
//   svgColor: "#fff",
//   clickToClose: false,
// });

// btnEl.addEventListener("click", async () => {
//   try {
// Показуємо завантажувач перед запитом
// Notiflix.Loading.standard("Завантаження...");

// const response = await axios.get(BASE_URL);
// const data = response.data;

// showEl.insertAdjacentHTML(
//   "beforeend",
//   `<li class="user-item"><p><img src="${data.results[0].picture.large}"/>User: ${data.results[0].name.first} ${data.results[0].name.last}</p><p>Email: ${data.results[0].email}</p>${data.results[0].location.country} ${data.results[0].location.city}<p></p></li>`
// );

// Приховуємо завантажувач після отримання даних
// Notiflix.Loading.remove();
// } catch (error) {
// Приховуємо завантажувач у разі помилки
// Notiflix.Loading.remove();
// console.error(`Сталась помилкa: ${error.message}`);
// }
// });

// Обробка очікування: Поки дані завантажуються, кнопка має ставати неактивною (disabled), а на місці картки має з'являтися текст "Завантаження..." (або простий лоадер).

// ? 1. Задача "Кавовий автомат"
// Умова: Напишіть функцію makeCoffee(type), яка повертає проміс. Проміс має виконуватися через 2 секунди і повертати рядок: "Ваша кава {type} готова!". Використайте async/await, щоб викликати цю функцію та вивести результат у консоль.

// Що це тренує: Базову роботу з await та затримкою часу (setTimeout).

// async function makeCoffee(type) {
//   const promise = await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Ваша кава ${type} готова!`);
//       resolve();
//     }, 2000);
//   });
// }

// makeCoffee("capuccino");

//? Задача 1: "Профіль користувача з обробкою 404"
// Сценарій: Тобі потрібно завантажити дані користувача за ID.

// Виконай запит до https://jsonplaceholder.typicode.com/users/1.

// У блоці try:

// Отримай дані та виведи в консоль повідомлення: "Користувач: [name], Email: [email]".

// Додай перевірку: якщо response.ok дорівнює false, кидай помилку через throw new Error().

// У блоці catch:

// Виведи в консоль: "Помилка завантаження: користувача не знайдено".

// const BASE_URL = "https://jsonplaceholder.typicode.com/users/1";

// try {
//   const response = await axios.get(BASE_URL);

//   console.log(`Користувач: ${response.data.name}`);
//   console.log(`Email: ${response.data.email}`);
// } catch (error) {
//   console.error("Помилка завантаження: користувача не знайдено");
// }

//? Задача 2: "Пошук коментарів (Ланцюжок з ризиком)"
// Сценарій: Тобі потрібно отримати перший пост, а потім — коментарі до нього. Але сервер може бути нестабільним.

// У блоці try:

// Спочатку завантаж пост: https://jsonplaceholder.typicode.com/posts/1.

// Витягни з нього id.

// Використай цей id, щоб зробити другий запит за адресою: https://jsonplaceholder.typicode.com/posts/[ID]/comments.

// Виведи кількість коментарів.

// У блоці catch:

// Перехопи будь-яку помилку (мережеву або помилку парсингу JSON) і виведи: "Не вдалося отримати дані для обговорення".

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts/1";

// try {
//   const response = await axios.get(BASE_URL);
//   const idEl = response.data.userId;

//   const searchPost = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts/${idEl}/comments`
//   );

//   console.log(searchPost.data.length);
// } catch (error) {
//   console.error("Не вдалося отримати дані для обговорення");
// }

//? Задача 3: "Система валідації відповіді"
// Сценарій: Іноді API повертає пустий об'єкт, і це теж треба обробляти як помилку.

// Зроби запит до https://jsonplaceholder.typicode.com/todos/999 (такого ID не існує, сервер поверне 404).

// У блоці try:

// Після await response.json() перевір, чи об'єкт не пустий (наприклад, перевір наявність поля id).

// Якщо даних немає — вручну згенеруй помилку через throw.

// У блоці catch:

// Виведи в консоль текст помилки, який ти передав у throw.

// const BASE_URL = "https://jsonplaceholder.typicode.com/todos/999";

// try {
//   const response = await axios.get(BASE_URL);

//   if (!response.data.id) {
//     throw new Error("такого ID не існує");
//   }
// } catch (error) {
//   console.error(`Помилка: ${error.message}`);
// }

//? Задача 1: Характеристики персонажа
// Умова: Отримай дані про покемона ditto.

// Зроби запит до https://pokeapi.co/api/v2/pokemon/ditto.

// У блоці try:

// Виведи в консоль його базовий досвід (base_experience).

// Виведи назву його першої здібності (шлях у JSON: abilities[0].ability.name).

// Додай catch для обробки помилок мережі.

// const BASE_URL = "https://pokeapi.co/api/v2/pokemon/ditto";

// try {
//   const response = await axios.get(BASE_URL);

//   console.log(`Base experience: ${response.data.base_experience}`);
//   console.log(`Abilities: ${response.data.abilities[0].ability.name}`);
// } catch (error) {
//   console.error(`Помилка: ${error.message}`);
// }

//? Задачі на Async/Await, Try/Catch та роботу з API
//? Задача 1: Отримання даних користувача
// Створи функцію getUserData(userId), яка:

// Робить запит до API https://jsonplaceholder.typicode.com/users/${userId}
// Повертає ім'я та email користувача
// Обробляє помилки (наприклад, якщо користувача не існує)
// Виводить результат у консоль

// const refs = {
//   buttonEl: document.querySelector("#js-button"),
//   listEl: document.querySelector("#js-list"),
// };

// const { buttonEl, listEl } = refs;

// async function getUserData(userId) {
//   try {
//     const BASE_URL = `https://jsonplaceholder.typicode.com/users/${userId}`;

//     const response = await axios.get(BASE_URL);
//     listEl.insertAdjacentHTML(
//       "beforeend",
//       `<li>Name: ${response.data.name}, Email: ${response.data.email}</li>`
//     );
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// buttonEl.addEventListener("click", () => {
//   listEl.innerHTML = "";

//   getUserData(1);
// });

//? Задача 2: Список постів
// Напиши async функцію getAllPosts(), яка:

// Отримує всі пости з https://jsonplaceholder.typicode.com/posts
// Повертає тільки перші 5 постів
// Якщо запит не вдався, повертає порожній масив
// Використай try/catch для обробки помилок

// const refs = {
//   buttonEl: document.querySelector("#js-button"),
//   listEl: document.querySelector("#js-list"),
// };

// const { buttonEl, listEl } = refs;

// async function getAllPosts() {
//   try {
//     const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

//     const response = await axios.get(BASE_URL, {
//       params: {
//         _limit: 5,
//       },
//     });

//     response.data.forEach((el) => {
//       listEl.insertAdjacentHTML("beforeend", `<li>${el.title}</li>`);
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// buttonEl.addEventListener("click", () => {
//   listEl.innerHTML = "";

//   getAllPosts(1);
// });

//? Задача 3: Пошук поста за ID
// Створи функцію findPostById(postId), яка:

// Шукає пост за ID через API https://jsonplaceholder.typicode.com/posts/${postId}
// Якщо пост знайдено, виводить його title
// Якщо пост не знайдено (404), виводить "Пост не знайдено"
// Обробляє інші помилки окремо

const refs = {
  buttonEl: document.querySelector("#js-button"),
  listEl: document.querySelector("#js-list"),
};

const { buttonEl, listEl } = refs;

async function findPostById(postId) {
  try {
    if (id) {
      const BASE_URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;

      const { data } = await axios.get(BASE_URL);
      const { id } = data;

      listEl.insertAdjacentHTML("beforeend", `<li></li>`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

// work in progres!
