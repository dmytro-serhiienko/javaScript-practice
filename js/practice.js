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

// *Парне непарне
// const num = +prompt("Ведіть число");

// if (num % 2 === 0) {
//   alert("Результат: Парне число");
// } else {
//   alert("Результат: Непарне число");
// }

// * 2 промти і повертає мінімальне
// const sum1 = +prompt();
// const sum2 = +prompt();

// const sumMin = Math.min(sum1, sum2);

// alert(sumMin);

// * множення
// const num1 = +prompt();
// const num2 = +prompt();

// const numTotal = Number(num1 * num2);

// alert(numTotal);

// * визначення додатного відємного числа
// const num = +prompt();

// if (num > 0) {
//   alert("Число додатнє");
// } else if (num < 0) {
//   alert("Число від’ємне");
// } else if (num === 0) {
//   alert("Це нуль");
// }

// * виводить числа з масиву
// const numbers = [3, 7, 2, 9, 4];

// // виводить всі числа
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// // виводить числа більше 5
// for (const num of numbers) {
//   if (num > 5) {
//     console.log(num);
//   }
// }

// * вирізка останього елемента масиву
// const fruits = ["apple", "banana", "orange"];

// // видаляє "orange"
// const del = fruits.pop();

// // показує "orange"
// console.log(del);

// // ["apple", "banana"]
// console.log(fruits);

// * робота з рядками
// const text = "Hello, JavaScript!";

// console.log(text.length);

// // перший символ
// console.log(text[0]);

// // останній символ
// console.log(text[text.length - 1]);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());

// * Числа в Промпт
// const num = +prompt("Введіть число");

// if (num > 0 && num < 10) {
//   alert("Число маленьке");
// } else if (num >= 10 && num < 100) {
//   alert("Число велике");
// } else {
//   alert("Обалдеть яке число");
// }

// * користувач вводить число і визначається парне чи непарне
// const num = +prompt("");

// alert(num % 2 === 0 ? "Парне" : "Непарне");

// * чи є такий колір

// const colors = ["red", "green", "blue", "yellow"];

// const askColor = prompt("Введіть свій улюблений колір:");

// if (colors.includes(askColor)) {
//   alert("Є такий колір!");
// } else {
//   alert("Такого кольору немає :(");
// }

// 2.	Користувач вводить колір через prompt().
// 3.	Якщо цей колір є в масиві, виведи "Є такий колір!".
// 4.	Якщо немає, виведи "Такого кольору немає :(".
// 5.	Використай метод includes().

//* видаляємо
// const numbers = [10, 20, 30, 40];

// numbers.push(50);
// numbers.shift();
// numbers.unshift(5);
// numbers.pop();

// console.log(numbers);

// 1.	Додай у кінець число 50 (push).
// 2.	Видали перший елемент (shift).
// 3.	Додай число 5 на початок (unshift).
// 4.	Видали останній елемент (pop).
// 5.	Виведи фінальний масив у консоль.

// *

// const users = ["Anna", "Dmytro", "Olena", "Ivan"];

// const hasDmytro = users.includes("Dmytro");
// const indexOlena = users.indexOf("Olena");
// const nameStartsWithI = users.find((name) => name.startsWith("I"));

// console.log("Є Dmytro:", hasDmytro);
// console.log("Індекс Olena:", indexOlena);
// console.log("Ім’я на I:", nameStartsWithI);

// 1.	Перевір, чи є в масиві ім’я "Dmytro" (через includes).
// 2.	Знайди індекс імені "Olena" (через indexOf).
// 3.	Знайди перше ім’я, яке починається з літери "I" (через find).
// 4.	Виведи всі результати у консоль.

// * Задача: Пошук найдорожчого товару

// function findMostExpensiveProduct() {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   let maxPrice = 0;
//   let maxName = "";

//   for (const prod of products) {
//     if (maxPrice <= prod.price) {
//       maxPrice = prod.price;
//       maxName = prod.name;
//     }
//   }
//   return maxName;
// }

// console.log(findMostExpensiveProduct()); // "Scanner"

// Напиши функцію findMostExpensiveProduct(), яка не приймає параметрів. Функція містить масив об'єктів products з властивостями name, price і quantity.
// Функція повинна:

// Знайти товар з найвищою ціною (price)
// Повернути назву (name) цього товару
// Якщо масив порожній, повернути null

// Умови:

// Оголошена функція findMostExpensiveProduct()
// Виклик findMostExpensiveProduct() повертає "Scanner"
// Функція використовує цикл for...of

// * Задача 2: Підрахунок студентів за оцінкою
// Напиши функцію countStudentsByGrade(grade), яка приймає оцінку (наприклад "A", "B", "C").
// Функція повинна повернути кількість студентів, які мають цю оцінку.
// Умови:

// Виклик countStudentsByGrade("A") повертає 2
// Виклик countStudentsByGrade("B") повертає 1
// Виклик countStudentsByGrade("C") повертає 1
// Виклик countStudentsByGrade("F") повертає 0

// function countStudentsByGrade(grade) {
//   const students = [
//     { name: "Anna", grade: "A" },
//     { name: "Bob", grade: "B" },
//     { name: "Charlie", grade: "A" },
//     { name: "Diana", grade: "C" },
//   ];

//   let count = 0;

//   for (const stud of students) {
//     if (stud.grade === grade) {
//       count++;
//     }
//   }

//   return count;
// }

// !

// 1.	Використовуючи цикл for, виведи в консоль усі назви продуктів.
// 2.	Використовуючи цикл for…of, виведи в консоль усі продукти, у яких ціна більша за 8.
// 3.	Порахуй загальну вартість всіх продуктів і виведи результат у консоль.

// const products = [
//   { name: "Apple", price: 10 },
//   { name: "Banana", price: 5 },
//   { name: "Cherry", price: 15 },
//   { name: "Orange", price: 8 },
// ];

