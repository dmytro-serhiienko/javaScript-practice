// !задача 1
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

// !задача 2
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

// !задача 3
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

// !Завдання 7:
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;

//   for (let i = max; i >= min; i--) {
//     // console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(getNumbers(5, 25));

// !Завдання 8:
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

// !Завдання 9:
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

// !Завдання 10:
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

// *

// 1.	Використовуючи цикл for, виведи в консоль усі назви продуктів.
// 2.	Використовуючи цикл for…of, виведи в консоль усі продукти, у яких ціна більша за 8.
// 3.	Порахуй загальну вартість всіх продуктів і виведи результат у консоль.

const products = [
  { name: "Apple", price: 10 },
  { name: "Banana", price: 5 },
  { name: "Cherry", price: 15 },
  { name: "Orange", price: 8 },
];

let nameProd = "";
let priceMinEight = [];
let totalPrice = 0;

function nameOfProduct(products) {
  for (let i = 0; i < products.length; i++) {
    nameProd += products[i].name;
  }
  return nameProd;
}

function minEight(products) {
  for (const product of products) {
    if (product.price > 8) {
      priceMinEight += product.price;
    }
  }
  return priceMinEight;
}

function totalPriceofAll(products) {
  for (const prod of products) {
    totalPrice += prod.price;
  }
  return totalPrice;
}

console.log(nameOfProduct(products));
console.log(minEight(products));
console.log(totalPriceofAll(products));
