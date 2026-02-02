//! 1️⃣ Фільтрація чисел
// const numbers = [3, -1, 0, 7, -5, 9];

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