// let nameProd = "";
// let priceMinEight = [];
// let totalPrice = 0;

// function nameOfProduct(products) {
//   for (let i = 0; i < products.length; i++) {
//     nameProd += products[i].name;
//   }
//   return nameProd;
// }

// function minEight(products) {
//   for (const product of products) {
//     if (product.price > 8) {
//       priceMinEight += product.price;
//     }
//   }
//   return priceMinEight;
// }

// function totalPriceofAll(products) {
//   for (const prod of products) {
//     totalPrice += prod.price;
//   }
//   return totalPrice;
// }

// console.log(nameOfProduct(products));
// console.log(minEight(products));
// console.log(totalPriceofAll(products));

// !1. Массиви та методи

// Задача:
// Є масив чисел [2, 5, 8, 3, 10].
// 	•	Додай число 7 в кінець масиву.
// 	•	Видали перший елемент.
// 	•	Перевір, чи масив містить число 3.
// 	•	Виведи кінцевий масив.

// const numbers = [2, 5, 8, 3, 10];
// numbers.push(7);
// numbers.shift();

// const ifInclude = numbers.includes(3);

// const obiednania = numbers.concat(ifInclude);

// console.log(obiednania);
// console.log(ifInclude);
// console.log(numbers);

// console.log приклад
// Кінець масиву: [5, 8, 3, 10, 7]
// Містить 3? true

//! Задача 2: Функції та цикли
// const numbers = [4, 7, 10, 15, 20];

// function doubleNumbers(arr) {
//   const newMasive = [];
//   for (const number of arr) {

//     newMasive.push(number * 2);
//   }
//   return newMasive;
// }

// console.log(doubleNumbers(numbers));
// 1.	Напиши функцію doubleNumbers(arr), яка повертає новий масив, де кожне число подвоєне.
// 2.	Використай цикл for of всередині функції.
// 3.	Виведи результат у консоль.

//! Задача 3: Фільтрація користувачів

// const users = [
//   { name: "Anna", age: 20 },
//   { name: "Dmytro", age: 25 },
//   { name: "Olena", age: 18 },
//   { name: "Ivan", age: 30 },
// ];

// function getAdultUsers() {
//   const newObj = [];

//   for (const user of users) {
//     if (user.age > 21) {
//       newObj.push(user.name);
//     }
//   }
//   return newObj;
// }

// console.log(getAdultUsers());

// 1.	Напиши функцію getAdultUsers(arr), яка повертає новий масив імен користувачів, старших за 21 рік.
// 2.	Використай цикл for...of.
// 3.	Виведи результат у консоль.

//! Задача 4: Середнє значення та фільтрація

// const numbers = [5, 10, 15, 20, 25, 30];

// function aboveAverage(arr) {
//   let sum = 0;
//   for (const num of arr) {
//     sum += num;
//   }

//   const average = sum / arr.length;

//   const result = [];
//   for (const num of arr) {
//     if (num > average) {
//       result.push(num);
//     }
//   }

//   return result;
// }

// console.log(aboveAverage(numbers));

// 1.	Напиши функцію aboveAverage(arr), яка:
// •	Знаходить середнє значення всіх чисел у масиві.
// •	Повертає новий масив, який містить лише ті числа, що більші за середнє.
// 2.	Використовуй цикл for...of для перебору масиву.
// 3.	Виведи результат у консоль.

// ! Розділити слово та наоборот
// const str = "JavaScript is awesome";

// const newMasive = str.split(" ").reverse().join(" ");

// console.log(newMasive);

// •	Розбий рядок на слова.
// •	Створи новий масив, де кожне слово перевернуте (наприклад, "JavaScript" → "tpircSavaJ").
// •	Виведи результат у консоль.

// !Задача Масив чисел – парні/непарні

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const parNumbers = [];
// const neparNumbers = [];

// function splitEvenOdd() {
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       parNumbers.push(number);
//     } else {
//       neparNumbers.push(number);
//     }
//   }
//   return { parNumbers, neparNumbers };
// }

// console.log(splitEvenOdd());

// •	Напиши функцію splitEvenOdd(arr), яка повертає об’єкт з двома масивами:
// •	even → містить всі парні числа
// •	odd → містить всі непарні числа

// ! Задача;

// const numbers = [10, 5, 8, 12, 3, 20, 7];

// function getNumbersInfo() {
//   let totalNum = 0;
//   let bigNum = numbers[0];
//   let smallNum = numbers[0];

//   for (const number of numbers) {
//     totalNum += number;

//     if (number > bigNum) {
//       bigNum = number;
//     }

//     if (number < smallNum) {
//       smallNum = number;
//     }
//   }

//   return { totalNum, bigNum, smallNum };
// }

// console.log(getNumbersInfo());

// Створи функцію getNumbersInfo(), яка:
// 	1.	Розрахує суму всіх чисел.
// 	2.	Знайде найбільше число.
// 	3.	Знайде найменше число.
// 	4.	Поверне об’єкт з цими трьома результатами.

//! Задача;
// const students = {
//   Anna: 85,
//   Dmytro: 92,
//   Olena: 78,
//   Ivan: 90,
// };

// function getTopStudent() {
//   let studBetter = "";
//   let maxScore = 0;

//   for (const key in students) {
//     if (students[key] > maxScore) {
//       maxScore = students[key];
//       studBetter = key;
//     }
//   }
//   return `Найкращий студент: ${studBetter} - ${maxScore}`;
// }

// console.log(getTopStudent());

// Напиши функцію getTopStudent(), яка:
// 	1.	Перебирає всіх студентів за допомогою for...in.
// 	2.	Знаходить студента з найвищим балом.
// 	3.	Повертає рядок у форматі: "Найкращий студент: Dmytro — 92 балів"

