//! 🟡 Задача 3 — Фільм
// Створи клас Movie, який має:
// 	•	title
// 	•	rating
// 	•	метод isGood() → повертає true, якщо рейтинг > 7

// class Movie {
//   constructor(title, rating) {
//     this.title = title;
//     this.rating = rating;
//   }

//   isGood() {
//     if (this.rating >= 7) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// const mov = new Movie("Kinkong", 9);
// console.log(mov.isGood());

//! 🟤 Задача 5 — Магазин

// Створи клас Store, який має:
// 	•	масив products
// 	•	метод addProduct(product)
// 	•	метод getTotalPrice() — повертає суму всіх цін

// (базова, але корисна)
// }

// class Store {
//   products = [];

//   constructor(products = []) {
//     this.products = products;
//   }

//   addProduct(product) {
//     this.products.push(product);
//   }

//   getTotalPrice() {
//     return this.products.reduce((accum, el) => accum + el.price, 0);
//   }
// }

// const ovochi = new Store();

// ovochi.addProduct({ name: "Помідори", price: 33 });
// ovochi.addProduct({ name: "Огірки", price: 20 });
// ovochi.addProduct({ name: "Картопля", price: 15 });

// console.log(ovochi.getTotalPrice());

// ! 🟠 Задача 6 — Книга

// Створи клас Book, який має:
// 	•	title
// 	•	author
// 	•	pages
// 	•	метод readPages(amount) зменшує кількість сторінок що залишились
// 	•	метод isFinished()

// class Book {
//   constructor(title, author, pages) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//   }

//   readPages(amount) {
//     this.pages = pages;
//   }

//   isFinished() {
//     return `Прочитано`;
//   }
// }

// const book1 = new Book();
// book1.pages = 100;
// console.log("🚀 ~ book1:", book1);

// console.log(book1.isFinished());

// ! 🔴 Задача 7 — User + Admin

// Створи клас User, а потім клас Admin, який наслідує User.

// User має:
// 	•	name
// 	•	email
// 	•	метод getInfo()

