const buttonLG = document.getElementById("letsgo");
buttonLG.addEventListener("click", function () {
  // document.body.setAttribute('class', 'biru-muda')
  // document.body.style.backgroundColor = "cyan";
  document.body.classList.toggle("biru-muda");
});

// buttonLG.onclick = function () {
//   document.body.style.backgroundColor = "cyan";
// };

const buttonLG2 = document.createElement("button");
const buttonText2 = document.createTextNode("Random Colors");
buttonLG2.appendChild(buttonText2);
buttonLG2.setAttribute("type", "button");

buttonLG.after(buttonLG2);

buttonLG2.addEventListener("click", function () {
  const g = Math.round(Math.random() * 255 + 1);
  const r = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  console.log(r);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const sRed = document.querySelector("input[name=sRed]");
const sGreen = document.querySelector("input[name=sGreen]");
const sBlue = document.querySelector("input[name=sBlue]");

sRed.addEventListener("input", function () {
  console.log(sRed.value);
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sGreen.addEventListener("input", function () {
  console.log(sGreen.value);
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sBlue.addEventListener("input", function () {
  console.log(sRed.value);
  const r = sRed.value;
  const g = sGreen.value;
  const b = sBlue.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