// !Задача

// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 400 },
//   { name: "Monitor", price: 300 },
//   { name: "Keyboard", price: 100 },
// ];

// for (const product of products) {
//   if (product.price > 500) {
//     console.log(`${product.name}: ${product.price}`);
//   }
// }

// Напиши функцію getExpensiveProducts(), яка:
// 	1.	Перебирає масив і вибирає всі товари, ціна яких більше або дорівнює 500.
// 	2.	Повертає масив імен цих товарів.

// !Задача

// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 400 },
//   { name: "Monitor", price: 300 },
//   { name: "Keyboard", price: 100 },
// ];

// function getExpensiveProductsInfo() {
//   let names = [];
//   let totalPrice = 0;

//   for (const product of products) {
//     if (product.price >= 500) {
//       names.push(product.name);
//       totalPrice += product.price;
//     }
//   }
//   return { names, totalPrice };
// }

// console.log(getExpensiveProductsInfo());
// Напиши функцію getExpensiveProductsInfo(), яка:
// 	1.	Вибирає товари з ціною >= 500.

// 	2.	Повертає об’єкт з двома властивостями:
// 	•	names — масив імен цих товарів
// 	•	totalPrice — сума цін цих товарів

// !Задача

// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 400 },
//   { name: "Monitor", price: 300 },
//   { name: "Keyboard", price: 100 },
// ];

// function getSortedExpensiveProducts() {
//   let newMasRev = [];

//   for (const product of products) {
//     if (product.price >= 300) {
//       newMasRev.push(product);
//     }
//   }

//   return newMasRev;
// }

// console.table(getSortedExpensiveProducts());
// Напиши функцію getSortedExpensiveProducts(), яка:
// 	1.	Вибирає товари з ціною >= 300.
// 	2.	Повертає новий масив цих товарів, відсортований за ціною від більшого до меншого.

// !Задача

// const warehouse = {
//   apples: 150,
//   bananas: 300,
//   oranges: 100,
//   grapes: 250,
//   pears: 180,
// };

// function getWarehouseInfo() {
//   let totalItems = 0;
//   let mostStockName = "";
//   let maxCount = 0;

//   for (const key in warehouse) {
//     totalItems += warehouse[key];

//     // перевіряємо, чи це найбільше значення
//     if (warehouse[key] > maxCount) {
//       maxCount = warehouse[key]; // оновлюємо максимум
//       mostStockName = key; // зберігаємо назву продукту
//     }
//   }

//   return `Загальна кількість: ${totalItems}, найбільше товару: ${mostStockName}`;
// }

// console.log(getWarehouseInfo());

// Є об’єкт із кількістю товарів на складі.
// Треба:
// 	1.	Порахувати загальну кількість товарів.
// 	2.	Знайти товар, якого найбільше на складі.

// !

// const votes = {
//   Alice: 120,
//   Bob: 150,
//   Carol: 90,
//   David: 200,
//   Emma: 180,
// };

// function getWinner(votes) {
//   let winnerName = "";
//   let maxVotes = 0;

//   for (const key in votes) {
//     if (maxVotes < votes[key]) {
//       maxVotes = votes[key];
//       winnerName = key;
//     }
//   }
//   return winnerName;
// }

// console.log(getWinner(votes));

// Напиши функцію getWinner(votes), яка:
// 	1.	Знаходить, хто набрав найбільше голосів.
// 	2.	Повертає рядок у форматі:
// "Переможець: David з 200 голосами"

// !

// const testResults = {
//   Anna: 85,
//   Dmytro: 92,
//   Olena: 78,
//   Ivan: 90,
//   Katya: 95,
// };

// function getAverageScore(results) {
//   let zagalnyiBal = 0;

//   for (const key in results) {
//     zagalnyiBal += results[key];
//   }
//   return zagalnyiBal / Object.keys(results).length;
// }

// console.log(getAverageScore(testResults));

// Напиши функцію getAverageScore(results), яка:
// 	1.	Порахує середній бал усіх студентів.
// 	2.	Поверне це середнє значення.

// !Задача: Є масив чисел. Знайди суму всіх парних чисел.

// const numbers = [1, 4, 7, 10, 13, 16];

// // const evenNumbers = numbers.filter((num) => num % 2 === 0);
// // console.log(evenNumbers);

// function searchNumber() {
//   let parNumber = [];
//   let sum = 0;

//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       parNumber.push(number);
//       sum += number;
//     }
//   }

//   return parNumber, sum;
// }

// console.log(searchNumber());

// !Задача: Виведи всі числа від 1 до 100, які діляться на 7, але не на 5.

// function sum() {
//   let array = [];

//   for (let i = 0; i < 100; i++) {
//     if (i % 7 === 0 && i % 5 !== 0) {
//       array.push(i);
//     }
//   }

//   return array;
// }
// console.log(sum());

//! Методи масивів

// const words = ["apple", "bat", "cherry", "dog"];
// console.log(words);

// function wordsFun() {
//   let newMasive = [];

//   for (const word of words) {
//     if (word.length > 4 && word.includes("rr")) {
//       newMasive.push(word);
//     }
//   }
//   return newMasive;
// }

// console.log(wordsFun());

// const wordsNew = wordsFun();
// console.log(wordsNew);

// Очікуваний результат: ["apple", "cherry"]

// Задача: Є масив слів. Поверни новий масив, де всі слова довжиною більше 4 символів.

//! Задача: Є об’єкт з оцінками: Поверни масив імен студентів, які отримали менше ніж 90 балів.

// const scores = { Anna: 85, Dmytro: 92, Olena: 78, Ivan: 90 };

// let sroresName = [];
// let scoresBal = [];