// Admin має:
// 	•	role
// 	•	метод isSuperAdmin() → true, якщо role === "super"

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   getInfo() {
//     return `Name: ${this.name}; Email: ${this.email};`;
//   }
// }

// class Admin extends User {
//   constructor(name, email, role) {
//     super(name, email);
//     this.role = role;
//   }

//   isSuperAdmin() {
//     if (this.role === "super") {
//       return true;
//     } else {
//       return false;
//     }
//     return;
//   }
// }

// const user1 = new User("Dima", "dima@gmail.com");

// console.log(user1.getInfo());

// const admin1 = new Admin("Lana", "lana@gmail.com", "super");
// console.log(admin1.getInfo());
// console.log(admin1.isSuperAdmin());
// console.log(admin1.getInfo() + admin1.isSuperAdmin());

// ! 🔶 Задача 8 — Студент

// Створи клас Student, який має:
// 	•	name
// 	•	grades (масив)
// 	•	метод addGrade()
// 	•	метод getAverage()
// 	•	метод hasPassed() → true, якщо середня > 60

// class Student {
//   constructor(name, grade) {
//     this.name = name;
//     this.grade = [];
//   }

//   addGrade(newGrade) {
//     this.grade.push(newGrade);
//   }

//   getAverage() {
//     const sum = this.grade.reduce((accum, el) => accum + el, 0);
//     return sum / this.grade.length;
//   }

//   hasPassed() {
//     if (this.getAverage() >= 60) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// const stud1 = new Student();
// stud1.addGrade(37);
// stud1.addGrade(69);
// stud1.addGrade(90);

// console.log(stud1.getAverage());

// console.log(stud1.hasPassed());

// ! 🟩 Задача 9 — Банківська картка

// Створи клас Card, який має:
// 	•	баланс (0)
// 	•	метод deposit(amount)
// 	•	метод withdraw(amount) (якщо не вистачає — вивести помилку)
// 	•	метод getBalance()

// class Card {
//   constructor(balance) {
//     this.balance = 0;
//   }

//   deposit(amount) {
//     this.balance = this.balance + amount;
//   }

//   withdraw(amount) {
//     this.balance = this.balance - amount;
//   }

//   getBalance() {
//     return this.balance;
//   }
// }

// const account1 = new Card();

// account1.deposit(5500);

// console.log(account1.getBalance());

// account1.withdraw(300);
// console.log(account1.getBalance());

//! Задача 1 — Подвоїти числа
// 	•	Метод: map
// 	•	Умова: Створи новий масив, де кожне число з numbers буде подвоєне.

// const numbers = [1, 2, 3, 4, 5];
// const double = numbers.map((el) => {
//   return el * 2;
// });
// console.log("🚀 ~ double:", double);

// Очікуваний результат: [2, 4, 6, 8, 10]

//! Задача 2 — Фільтр за віком
// 	•	Метод: filter
// 	•	Умова: Відфільтруй користувачів старше 18 років.

// const users = [
//   { name: "Oleg", age: 25 },
//   { name: "Ira", age: 17 },
//   { name: "Stepan", age: 30 },
// ];

// const checker = users.filter((age, ind) => {
//   return age.age >= 18;
// });
// console.table(checker);

// Очікуваний результат: [{name: "Oleg", age:25}, {name: "Stepan", age:30}]

// ! Задача 3 — Пошук користувача
// 	•	Метод: find
// 	•	Умова: Знайди користувача з id = 2.

// const users = [
//   { id: 1, name: "Oleg" },
//   { id: 2, name: "Ira" },
//   { id: 3, name: "Dmytro" },
// ];

// const checker = users.find((el) => {
//   return el.id === 2;
// });
// console.log("🚀 ~ checker:", checker);

// Очікуваний результат: {id:2, name:"Ira"}

// ! Задача 4 — Сума чисел
// 	•	Метод: reduce
// 	•	Умова: Порахуй суму всіх чисел у масиві.

// const numbers = [5, 10, 15, 20];

// const sum = numbers.reduce((accum, num) => {
//   return accum + num;
// }, 0);
// console.log("🚀 ~ sum:", sum);

// Очікуваний результат: 50

// ! Задача 5 — Перевірка наявності
// 	•	Методи: some, every
// 	•	Умова:
// 	1.	Перевір, чи є в масиві користувачів хоча б один віком < 18.
// 	2.	Перевір, чи всі користувачі старші 16.

// const users = [
//   { name: "Oleg", age: 25 },
//   { name: "Ira", age: 17 },
//   { name: "Stepan", age: 30 },
// ];

// const som = users.some((el) => {
//   return el.age >= 18;
// });
// console.log("🚀 ~ som:", som);

// const eve = users.every((el) => {
//   return el.age >= 16;
// });
// console.log("🚀 ~ eve:", eve);

// ! Задача 6 — Сортування
// 	•	Метод: sort
// 	•	Умова: Відсортуй масив користувачів за віком по зростанню.

// const users = [
//   { name: "Oleg", age: 25 },
//   { name: "Ira", age: 17 },
//   { name: "Stepan", age: 30 },
// ];

// const sor = users.sort((a, b) => a.age - b.age);
// console.table(users);

// Очікуваний результат: [{name:"Ira", age:17}, {name:"Oleg", age:25}, {name:"Stepan", age:30}]

// ! Задача 7 — Масив рядків у великі букви
// 	•	Метод: map
// 	•	Умова: Перетвори всі назви фруктів у верхній регістр.

// const fruits = ["apple", "banana", "kiwi"];

// const change = fruits.map((el) => el.toUpperCase());
// console.log("🚀 ~ change:", change);

// Очікуваний результат: ["APPLE", "BANANA", "KIWI"]

// ! Задача 8 — Унікальні значення
// 	•	Метод: filter або Set
// 	•	Умова: Створи масив лише з унікальними числами.

// const numbers = [1, 2, 2, 3, 4, 4, 5];

// const uniqNUmbers = numbers.reduce((accum, num) => {
//   if (!accum.includes(num)) {
//     accum.push(num);
//   }
//   return accum;
// }, []);
// console.log("🚀 ~ uniqNUmbers:", uniqNUmbers);

// Очікуваний результат: [1, 2, 3, 4, 5]
