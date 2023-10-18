const generateBtn = document.querySelector("#generate-btn");
const copyBtn = document.querySelector("#copy-btn");
const outputCode = document.querySelector("#output-code");
const outputColor = document.querySelector("#output-color");

function hexGen() {
  let colorHex = `#${Math.random().toString(16).slice(2, 8)}`;
  return colorHex;
}

const generateGrad = () => {
  let angle = Math.trunc(Math.random() * 360);
  let gradientString = `linear-gradient(${angle}deg, ${hexGen()} , ${hexGen()})`;
  outputColor.style.background = gradientString;
  outputCode.value = `Background: ${gradientString}`;
};

copyBtn.addEventListener("click", () => {
  outputCode.select();
  navigator.clipboard.writeText(outputCode.value);
});
generateBtn.addEventListener("click", generateGrad);

window.onload = generateGrad;