// function scoreFind() {
//   for (const key in scores) {
//     if (scores[key] < 90) {
//       sroresName.push(key);
//       scoresBal.push(scores[key]);
//     }
//   }
//   //   return sroresName + scoresBal;
// }
// scoreFind(); // заповнюємо масиви

// let result = sroresName.concat(scoresBal);

// console.log(sroresName);
// console.log(scoresBal);
// console.table(result);

//! Задача: Робота з об’єктами та масивами Є об’єкт з товарами та їх цінами: Завдання:
// 1.	Створи два масиви:
// •	first — імена товарів, ціна яких більше 40
// •	second — ціни цих товарів
// 2.	Потім об’єднай ці масиви у масив рядків у форматі:

// const products = {
//   apple: 30,
//   banana: 15,
//   orange: 50,
//   mango: 80,
//   kiwi: 25,
// };

// let first = [];
// let second = [];

// function searchFun() {
//   for (const key in products) {
//     if (products[key] >= 40) {
//       first.push(key);
//       second.push(products[key]);
//     }
//   }
// }
// searchFun();

// let result = first.map((item, index) => item + " - " + second[index]);

// console.log(first);
// console.log(second);
// console.log(result);

// !Задача 1: Калькулятор (об'єкт з методами)

// const calculator = {
//   a: 0,
//   b: 0,

//   setNumbers: function setNumbers(num1, num2) {
//     // твій код - збережи числа в a і b
//     this.a = num1;
//     this.b = num2;
//   },

//   sum: function () {
//     // твій код - поверни суму a + b
//     return this.a + this.b;
//   },

//   multiply: function () {
//     // твій код - поверни добуток a * b
//     return this.a * this.b;
//   },
// };

// // Тест:
// calculator.setNumbers(5, 3);

// console.log(calculator.sum()); // має вивести 8
// console.log(calculator.multiply()); // має вивести 15

// ! Задача 1: Інформація про користувача
// Створи об'єкт user з властивостями та методом:

// const user = {
//   name: "Іван",
//   age: 25,
//   city: "Київ",

//   getInfo: function () {
//     // поверни рядок: "Мене звати [name], мені [age] років, я з міста [city]"
//     return `Мене звати ${this.name}, мені ${this.age} років, я з міста ${this.city}`;
//   },
// };

// console.log(user.getInfo());
// // "Мене звати Іван, мені 25 років, я з міста Київ"

// ! Задача 2: Машина

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,

//   getAge: function () {
//     // поверни скільки років машині (поточний рік 2025)
//     return 2025 - this.year;
//   },

//   getFullName: function () {
//     // поверни "[brand] [model]"
//     return `${this.brand} ${this.model}`;
//   },
// };

// console.log(car.getAge()); // 5
// console.log(car.getFullName()); // "Toyota Camry"

// !Задача 3: Рахунок в банку

// const account = {
//   balance: 1000,

//   deposit: function (amount) {
//     // додай amount до balance
//     this.balance += amount;
//   },

//   withdraw: function (amount) {
//     // відніми amount від balance
//     this.balance -= amount;
//   },

//   getBalance: function () {
//     // поверни balance
//     return this.balance;
//   },
// };

// account.deposit(500);
// console.log(account.getBalance()); // 1500
// account.withdraw(200);
// console.log(account.getBalance()); // 1300

// // ! Задача 1: Змінні та умови

// function checkTemperature(temp) {
//   if (temp > 25) {
//     return "Жарко";
//   } else if (temp > 10) {
//     return "Холодно";
//   } else {
//     return "Нормально";
//   }

//   // якщо temp > 25, поверни "Жарко"
//   // якщо temp < 10, поверни "Холодно"
//   // інакше поверни "Нормально"
// }

// console.log(checkTemperature(30)); // "Жарко"
// console.log(checkTemperature(5)); // "Холодно"
// console.log(checkTemperature(20)); // "Нормально"

// ! Задача 2: Масиви

// const numbers = [1, 2, 3, 4, 5];

// let sum = 0;

// for (const number of numbers) {
//   sum += number;
// }

// console.log(sum);

// знайди суму всіх чисел в масиві
// підказка: використай цикл for або forEach

// ! Задача 3: Об'єкти

// const book = {
//   title: "Гаррі Поттер",
//   author: "Дж. Роулінг",
//   pages: 320,

//   isLong() {
//     if (this.pages > 300) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   },
// };

// console.log(book.isLong());

//! виведи в консоль числа від 1 до 10

// for (let index = 1; index <= 10; index++) {
//   console.log(index);
// }

// ! Задача 1: Методи масивів - filter()

// const ages = [12, 18, 25, 16, 30, 14, 22];

// const adults = ages.filter((ages) => ages >= 18);

// // Використай метод filter(), щоб отримати масив тільки з дорослими (age >= 18)
// console.log(adults);

// ! Задача 2: Методи масивів - map()

// const prices = [100, 200, 150, 300];

// const pricesWithTax = prices.map((prices) => prices * 1.2);
// // Використай map(), щоб додати 20% податок до кожної ціни
// console.log(pricesWithTax); // твій код // [120, 240, 180, 360]

// ! Задача 3: Комбінована (об'єкти + масиви)

// const students = [
//   { name: "Олег", grade: 85 },
//   { name: "Марія", grade: 92 },
//   { name: "Іван", grade: 78 },
//   { name: "Анна", grade: 95 },
// ];

// const gradeBig = students
//   .filter((students) => students.grade >= 90)
//   .map((students) => students.name);

// console.log(gradeBig);

// 1. Знайди всіх студентів з оцінкою >= 90 (filter)
// 2. Виведи тільки їх імена (map)

// Результат: ["Марія", "Анна"]

// !Задача 1: Привітання (колбек)

// // Функція приймає ім'я та колбек
// function sayHello(name, callback) {
//   console.log("Привіт, " + name);
//   callback(); // викликаємо колбек
// }

