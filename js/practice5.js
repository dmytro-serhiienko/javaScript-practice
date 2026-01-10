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

const refs = {
  inputEl: document.querySelector("#js-input"),
  btnEl: document.querySelector("#js-btn"),
  showEl: document.querySelector("#js-result"),
};

const { inputEl, btnEl, showEl } = refs;

btnEl.addEventListener("click", async () => {
  showEl.innerHTML = "";
  showEl.innerHTML = "LOADING...";

  const value = inputEl.value.trim();

  if (!value || /\D/.test(value)) {
    alert("❗️ Пустий рядок або ти ввів не число!");
  }

  try {
    const BASE_URL = `https://rickandmortyapi.com/api/character/${value}`;
    const response = await axios.get(BASE_URL);
    const { data } = response;

    showEl.innerHTML = "";

    showEl.insertAdjacentHTML(
      "beforeend",
      `<img src="${data.image}"/>
      <p>${data.name}</p>
      <p>${data.status}</p>
      <p>${data.species}</p>
      <p>${data.location.name}</p>`
    );
  } catch (error) {
    showEl.innerHTML = "❌ не вдалося виконати код";
    console.error(error.message);
  } finally {
    console.log("✅ Код виканався до кінця");
    inputEl.value = "";
  }
});

inputEl.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    showEl.innerHTML = "";
    showEl.innerHTML = "LOADING...";

    const value = inputEl.value.trim();

    if (!value || /\D/.test(value)) {
      alert("❗️ Пустий рядок або ти ввів не число!");
    }

    try {
      const BASE_URL = `https://rickandmortyapi.com/api/character/${value}`;
      const response = await axios.get(BASE_URL);
      const { data } = response;

      showEl.innerHTML = "";

      showEl.insertAdjacentHTML(
        "beforeend",
        `<img src="${data.image}"/>
        <p>${data.name}</p>
        <p>${data.status}</p>
        <p>${data.species}</p>
        <p>${data.location.name}</p>`
      );
    } catch (error) {
      showEl.innerHTML = "❌ не вдалося виконати код";
      console.error(error.message);
    } finally {
      console.log("✅ Код виканався до кінця");
      inputEl.value = "";
    }
  }
});
