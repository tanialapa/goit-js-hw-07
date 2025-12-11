

const clickMe = document.querySelector(".change-color");
const bodyBackground = document.querySelector("body");
const colorText = document.querySelector(".color");

clickMe.addEventListener('click', handlerBtn)


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handlerBtn(event) {
  bodyBackground.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
}