// // Твоя задача: створи функцію bye, яка виводить "До побачення!"
// function bye() {
//   console.log("До побачення!");
// }

// // Тест:
// sayHello("Олег", bye);
// // Має вивести:
// // "Привіт, Олег"
// // "До побачення!"

// ! Функція приймає два числа та колбек
// function calculate(a, b, operation) {
//   const result = operation(a, b); // викликаємо колбек з числами
//   console.log("Результат: " + result);
// }

// // Твоя задача: створи функцію add, яка додає два числа
// function add(x, y) {
//   return x + y;
//   // твій код - поверни суму
// }

// // Тест:
// calculate(5, 3, add); // "Результат: 8"

// ! Задача

// const fruits = ["яблуко", "банан", "груша"];

// // Виведи кожен фрукт в консоль, використовуючи forEach
// // Підказка: forEach(function(fruit) { ... })

// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// // Має вивести:
// // яблуко
// // банан
// // груша

// ! Задача

// const numbers = [1, 2, 3, 4, 5];

// // Виведи кожне число, помножене на 2
// numbers.forEach(function (num) {
//   let sum = num * 2;
//   console.log(sum);

//   // твій код
// });

// // Має вивести: 2, 4, 6, 8, 10

// ! Задача
// const ages = [10, 15, 20, 25, 30];

// // Залиши тільки числа більші за 18
// const adults = ages.filter(function (age) {
//   if (age > 18) {
//     return true;
//   }

//   // твій код - поверни true або false
// });

// console.log(adults); // [20, 25, 30]

// ! Напиши функцію doubleNumber, яка приймає число та колбек
// Функція має подвоїти число, а потім викликати колбек з результатом

// function doubleNumber(num, callback) {
//   const result = num * 2;
//   showResult(result);

//   // твій код
// }

// // Колбек для виводу результату
// function showResult(result) {
//   console.log("Результат: " + result);
// }

// // Тест:
// doubleNumber(5, showResult); // "Результат: 10"

// !

// function greet(name, callback) {
//   console.log("Привіт " + name);

//   callback();
// }

// function sayBye() {
//   console.log("До побачення!");
// }

// greet("Дмитро", sayBye);

// !

// Задача: Калькулятор з колбеком
// Умова:
// Створи функцію calculate, яка:

// Приймає три параметри: a, b, operation
// Викликає функцію operation, передаючи їй a та b
// Результат зберігає у змінну result
// Виводить в консоль: "Результат: " + результат

// Потім створи дві колбек-функції:

// add(x, y) - повертає суму x + y
// multiply(x, y) - повертає добуток x * y

// Викликай:

// function calculate(a, b, operation) {
//   const result = operation(a, b);
//   console.log("Результат: " + result);
// }

// function add(x, y) {
//   return x + y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// calculate(5, 3, add);
// calculate(5, 3, multiply);

// ! Задача: Привітай та попрощайся
// Напиши:

// Функцію greetAndBye з одним параметром callback
// Всередині виведи "Привіт!"
// Потім викликай callback()
// Створи функцію sayBye без параметрів
// Всередині виведи "Бувай!"
// Викличи greetAndBye і передай їй sayBye

// function greetAndBye(callback) {
//   console.log("Привіт!");

//   callback();
// }

// function sayBye() {
//   console.log("Бувай!");
// }

// greetAndBye(sayBye);

// !Задача: Подвій число
// Напиши:

// Функцію processNumber з двома параметрами: number та callback
// Всередині подвій число (помнож на 2) і збережи в змінну doubled

// Викликай callback і передай йому doubled

// Створи функцію showResult з одним параметром result
// Всередині виведи: "Результат: " + result
// Викличи processNumber(7, showResult)

// function processNumber(number, callback) {
//   let doubled = number * 2;

//   callback(doubled);
// }

// function showResult(result) {
//   console.log("Результат: " + result);
// }

// processNumber(7, showResult);

// ! Задача: Привітання з іменем
// Напиши:

// Функцію welcomeUser з двома параметрами: name та callback
// Всередині створи змінну message зі значенням "Ласкаво просимо, " + name + "!"
// Викликай callback і передай йому message
// Створи функцію printMessage з одним параметром text
// Всередині виведи цей text в консоль
// Викличи welcomeUser("Дмитро", printMessage)

// function welcomeUser(name, callback) {
//   let message = `Ласкаво просимо, ${name} !`;

//   callback(message);
// }

// function printMessage(text) {
//   console.log(text);
// }

// welcomeUser("Дмитро", printMessage);

// !
// const names = ["Олег", "Марія", "Іван", "Анна"];

// names.forEach(function (name) {
//   console.log(name);
// });

// Використай forEach, щоб вивести кожне ім'я в консоль

// **Очікуваний результат в консолі:**
// ```;
// Олег;
// Марія;
// Іван;
// Анна;

// ! Задача: Подвій кожне число
// Є масив чисел [2, 5, 8, 10]
// Використай forEach, щоб вивести подвоєне значення кожного числа.

// const numbers = [2, 5, 8, 10];

// numbers.forEach(function (num) {
//   console.log(num * 2);
// });

// ! Задача: Привітай кожного
// Є масив імен ["Дмитро", "Олена", "Максим"]
// Використай forEach, щоб для кожного імені вивести: "Привіт, " + ім'я + "!"

// const names = ["Дмитро", "Олена", "Максим"];

// names.forEach(function (name) {
//   console.log(`Привіт, ${name}!`);
// });

// Привіт, Дмитро!
// Привіт, Олена!
// Привіт, Максим!

// ! цикл
// function fillArray(min, max) {
//   let arr = [];
//   for (let i = min; i <= max; i += 2) {
//     return arr.push(i);
//   }
// }

// console.log(fillArray(2, 10));

