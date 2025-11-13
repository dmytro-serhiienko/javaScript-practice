// const students = [
//   {
//     name: "Олена",
//     age: 20,
//     grade: 85,
//     city: "Київ",
//   },
//   {
//     name: "Максим",
//     age: 22,
//     grade: 92,
//     city: "Львів",
//   },
//   {
//     name: "Анна",
//     age: 19,
//     grade: 78,
//     city: "Київ",
//   },
//   {
//     name: "Ігор",
//     age: 21,
//     grade: 88,
//     city: "Одеса",
//   },
//   {
//     name: "Марія",
//     age: 20,
//     grade: 95,
//     city: "Львів",
//   },
// ];

//! ==============================
//! REDUCE
//! ==============================

//? Задача 9: Використай reduce для підрахунку середньої оцінки всіх студентів
// const avrNumber = students.reduce((accum, num, i, ar) => {
//   accum += num.grade;
//   if (i === ar.length - 1) {
//     return accum / ar.length;
//   }
//   return accum;
// }, 0);
// console.log("🚀 ~ avrNumber:", avrNumber);

//? Задача 11: Використай reduce для знаходження суми всіх чисел

//* Підрахунок елементів
// Порахуй кількість елементів у масиві ['a', 'b', 'c', 'd'] за допомогою reduce()

//* Конкатенація рядків
// Об'єднай всі слова з масиву ['Привіт', 'як', 'справи'] в одне речення
// const slova = ["Привіт", "як", "справи"];

// const slovaRazom = slova.reduce((accum, word) => {
//   return `${accum} ${word}`;
// }, "");
// console.log("🚀 ~ slovaRazom:", slovaRazom);

//! =======================================
//! ЧАСТИНА 4: TOSORTERED ТА СОРТУВАННЯ
//! =======================================

//? Задача 13: Відсортуй числа за зростанням (використай toSorted)
// const points = [40, 100, 1, 5, 25, 10];
// const pointsSort = points.toSorted((a, b) => a - b);
// console.log("🚀 ~ pointsSort:", pointsSort);

//? Задача 14: Відсортуй числа за спаданням
// const points = [40, 100, 1, 5, 25, 10];
// const pointsSort = points.toSorted((a, b) => b - a);
// console.log("🚀 ~ pointsSort:", pointsSort);

//? Задача 15: Відсортуй слова за алфавітом (без урахування регістру)
// const words = ["Яблуко", "апельсин", "Банан", "груша"];
// const pointsSort = words.toSorted((a, b) => a.localeCompare(b));
// console.log("🚀 ~ pointsSort:", pointsSort);

//? Задача 16: Відсортуй студентів за оцінкою (від найвищої до найнижчої)

// const gradeDscr = students.toSorted((a, b) => b.grade - a.grade);
// console.log("🚀 ~ gradeDscr:", gradeDscr);

//! =======================================
//! Завдання з JS сортування (toSorted і localeCompare)
//! =======================================

//? Сортування рядків
//? Відсортуй масив ['banana', 'apple', 'cherry', 'date'] в алфавітному порядку
// const masivWords = ["banana", "apple", "cherry", "date"];

// Сортування за спаданням
//? Відсортуй масив чисел [15, 3, 27, 8, 42] від найбільшого до найменшого
// const masive = [15, 3, 27, 8, 42];

//! =======================================
//! Задача Каскад
//! =======================================

// 	1.	Видалити пробіли з початку та кінця (trim)
// 	2.	Перевести всі літери в верхній регістр (toUpperCase)
// 	3.	Відсортувати за алфавітом
// const fruits = ["  Mango", "apple  ", "BANANA", "Kiwi  "];

//? Відсортуй масив + Upper
// const masive = ["їжак", "єнот", "ящірка", "індик"];

//! =======================================
//! ЧАСТИНА 5: FLATMAP
//! =======================================

// const classes = [
//   {
//     className: "10-А",
//     students: ["Петро", "Оля", "Іван"],
//   },
//   {
//     className: "10-Б",
//     students: ["Марія", "Сергій"],
//   },
//   {
//     className: "11-А",
//     students: ["Анна", "Максим", "Ольга", "Дмитро"],
//   },
// ];

//? Задача 18: Використай flatMap для отримання плоского масиву всіх імен студентів

//! =======================================
//! ЧАСТИНА 6: ЛАНЦЮЖКИ МЕТОДІВ
//! =======================================

