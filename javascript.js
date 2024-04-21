// Button Click Event
const button = document.getElementById('button');

button.addEventListener('click', () => {
  alert('Button clicked!');
});

// Accordion Menu
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('menu-open');
});

// Event Handler
const input = document.querySelector("#myInput");
const btn = document.querySelector("#myButton");
const nameEl = document.querySelector("#name");

btn.addEventListener("click", () => {
  const name = input.value.trim();
  if (name) {
    nameEl.textContent = name;
    nameEl.classList.remove("hidden");
  }
});