// ? find

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
// ];
// const BOOK_TITLE = "The Tell-Tale Heart";
// const AUTHOR = "Robert Sheckley";

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);

// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// ? REDUCE

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   player.playtime / player.gamesPlayed;

//   return total + player.playtime / player.gamesPlayed;
// }, 0);

// ? Ланчюг

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .toSorted((a, b) => a.localeCompare(b));

// ! Виведи кожне число в консоль за допомогою forEach().
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (num) {
//   console.log(num);
// });

// ! Виведи фразу:
// Hello, Anna!, Hello, Dmytro!, Hello, Oleh! — для кожного елемента.

// const names = ["Anna", "Dmytro", "Oleh"];

// names.forEach(function (name) {
//   console.log(`Hello, ${name}`);
// });

//!	Є масив чисел:
// 🔹 Виведи кожне число поділене на 10.

// const nums = [10, 20, 30];

// nums.forEach(function (num) {
//   let result = num / 10;
//   console.log(result);
// });

//! Рівень 2 — трохи складніше
// Для кожної ціни виведи у консоль ціну зі знижкою 10%.
// (тобто ціна * 0.9)

// const prices = [100, 200, 300];

// prices.forEach(function (price) {
//   let result = price * 0.9;
//   console.log(result);
// });

// !Порахуйте загальну кількість символів у всіх словах.
// (Підказка: створити змінну total = 0 і додавати word.length у кожній ітерації.)

// const words = ["JS", "forEach", "loop"];
// let total = 0;

// words.forEach(function (word) {
//   total += word.length;
// });
// console.log(total);

// ! Рівень 3 — з об’єктами Є масив об’єктів:
// Виведи у консоль імена всіх користувачів.

// const users = [
//   { name: "Anna", age: 20 },
//   { name: "Dmytro", age: 25 },
//   { name: "Oleh", age: 30 },
// ];

// users.forEach(function (user) {
//   console.log(user.name);
// });

// ! Рівень 4 — творчі 🔹 Знайди середній бал за допомогою forEach.

// const grades = [60, 80, 100, 90, 75];

// let result = 0;

// grades.forEach(function (grade) {
//   result += grade;
// });
// console.log(result);

// ! Створи новий масив result, у який додай кожен елемент у верхньому регістрі (APPLE, BANANA, …) — використовуючи forEach.

// const products = ["apple", "banana", "kiwi"];

// let result = [];

// products.forEach(function (product) {
//   result.push(product.toUpperCase());
// });

// console.log(result);

// ! Стрілкові
// Рівень 1 — базові

// ? // 	1.	Проста функція без параметрів
// 🔹 Створи стрілкову функцію sayHello, яка виводить у консоль "Hello!".

// const sayHello = () => {
//   console.log("Hello!");
// };

// sayHello();

// ?	2.	Функція з одним параметром
// 🔹 Створи функцію greet, яка приймає ім’я і виводить "Hello, [ім’я]!".

// const a = "Dima";

// const greet = (a) => {
//   console.log(`Hello ${a}`);
// };
// greet(a);

// ? 	3.	Функція з одним параметром і короткий синтаксис
// 🔹 Створи функцію double, яка повертає число, помножене на 2.

// const double = (num) => {
//   return num * 2;
// };

// console.log(double(6));

// ! Рівень 2 — трохи складніше
// 	Функція з двома параметрами
// Створи функцію sum, яка повертає суму двох чисел.

// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(6, 6));

// !	5.	Масив і стрілкова функція
// Створи новий масив, де кожне число помножене на 3, використовуючи map зі стрілковою функцією.

// const numbers = [1, 2, 3, 4];

// const result = numbers.map((num) => {
//   return num * 3;
// });

// console.log(result);

// ! Рівень 3 — об’єкти
// Створи новий масив, який містить тільки користувачів старше 21 року, використовуючи filter та стрілкову функцію.

// const users = [
//   { name: "Anna", age: 20 },
//   { name: "Dmytro", age: 25 },
//   { name: "Oleh", age: 30 },
// ];

// const user = users.filter((user) => {
//   return user.age > 21;
// });

// console.log(user);

// !	7.	Масив об’єктів + map
// Створи новий масив тільки з імен користувачів, використовуючи map та стрілкову функцію.
// const users = [
//   { name: "Anna", age: 20 },
//   { name: "Dmytro", age: 25 },
//   { name: "Oleh", age: 30 },
// ];

// const nameUser = users.map((username) => {
//   return username.name;
// });

// console.log(nameUser);

//! Підрахунок сум за умовою!
// Використай стрілкову функцію з forEach або reduce, щоб знайти середній бал.

// const grades = [60, 80, 100, 90, 75];

// const averGrade = grades.reduce((accum, bal) => {
//   return (accum += bal / grades.length);
// }, 0);

// console.log(averGrade);

// ! Комбінація методів
//  Створи новий масив, де всі назви у верхньому регістрі та довжина кожного слова більша за 4 символи.

// const products = ["apple", "banana", "kiwi"];

// const newProduct = products.map((prod) => {
//   return prod.toUpperCase();
// });

// console.log(newProduct);

//!!!!!!!!!!!!!!!!! Ось різноманітні задачі з JavaScript на різні теми:
//? Масиви
// Задача: Напиши функцію, яка знаходить найбільше число в масиві.
// javascriptfindMax([3, 7, 2, 9, 1]); // 9
const arr = [3, 7, 2, 9, 1];
//* variant 1
// const total = Math.max(...arr);
// console.log("🚀 ~ total:", total);
//* variant 2
// const bigNum = arr.reduce((accum, num) => (num > accum ? num : accum), 0);
// console.log("🚀 ~ bigNum:", bigNum);

//? 2. Об'єкти
// Задача: Створи функцію, яка приймає масив об'єктів (користувачів) і повертає масив тільки їх імен.
// javascriptgetNames([{name: 'Олег', age: 20}, {name: 'Марія', age: 25}]);
// const names = [
//   { name: "Олег", age: 20 },
//   { name: "Марія", age: 25 },
// ];
// const users = names.map((nombre) => nombre.name);
// console.log("🚀 ~ users:", users);

//? 3. Рядки (Strings)
// Задача: Напиши функцію, яка перевіряє чи є слово паліндромом (читається однаково в обидва боки).

// const message = "level";
// console.log("🚀 ~ message:", message);

// const rozriz = message.split("");
// console.log("🚀 ~ rozriz:", rozriz);

// const rev = rozriz.reverse();
// console.log("🚀 ~ rozriz:", rozriz);

// const skladaemo = rev.join("");
// console.log("🚀 ~ skladaemo:", skladaemo);

// function perev() {
//   if (message === skladaemo) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log("🚀 ~ perev ~ perev:", perev());

//* Цикли
// Задача: Створи функцію, яка виводить таблицю множення числа від 1 до 10.
// javascriptmultiplicationTable(5);
// 5 x 1 = 5
// 5 x 2 = 10
// ... до 5 x 10 = 50

//? 5. Умовні оператори
// Задача: Напиши функцію, яка визначає оцінку за балами: 90-100 = "A", 80-89 = "B", 70-79 = "C", 60-69 = "D", нижче 60 = "F".
// javascriptgetGrade(85); // "B"

// function check(grade) {
//   if (grade < 60) {
//     return "F";
//   } else if (grade <= 69 && grade >= 60) {
//     return "D";
//   } else if (grade <= 79 && grade >= 70) {
//     return "C";
//   } else if (grade <= 89 && grade >= 80) {
//     return "B";
//   } else if (grade <= 100 && grade >= 90) {
//     return "A";
//   } else {
//     return "немає оцінки";
//   }
// }
// console.log("🚀 ~ check ~ check:", check());

//? Filter/Map/Reduce
// Задача: Використай методи масивів, щоб знайти суму всіх парних чисел у масиві.
// javascriptsumEvenNumbers([1, 2, 3, 4, 5, 6]); // 12
// const numbers = [1, 2, 3, 4, 5, 6];

// // prettier-ignore
// const check = numbers
//   .filter((num) => num % 2 === 0)
//   .reduce((accum,num) => {
//     return accum + num
//   }, 0)

// console.log("🚀 ~ check:", check);

// 7. Деструктуризація
// Задача: Напиши функцію, яка приймає об'єкт користувача і виводить привітання, використовуючи деструктуризацію.
// javascriptgreetUser({name: 'Анна', age: 22}); // "Привіт, Анна!"

// 8. Template Literals
// Задача: Створи функцію, яка генерує HTML картку користувача з його даними.
// javascriptcreateUserCard({name: 'Петро', age: 30, job: 'Developer'});
// // "<div><h2>Петро</h2><p>Вік: 30</p><p>Професія: Developer</p></div>"

//? 9. Arrow Functions
// Задача: Перепиши звичайну функцію на стрілочну, яка фільтрує масив і залишає тільки числа більші за 10.
// javascriptconst filterBigNumbers = // твій код

// const numbers = [5, 15, 8, 20, 3]; // [15, 20]
// const filterBigNumbers = numbers.filter((num) => num >= 10);
// console.log("🚀 ~ filterBigNumbers:", filterBigNumbers);

//? 10. Callback Functions
// Задача: Створи функцію calculate, яка приймає два числа і callback-функцію для операції (додавання, віднімання тощо).
// javascriptcalculate(5, 3, (a, b) => a + b); // 8
// calculate(10, 4, (a, b) => a - b); // 6

// function foo(a, b, callback) {
//   return a + b;
// }
// console.log("🚀 ~ foo ~ foo:", foo(10, 4));

//! Підрахунок годин в неділю пн-чт

// //? --------- Лічильник LMS
// const totalHours = 18;

// //? --------- Вся неділя
// const calendar = [
//   { name: "monday", hours: 24 },
//   { name: "tuesday", hours: 24 },
//   { name: "wednesday", hours: 24 },
//   { name: "thursday", hours: 24 },
//   { name: "friday", hours: 24 },
//   { name: "saturday", hours: 24 },
//   { name: "sunday", hours: 24 },
// ];

// let resultatHoursAllWeek = 0;
// const dimaWork = calendar.map((calc) => {
//   resultatHoursAllWeek += calc.hours;
// });
// console.log(resultatHoursAllWeek);

// //? --------- Зріз годин понеділок - четверг

// const MonToThur = calendar
//   .slice(0, 4) // бере перші 4 елементи: monday, tuesday, wednesday, thursday
//   .reduce((sum, day) => sum + day.hours, 0); // підсумовує їхні години
// console.log(MonToThur); // 96

// //? --------- Скільки провчився з пн по чт

// const average = MonToThur / totalHours;
// console.log(average);

// const arr = [1, 2, 3];
// for (const el of arr) {
//   console.log(el);
// }

//* Сортування
// Задача: Напиши функцію, яка сортує масив об'єктів студентів за їх оцінками (від найвищої до найнижчої).
// javascriptsortByGrade

// const info = [
//   { name: "Іван", grade: 85 },
//   { name: "Ольга", grade: 92 },
//   { name: "Петро", grade: 78 },
// ];
// const balAscr = info.toSorted((a, b) => a.grade - b.grade);
// console.log("🚀 ~ balAscr:", balAscr);

//? Унікальні значення
// Задача: Створи функцію, яка видаляє дублікати з масиву.
// javascriptremoveDuplicates([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]

// 13. Лічильник символів
// Задача: Напиши функцію, яка підраховує скільки разів кожна буква зустрічається в рядку.
// javascriptcountLetters('hello');
// // { h: 1, e: 1, l: 2, o: 1 }

//* 14. Пошук в масиві
// Задача: Створи функцію, яка знаходить користувача за ID в масиві об'єктів.
// const info = [
//   { id: 1, name: "Анна" },
//   { id: 2, name: "Богдан" },
// ];

// const busco = info.filter((el) => {
//   if (el.id === 1) {
//     return el.name;
//   } else if (el.id === 2) {
//     return el.name;
//   } else {
//     return "введи id";
//   }
// });
// console.log("🚀 ~ busco:", busco);

//* 15. Перевірка віку
// Задача: Напиши функцію, яка фільтрує масив користувачів і повертає тільки тих, кому 18+ років.
// const info = [
//   { name: "Марія", age: 17 },
//   { name: "Олексій", age: 25 },
//   { name: "Софія", age: 19 },
// ];

// // prettier-ignore
// const buscoFun = info
//   .filter((verifi) => verifi.age >= 18)
//   .map((nombre) => nombre.name)
// console.log("🚀 ~ buscoFun:", buscoFun);

//* Реверс рядка
// Задача: Створи функцію, яка перевертає рядок навпаки.
// javascriptreverseString('JavaScript'); // 'tpircSavaJ'

// const mesRev = "JavaScript";
// const revFoo = mesRev.split("").toReversed().join("");
// console.log("🚀 ~ revFoo:", revFoo);

//* Середнє значення
// Задача: Створи функцію, яка обчислює середній бал студента.
// javascriptcalculateAverage([80, 90, 85, 95]); // 87.5

// const grade = [80, 90, 85, 95];

// const averBal =
//   grade.reduce((accum, bal) => {
//     return accum + bal;
//   }, 0) / grade.length;
// console.log("🚀 ~ averBal:", averBal);

//? 1. Сума чисел
// Очікуваний результат: 75

// const numbers = [5, 10, 15, 20, 25];

// const totalSum = numbers.reduce((accum, num) => {
//   return accum + num;
// }, 0);
// console.log("🚀 ~ totalSum:", totalSum);

// const average = totalSum / numbers.length;
// console.log("🚀 ~ average:", average);

//? Парні числа
// Очікуваний результат: [2, 4, 6, 8, 10]

// const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const parni = numbers1.filter((num) => num % 2 === 0);
// console.log("🚀 ~ parni:", parni);

//? Реверс рядка
// Очікуваний результат: "тівирП"

// const str = "Привіт";

// const revStr = str.split("").reverse().join("");
// console.log("🚀 ~ revStr:", revStr);

//? Найбільше число
// javascriptconst numbers = [23, 45, 12, 67, 34, 89, 11];
// Очікуваний результат: 89

// const numbers2 = [23, 45, 12, 67, 34, 89, 11];

// const biggestNum = Math.max(...numbers2);
// console.log("🚀 ~ biggestNum:", biggestNum);

// const bucoGrande = numbers2.reduce((accum, num) => {
//   if (accum < num) {
//     return (accum = num);
//   } else {
//     return accum;
//   }
// }, 0);
// console.log("🚀 ~ bucoGrande:", bucoGrande);

//? FizzBuzz
// javascript// Виведи числа від 1 до 100
// Якщо число ділиться на 3 — "Fizz"
// Якщо на 5 — "Buzz"
// Якщо на обидва — "FizzBuzz"
// Інакше — саме число

// function cifres() {
//   for (let index = 1; index <= 100; index++) {
//     if (index % 3 === 0 && index % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (index % 3 === 0) {
//       console.log("Fizz");
//     } else if (index % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(index);
//     }
//   }
// }
// cifres();

//? Паліндром
// const word2 = "hello";

// const word1 = "hello";

// const revWord = word1.split("").toReversed().join("");

// function verdad() {
//   if (word1 === revWord) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// verdad();
// Очікувані результати: true, false

//? Підрахунок символів

// const textOri = "javascript";

// const text1 = textOri.split("");
// console.log(text1.length);
// // Твій код тут
// // Очікуваний результат: {j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1}
// 8. Видалення дублікатів
// javascriptconst array = [1, 2, 3, 2, 4, 1, 5, 3, 6];
// // Твій код тут
// // Очікуваний результат: [1, 2, 3, 4, 5, 6]
// 9. Анаграми
// javascriptconst word1 = "listen";
// const word2 = "silent";
// // Твій код тут
// // Очікуваний результат: true
// 10. Сортування об'єктів
// javascriptconst users = [
//   { name: "Олег", age: 25 },
//   { name: "Марія", age: 30 },
//   { name: "Іван", age: 20 }
// ];
// // Твій код тут
// // Очікуваний результат: відсортовано за віком

//* з автоперевірки
// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//   }
// }

//!
// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// employee.getWage();

// class User {
//   constructor(name, email) {
//     console.log(name, email);
//   }
// }

// const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
// console.log(mango); // {}

//! Створи клас Car, який має:
// 	•	brand
// 	•	model
// 	•	year
// 	•	метод getInfo() → "Brand: Tesla, Model: S, Year: 2020"

// class Car {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   getInfo() {
//     return `Марка: ${this.brand}; Модель: ${this.model}; Рік: ${this.year};`;
//   }
// }

// const toyota = new Car("Toyota", "Land Cruiser", 2025);

// console.log(toyota.getInfo());

//! Задача 2 — Список товарів

// Створи клас ProductList, який має:
// 	•	приватне поле items (масив)
// 	•	метод add(item)
// 	•	метод getCount() — повертає кількість товарів

// class ProductList {
//   #items;

//   constructor(items) {
//     this.#items = items;
//   }

//   set add(value) {
//     this.#items = value;
//   }

//   get count() {
//     return `${this.#items}`;
//   }
// }

// const product = new ProductList(2);

// console.log(product.count);
