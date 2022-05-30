let toast = document.querySelector(".toast");
let botao1 = document.querySelector("#botao1");
console;

botao1.onclick = function () {
  toast.classList.add("visible");

  setTimeout(function () {
    toast.classList.remove("visible");
  }, 2000);
};

let permanent = document.querySelector(".permanent");
let botao2 = document.querySelector("#botao2");
console;

botao2.onclick = function () {
  permanent.classList.add("visible");

  setTimeout(function () {
    permanent.classList.remove("visible");
  }, 6000);
};
