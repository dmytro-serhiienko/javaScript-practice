// ?задача 1
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// *Варіант 1
// const number = +prompt("Введіть число");

// if (number === 10) {
//   alert("Вірно");
// } else {
//   alert("Невірно");
// }

// *Варіант 2
// const number = Number(prompt("Введіть число"));

// if (number === 10) {
//   alert("Вірно");
// } else {
//   alert("Невірно");
// }

// *Варіант 3
// number === 10 ? alert("Вірно") : alert("Невірно");

// ?задача 2
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад: "10 входить в першу чверть"

// *
// const min = Math.floor(Math.random() * (59 - 0) + 0);

// if (min <= 15) {
//   alert(`${min} входить у першу чверть`);
// } else if (min >= 16 && min <= 30) {
//   alert(`${min} входить у другу чверть`);
// } else if (min >= 31 && min <= 45) {
//   alert(`${min} входить у третю чверть`);
// } else {
//   alert(`${min} входить у четверту чверть`);
// }

// ?задача 3
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).

// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = +prompt("Введіть число: 1, 2, 3, 4");

// switch (num) {
//   case 1:
//     alert("Зима");
//     break;
//   case 2:
//     alert("весна");
//     break;
//   case 3:
//     alert("Літо");
//     break;
//   case 4:
//     alert("Осінь");
//     break;
//   default:
//     alert("Вибачте, але ви маєте ввести значення від 1 до 4 включно");
// }

// !завдання 4
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const num = +prompt();

// !Завдання 5:
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// *

// *
// const login = prompt("Напиши свій логін");

// !Завдання 6:
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// ?Завдання 7:
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;

//   for (let i = max; i >= min; i--) {
// console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(getNumbers(5, 25));

// ?Завдання 8:
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// *
// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Not a number!";
//   }

//   return a < b ? a : b;
// }

// console.log(min(10, -5));
// console.log(min("5", 2));

// *
// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Not a number!";
//   } else if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(min(10, -5));
// console.log(min("5", 2));

// ?Завдання 9:
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// *
// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("confirm your age");
//   }
// }

// console.log(isAdult(17));
// console.log(isAdult(19));

// ?Завдання 10:
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else if (i % 3 === 0) {
//       console.log("fizzbuzz");
//     }
//   }
// }

// fizzBuzz(5);
// fizzBuzz(6);
// fizzBuzz(30);

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
