const p = document.querySelector("#color-para");
const btn = document.querySelector("#color-btn");
const body = document.querySelector("body");

const randomColorChange = function () {
  const hex = `#${Math.random().toString(16).slice(2, 8)}`;
  body.style.backgroundColor = hex;
  p.textContent = hex;
};

btn.addEventListener("click", randomColorChange);