// const products = [
//   {
//     name: "Ноутбук",
//     price: 25000,
//     category: "Електроніка",
//     inStock: true,
//   },
//   {
//     name: "Телефон",
//     price: 15000,
//     category: "Електроніка",
//     inStock: true,
//   },
//   {
//     name: "Стіл",
//     price: 5000,
//     category: "Меблі",
//     inStock: false,
//   },
//   {
//     name: "Стілець",
//     price: 2000,
//     category: "Меблі",
//     inStock: true,
//   },
//   {
//     name: "Планшет",
//     price: 12000,
//     category: "Електроніка",
//     inStock: true,
//   },
//   {
//     name: "Лампа",
//     price: 800,
//     category: "Меблі",
//     inStock: true,
//   },
// ];

//? Задача 20: Знайди всі товари категорії "Електроніка", які є в наявності,
// відсортуй їх за ціною (від дешевших до дорожчих) і поверни масив їх назв
// Використай ланцюжок методів: filter -> toSorted -> map

// prettier-ignore
// const sortProduct = products
//   .filter((stock) => stock.category === "Електроніка")
//   .toSorted((a, b) => a.price - b.price)
//   .map((val) => val.name);
// console.log("🚀 ~ sortProduct:", sortProduct);

//? Задача 21: Знайди середню ціну всіх товарів, які є в наявності
// Використай ланцюжок: filter -> map -> reduce

// prettier-ignore
// const sortProduct = products
//     .filter((stock) => stock.inStock === true)
//     .map((val) => val.price)
//     .reduce((accum, el, i, arr) => {
//         return accum + el / arr.length
//     }, 0);

// console.log("🚀 ~ sortProduct:", sortProduct);

// Рівень 1: Базові задачі
// Задача 1: Привітання великими літерами
// Напишіть функцію shout(text), яка перетворює текст у великі літери.

//! Задача 3: Видалення пробілів
// Напишіть функцію cleanText(text), яка видаляє пробіли на початку та в кінці рядка.

// const first = "  MyEmail@Gmail.COM ";
// // const second = "   world   ";

// // prettier-ignore
// function cleanText(text) {
//   return text.trim().toLowerCase().split('');
// }

// const result = cleanText(first);
// console.log(result);

// Задача 13: Перевірка паролю (проста)
// Напишіть функцію isStrongPassword(password), яка перевіряє:
// Довжина >= 6 символів
// Містить "@"

//! Перевірка паліндрома
//! Функція isPalindrome(str) повертає true, якщо рядок читається однаково зліва направо і справа наліво.

