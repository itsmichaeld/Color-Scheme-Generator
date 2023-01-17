const generateColorsBtn = document.getElementById("generate-colors-btn");
const colorContainer = document.getElementsByClassName("color-container");
const generatedColors = document.querySelector(".generated-colors");
const hexValues = document.getElementById("generated-colors-hex-values");
const form = document.getElementById("color-picker-form");
let colorsArray = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let seed = e.target.colorPicker.value.replace("#", "");
  let mode = e.target.schemeMode.value;
  colorsArray = [];

  fetch(`https://www.thecolorapi.com/scheme?hex=${seed}&mode=${mode}&count=5`)
    .then((res) => res.json())
    .then((data) => {
      data.colors.map((item) => {
        colorsArray.push(item.hex.value);
      });
      render();
    });
});

function render() {
  let colorsArrayHtml = "";
  let hexValuesHtml = "";
  colorsArray.map((color) => {
    colorsArrayHtml += `<div class="color-container" style="background:${color}"></div>`;
    hexValuesHtml += `<div class="hex-value">${color}</div>`;
  });

  generatedColors.innerHTML = colorsArrayHtml;
  hexValues.innerHTML = hexValuesHtml;
}

render();
