// 1. Тёмная тема
const themeBtn = document.getElementById("themeBtn");

// themeBtn.addEventListener("click", function () {
//   document.body.classList.toggle("dark");
  
//   if (document.body.classList.contains("dark")) {
//     themeBtn.textContent = "Светлая тема";
//   } else {
//     themeBtn.textContent = "Сменить тему";
//   }
// });
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeBtn.textContent = isDark ? "Светлая тема" : "Тёмная тема";
});

// если тема уже тёмная после загрузки, поправим текст кнопки
if (document.body.classList.contains("dark")) {
  themeBtn.textContent = "Светлая тема";
}

// 2. Приветствие
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const greeting = document.getElementById("greeting");

greetBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();

  if (name === "") {
    greeting.textContent = "Введите имя";
  } else {
    greeting.textContent = "Привет, " + name + "!";
  }
});

// 3. Счётчик
const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const resetBtn = document.getElementById("resetBtn");
const counter = document.getElementById("counter");

let count = 0;

function showCounter() {
  counter.textContent = count;

  if (count >= 10) {
    counter.classList.add("big");
  } else {
    counter.classList.remove("big");
  }
}

plusBtn.addEventListener("click", function () {
  count = count + 1;
  showCounter();
});

minusBtn.addEventListener("click", function () {
  if (count > 0) {
    count = count - 1;
    showCounter();
  }
});

resetBtn.addEventListener("click", function () {
  count = 0;
  showCounter();
});

// 4. Галерея цветов (с кнопкой "Назад")
const colorBox = document.getElementById("colorBox");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const colors = ["tomato", "goldenrod", "mediumseagreen", "dodgerblue"];
let index = 0;

function showColor() {
  colorBox.style.backgroundColor = colors[index];
  colorBox.textContent = colors[index];
}

nextBtn.addEventListener("click", function () {
  index = (index + 1) % colors.length;
  showColor();
});

prevBtn.addEventListener("click", function () {
  index = (index - 1 + colors.length) % colors.length;
  showColor();
});

showColor();
