let body = document.querySelector("body");
let btn = document.querySelector(".btn");
let audio = document.getElementById("audio");

btn.onclick = function () {
  body.classList.toggle("on");
  audio.play();
};
