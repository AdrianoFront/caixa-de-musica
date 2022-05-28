let toast = document.querySelector(".toast");
let botaoPlay = document.querySelector("#botaoPlay");
console;

botaoPlay.onclick = function () {
  toast.classList.add("visible");

  setTimeout(function () {
    toast.classList.remove("visible");
  }, 2000);
};

let permanent = document.querySelector(".permanent");
let botaoPlay2 = document.querySelector("#botaoPlay2");
console;

botaoPlay2.onclick = function () {
  permanent.classList.add("visible");

  setTimeout(function () {
    permanent.classList.remove("visible");
  }, 6000);
};
