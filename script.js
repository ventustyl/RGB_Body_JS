let r = 0;
let g = 0;
let b = 0;
let body = document.querySelector("body");
let h1 = document.querySelector("h1");

function rgba() {
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  console.log(r, g, b);
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  h1.style.color = `rgb(${r}, ${g}, ${b})`;
  h1.innerText = `rgb ( ${r} , ${g} , ${b} )`;
}

setInterval(rgba, 3000);