// function isPalindrome(str) {
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] !== str[str.length - 1 - i]) {
//             return false
//         }
//     }
//     return true
// }

// isPalindrome("level"); // true
// isPalindrome("hello"); // false
// console.log("🚀 ~ isPalindrome:", isPalindrome(""));

// const isPalindrome = (str) => {

// }

// !!!!!!!!!!!!!!!!!
//* Стартове слово
// const word = "hello";
// console.log("🚀 ~ word:", word);

//* Розділяємо на букви - Перевертаємо - Збираємо слово reverse
// const rozdil = word.split("").toReversed().join("");
// console.log("🚀 ~ rozdil:", rozdil);

//* Перевірка
// function isPalindrome(word) {
//   return word === rozdil;
// }
// console.log("🚀 ~ isPalindrome ~ isPalindrome:", isPalindrome(word));

//* Перевертаємо
// const revers = rozdil.toReversed();
// console.log("🚀 ~ revers:", revers);

//* Збираємо слово reverse
// const revWord = revers.join("");
// console.log("🚀 ~ revWord:", revWord);

//* Стартове слово
// const word = "level";
// console.log("🚀 ~ word:", word);

// // prettier-ignore
// const verifi = word => word
//     .split("")
//     .toReversed()
//     .join("")

// const result = word === verifi(word);
// console.log(result);

//!!!!!!!! ========== ЗАДАЧА 1: Фільтрація парних чисел ==========
//* Напиши функцію, яка повертає тільки парні числа з масиву
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log("🚀 ~ num:", num);

// // prettier-ignore
// const par = num
//   .filter((num) => num % 2 === 0)
// console.log("🚀 ~ par:", par);

// const maxNum = Math.max(...par);
// console.log("🚀 ~ maxNum:", maxNum);

// const minNum = Math.min(...par);
// console.log("🚀 ~ minNum:", minNum);

// // prettier-ignore
// const averNum = num.reduce((accum, num) => {
// return accum + num
// }, 0) / num.length;
// console.log("🚀 ~ averNum:", averNum);

//* ========== ЗАДАЧА 2: Сума елементів масиву ==========
// Створи функцію, яка підраховує суму всіх чисел у масиві

// const num1 = [1, 2, 3, 4, 5];
// console.log("🚀 ~ num1:", num1);

// const num2 = [10, 20, 30];
// console.log("🚀 ~ num2:", num2);

// const sum = num1.reduce((accum, num) => {
//   return accum + num;
// }, 0);
// console.log("🚀 ~ sum:", sum);

// const sum1 = num2.reduce((accum, num) => {
//   return accum + num;
// }, 0);
// console.log("🚀 ~ sum1:", sum1);

//! ========== ЗАДАЧА 3: Найдовше слово ==========
// Знайди найдовше слово в масиві

// const value1 = ["кіт", "собака", "папуга"];
// const value2 = ["JavaScript", "HTML", "CSS"];

// const lonngest = value1.reduce((accum, word) => {
//   return accum + word.length;
// }, 0);
// console.log("🚀 ~ lonngest:", lonngest);

//* ========== ЗАДАЧА 4: Середній бал студента ==========
// Додай метод getAverageGrade до об'єкта student
// const student = {
//   name: 'Олександр',
//   age: 20,
//   course: 2,
//   grades: [85, 90, 78, 92, 88],
// };

// const result =
//   student.grades.reduce((accum, num) => {
//     return accum + num;
//   }, 0) / student.grades.length;
// console.log("🚀 ~ result:", result);

// Очікується: 86.6

//? ========== ЗАДАЧА 5: Загальна вартість товарів ==========
// Підрахуй загальну вартість всіх товарів (ціна * кількість)
// const products = [
//   { name: 'Ноутбук', price: 25000, quantity: 2 },
//   { name: 'Миша', price: 500, quantity: 5 },
//   { name: 'Клавіатура', price: 1500, quantity: 3 }
// ];

// const sum = products.reduce(
//   (accum, num) => {
//     accum.cantidad += num.quantity;
//     accum.precio += num.price;
//     accum.priceOfAll += num.price * num.quantity;
//     return accum;
//   },
//   { cantidad: 0, precio: 0, priceOfAll: 0 }
// );
// console.log("🚀 ~ sum:", sum);

// Очікується: 57000;

//! ========== ЗАДАЧА 6: Групування книг за жанрами ==========
// Згрупуй книги за жанрами у вигляді об'єкта
// const books = [
//   { title: 'Кобзар', author: 'Шевченко', genre: 'поезія' },
//   { title: 'Тіні забутих предків', author: 'Коцюбинський', genre: 'проза' },
//   { title: 'Лісова пісня', author: 'Українка', genre: 'поезія' },
//   { title: 'Захар Беркут', author: 'Франко', genre: 'проза' }
// ];

// const gange = books.map((element) => {
//   return element.genre;
// });
// console.log("🚀 ~ gange:", gange);

// // Тест:
// console.log(groupByGenre(books));

// ========== ЗАДАЧА 7: Пошук користувача за email ==========
// Знайди користувача за email
// const users = [
//   { id: 1, name: 'Іван', email: 'ivan@example.com' },
//   { id: 2, name: 'Марія', email: 'maria@example.com' },
//   { id: 3, name: 'Петро', email: 'petro@example.com' }
// ];

// const findUser = users.find((element) => {
//   if (
//     element.email === "ivan@example.com" ||
//     element.email === "maria@example.com" ||
//     element.email === "petro@example.com"
//   ) {
//     return element.email;
//   } else {
//     return `Not find`;
//   }
// });
// console.log("🚀 ~ findUser:", findUser);

// Очікується: { id: 2, name: 'Марія', email: 'maria@example.com' }
// Очікується: undefined

// ========== ЗАДАЧА 8: Сортування товарів за ціною ==========
// Відсортуй товари від найдешевшого до найдорожчого
// const items = [
//   { name: 'Телефон', price: 15000 },
//   { name: 'Навушники', price: 2000 },
//   { name: 'Планшет', price: 10000 },
//   { name: 'Годинник', price: 5000 }
// ];

// const sort = items.toSorted((a, b) => {
//   return a.price - b.price;
// });
// console.log("🚀 ~ sort:", sort);

// Очікується: масив відсортований за зростанням ціни




